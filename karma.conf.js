const { nodeResolve } = require("@rollup/plugin-node-resolve");
const typescript = require("@rollup/plugin-typescript");

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],

    files: [{ pattern: "tests/**/*.spec.ts", watched: false }],

    preprocessors: {
      "**/*.ts": ["rollup"],
    },

    rollupPreprocessor: {
      plugins: [nodeResolve(), typescript()],
      output: {
        format: "iife",
        name: "bundle",
        sourcemap: "inline",
      },
    },

    browsers: ["Chrome"],

    reporters: ["kjhtml", "progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,

    client: {
      clearContext: false,
      captureConsole: true,
    },
  });
};
