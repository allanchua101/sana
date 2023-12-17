import { reduceByProp } from "#helpers/reducers/reduce-by-prop.mjs";
import { displayDistributionChart } from "#helpers/visualizers/chart.mjs";
import { synthesizeCliDistributionText } from "#synthesizers/distribution/cli-text-synthesizer.mjs";
import ENTITIES from "#constants/entities.mjs";
const OUTPUT_LABEL = "Lambda Distribution by SnapStart";
const BUCKETS = ["On", "Off"];

/**
 * @async
 * @function getFunctionDistributionBySnapStartStatus
 * @description Method used for retrieving the function distribution by SnapStart status.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 */
export async function getFunctionDistributionBySnapStartStatus(
  params,
  functions = [],
  logger
) {
  const temp = reduceByProp(functions, "SnapStart.OptimizationStatus");
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

  if (params.output === "chart") {
    displayDistributionChart({
      title: OUTPUT_LABEL,
      distribution,
      array: functions,
      logger,
    });
    logger.logSeparator();

    return distribution;
  }

  synthesizeCliDistributionText(
    OUTPUT_LABEL,
    ENTITIES.LAMBDA_FUNCTIONS,
    distribution,
    logger
  );

  return distribution;
}
