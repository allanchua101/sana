import { LAMBDA_STRATEGIES } from "./lambda.mjs";
import GLOBAL_TAGS from "#constants/global-tags.mjs";

/**
 * @async
 * @function getLambdaVpcKPIs
 * @description Method used for getting all Lambda vpc-related KPIs
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions Lambda functions
 * @param {object} logger Logger instance
 */
export async function getLambdaVpcKPIs(params, functions = [], logger) {
  logger.log(`Analyzing VPC-related KPIs`);
  logger.logSeparator();

  const nonAliasVpcCommands = LAMBDA_STRATEGIES.filter(
    (ls) =>
      ls.tags &&
      ls.tags.some((t) => t === GLOBAL_TAGS.VPC) &&
      !ls.tags.some((t) => t === GLOBAL_TAGS.ALIAS)
  );

  for (let i = 0, len = nonAliasVpcCommands.length; i < len; i++) {
    const strategy = nonAliasVpcCommands[i];

    await strategy.execute(params, functions, logger);
  }
}
