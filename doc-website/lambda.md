# `sana lambda`

`sana lambda` is used to run a full analysis of Lambda functions.

```sh
$ sana lambda
```

### Example Usage

```sh
# Runs an account-wide analysis
$ sana lambda

# Runs a regional analysis
$ sana lambda -r ap-southeast-1

# Runs a multi-region analysis
$ sana lambda -r us-east-1,us-east-2,us-west-2
```

### KPI-Specific Commands

- Aggregation
  - [lambda-avg-ephemeral-storage-size](/lambda/aggregation/lambda-avg-ephemeral-storage-size)
  - [lambda-avg-memory-size](/lambda/aggregation/lambda-avg-memory-size)
  - [lambda-avg-package-size](/lambda/aggregation/lambda-avg-package-size)
  - [lambda-avg-timeout](/lambda/aggregation/lambda-avg-timeout)
  - [lambda-count](/lambda/aggregation/lambda-count)
  - [lambda-max-package-size](/lambda/aggregation/lambda-max-package-size)
- Distribution Analysis
  - [lambda-app-log-lvl-distribution](/lambda/distribution/lambda-app-log-lvl-distribution)
  - [lambda-architecture-distribution](/lambda/distribution/lambda-architecture-distribution)
  - [lambda-attached-layer-count-distribution](/lambda/distribution/lambda-attached-layer-count-distribution)
  - [lambda-dlq-distribution](/lambda/distribution/lambda-dlq-distribution)
  - [lambda-ephemeral-storage-distribution](/lambda/distribution/lambda-ephemeral-storage-distribution)
  - [lambda-log-format-distribution](/lambda/distribution/lambda-log-format-distribution)
  - [lambda-memory-distribution](/lambda/distribution/lambda-memory-distribution)
  - [lambda-package-type-distribution](/lambda/distribution/lambda-package-type-distribution)
  - [lambda-region-distribution](/lambda/distribution/lambda-region-distribution)
  - [lambda-runtime-distribution](/lambda/distribution/lambda-runtime-distribution)
  - [lambda-sys-log-lvl-distribution](/lambda/distribution/lambda-sys-log-lvl-distribution)
  - [lambda-tracing-mode-distribution](/lambda/distribution/lambda-tracing-mode-distribution)
  - [lambda-vpc-distribution](/lambda/distribution/lambda-vpc-distribution)
