import { getAverageByProp } from "#helpers/reducers/avg-by-prop.mjs";
import { mbToHumanReadableMetric } from "#helpers/formatters/mb-to-human-readable-metric.mjs";

/**
 * @async
 * @function getAverageMemorySize
 * @description Method used for retrieving the average memory size.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 * @returns {Promise<number>} Account/region(s) average function memory size.
 */
export async function getAverageMemorySize(params, functions, logger) {
  const avgMemorySize = getAverageByProp(functions, "MemorySize");
  const strAvg = mbToHumanReadableMetric(avgMemorySize);

  logger.logResults(`Avg Memory Size: ${strAvg}`);
  logger.logSeparator();

  return avgMemorySize;
}
