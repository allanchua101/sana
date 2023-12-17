import { reduceByProp } from "#helpers/reducers/reduce-by-prop.mjs";
import { displayDistributionChart } from "#helpers/visualizers/chart.mjs";
import { synthesizeCliDistributionText } from "#synthesizers/distribution/cli-text-synthesizer.mjs";
import ENTITIES from "#constants/entities.mjs";
const OUTPUT_LABEL = "Lambda Distribution by System Log Level";

/**
 * @async
 * @function getFunctionDistributionBySysLogLevel
 * @description Method used for retrieving the function distribution by system log level.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 */
export async function getFunctionDistributionBySysLogLevel(
  params,
  functions = [],
  logger
) {
  const temp = reduceByProp(functions, "LoggingConfig.SystemLogLevel");
  const distribution = temp.map((t) => {
    return {
      ...t,
      lbl: t.lbl || null,
    };
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
