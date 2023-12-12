import { reduceByProp } from "#helpers/reducers/reduce-by-prop.mjs";
import { displayDistributionChart } from "#helpers/visualizers/chart.mjs";
const OUTPUT_HEADER = "Lambda Distribution by VPC";

/**
 * @async
 * @function getFunctionVPCDistribution
 * @description Method used for retrieving function distribution by VPC.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 */
export async function getFunctionVPCDistribution(params, functions, logger) {
  const distribution = reduceByProp(functions, "sana.VpcID").map((d) => {
    return {
      ...d,
      lbl: d.lbl || "No VPC",
    };
  });

  if (params.output === "chart") {
    displayDistributionChart({
      title: OUTPUT_HEADER,
      distribution,
      array: functions,
      logger,
    });
    logger.logSeparator();

    return distribution;
  }

  logger.logResults(OUTPUT_HEADER);
  distribution.forEach((d) => {
    logger.logResults(`${d.lbl}: ${d.count} functions.`);
  });
  logger.logSeparator();

  return distribution;
}
