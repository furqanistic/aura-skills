#!/usr/bin/env node

const { spawnSync } = require("node:child_process");

const npx = process.platform === "win32" ? "npx.cmd" : "npx";
const forwardedArgs = process.argv.slice(2);
const result = spawnSync(
  npx,
  ["--yes", "skills", "add", "furqanistic/aura-skills", ...forwardedArgs],
  { stdio: "inherit" },
);

if (result.error) {
  console.error(`Unable to start the Skills installer: ${result.error.message}`);
  process.exit(1);
}

process.exit(result.status ?? 1);
