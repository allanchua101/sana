import { getAccountLambdaFunctions } from "../../helpers/get-account-lambda-functions.mjs";
import { getAverageByProp } from "../../helpers/reducers/avg-by-prop.mjs";
import { bytesToHumanReadableMetric } from "../../helpers/formatters/bytes-to-human-readable-metric.mjs";

/**
 * @async
 * @function getAveragePackageSize
 * @description Method used for retrieving the total number of lambda functions inside an AWS account.
 * @param {Object} params
 * @param {AwsCredentialIdentityProvider} credentials AWS credentials
 * @param {Object} logger Logger instance
 * @returns {Promise<number>} Account-wide Lambda function count.
 */
export async function getAveragePackageSize(params, credentials, logger) {
  const functions = await getAccountLambdaFunctions(params, credentials);
  const avgPackageSize = getAverageByProp(functions, "CodeSize");
  const strAvg = bytesToHumanReadableMetric(avgPackageSize);

  logger.log(`Average Package Size: ${strAvg}`);

  return avgPackageSize;
}
