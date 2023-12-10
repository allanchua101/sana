import { reduceByProp } from "#helpers/reducers/reduce-by-prop.mjs";
import { displayDistributionChart } from "#helpers/visualizers/chart.mjs";

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

  if (params.output === "chart") {
    displayDistributionChart({
      title: "Lambda Distribution by Number of Attached Lambda Layers",
      distribution,
      array: functions,
      logger,
    });
    logger.logSeparator();

    return distribution;
  }

  logger.logResults("Lambda Distribution by Number of Attached Layers");
  distribution.forEach((d) => {
    logger.logResults(`${d.lbl}: ${d.count} functions.`);
  });
  logger.logSeparator();

  return distribution;
}
