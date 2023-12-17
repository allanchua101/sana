import { reduceByProp } from "#helpers/reducers/reduce-by-prop.mjs";
import { synthesizeDistribution } from "#synthesizers/distribution/synthesize-distribution.mjs";
import ENTITIES from "#constants/entities.mjs";
const BUCKETS = [
  "ACTIVE",
  "CREATING",
  "UPDATING",
  "DELETING",
  "INACCESSIBLE_ENCRYPTION_CREDENTIALS",
];
const OUTPUT_LABEL = "DynamoDB Table Distribution by Status";

/**
 * @async
 * @function getDDBDistributionByTableStatus
 * @description Method used for retrieving DynamoDB table distribution by table status.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} tables DynamoDB tables
 * @param {object} logger Logger instance
 */
export async function getDDBDistributionByTableStatus(
  params,
  tables = [],
  logger
) {
  const temp = reduceByProp(tables, "sana.table.TableStatus");
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
    entity: ENTITIES.LAMBDA_FUNCTIONS,
    output: params.output,
  });

  return distribution;
}
