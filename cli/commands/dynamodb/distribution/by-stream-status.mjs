import { reduceByProp } from "#helpers/reducers/reduce-by-prop.mjs";
import { synthesizeDistribution } from "#synthesizers/distribution/synthesize-distribution.mjs";
import ENTITIES from "#constants/entities.mjs";
const BUCKETS = ["Enabled", "Disabled"];
const OUTPUT_LABEL = "DynamoDB Table Distribution by DynamoDB Stream Status";

/**
 * @async
 * @function getDDBDistributionByStreamStatus
 * @description Method used for retrieving DynamoDB table distribution by stream status (Enabled | Disabled)
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} tables DynamoDB tables
 * @param {object} logger Logger instance
 */
export async function getDDBDistributionByStreamStatus(
  params,
  tables = [],
  logger
) {
  tables.map((t) => console.log(t));
  const temp = reduceByProp(
    tables,
    "sana.table.StreamSpecification.StreamEnabled"
  ).map((cat) => {
    return {
      ...cat,
      lbl: cat.lbl ? "Enabled" : "Disabled",
    };
  });
  const distribution = BUCKETS.map((b) => {
    const bucketRow = temp.find((t) => t.lbl.toString() === b);

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
