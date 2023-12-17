import { LAMBDA_STRATEGIES } from "./lambda.mjs";
import GLOBAL_TAGS from "#constants/global-tags.mjs";

/**
 * @async
 * @function runFullDynamoDBAnalysis
 * @description Method used for running all Lambda-related analysis
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions Lambda functions
 * @param {object} logger Logger instance
 */
export async function runFullLambdaAnalysis(params, functions = [], logger) {
  logger.log(`Running Full Lambda Analysis`);
  logger.logSeparator();

  const nonAliasCommands = LAMBDA_STRATEGIES.filter(
    (ls) => !ls.tags || !ls.tags.some((tag) => tag === GLOBAL_TAGS.ALIAS)
  );

  for (let i = 0, len = nonAliasCommands.length; i < len; i++) {
    const strategy = nonAliasCommands[i];

    await strategy.execute(params, functions, logger);
  }
}
