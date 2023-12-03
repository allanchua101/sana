import { program } from "commander";
import { getAccountFunctions } from "./modules/get-account-functions.mjs";

program
  .version("1.0.0")
  .description("A command-line tool for serverless lovers")
  .option("-p, --profile <char>")
  .action(async (params) => {
    const functions = await getAccountFunctions(params.profile || "");

    console.log(`Found ${functions.length} functions in total`);
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
