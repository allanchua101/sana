import { getAllDynamoDBTablesWithDesc } from "../../helpers/get-account-ddbs-with-desc.mjs";
import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";
import { displayDistributionChart } from "../../helpers/visualizers/chart.mjs";
const BUCKETS = ["Delete Protection Enabled", "Delete Protection Disabled"];

/**
 * @async
 * @function getDDBDistributionByDeleteProtection
 * @description Method used for retrieving DynamoDB table distribution by delete protection.
 * @param {Object} params
 * @param {AwsCredentialIdentityProvider} credentials AWS credentials
 * @param {Object} logger Logger instance
 */
export async function getDDBDistributionByDeleteProtection(
  params,
  credentials,
  logger
) {
  const tables = await getAllDynamoDBTablesWithDesc(params, credentials);
  const temp = reduceByProp(tables, "sana.table.DeletionProtectionEnabled").map(
    (rt) => {
      return {
        ...rt,
        lbl: rt ? "Delete Protection Enabled" : "Delete Protection Disabled",
      };
    }
  );
  const distribution = BUCKETS.map((b) => {
    const bucketRow = temp.find((t) => t.lbl === b);

    return {
      lbl: b,
      pct: bucketRow ? bucketRow.pct : 0,
      count: bucketRow ? bucketRow.count : 0,
    };
  });

  if (params.output === "chart") {
    displayDistributionChart({
      title: "DynamoDB Table Distribution by Delete Protection",
      distribution,
      array: tables,
      logger,
    });

    return distribution;
  }

  distribution.forEach((d) => {
    logger.log(`${d.lbl}: ${d.count} tables.`);
  });

  return distribution;
}
