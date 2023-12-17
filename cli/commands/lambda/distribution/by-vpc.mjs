import { reduceByProp } from "#helpers/reducers/reduce-by-prop.mjs";
import { synthesizeDistribution } from "#synthesizers/distribution/synthesize-distribution.mjs";
import ENTITIES from "#constants/entities.mjs";
const OUTPUT_LABEL = "Lambda Distribution by VPC";

/**
 * @async
 * @function getFunctionVPCDistribution
 * @description Method used for retrieving function distribution by VPC.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 */
export async function getFunctionVPCDistribution(params, functions, logger) {
  const distribution = reduceByProp(functions, "sana.VpcID").map((d) => {
    return {
      ...d,
      lbl: d.lbl || "No VPC",
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
