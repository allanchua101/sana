import { getAccountLambdaFunctions } from "../../helpers/get-account-lambda-functions.mjs";

/**
 * @async
 * @function getAccountFunctions
 * @description Method used for retrieving the total number of lambda functions inside an AWS account.
 * @param {Object} params
 * @param {string} params.profileName AWS CLI profile name to be used for this command.
 * @returns {Promise<number>} Account-wide Lambda function count.
 */
export async function countAccountFunctions(params) {
  const functions = await getAccountLambdaFunctions(params.profile || "");

  console.log(`Found ${functions.length} functions in the account.`);

  return functions.length;
}
