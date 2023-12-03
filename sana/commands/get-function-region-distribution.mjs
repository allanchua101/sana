import { getAccountLambdaFunctions } from "../helpers/get-account-lambda-functions.mjs";
import { reduceByProp } from "../helpers/reducers/reduce-by-prop.mjs";

/**
 * @async
 * @function getFunctionRegionDistribution
 * @description Method used for retrieving function distribution by region for an AWS account.
 * @param {Object} params
 * @param {string} params.profileName AWS CLI profile name to be used for this command.
 */
export async function getFunctionRegionDistribution(params) {
  const functions = await getAccountLambdaFunctions(params.profile || "");
  const distribution = reduceByProp(functions, "sana.region");

  distribution.forEach((d) => {
    console.log(`${d.lbl}: ${d.count} functions.`);
  });

  return distribution;
}
