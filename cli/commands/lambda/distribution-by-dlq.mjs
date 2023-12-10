import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";
import { displayDistributionChart } from "../../helpers/visualizers/chart.mjs";

/**
 * @async
 * @function getFunctionDLQDistribution
 * @description Method used for retrieving function distribution by DLQ.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 */
export async function getFunctionDLQDistribution(params, functions, logger) {
  const distribution = reduceByProp(functions, "sana.dlqArn").map((d) => {
    return {
      ...d,
      lbl: d.lbl || "No DLQ",
    };
  });

  if (params.output === "chart") {
    displayDistributionChart({
      title: "Lambda Distribution by DLQ",
      distribution,
      array: functions,
      logger,
    });
    logger.logSeparator();

    return distribution;
  }

  logger.logResults("Lambda Distribution by DLQ");
  distribution.forEach((d) => {
    logger.logResults(`${d.lbl}: ${d.count} functions.`);
  });
  logger.logSeparator();

  return distribution;
}
