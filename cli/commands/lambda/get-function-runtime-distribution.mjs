import { getAccountLambdaFunctions } from "../../helpers/get-account-lambda-functions.mjs";
import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";
import { buildHBarChart } from "../../helpers/visualizers/hbar-chart.mjs";

function displayChart(distribution, functions, logger) {
  const chartData = distribution.map((d) => {
    const strPct = d.pct > 0 ? `${(d.pct * 100).toFixed(2)}%` : "0%";

    return {
      key: `${d.lbl} (${d.count}/${functions.length} ${strPct})`,
      value: d.count,
    };
  });

  logger.log("");
  logger.log("");
  logger.log("Lambda Distribution by Runtime");
  logger.log("");
  logger.log("");
  const chartText = buildHBarChart(chartData);
  logger.log(chartText);
}

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
    displayChart(distribution, functions, logger);

    return distribution;
  }

  distribution.forEach((d) => {
    const strPct = d.pct > 0 ? `${(d.pct * 100).toFixed(2)}%` : "0%";

    logger.log(`${d.lbl}: ${d.count} functions (${strPct})`);
  });

  return distribution;
}
