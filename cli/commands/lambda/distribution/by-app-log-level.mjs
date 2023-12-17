import { reduceByProp } from "#helpers/reducers/reduce-by-prop.mjs";
import { synthesizeDistribution } from "#synthesizers/distribution/synthesize-distribution.mjs";
import ENTITIES from "#constants/entities.mjs";
const OUTPUT_LABEL = "Lambda Distribution by Application Log Level";

/**
 * @async
 * @function getFunctionDistributionByAppLogLevel
 * @description Method used for retrieving the function distribution by application log level.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 */
export async function getFunctionDistributionByAppLogLevel(
  params,
  functions = [],
  logger
) {
  const temp = reduceByProp(functions, "LoggingConfig.ApplicationLogLevel");
  const distribution = temp.map((t) => {
    return {
      ...t,
      lbl: t.lbl || null,
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
