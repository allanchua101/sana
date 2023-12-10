// Data Loaders
import { getAccountLambdaFunctions } from "../../helpers/get-account-lambda-functions.mjs";
// Global Command
import { runFullLambdaAnalysis } from "./lambda-all.mjs";
// Counting strategies
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
// Average strategies
import { getAveragePackageSize } from "./average-package-size.mjs";
import { getAverageTimeout } from "./average-timeout.mjs";
import { getAverageMemorySize } from "./average-memory-size.mjs";
import { getAverageEphemeralStorageSize } from "./average-ephemeral-storage-size.mjs";
const LAMBDAS_EXTRACTOR = "get-all-lambdas";

export const LAMBDA_EXTRACTORS = [
  {
    key: LAMBDAS_EXTRACTOR,
    execute: getAccountLambdaFunctions,
  },
];

export const LAMBDA_STRATEGIES = [
  {
    key: "lambda",
    desc: "Run full analysis of Lambda functions",
    extractorKey: LAMBDAS_EXTRACTOR,
    execute: runFullLambdaAnalysis,
  },
  {
    key: "lambda-count",
    desc: "Count Lambda function count.",
    extractorKey: LAMBDAS_EXTRACTOR,
    execute: countAccountFunctions,
  },
  // Average
  {
    key: "lambda-avg-package-size",
    desc: "Get the average package size of Lambda functions.",
    extractorKey: LAMBDAS_EXTRACTOR,
    execute: getAveragePackageSize,
  },
  {
    key: "lambda-avg-timeout",
    desc: "Get the average timeout of Lambda functions.",
    extractorKey: LAMBDAS_EXTRACTOR,
    execute: getAverageTimeout,
  },
  {
    key: "lambda-avg-memory",
    desc: "Get the average memory size of Lambda functions.",
    extractorKey: LAMBDAS_EXTRACTOR,
    execute: getAverageMemorySize,
  },
  {
    key: "lambda-avg-ephemeral-storage-size",
    desc: "Get the average ephemeral storage size of Lambda functions.",
    extractorKey: LAMBDAS_EXTRACTOR,
    execute: getAverageEphemeralStorageSize,
  },
  // Distributions
  {
    key: "lambda-runtime-distribution",
    desc: "Get Lambda function distribution by runtime.",
    extractorKey: LAMBDAS_EXTRACTOR,
    execute: getFunctionRuntimeDistribution,
  },
  {
    key: "lambda-package-type-distribution",
    desc: "Get Lambda function distribution by package type.",
    extractorKey: LAMBDAS_EXTRACTOR,
    execute: getFunctionDistributionByPackageType,
  },
  {
    key: "lambda-region-distribution",
    desc: "Get Lambda function distribution by AWS region.",
    extractorKey: LAMBDAS_EXTRACTOR,
    execute: getFunctionRegionDistribution,
  },
  {
    key: "lambda-memory-distribution",
    desc: "Get Lambda function distribution by memory configuration.",
    extractorKey: LAMBDAS_EXTRACTOR,
    execute: getFunctionDistributionByMemory,
  },
  {
    key: "lambda-ephemeral-storage-distribution",
    desc: "Get Lambda function distribution by ephemeral storage distribution.",
    extractorKey: LAMBDAS_EXTRACTOR,
    execute: getFunctionDistributionByEphemeralStorage,
  },
  {
    key: "lambda-tracing-mode-distribution",
    desc: "Get Lambda function distribution by X-ray tracing mode.",
    extractorKey: LAMBDAS_EXTRACTOR,
    execute: getFunctionDistributionByTracingMode,
  },
  {
    key: "lambda-architecture-distribution",
    desc: "Get Lambda function distribution by system architecture",
    extractorKey: LAMBDAS_EXTRACTOR,
    execute: getFunctionDistributionByArchitecture,
  },
  {
    key: "lambda-attached-layer-count-distribution",
    desc: "Get Lambda function distribution by attached layer count.",
    extractorKey: LAMBDAS_EXTRACTOR,
    execute: getFunctionDistributionByLayerCount,
  },
  {
    key: "lambda-dlq-distribution",
    desc: "Get Lambda function distribution by DLQ",
    extractorKey: LAMBDAS_EXTRACTOR,
    execute: getFunctionDLQDistribution,
  },
];
