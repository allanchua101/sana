import { getAverageByProp } from "#helpers/reducers/avg-by-prop.mjs";
import { mbToHumanReadableMetric } from "#helpers/formatters/mb-to-human-readable-metric.mjs";

/**
 * @async
 * @function getAverageEphemeralStorageSize
 * @description Method used for retrieving the average ephemeral storage size.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 * @returns {Promise<number>} Account/region(s) average function ephemeral storage size.
 */
export async function getAverageEphemeralStorageSize(
  params,
  functions,
  logger
) {
  const avgMemorySize = getAverageByProp(functions, "EphemeralStorage.Size");
  const strAvg = mbToHumanReadableMetric(avgMemorySize);

  logger.logResults(`Avg Ephemeral Storage Size: ${strAvg}`);
  logger.logSeparator();

  return avgMemorySize;
}
