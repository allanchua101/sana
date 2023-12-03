import { getAccountLambdaFunctions } from "../../helpers/get-account-lambda-functions.mjs";
import { reduceByItemInArrayProp } from "../../helpers/reducers/reduce-by-item-in-array.mjs";
const BUCKETS = ["ARMv8", "x86_64", "ARMv7"];

/**
 * @async
 * @function getFunctionDistributionByArchitecture
 * @description Method used for retrieving the function distribution by architecture.
 * @param {Object} params
 * @param {string} params.profileName AWS CLI profile name to be used for this command.
 */
export async function getFunctionDistributionByArchitecture(params) {
  const functions = await getAccountLambdaFunctions(params.profile || "");
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
    console.log(`${d.lbl}: ${d.count} functions.`);
  });

  return distribution;
}
