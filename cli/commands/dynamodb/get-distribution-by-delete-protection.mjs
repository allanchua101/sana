import { getAllDynamoDBTablesWithDesc } from "../../helpers/get-account-ddbs-with-desc.mjs";
import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";

/**
 * @async
 * @function getDDBDistributionByDeleteProtection
 * @description Method used for retrieving DynamoDB table distribution by delete protection.
 * @param {Object} params
 * @param {string} params.profileName AWS CLI profile name to be used for this command.
 */
export async function getDDBDistributionByDeleteProtection(params) {
  const tables = await getAllDynamoDBTablesWithDesc(params.profile || "");
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
    console.log(`${d.lbl}: ${d.count} tables.`);
  });

  return distribution;
}
