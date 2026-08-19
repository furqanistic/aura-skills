const test = require("node:test");
const assert = require("node:assert/strict");

const { resolveNpxInvocation } = require("../bin/aura-skills.js");

test("uses npx directly on non-Windows platforms", () => {
  assert.deepEqual(resolveNpxInvocation({ platform: "linux" }), {
    command: "npx",
    prefixArgs: [],
  });
});

test("runs npx-cli.js with Node on Windows", () => {
  const invocation = resolveNpxInvocation({
    platform: "win32",
    execPath: "C:\\Program Files\\nodejs\\node.exe",
    npmExecPath: "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js",
    fileExists: (candidate) => candidate.endsWith("npx-cli.js"),
  });

  assert.equal(invocation.command, "C:\\Program Files\\nodejs\\node.exe");
  assert.match(invocation.prefixArgs[0], /npm[\\/]bin[\\/]npx-cli\.js$/);
});

test("reports a useful error when npm's CLI cannot be found on Windows", () => {
  assert.throws(
    () =>
      resolveNpxInvocation({
        platform: "win32",
        execPath: "C:\\nodejs\\node.exe",
        npmExecPath: undefined,
        fileExists: () => false,
      }),
    /Could not locate npm's npx-cli\.js/,
  );
});
