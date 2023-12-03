#! /usr/bin/env node

process.removeAllListeners("warning");

import { program } from "commander";
import { readFile } from "fs/promises";
import { printAsciiArt } from "./helpers/cli/print-ascii-art.mjs";
const packageInfo = JSON.parse(
  await readFile(new URL("./package.json", import.meta.url))
);
import { countAccountFunctions } from "./commands/lambda/count-account-functions.mjs";
import { getFunctionRuntimeDistribution } from "./commands/lambda/get-function-runtime-distribution.mjs";
import { getFunctionDistributionByPackageType } from "./commands/lambda/get-function-package-type-distribution.mjs";
import { getFunctionRegionDistribution } from "./commands/lambda/get-function-region-distribution.mjs";
// DynamoDB
import { countDynamoDBs } from "./commands/dynamodb/count-ddbs.mjs";
import { getDDBDistributionByRegion } from "./commands/dynamodb/get-distribution-by-region.mjs";

// Command Strategies
const strategies = [
  { key: "lambda-count", execute: countAccountFunctions },
  {
    key: "lambda-runtime-distribution",
    execute: getFunctionRuntimeDistribution,
  },
  {
    key: "lambda-package-type-distribution",
    execute: getFunctionDistributionByPackageType,
  },
  {
    key: "lambda-region-distribution",
    execute: getFunctionRegionDistribution,
  },
  // DynamoDBs
  { key: "ddb-count", execute: countDynamoDBs },
  { key: "ddb-region-distribution", execute: getDDBDistributionByRegion },
];

program
  .name(packageInfo.name)
  .version(`${packageInfo.name} ${packageInfo.version}`)
  .description(
    "A command-line interface for running analysis of an AWS account's serverless resources."
  )
  .arguments("command")
  .option("-p, --profile <char>")
  .action(async (command, params) => {
    const logo = await printAsciiArt("sana");

    console.log(logo);

    const strategy = strategies.find((s) => s.key === command);

    if (!strategy) {
      console.log(`Command ${command} not found`);
      process.exit(1);
      return;
    }

    console.log(`Processing ${command}`);

    await strategy.execute(params);
    process.exit(0);
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
