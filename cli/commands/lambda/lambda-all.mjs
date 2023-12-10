import { LAMBDA_STRATEGIES } from "./lambda.mjs";

/**
 * @async
 * @function runFullDynamoDBAnalysis
 * @description Method used for running all DynamoDB analysis
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions Lambda functions
 * @param {object} logger Logger instance
 */
export async function runFullLambdaAnalysis(params, functions = [], logger) {
  logger.log(`Running Full Lambda Analysis`);
  logger.logSeparator();

  for (let i = 0, len = LAMBDA_STRATEGIES.length; i < len; i++) {
    const strategy = LAMBDA_STRATEGIES[i];

    if (strategy.key === "lambda") {
      continue;
    }

    await strategy.execute(params, functions, logger);
  }
}
