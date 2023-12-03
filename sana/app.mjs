#! /usr/bin/env node

process.removeAllListeners("warning");

import { program } from "commander";
import { readFile } from "fs/promises";
const packageInfo = JSON.parse(
  await readFile(new URL("./package.json", import.meta.url))
);
import { countAccountFunctions } from "./commands/count-account-functions.mjs";
import { getFunctionRuntimeDistribution } from "./commands/get-function-runtime-distribution.mjs";
import { getFunctionDistributionByPackageType } from "./commands/get-function-package-type-distribution.mjs";
import { getFunctionRegionDistribution } from "./commands/get-function-region-distribution.mjs";

// Constants
const strategies = [
  { key: "count-account-functions", execute: countAccountFunctions },
  {
    key: "get-function-runtime-distribution",
    execute: getFunctionRuntimeDistribution,
  },
  {
    key: "get-function-distribution-by-package-type",
    execute: getFunctionDistributionByPackageType,
  },
  {
    key: "get-function-distribution-by-region",
    execute: getFunctionRegionDistribution,
  },
];

program
  .name(packageInfo.name)
  .version(`${packageInfo.name} ${packageInfo.version}`)
  .description(
    "A command-line interface for running analysis on your AWS account's serverless resources"
  )
  .arguments("command")
  .option("-p, --profile <char>")
  .action(async (command, params) => {
    const strategy = strategies.find((s) => s.key === command);

    if (!strategy) {
      console.log(`Command ${command} not found`);
      process.exit(1);
      return;
    }

    await strategy.execute(params);
    process.exit(0);
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
