import { reduceByProp } from "#helpers/reducers/reduce-by-prop.mjs";
import { synthesizeDistribution } from "#synthesizers/distribution/synthesize-distribution.mjs";
import { mbToHumanReadableMetric } from "#helpers/formatters/mb-to-human-readable-metric.mjs";
import ENTITIES from "#constants/entities.mjs";
const OUTPUT_LABEL = "Lambda Distribution by Ephemeral Storage";

/**
 * @async
 * @function getFunctionDistributionByEphemeralStorage
 * @description Method used for retrieving the function distribution by ephemeral storage size for an AWS account.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 */
export async function getFunctionDistributionByEphemeralStorage(
  params,
  functions,
  logger
) {
  const distribution = reduceByProp(functions, "EphemeralStorage.Size").map(
    (category) => {
      const lbl = mbToHumanReadableMetric(parseInt(category.lbl));
      return {
        ...category,
        lbl: `${category.lbl} (${lbl})`,
      };
    }
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
