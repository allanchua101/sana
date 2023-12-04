import { getAccountLambdaFunctions } from "../../helpers/get-account-lambda-functions.mjs";
import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";

/**
 * @async
 * @function getFunctionDistributionByEphemeralStorage
 * @description Method used for retrieving the function distribution by ephemeral storage size for an AWS account.
 * @param {Object} params
 * @param {AwsCredentialIdentityProvider} credentials AWS credentials
 * @param {Object} logger Logger instance
 */
export async function getFunctionDistributionByEphemeralStorage(
  params,
  credentials,
  logger
) {
  const functions = await getAccountLambdaFunctions(credentials);
  const distribution = reduceByProp(functions, "EphemeralStorage.Size");

  distribution.forEach((d) => {
    logger.log(`${d.lbl}: ${d.count} functions.`);
  });

  return distribution;
}
