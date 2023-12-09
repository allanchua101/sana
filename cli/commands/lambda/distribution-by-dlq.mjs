import { getAccountLambdaFunctions } from "../../helpers/get-account-lambda-functions.mjs";
import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";
import { displayDistributionChart } from "../../helpers/visualizers/chart.mjs";

/**
 * @async
 * @function getFunctionDLQDistribution
 * @description Method used for retrieving function distribution by DLQ.
 * @param {Object} params
 * @param {AwsCredentialIdentityProvider} credentials AWS credentials
 * @param {Object} logger Logger instance
 */
export async function getFunctionDLQDistribution(params, credentials, logger) {
  const functions = await getAccountLambdaFunctions(params, credentials);
  const distribution = reduceByProp(functions, "sana.dlqArn").map((d) => {
    return {
      ...d,
      lbl: d.lbl || "No DLQ",
    };
  });

  if (params.output === "chart") {
    displayDistributionChart({
      title: "Lambda Distribution by DLQ",
      distribution,
      array: functions,
      logger,
    });

    return distribution;
  }

  distribution.forEach((d) => {
    logger.logResults(`${d.lbl}: ${d.count} functions.`);
  });

  return distribution;
}
