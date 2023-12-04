import { getAllDynamoDBTablesWithDesc } from "../../helpers/get-account-ddbs-with-desc.mjs";
import { reduceByProp } from "../../helpers/reducers/reduce-by-prop.mjs";
const BUCKETS = ["Encrypted", "Non-encrypted"];

/**
 * @async
 * @function getDDBDistributionByEncryptionFlag
 * @description Method used for retrieving DynamoDB table distribution by table encryption status.
 * @param {Object} params
 * @param {AwsCredentialIdentityProvider} credentials AWS credentials
 * @param {Object} logger Logger instance
 *
 * TODO: Change this to mode instead of boolean flag
 */
export async function getDDBDistributionByEncryptionFlag(
  params,
  credentials,
  logger
) {
  const tables = await getAllDynamoDBTablesWithDesc(params, credentials);
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
    logger.log(`${d.lbl}: ${d.count} tables.`);
  });

  return distribution;
}
