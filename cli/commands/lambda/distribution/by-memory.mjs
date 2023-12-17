import { reduceByProp } from "#helpers/reducers/reduce-by-prop.mjs";
import { synthesizeDistribution } from "#synthesizers/distribution/synthesize-distribution.mjs";
import { mbToHumanReadableMetric } from "#helpers/formatters/mb-to-human-readable-metric.mjs";
import ENTITIES from "#constants/entities.mjs";
const OUTPUT_LABEL = "Lambda Distribution by Memory";

/**
 * @async
 * @function getFunctionDistributionByMemory
 * @description Method used for retrieving the function distribution by memory size for an AWS account.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 */
export async function getFunctionDistributionByMemory(
  params,
  functions = [],
  logger
) {
  const distribution = reduceByProp(functions, "MemorySize").map((category) => {
    return {
      ...category,
      lbl: mbToHumanReadableMetric(parseInt(category.lbl)),
    };
  });

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
