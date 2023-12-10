/**
 * @async
 * @function getAccountFunctions
 * @description Method used for retrieving the total number of lambda functions inside an AWS account.
 * @param {object} params CLI-parameters (For future enhancements)
 * @param {object[]} functions List of lambda functions
 * @param {object} logger Logger instance
 * @returns {Promise<number>} Account-wide Lambda function count.
 */
export async function countAccountFunctions(params, functions, logger) {
  logger.logResults(`Found ${functions.length} functions in the account.`);
  logger.logSeparator();

  return functions.length;
}
