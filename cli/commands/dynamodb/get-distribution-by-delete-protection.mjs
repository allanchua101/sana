import { getAllDynamoDBTablesWithDesc } from "../../helpers/get-account-ddbs-with-desc.mjs";
import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";

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
  const distribution = reduceByProp(
    tables,
    "sana.table.DeletionProtectionEnabled"
  ).map((rt) => {
    return {
      lbl: rt ? "Delete Protection Enabled" : "Delete Protection Disabled",
      count: rt.count,
    };
  });

  if (!distribution.some((d) => d.lbl === "Delete Protection Enabled")) {
    distribution.push({
      lbl: "Delete Protection Enabled",
      count: 0,
    });
  }

  if (!distribution.some((d) => d.lbl === "Delete Protection Disabled")) {
    distribution.push({
      lbl: "Delete Protection Disabled",
      count: 0,
    });
  }

  distribution.forEach((d) => {
    logger.log(`${d.lbl}: ${d.count} tables.`);
  });

  return distribution;
}
