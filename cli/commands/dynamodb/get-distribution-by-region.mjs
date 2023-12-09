import { getAllDynamoDBTables } from "../../helpers/get-account-ddbs.mjs";
import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";
import { displayDistributionChart } from "../../helpers/visualizers/chart.mjs";

/**
 * @async
 * @function getDDBDistributionByRegion
 * @description Method used for retrieving DynamoDB table distribution by region for an AWS account.
 * @param {Object} params
 * @param {AwsCredentialIdentityProvider} credentials AWS credentials
 * @param {Object} logger Logger instance
 */
export async function getDDBDistributionByRegion(params, credentials, logger) {
  const tables = await getAllDynamoDBTables(params, credentials);
  const distribution = reduceByProp(tables, "sana.region");

  if (params.output === "chart") {
    displayDistributionChart({
      title: "DynamoDB Table Distribution by Region",
      distribution,
      array: tables,
      logger,
    });

    return distribution;
  }

  distribution.forEach((d) => {
    logger.logResults(`${d.lbl}: ${d.count} tables.`);
  });

  return distribution;
}
