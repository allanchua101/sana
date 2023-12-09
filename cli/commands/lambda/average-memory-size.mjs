import { getAccountLambdaFunctions } from "../../helpers/get-account-lambda-functions.mjs";
import { getAverageByProp } from "../../helpers/reducers/avg-by-prop.mjs";
import { mbToHumanReadableMetric } from "../../helpers/formatters/mb-to-human-readable-metric.mjs";

/**
 * @async
 * @function getAverageMemorySize
 * @description Method used for retrieving the average memory size.
 * @param {Object} params
 * @param {AwsCredentialIdentityProvider} credentials AWS credentials
 * @param {Object} logger Logger instance
 * @returns {Promise<number>} Account/region(s) average function memory size.
 */
export async function getAverageMemorySize(params, credentials, logger) {
  const functions = await getAccountLambdaFunctions(params, credentials);
  const avgMemorySize = getAverageByProp(functions, "MemorySize");
  const strAvg = mbToHumanReadableMetric(avgMemorySize);

  logger.logResults(`Average Memory Size: ${strAvg}`);

  return avgMemorySize;
}
