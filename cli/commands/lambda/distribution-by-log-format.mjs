import { reduceByProp } from "#helpers/reducers/reduce-by-prop.mjs";
import { displayDistributionChart } from "#helpers/visualizers/chart.mjs";
const OUTPUT_LABEL = "Lambda Distribution by Log Format";
const BUCKETS = ["Text", "JSON"];

/**
 * @async
 * @function getFunctionDistributionByLogFormat
 * @description Method used for retrieving the function distribution by log format.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 */
export async function getFunctionDistributionByLogFormat(
  params,
  functions = [],
  logger
) {
  const temp = reduceByProp(functions, "LoggingConfig.LogFormat");
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

  logger.logResults(OUTPUT_LABEL);
  distribution.forEach((d) => {
    logger.logResults(`${d.lbl}: ${d.count} functions.`);
  });
  logger.logSeparator();

  return distribution;
}
