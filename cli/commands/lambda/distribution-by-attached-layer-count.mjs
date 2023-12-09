import { getAccountLambdaFunctions } from "../../helpers/get-account-lambda-functions.mjs";
import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";
import { displayDistributionChart } from "../../helpers/visualizers/chart.mjs";

/**
 * @async
 * @function getFunctionDistributionByLayerCount
 * @description Method used for analyzing distribution of functions by lambda layer count.
 * @param {Object} params
 * @param {AwsCredentialIdentityProvider} credentials AWS credentials
 * @param {Object} logger Logger instance
 */
export async function getFunctionDistributionByLayerCount(
  params,
  credentials,
  logger
) {
  const functions = await getAccountLambdaFunctions(params, credentials);
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

    return distribution;
  }

  distribution.forEach((d) => {
    logger.logResults(`${d.lbl}: ${d.count} functions.`);
  });

  return distribution;
}
