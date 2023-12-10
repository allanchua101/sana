import { reduceByProp } from "#helpers/reducers/reduce-by-prop.mjs";
import { displayDistributionChart } from "#helpers/visualizers/chart.mjs";

/**
 * @async
 * @function getFunctionDistributionByTracingMode
 * @description Method used for retrieving the function distribution by tracing mode.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 */
export async function getFunctionDistributionByTracingMode(
  params,
  functions = [],
  logger
) {
  const distribution = reduceByProp(functions, "TracingConfig.Mode");

  if (params.output === "chart") {
    displayDistributionChart({
      title: "Lambda Distribution by Tracing Mode",
      distribution,
      array: functions,
      logger,
    });
    logger.logSeparator();

    return distribution;
  }

  logger.logResults("Lambda Distribution by Tracing Mode");
  distribution.forEach((d) => {
    logger.logResults(`${d.lbl}: ${d.count} functions.`);
  });
  logger.logSeparator();

  return distribution;
}
