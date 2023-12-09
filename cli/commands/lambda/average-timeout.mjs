import { getAccountLambdaFunctions } from "../../helpers/get-account-lambda-functions.mjs";
import { getAverageByProp } from "../../helpers/reducers/avg-by-prop.mjs";

/**
 * @async
 * @function getAverageTimeout
 * @description Method used for retrieving the average function timeout.
 * @param {Object} params
 * @param {AwsCredentialIdentityProvider} credentials AWS credentials
 * @param {Object} logger Logger instance
 * @returns {Promise<number>} account/region(s) average function timeout.
 */
export async function getAverageTimeout(params, credentials, logger) {
  const functions = await getAccountLambdaFunctions(params, credentials);
  const avgTimeout = getAverageByProp(functions, "Timeout");

  logger.log(`Average Function Timeout: ${avgTimeout.toFixed(2)} seconds`);

  return avgTimeout;
}
