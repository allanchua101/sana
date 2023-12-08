import { countAccountFunctions } from "./count-account-functions.mjs";
// Distribution strategies
import { getFunctionDistributionByArchitecture } from "./distribution-by-architecture.mjs";
import { getFunctionDistributionByEphemeralStorage } from "./distribution-by-ephemeral-storage.mjs";
import { getFunctionDistributionByMemory } from "./distribution-by-memory.mjs";
import { getFunctionDistributionByPackageType } from "./distribution-by-package-type.mjs";
import { getFunctionRegionDistribution } from "./distribution-by-region.mjs";
import { getFunctionRuntimeDistribution } from "./distribution-by-runtime.mjs";
import { getFunctionDistributionByTracingMode } from "./distribution-by-tracing-mode.mjs";

export const LAMBDA_STRATEGIES = [
  {
    key: "lambda-count",
    desc: "Count account-wide Lambda function count.",
    execute: countAccountFunctions,
  },
  {
    key: "lambda-runtime-distribution",
    desc: "Get account-wide Lambda function distribution by runtime.",
    execute: getFunctionRuntimeDistribution,
  },
  {
    key: "lambda-package-type-distribution",
    desc: "Get account-wide Lambda function distribution by package type.",
    execute: getFunctionDistributionByPackageType,
  },
  {
    key: "lambda-region-distribution",
    desc: "Get account-wide Lambda function distribution by AWS region.",
    execute: getFunctionRegionDistribution,
  },
  {
    key: "lambda-memory-distribution",
    desc: "Get account-wide Lambda function distribution by memory configuration.",
    execute: getFunctionDistributionByMemory,
  },
  {
    key: "lambda-ephemeral-storage-distribution",
    desc: "Get account-wide Lambda function distribution by ephemeral storage distribution.",
    execute: getFunctionDistributionByEphemeralStorage,
  },
  {
    key: "lambda-tracing-mode-distribution",
    desc: "Get account-wide Lambda function distribution by X-ray tracing mode.",
    execute: getFunctionDistributionByTracingMode,
  },
  {
    key: "lambda-architecture-distribution",
    desc: "Get account-wide Lambda function distribution by system architecture",
    execute: getFunctionDistributionByArchitecture,
  },
];
