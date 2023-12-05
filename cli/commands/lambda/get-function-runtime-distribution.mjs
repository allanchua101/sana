import { getAccountLambdaFunctions } from "../../helpers/get-account-lambda-functions.mjs";
import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";
import { getMaxPropLength } from "../../helpers/reducers/get-max-prop-length.mjs";
import { displayBarChart } from "../../helpers/visualizers/bar-chart.mjs";

/**
 * @async
 * @function getFunctionRuntimeDistribution
 * @description Method used for retrieving the function runtime distribution for an AWS account.
 * @param {Object} params
 * @param {AwsCredentialIdentityProvider} credentials AWS credentials
 * @param {Object} logger Logger instance
 */
export async function getFunctionRuntimeDistribution(
  params,
  credentials,
  logger
) {
  const functions = await getAccountLambdaFunctions(params, credentials);
  const distribution = reduceByProp(functions, "Runtime");

  if (params.output === "chart") {
    const chartData = distribution.map((d) => {
      return { key: d.lbl, value: d.count };
    });

    logger.log("");
    logger.log("");
    logger.log("Lambda Distribution by Runtime");
    logger.log("");
    logger.log("");
    displayBarChart(chartData, {
      barWidth: getMaxPropLength(chartData, "key"),
    });
    logger.log("");
    logger.log("");

    return distribution;
  }

  distribution.forEach((d) => {
    logger.log(`${d.lbl}: ${d.count} functions.`);
  });

  return distribution;
}
