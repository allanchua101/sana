import { getAccountLambdaFunctions } from "../helpers/get-account-lambda-functions.mjs";

/**
 * @async
 * @function getAccountFunctions
 * @description Method used for retrieving the total number of lambda functions inside an AWS account.
 * @param {Object} params
 * @param {string} params.profileName AWS CLI profile name to be used for this command.
 */
export async function countAccountFunctions(params) {
  const functions = await getAccountLambdaFunctions(params.profile || "");

  console.log(functions);
}
