import { getAverageByProp } from "../../helpers/reducers/avg-by-prop.mjs";

/**
 * @async
 * @function getAverageTimeout
 * @description Method used for retrieving the average function timeout.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 * @returns {Promise<number>} account/region(s) average function timeout.
 */
export async function getAverageTimeout(params, functions, logger) {
  const avgTimeout = getAverageByProp(functions, "Timeout");

  logger.logResults(
    `Average Function Timeout: ${avgTimeout.toFixed(2)} seconds`
  );
  logger.logSeparator();

  return avgTimeout;
}
