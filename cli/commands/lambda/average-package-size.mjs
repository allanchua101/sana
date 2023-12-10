import { getAverageByProp } from "../../helpers/reducers/avg-by-prop.mjs";
import { bytesToHumanReadableMetric } from "../../helpers/formatters/bytes-to-human-readable-metric.mjs";

/**
 * @async
 * @function getAveragePackageSize
 * @description Method used for retrieving the average package size in an account/region(s)
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 * @returns {Promise<number>} Account/region(s) average package size.
 */
export async function getAveragePackageSize(params, functions, logger) {
  const avgPackageSize = getAverageByProp(functions, "CodeSize");
  const strAvg = bytesToHumanReadableMetric(avgPackageSize);

  logger.logResults(`Average Package Size: ${strAvg}`);
  logger.logSeparator();

  return avgPackageSize;
}
