/**
 * @async
 * @function countDynamoDBs
 * @description Method used for retrieving the total number of DynamoDBs
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} tables DynamoDB tables
 * @param {object} logger Logger instance
 */
export async function countDynamoDBs(params, tables = [], logger) {
  logger.logResults(`DynamoDB Table Count: ${tables.length}`);
  logger.logSeparator();

  return tables.length;
}
