import { getAllDynamoDBTables } from "../../helpers/get-account-ddbs.mjs";

/**
 * @async
 * @function countDynamoDBs
 * @description Method used for retrieving the total number of DynamoDBs in an AWS account.
 * @param {Object} params
 * @param {AwsCredentialIdentityProvider} credentials AWS credentials
 * @param {Object} logger Logger instance
 * @returns {Promise<number>} Account-wide Lambda function count.
 */
export async function countDynamoDBs(params, credentials, logger) {
  const tables = await getAllDynamoDBTables(credentials);

  logger.log(`Found ${tables.length} dynamo db tables in the account.`);

  return tables.length;
}
