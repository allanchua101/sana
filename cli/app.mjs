#! /usr/bin/env node
process.removeAllListeners("warning");
// Libraries
import { program } from "commander";
import { readFile } from "fs/promises";
// Utilities
import { buildLogger } from "./helpers/logging/logging-utility.mjs";
import { configureProgressBar } from "./helpers/progress-bar/global-progress-bar.mjs";
import { parseCommands } from "./helpers/parsers/parse-commands.mjs";
import { loadAWSCredentials } from "./helpers/aws/credential-loader.mjs";
import { getAccountRegions } from "./helpers/get-account-regions.mjs";
// Command-handling strategies loading
import {
  LAMBDA_STRATEGIES,
  LAMBDA_EXTRACTORS,
} from "./commands/lambda/lambda.mjs";
import { DYNAMO_STRATEGIES, DDB_EXTRACTORS } from "./commands/dynamodb/ddb.mjs";
// Commands
const cmdHandlers = [...LAMBDA_STRATEGIES, ...DYNAMO_STRATEGIES];
const extractionStrategies = [...LAMBDA_EXTRACTORS, ...DDB_EXTRACTORS];
const packageInfo = JSON.parse(
  await readFile(new URL("./package.json", import.meta.url))
);

program
  .name(packageInfo.name)
  .version(`${packageInfo.name} ${packageInfo.version}`)
  .description(
    "A command-line interface for analyzing an AWS account's serverless resources"
  )
  .arguments("command")
  .option("-p, --profile <char>", "AWS profile (Optional)")
  .option("-r, --region <char>", "AWS region (Optional)")
  .option("-o, --output <char>", "Output mode (text, chart)")
  .option("--silent-mode", "Run without logs")
  .option("--no-progress-bar", "Run without progress bar")
  .action(async (command, params) => {
    const logger = buildLogger(params.silentMode);

    try {
      console.clear();

      configureProgressBar(params.progressBar);

      await logger.printHeader();

      const commands = parseCommands(command, cmdHandlers, logger);
      const profileName = params.profile || "";
      const credentials = loadAWSCredentials(commands, profileName, logger);
      const transformers = commands.map((cmd) =>
        cmdHandlers.find((chs) => chs.key === cmd)
      );
      const extractors = transformers.reduce((agg, item) => {
        if (agg.some((trf) => trf.key === item.extractorKey)) {
          return agg;
        }

        const loader = extractionStrategies.find(
          (ls) => ls.key === item.extractorKey
        );

        if (!loader) {
          logger.error(`Unsupported data loader: ${item.extractorKey}`);
          process.exit(1);
        }

        return [...agg, loader];
      }, []);
      const regions = await getAccountRegions(params, credentials);
      const dataStore = [];

      for (let i = 0, len = extractors.length; i < len; i++) {
        const extractor = extractors[i];
        const results = await extractor.execute(credentials, regions);

        dataStore.push({
          key: extractor.key,
          data: results,
        });
      }

      for (let t = 0, len = transformers.length; t < len; t++) {
        const transformer = transformers[t];
        const { data } = dataStore.find(
          (d) => d.key === transformer.extractorKey
        );

        await transformer.execute(params, data, logger);
      }

      logger.log(`Done!`);
      process.exit(0);
    } catch (err) {
      logger.error(err.toString());
      logger.error(err.stack.toString());

      process.exit(1);
    }
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
