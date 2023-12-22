# `sana ddb`

`sana ddb` is used to run all supported analysis of all DynamoDB tables in an AWS account.

> NOTE: ddb command is under development.

```sh
$ sana ddb
```

### Example Usage

```sh
# Runs an account-wide analysis
$ sana ddb

# Runs a regional analysis
$ sana ddb -r ap-southeast-1

# Runs a multi-region analysis
$ sana ddb -r us-east-1,us-east-2,us-west-2
```

### KPI-Specific Commands

- Aggregation
  - [ddb-count](/dynamodb/aggregation/ddb-count)
- Distribution
  - [ddb-billing-mode-distribution](/dynamodb/distribution/ddb-billing-mode-distribution)
  - [ddb-delete-protection-distribution](/dynamodb/distribution/ddb-delete-protection-distribution)
  - [ddb-region-distribution](/dynamodb/distribution/ddb-region-distribution)
  - [ddb-stream-status-distribution](/dynamodb/distribution/ddb-stream-status-distribution)
  - [ddb-table-status-distribution](/dynamodb/distribution/ddb-table-status-distribution)
