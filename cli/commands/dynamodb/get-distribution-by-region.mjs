import { reduceByProp } from "#helpers/reducers/reduce-by-prop.mjs";
import { synthesizeDistribution } from "#synthesizers/distribution/synthesize-distribution.mjs";
import ENTITIES from "#constants/entities.mjs";
const OUTPUT_LABEL = "DynamoDB Table Distribution by Region";

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
