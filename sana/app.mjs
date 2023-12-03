import { program } from "commander";
import { countAccountFunctions } from "./commands/count-account-functions.mjs";
// Constants
const strategies = [
  { key: "count-account-functions", execute: countAccountFunctions },
];

program
  .name("sana")
  .version("1.0.0")
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
