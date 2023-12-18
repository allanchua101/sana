import { reduceByProp } from "#helpers/reducers/reduce-by-prop.mjs";
import { synthesizeDistribution } from "#synthesizers/distribution/synthesize-distribution.mjs";
import ENTITIES from "#constants/entities.mjs";
const BUCKETS = ["Delete Protection Enabled", "Delete Protection Disabled"];
const OUTPUT_LABEL = "DynamoDB Table Distribution by Delete Protection";

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

  synthesizeDistribution({
    title: OUTPUT_LABEL,
    distribution,
    array: tables,
    logger,
    entity: ENTITIES.DYNAMODB_TABLES,
    output: params.output,
  });

  return distribution;
}
