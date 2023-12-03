import { getAllDynamoDBTablesWithDesc } from "../../helpers/get-account-ddbs-with-desc.mjs";
import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";
const BUCKETS = [
  "ACTIVE",
  "CREATING",
  "UPDATING",
  "DELETING",
  "INACCESSIBLE_ENCRYPTION_CREDENTIALS",
];
/**
 * @async
 * @function getDDBDistributionByTableStatus
 * @description Method used for retrieving DynamoDB table distribution by table status.
 * @param {Object} params
 * @param {string} params.profileName AWS CLI profile name to be used for this command.
 */
export async function getDDBDistributionByTableStatus(params) {
  const tables = await getAllDynamoDBTablesWithDesc(params.profile || "");
  const temp = reduceByProp(tables, "sana.table.TableStatus");
  const distribution = BUCKETS.map((b) => {
    const bucketRow = temp.find((t) => t.lbl === b);

    return {
      lbl: b,
      count: bucketRow ? bucketRow.count : 0,
    };
  });

  distribution.forEach((d) => {
    console.log(`${d.lbl}: ${d.count} tables.`);
  });

  return distribution;
}
