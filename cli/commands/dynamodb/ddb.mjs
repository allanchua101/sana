// Data-loading strategies
import { getAllDynamoDBTablesWithDesc } from "#helpers/get-account-ddbs-with-desc.mjs";
// DynamoDB
import { countDynamoDBs } from "./aggregation/count-ddbs.mjs";
// Distribution
import { getDDBDistributionByRegion } from "./distribution/by-region.mjs";
import { getDDBDistributionByDeleteProtection } from "./distribution/by-delete-protection.mjs";
import { getDDBDistributionByTableStatus } from "./distribution/by-status.mjs";
import { getDDBDistributionByBillingMode } from "./distribution/by-billing-mode.mjs";
// Aliases
import { runFullDynamoDBAnalysis } from "./ddb-all.mjs";

// Constants
const DYNAMO_DB_TABLE_META_EXTRACTOR = "dynamo-db-table-meta";

export const DDB_EXTRACTORS = [
  {
    key: DYNAMO_DB_TABLE_META_EXTRACTOR,
    execute: getAllDynamoDBTablesWithDesc,
  },
];

export const DYNAMO_STRATEGIES = [
  // DynamoDBs
  {
    key: "ddb-count",
    desc: "Count account-wide DynamoDB table count.",
    extractorKey: DYNAMO_DB_TABLE_META_EXTRACTOR,
    execute: countDynamoDBs,
  },
  {
    key: "ddb-region-distribution",
    desc: "DynamoDB table distribution by AWS region.",
    extractorKey: DYNAMO_DB_TABLE_META_EXTRACTOR,
    execute: getDDBDistributionByRegion,
  },
  {
    key: "ddb-delete-protection-distribution",
    desc: "DynamoDB table distribution by table protection status.",
    extractorKey: DYNAMO_DB_TABLE_META_EXTRACTOR,
    execute: getDDBDistributionByDeleteProtection,
  },
  {
    key: "ddb-billing-mode-distribution",
    desc: "DynamoDB table distribution by billing mode",
    extractorKey: DYNAMO_DB_TABLE_META_EXTRACTOR,
    execute: getDDBDistributionByBillingMode,
  },
  {
    key: "ddb-table-status-distribution",
    desc: "DynamoDB table distribution by table status.",
    extractorKey: DYNAMO_DB_TABLE_META_EXTRACTOR,
    execute: getDDBDistributionByTableStatus,
  },
  {
    key: "ddb",
    desc: "Run full analysis on DynamoDB tables",
    extractorKey: DYNAMO_DB_TABLE_META_EXTRACTOR,
    execute: runFullDynamoDBAnalysis,
  },
];
