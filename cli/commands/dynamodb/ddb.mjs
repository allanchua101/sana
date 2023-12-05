// DynamoDB
import { countDynamoDBs } from "./count-ddbs.mjs";
import { getDDBDistributionByRegion } from "./get-distribution-by-region.mjs";
import { getDDBDistributionByDeleteProtection } from "./get-distribution-by-delete-protection.mjs";
import { getDDBDistributionByTableStatus } from "./get-distribution-by-status.mjs";

export const DYNAMO_STRATEGIES = [
  // DynamoDBs
  {
    key: "ddb-count",
    desc: "Count account-wide DynamoDB table count.",
    execute: countDynamoDBs,
  },
  {
    key: "ddb-region-distribution",
    desc: "Count account-wide DynamoDB table distribution by AWS region.",
    execute: getDDBDistributionByRegion,
  },
  {
    key: "ddb-delete-protection-distribution",
    desc: "Count account-wide DynamoDB table distribution by table protection status.",
    execute: getDDBDistributionByDeleteProtection,
  },
  {
    key: "ddb-table-status-distribution",
    desc: "Count account-wide DynamoDB table distribution by table status.",
    execute: getDDBDistributionByTableStatus,
  },
];
