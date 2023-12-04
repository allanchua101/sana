#! /usr/bin/env node

process.removeAllListeners("warning");

import { program } from "commander";
import { readFile } from "fs/promises";
import { buildLogger } from "./helpers/logging/logging-utility.mjs";
import { configureProgressBar } from "./helpers/progress-bar/global-progress-bar.mjs";
const packageInfo = JSON.parse(
  await readFile(new URL("./package.json", import.meta.url))
);
import { loadAWSCredentials } from "./helpers/aws/credential-loader.mjs";
import { countAccountFunctions } from "./commands/lambda/count-account-functions.mjs";
import { getFunctionRuntimeDistribution } from "./commands/lambda/get-function-runtime-distribution.mjs";
import { getFunctionDistributionByPackageType } from "./commands/lambda/get-function-package-type-distribution.mjs";
import { getFunctionRegionDistribution } from "./commands/lambda/get-function-region-distribution.mjs";
import { getFunctionDistributionByMemory } from "./commands/lambda/get-distribution-by-memory.mjs";
import { getFunctionDistributionByEphemeralStorage } from "./commands/lambda/get-distribution-by-ephemeral-storage.mjs";
import { getFunctionDistributionByTracingMode } from "./commands/lambda/distribution-by-tracing-mode.mjs";
import { getFunctionDistributionByArchitecture } from "./commands/lambda/distribution-by-architecture.mjs";
// DynamoDB
import { countDynamoDBs } from "./commands/dynamodb/count-ddbs.mjs";
import { getDDBDistributionByRegion } from "./commands/dynamodb/get-distribution-by-region.mjs";
import { getDDBDistributionByDeleteProtection } from "./commands/dynamodb/get-distribution-by-delete-protection.mjs";
import { getDDBDistributionByTableStatus } from "./commands/dynamodb/get-distribution-by-status.mjs";

// Command Strategies
const strategies = [
  {
    key: "lambda-count",
    desc: "Count account-wide Lambda function count.",
    execute: countAccountFunctions,
  },
  {
    key: "lambda-runtime-distribution",
    desc: "Get account-wide Lambda function distribution by runtime.",
    execute: getFunctionRuntimeDistribution,
  },
  {
    key: "lambda-package-type-distribution",
    desc: "Get account-wide Lambda function distribution by package type.",
    execute: getFunctionDistributionByPackageType,
  },
  {
    key: "lambda-region-distribution",
    desc: "Get account-wide Lambda function distribution by AWS region.",
    execute: getFunctionRegionDistribution,
  },
  {
    key: "lambda-memory-distribution",
    desc: "Get account-wide Lambda function distribution by memory configuration.",
    execute: getFunctionDistributionByMemory,
  },
  {
    key: "lambda-ephemeral-storage-distribution",
    desc: "Get account-wide Lambda function distribution by ephemeral storage distribution.",
    execute: getFunctionDistributionByEphemeralStorage,
  },
  {
    key: "lambda-tracing-mode-distribution",
    desc: "Get account-wide Lambda function distribution by X-ray tracing mode.",
    execute: getFunctionDistributionByTracingMode,
  },
  {
    key: "lambda-architecture-distribution",
    desc: "Get account-wide Lambda function distribution by system architecture",
    execute: getFunctionDistributionByArchitecture,
  },
  // DynamoDBs
  {
    key: "ddb-count",
    desc: "Count account-wide DynamoDB table count.",
    execute: countDynamoDBs,
  },
  {
    key: "ddb-region-distribution",
    desc: "Count account-wide DynamoDB table distribution by AWS region.",
    execute: getDDBDistributionByRegion,
  },
  {
    key: "ddb-delete-protection-distribution",
    desc: "Count account-wide DynamoDB table distribution by table protection status.",
    execute: getDDBDistributionByDeleteProtection,
  },
  {
    key: "ddb-table-status-distribution",
    desc: "Count account-wide DynamoDB table distribution by table status.",
    execute: getDDBDistributionByTableStatus,
  },
];

program
  .name(packageInfo.name)
  .version(`${packageInfo.name} ${packageInfo.version}`)
  .description(
    "A command-line interface for analyzing an AWS account's serverless resources"
  )
  .arguments("command")
  .option("-p, --profile <char>", "AWS profile (Optional)")
  .option("-r, --region <char>", "AWS region (Optional)")
  .option("--silent-mode", "Run without logs")
  .option("--no-progress-bar", "Run without progress bar")
  .action(async (command, params) => {
    const logger = buildLogger(params.silentMode);

    configureProgressBar(params.progressBar);

    try {
      await logger.printHeader();

      const strategy = strategies.find((s) => s.key === command);

      if (!strategy) {
        logger.log(`Command ${command} not found`);
        process.exit(1);
        return;
      }

      const profileName = params.profile || "";
      const credentials = loadAWSCredentials(command, profileName, logger);

      await strategy.execute(params, credentials, logger);
      process.exit(0);
    } catch (err) {
      logger.log(err.toString());
      logger.log(err.stack.toString());

      process.exit(1);
    }
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
