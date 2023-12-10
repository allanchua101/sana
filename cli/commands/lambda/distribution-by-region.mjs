import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";
import { displayDistributionChart } from "../../helpers/visualizers/chart.mjs";

/**
 * @async
 * @function getFunctionRegionDistribution
 * @description Method used for retrieving function distribution by region for an AWS account.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 */
export async function getFunctionRegionDistribution(
  params,
  functions = [],
  logger
) {
  const distribution = reduceByProp(functions, "sana.region");

  if (params.output === "chart") {
    displayDistributionChart({
      title: "Lambda Distribution by Region",
      distribution,
      array: functions,
      logger,
    });
    logger.logSeparator();

    return distribution;
  }

  logger.logResults("Lambda Distribution by Region");
  distribution.forEach((d) => {
    logger.logResults(`${d.lbl}: ${d.count} functions.`);
  });
  logger.logSeparator();

  return distribution;
}
