import { getAccountLambdaFunctions } from "../../helpers/get-account-lambda-functions.mjs";
import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";

/**
 * @async
 * @function getFunctionRuntimeDistribution
 * @description Method used for retrieving the function runtime distribution for an AWS account.
 * @param {Object} params
 * @param {string} params.profileName AWS CLI profile name to be used for this command.
 */
export async function getFunctionRuntimeDistribution(params) {
  const functions = await getAccountLambdaFunctions(params.profile || "");
  const distribution = reduceByProp(functions, "Runtime");

  distribution.forEach((d) => {
    console.log(`${d.lbl}: ${d.count} functions.`);
  });

  return distribution;
}
