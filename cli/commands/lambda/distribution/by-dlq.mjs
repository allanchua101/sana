import { reduceByProp } from "#helpers/reducers/reduce-by-prop.mjs";
import { synthesizeDistribution } from "#synthesizers/distribution/synthesize-distribution.mjs";
import ENTITIES from "#constants/entities.mjs";
const OUTPUT_LABEL = "Lambda Distribution by DLQ";

/**
 * @async
 * @function getFunctionDLQDistribution
 * @description Method used for retrieving function distribution by DLQ.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 */
export async function getFunctionDLQDistribution(params, functions, logger) {
  const distribution = reduceByProp(functions, "sana.dlqArn").map((d) => {
    return {
      ...d,
      lbl: d.lbl || "No DLQ",
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
