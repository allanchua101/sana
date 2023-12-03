import { getAccountLambdaFunctions } from "../helpers/get-account-lambda-functions.mjs";

/**
 * @async
 * @function getFunctionRuntimeDistribution
 * @description Method used for retrieving the function runtime distribution for an AWS account.
 * @param {Object} params
 * @param {string} params.profileName AWS CLI profile name to be used for this command.
 */
export async function getFunctionRuntimeDistribution(params) {
  const functions = await getAccountLambdaFunctions(params.profile || "");
  const distribution = (functions || [])
    .reduce((agg, item) => {
      const existingIndex = agg.findIndex((f) => f.lbl === item.Runtime);

      if (existingIndex > -1) {
        agg[existingIndex].count = agg[existingIndex].count + 1;
      }

      if (existingIndex === -1) {
        agg.push({
          runtime: item.Runtime,
          count: 1,
        });
      }

      return agg;
    }, [])
    .sort((a, b) => {
      return a.runtime > b.runtime ? 1 : -1;
    });

  distribution.forEach((d) => {
    console.log(`${d.runtime}: ${d.count} functions.`);
  });

  return distribution;
}
