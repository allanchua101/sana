import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";
import { displayDistributionChart } from "../../helpers/visualizers/chart.mjs";

/**
 * @async
 * @function getFunctionDistributionByMemory
 * @description Method used for retrieving the function distribution by memory size for an AWS account.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 */
export async function getFunctionDistributionByMemory(
  params,
  functions = [],
  logger
) {
  const distribution = reduceByProp(functions, "MemorySize");

  if (params.output === "chart") {
    displayDistributionChart({
      title: "Lambda Distribution by Memory",
      distribution,
      array: functions,
      logger,
    });
    logger.logSeparator();

    return distribution;
  }

  logger.logResults("Lambda Distribution by Memory");
  distribution.forEach((d) => {
    logger.logResults(`${d.lbl}: ${d.count} functions.`);
  });
  logger.logSeparator();

  return distribution;
}
