import { getAccountLambdaFunctions } from "../../helpers/get-account-lambda-functions.mjs";
import { reduceByItemInArrayProp } from "../../helpers/reducers/reduce-by-item-in-array.mjs";
const BUCKETS = ["ARMv8", "x86_64", "ARMv7"];

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

  distribution.forEach((d) => {
    logger.log(`${d.lbl}: ${d.count} functions.`);
  });

  return distribution;
}
