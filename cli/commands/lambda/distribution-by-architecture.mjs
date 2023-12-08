import { getAccountLambdaFunctions } from "../../helpers/get-account-lambda-functions.mjs";
import { reduceByItemInArrayProp } from "../../helpers/reducers/reduce-by-item-in-array.mjs";
import { displayDistributionChart } from "../../helpers/visualizers/chart.mjs";
const BUCKETS = ["ARMv7", "ARMv8", "x86_64"];

/**
 * @async
 * @function getFunctionDistributionByArchitecture
 * @description Method used for retrieving the function distribution by architecture.
 * @param {Object} params
 * @param {AwsCredentialIdentityProvider} credentials AWS credentials
 * @param {Object} logger Logger instance
 */
export async function getFunctionDistributionByArchitecture(
  params,
  credentials,
  logger
) {
  const functions = await getAccountLambdaFunctions(params, credentials);
  const temp = reduceByItemInArrayProp(functions, "Architectures");
  const distribution = BUCKETS.map((b) => {
    const dist = temp.find((t) => t.lbl === b);

    return {
      lbl: b,
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

    return distribution;
  }

  distribution.forEach((d) => {
    logger.log(`${d.lbl}: ${d.count} functions.`);
  });

  return distribution;
}
