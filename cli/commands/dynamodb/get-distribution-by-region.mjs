import { getAllDynamoDBTables } from "../../helpers/get-account-ddbs.mjs";
import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";

/**
 * @async
 * @function getDDBDistributionByRegion
 * @description Method used for retrieving DynamoDB table distribution by region for an AWS account.
 * @param {Object} params
 * @param {AwsCredentialIdentityProvider} credentials AWS credentials
 * @param {Object} logger Logger instance
 */
export async function getDDBDistributionByRegion(params, credentials, logger) {
  const tables = await getAllDynamoDBTables(credentials);
  const distribution = reduceByProp(tables, "sana.region");

  distribution.forEach((d) => {
    logger.log(`${d.lbl}: ${d.count} tables.`);
  });

  return distribution;
}
