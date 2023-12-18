import { reduceByProp } from "#helpers/reducers/reduce-by-prop.mjs";
import { synthesizeDistribution } from "#synthesizers/distribution/synthesize-distribution.mjs";
import ENTITIES from "#constants/entities.mjs";
const OUTPUT_LABEL = "DynamoDB Table Distribution by Billing Mode";

/**
 * @async
 * @function getDDBDistributionByBillingMode
 * @description Method used for retrieving DynamoDB table distribution by billing-mode.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} tables DynamoDB tables
 * @param {object} logger Logger instance
 */
export async function getDDBDistributionByBillingMode(
  params,
  tables = [],
  logger
) {
  const distribution = reduceByProp(tables, "sana.billingMode");

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
