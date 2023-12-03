import { getAccountLambdaFunctions } from "../../helpers/get-account-lambda-functions.mjs";
import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";

/**
 * @async
 * @function getFunctionDistributionByMemory
 * @description Method used for retrieving the function distribution by memory size for an AWS account.
 * @param {Object} params
 * @param {string} params.profileName AWS CLI profile name to be used for this command.
 */
export async function getFunctionDistributionByMemory(params) {
  const functions = await getAccountLambdaFunctions(params.profile || "");
  const distribution = reduceByProp(functions, "MemorySize");

  distribution.forEach((d) => {
    console.log(`${d.lbl}: ${d.count} functions.`);
  });

  return distribution;
}
