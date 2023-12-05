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
import { LAMBDA_STRATEGIES } from "./commands/lambda/lambda.mjs";
import { DYNAMO_STRATEGIES } from "./commands/dynamodb/ddb.mjs";
// Commands
const strategies = [...LAMBDA_STRATEGIES, ...DYNAMO_STRATEGIES];

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

    try {
      configureProgressBar(params.progressBar);

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
