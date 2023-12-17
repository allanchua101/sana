import { reduceByItemInArrayProp } from "#helpers/reducers/reduce-by-item-in-array.mjs";
import { synthesizeDistribution } from "#synthesizers/distribution/synthesize-distribution.mjs";
import ENTITIES from "#constants/entities.mjs";
const BUCKETS = ["arm64", "x86_64"];
const OUTPUT_LABEL = "Lambda Distribution by Architecture";

/**
 * @async
 * @function getFunctionDistributionByArchitecture
 * @description Method used for retrieving the function distribution by architecture.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 */
export async function getFunctionDistributionByArchitecture(
  params,
  functions,
  logger
) {
  const temp = reduceByItemInArrayProp(functions, "Architectures");
  const distribution = BUCKETS.map((b) => {
    const dist = temp.find((t) => t.lbl === b);

    return {
      lbl: b,
      pct: dist ? dist.pct : 0,
      count: dist ? dist.count : 0,
    };
  }).sort((a, b) => {
    return a.lbl > b.lbl ? 1 : -1;
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
