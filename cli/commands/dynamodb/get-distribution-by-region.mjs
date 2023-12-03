import { getAllDynamoDBTables } from "../../helpers/get-account-ddbs.mjs";
import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";

/**
 * @async
 * @function getDDBDistributionByRegion
 * @description Method used for retrieving DynamoDB table distribution by region for an AWS account.
 * @param {Object} params
 * @param {string} params.profileName AWS CLI profile name to be used for this command.
 */
export async function getDDBDistributionByRegion(params) {
  const tables = await getAllDynamoDBTables(params.profile || "");
  const distribution = reduceByProp(tables, "sana.region");

  distribution.forEach((d) => {
    console.log(`${d.lbl}: ${d.count} tables.`);
  });

  return distribution;
}
