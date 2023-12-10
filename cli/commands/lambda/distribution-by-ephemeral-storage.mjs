import { getAccountLambdaFunctions } from "#helpers/get-account-lambda-functions.mjs";
import { reduceByProp } from "#helpers/reducers/reduce-by-prop.mjs";
import { displayDistributionChart } from "#helpers/visualizers/chart.mjs";

/**
 * @async
 * @function getFunctionDistributionByEphemeralStorage
 * @description Method used for retrieving the function distribution by ephemeral storage size for an AWS account.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 */
export async function getFunctionDistributionByEphemeralStorage(
  params,
  functions,
  logger
) {
  const distribution = reduceByProp(functions, "EphemeralStorage.Size");

  if (params.output === "chart") {
    displayDistributionChart({
      title: "Lambda Distribution by Ephemeral Storage",
      distribution,
      array: functions,
      logger,
    });
    logger.logSeparator();

    return distribution;
  }

  logger.logResults("Lambda Distribution by Ephemeral Storage");
  distribution.forEach((d) => {
    logger.logResults(`${d.lbl}: ${d.count} functions.`);
  });
  logger.logSeparator();

  return distribution;
}
