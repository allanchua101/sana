import { getAccountLambdaFunctions } from "../../helpers/get-account-lambda-functions.mjs";

/**
 * @async
 * @function getAccountFunctions
 * @description Method used for retrieving the total number of lambda functions inside an AWS account.
 * @param {Object} params
 * @param {AwsCredentialIdentityProvider} credentials AWS credentials
 * @param {Object} logger Logger instance
 * @returns {Promise<number>} Account-wide Lambda function count.
 */
export async function countAccountFunctions(params, credentials, logger) {
  const functions = await getAccountLambdaFunctions(credentials);

  logger.log(`Found ${functions.length} functions in the account.`);

  return functions.length;
}
