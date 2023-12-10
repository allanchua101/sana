import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";
import { displayDistributionChart } from "../../helpers/visualizers/chart.mjs";

/**
 * @async
 * @function getFunctionRuntimeDistribution
 * @description Method used for retrieving the function runtime distribution for an AWS account.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 */
export async function getFunctionRuntimeDistribution(
  params,
  functions = [],
  logger
) {
  const distribution = reduceByProp(functions, "Runtime");

  if (params.output === "chart") {
    displayDistributionChart({
      title: "Lambda Distribution by Runtime",
      distribution,
      array: functions,
      logger,
    });
    logger.logSeparator();

    return distribution;
  }

  logger.logResults("Lambda Distribution by Runtime");
  distribution.forEach((d) => {
    const strPct = d.pct > 0 ? `${(d.pct * 100).toFixed(2)}%` : "0%";

    logger.logResults(`${d.lbl}: ${d.count} functions (${strPct})`);
  });
  logger.logSeparator();

  return distribution;
}
