#!/usr/bin/env node

const { spawnSync } = require("node:child_process");
const { existsSync } = require("node:fs");
const path = require("node:path");

function resolveNpxInvocation({
  platform = process.platform,
  execPath = process.execPath,
  npmExecPath = process.env.npm_execpath,
  fileExists = existsSync,
} = {}) {
  if (platform !== "win32") {
    return { command: "npx", prefixArgs: [] };
  }

  // Node cannot reliably execute Windows .cmd shims with spawnSync. Running
  // npm's JavaScript entrypoint directly also avoids cmd.exe quoting issues.
  const windowsPath = path.win32;
  const candidates = [
    npmExecPath && windowsPath.join(windowsPath.dirname(npmExecPath), "npx-cli.js"),
    windowsPath.join(
      windowsPath.dirname(execPath),
      "node_modules",
      "npm",
      "bin",
      "npx-cli.js",
    ),
  ].filter(Boolean);
  const npxCliPath = candidates.find(fileExists);

  if (!npxCliPath) {
    throw new Error(
      "Could not locate npm's npx-cli.js. Reinstall Node.js with npm included, then try again.",
    );
  }

  return { command: execPath, prefixArgs: [npxCliPath] };
}

function main() {
  let invocation;

  try {
    invocation = resolveNpxInvocation();
  } catch (error) {
    console.error(`Unable to start the Skills installer: ${error.message}`);
    return 1;
  }

  const forwardedArgs = process.argv.slice(2);
  const result = spawnSync(
    invocation.command,
    [
      ...invocation.prefixArgs,
      "--yes",
      "skills",
      "add",
      "furqanistic/aura-skills",
      ...forwardedArgs,
    ],
    { stdio: "inherit" },
  );

  if (result.error) {
    console.error(`Unable to start the Skills installer: ${result.error.message}`);
    return 1;
  }

  return result.status ?? 1;
}

if (require.main === module) {
  process.exit(main());
}

module.exports = { main, resolveNpxInvocation };
