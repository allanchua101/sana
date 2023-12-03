import { getAllDynamoDBTablesWithDesc } from "../../helpers/get-account-ddbs-with-desc.mjs";
import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";
const BUCKETS = ["Encrypted", "Non-encrypted"];

/**
 * @async
 * @function getDDBDistributionByEncryptionFlag
 * @description Method used for retrieving DynamoDB table distribution by table encryption status.
 * @param {Object} params
 * @param {string} params.profileName AWS CLI profile name to be used for this command.
 *
 * TODO: Change this to mode instead of boolean flag
 */
export async function getDDBDistributionByEncryptionFlag(params) {
  const tables = await getAllDynamoDBTablesWithDesc(params.profile || "");
  const temp = reduceByProp(tables, "sana.hasEncryption").map((rt) => {
    return {
      lbl: rt.lbl ? "Encrypted" : "Non-encrypted",
      count: rt.count,
    };
  });
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
