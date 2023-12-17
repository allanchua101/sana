import { reduceByProp } from "#helpers/reducers/reduce-by-prop.mjs";
import { synthesizeDistribution } from "#synthesizers/distribution/synthesize-distribution.mjs";
import ENTITIES from "#constants/entities.mjs";
const OUTPUT_LABEL = "Lambda Distribution by Number of Attached Lambda Layers";

/**
 * @async
 * @function getFunctionDistributionByLayerCount
 * @description Method used for analyzing distribution of functions by lambda layer count.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 */
export async function getFunctionDistributionByLayerCount(
  params,
  functions,
  logger
) {
  const distribution = reduceByProp(functions, "sana.layerCount").map((d) => {
    return {
      ...d,
      lbl: `${d.lbl} Layers`,
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
