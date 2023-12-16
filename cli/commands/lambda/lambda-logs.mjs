import { LAMBDA_STRATEGIES } from "./lambda.mjs";
import GLOBAL_TAGS from "#constants/global-tags.mjs";

/**
 * @async
 * @function getLambdaLogKPIs
 * @description Method used for getting all Lambda log-related KPIs
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions Lambda functions
 * @param {object} logger Logger instance
 */
export async function getLambdaLogKPIs(params, functions = [], logger) {
  logger.log(`Analyzing Log-related KPIs`);
  logger.logSeparator();

  const nonAliasCommands = LAMBDA_STRATEGIES.filter(
    (ls) =>
      ls.tags &&
      ls.tags.some((t) => t === GLOBAL_TAGS.LOGGING) &&
      !ls.tags.some((t) => t === GLOBAL_TAGS.ALIAS)
  );

  for (let i = 0, len = nonAliasCommands.length; i < len; i++) {
    const strategy = nonAliasCommands[i];

    await strategy.execute(params, functions, logger);
  }
}
