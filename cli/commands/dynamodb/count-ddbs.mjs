import { getAllDynamoDBTables } from "../../helpers/get-account-ddbs.mjs";

/**
 * @async
 * @function countDynamoDBs
 * @description Method used for retrieving the total number of DynamoDBs in an AWS account.
 * @param {Object} params
 * @param {string} params.profileName AWS CLI profile name to be used for this command.
 * @returns {Promise<number>} Account-wide Lambda function count.
 */
export async function countDynamoDBs(params) {
  const tables = await getAllDynamoDBTables(params.profile || "");

  console.log(`Found ${tables.length} dynamo db tables in the account.`);

  return tables.length;
}
