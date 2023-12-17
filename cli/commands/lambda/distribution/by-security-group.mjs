import { reduceByItemInArrayProp } from "#helpers/reducers/reduce-by-item-in-array.mjs";
import { displayDistributionChart } from "#helpers/visualizers/chart.mjs";
import { synthesizeCliDistributionText } from "#synthesizers/distribution/cli-text-synthesizer.mjs";
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
