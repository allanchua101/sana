import { getMaxByProp } from "#helpers/reducers/get-max-by-prop.mjs";
import { bytesToHumanReadableMetric } from "#helpers/formatters/bytes-to-human-readable-metric.mjs";

/**
 * @async
 * @function getMaxPackageSize
 * @description Method used for retrieving the maximum package size in an account/region(s)
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 * @returns {Promise<number>} Account/region(s) maximum package size.
 */
export async function getMaxPackageSize(params, functions, logger) {
  const maxPackageSize = getMaxByProp(functions, "CodeSize");
  const strMax = bytesToHumanReadableMetric(maxPackageSize);

  logger.logResults(`Max Package Size: ${strMax}`);
  logger.logSeparator();

  return maxPackageSize;
}
