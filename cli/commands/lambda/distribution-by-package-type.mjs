import { getAccountLambdaFunctions } from "../../helpers/get-account-lambda-functions.mjs";
import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";
import { displayDistributionChart } from "../../helpers/visualizers/chart.mjs";

/**
 * @async
 * @function getFunctionDistributionByPackageType
 * @description Method used for retrieving the function distribution by package type for an AWS account.
 * @param {Object} params
 * @param {AwsCredentialIdentityProvider} credentials AWS credentials
 * @param {Object} logger Logger instance
 */
export async function getFunctionDistributionByPackageType(
  params,
  credentials,
  logger
) {
  const functions = await getAccountLambdaFunctions(params, credentials);
  const distribution = reduceByProp(functions, "PackageType");

  if (params.output === "chart") {
    displayDistributionChart({
      title: "Lambda Distribution by Package Type",
      distribution,
      array: functions,
      logger,
    });

    return distribution;
  }

  distribution.forEach((d) => {
    logger.log(`${d.lbl}: ${d.count} functions.`);
  });

  return distribution;
}
