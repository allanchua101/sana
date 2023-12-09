import { countAccountFunctions } from "./count-account-functions.mjs";
// Distribution strategies
import { getFunctionDistributionByArchitecture } from "./distribution-by-architecture.mjs";
import { getFunctionDistributionByEphemeralStorage } from "./distribution-by-ephemeral-storage.mjs";
import { getFunctionDistributionByMemory } from "./distribution-by-memory.mjs";
import { getFunctionDistributionByPackageType } from "./distribution-by-package-type.mjs";
import { getFunctionRegionDistribution } from "./distribution-by-region.mjs";
import { getFunctionRuntimeDistribution } from "./distribution-by-runtime.mjs";
import { getFunctionDistributionByTracingMode } from "./distribution-by-tracing-mode.mjs";
import { getFunctionDistributionByLayerCount } from "./distribution-by-attached-layer-count.mjs";
import { getFunctionDLQDistribution } from "./distribution-by-dlq.mjs";

export const LAMBDA_STRATEGIES = [
  {
    key: "lambda-count",
    desc: "Count Lambda function count.",
    execute: countAccountFunctions,
  },
  {
    key: "lambda-runtime-distribution",
    desc: "Get Lambda function distribution by runtime.",
    execute: getFunctionRuntimeDistribution,
  },
  {
    key: "lambda-package-type-distribution",
    desc: "Get Lambda function distribution by package type.",
    execute: getFunctionDistributionByPackageType,
  },
  {
    key: "lambda-region-distribution",
    desc: "Get Lambda function distribution by AWS region.",
    execute: getFunctionRegionDistribution,
  },
  {
    key: "lambda-memory-distribution",
    desc: "Get Lambda function distribution by memory configuration.",
    execute: getFunctionDistributionByMemory,
  },
  {
    key: "lambda-ephemeral-storage-distribution",
    desc: "Get Lambda function distribution by ephemeral storage distribution.",
    execute: getFunctionDistributionByEphemeralStorage,
  },
  {
    key: "lambda-tracing-mode-distribution",
    desc: "Get Lambda function distribution by X-ray tracing mode.",
    execute: getFunctionDistributionByTracingMode,
  },
  {
    key: "lambda-architecture-distribution",
    desc: "Get Lambda function distribution by system architecture",
    execute: getFunctionDistributionByArchitecture,
  },
  {
    key: "lambda-attached-layer-count-distribution",
    desc: "Get Lambda function distribution by attached layer count.",
    execute: getFunctionDistributionByLayerCount,
  },
  {
    key: "lambda-dlq-distribution",
    desc: "Get Lambda function distribution by DLQ",
    execute: getFunctionDLQDistribution,
  },
];
