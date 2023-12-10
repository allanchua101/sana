import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";
import { displayDistributionChart } from "../../helpers/visualizers/chart.mjs";

/**
 * @async
 * @function getDDBDistributionByRegion
 * @description Method used for retrieving DynamoDB table distribution by region for an AWS account.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} tables DynamoDB tables
 * @param {object} logger Logger instance
 */
export async function getDDBDistributionByRegion(params, tables, logger) {
  const distribution = reduceByProp(tables, "sana.region");

  if (params.output === "chart") {
    displayDistributionChart({
      title: "DynamoDB Table Distribution by Region",
      distribution,
      array: tables,
      logger,
    });
    logger.logSeparator();

    return distribution;
  }

  logger.logResults("Distribution by Region");
  distribution.forEach((d) => {
    logger.logResults(`${d.lbl}: ${d.count} tables.`);
  });
  logger.logSeparator();

  return distribution;
}
