import { reduceByItemInArrayProp } from "../../helpers/reducers/reduce-by-item-in-array.mjs";
import { displayDistributionChart } from "../../helpers/visualizers/chart.mjs";
const BUCKETS = ["ARMv7", "ARMv8", "x86_64"];

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

  if (params.output === "chart") {
    displayDistributionChart({
      title: "Lambda Distribution by Architecture",
      distribution,
      array: functions,
      logger,
    });
    logger.logSeparator();

    return distribution;
  }

  logger.logResults("Lambda Distribution by Architecture");
  distribution.forEach((d) => {
    logger.logResults(`${d.lbl}: ${d.count} functions.`);
  });
  logger.logSeparator();

  return distribution;
}
