import { reduceByProp } from "#helpers/reducers/reduce-by-prop.mjs";
import { displayDistributionChart } from "#helpers/visualizers/chart.mjs";
const BUCKETS = ["Delete Protection Enabled", "Delete Protection Disabled"];

/**
 * @async
 * @function getDDBDistributionByDeleteProtection
 * @description Method used for retrieving DynamoDB table distribution by delete protection.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} tables DynamoDB tables
 * @param {object} logger Logger instance
 */
export async function getDDBDistributionByDeleteProtection(
  params,
  tables = [],
  logger
) {
  const temp = reduceByProp(tables, "sana.table.DeletionProtectionEnabled").map(
    (rt) => {
      return {
        ...rt,
        lbl: rt ? "Delete Protection Enabled" : "Delete Protection Disabled",
      };
    }
  );
  const distribution = BUCKETS.map((b) => {
    const bucketRow = temp.find((t) => t.lbl === b);

    return {
      lbl: b,
      pct: bucketRow ? bucketRow.pct : 0,
      count: bucketRow ? bucketRow.count : 0,
    };
  });

  if (params.output === "chart") {
    displayDistributionChart({
      title: "DynamoDB Table Distribution by Delete Protection",
      distribution,
      array: tables,
      logger,
    });
    logger.logSeparator();

    return distribution;
  }

  logger.logResults("Distribution by Delete Protection");
  distribution.forEach((d) => {
    logger.logResults(`${d.lbl}: ${d.count} tables.`);
  });
  logger.logSeparator();

  return distribution;
}
