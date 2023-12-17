import { reduceByItemInArrayProp } from "#helpers/reducers/reduce-by-item-in-array.mjs";
import { synthesizeDistribution } from "#synthesizers/distribution/synthesize-distribution.mjs";
import ENTITIES from "#constants/entities.mjs";
const OUTPUT_LABEL = "Lambda Distribution by Security Groups";

/**
 * @async
 * @function getFunctionDistributionBySG
 * @description Method used for analyzing distribution of functions by security group.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 */
export async function getFunctionDistributionBySG(params, functions, logger) {
  const distribution = reduceByItemInArrayProp(
    functions,
    "sana.SecurityGroupIds"
  );

  synthesizeDistribution({
    title: OUTPUT_LABEL,
    distribution,
    array: functions,
    logger,
    entity: ENTITIES.LAMBDA_FUNCTIONS,
    output: params.output,
  });

  return distribution;
}
