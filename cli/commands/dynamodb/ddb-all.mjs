import { DYNAMO_STRATEGIES } from "./ddb.mjs";

/**
 * @async
 * @function runFullDynamoDBAnalysis
 * @description Method used for running all DynamoDB analysis
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} tables DynamoDB tables
 * @param {object} logger Logger instance
 */
export async function runFullDynamoDBAnalysis(params, tables = [], logger) {
  logger.log(`Running Full DynamoDB Analysis`);
  logger.logSeparator();

  for (let i = 0, len = DYNAMO_STRATEGIES.length; i < len; i++) {
    const strategy = DYNAMO_STRATEGIES[i];

    if (strategy.key === "ddb") {
      continue;
    }

    await strategy.execute(params, tables, logger);
  }
}
