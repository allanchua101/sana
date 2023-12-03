import { getAccountLambdaFunctions } from "../../helpers/get-account-lambda-functions.mjs";
import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";

/**
 * @async
 * @function getFunctionDistributionByTracingMode
 * @description Method used for retrieving the function distribution by tracing mode.
 * @param {Object} params
 * @param {string} params.profileName AWS CLI profile name to be used for this command.
 */
export async function getFunctionDistributionByTracingMode(params) {
  const functions = await getAccountLambdaFunctions(params.profile || "");
  const distribution = reduceByProp(functions, "TracingConfig.Mode");

  distribution.forEach((d) => {
    console.log(`${d.lbl}: ${d.count} functions.`);
  });

  return distribution;
}
