import { getAccountLambdaFunctions } from "../../helpers/get-account-lambda-functions.mjs";
import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";
import { displayDistributionChart } from "../../helpers/visualizers/chart.mjs";

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
    displayDistributionChart({
      title: "Lambda Distribution by Runtime",
      distribution,
      array: functions,
      logger,
    });

    return distribution;
  }

  distribution.forEach((d) => {
    const strPct = d.pct > 0 ? `${(d.pct * 100).toFixed(2)}%` : "0%";

    logger.log(`${d.lbl}: ${d.count} functions (${strPct})`);
  });

  return distribution;
}
