# sana (SErverless aNAlyzer)

![Sample Function Distribution by Runtime](https://imgur.com/PKeDUeY.gif, "Charted Function Distribution by Runtime")

A command-line interface for analyzing an AWS account's serverless resources. Designed by AWS serverless engineers, for AWS serverless engineers.

## Table of Contents

- [Why sana?](#why-sana)
- [Installation](#installation)
- [Global flags](#global-flags)
  - [Authentication modes](#authentication-modes)
  - [Scanning specific regions](#scanning-specific-regions)
  - [Distribution charts](#distribution-charts)
  - [Silent mode](#silent-mode)
  - [Disable progress bar](#disable-progress-bar)
- [Lambda Functions](#lambda-functions)
  - [Lambda Count](#total-count)
  - [Distribution by Runtime](#function-runtime-distribution)
  - [Distribution by Package Type](#function-package-type-distribution)
  - [Distribution by Region](#function-region-distribution)
  - [Distribution by Memory Size](#function-memory-size-distribution)
  - [Distribution by Ephemeral Storage](#function-ephemeral-storage-distribution)
  - [Distribution by Tracing Mode](#function-distribution-by-tracing-mode)
  - [Distribution by Architecture](#function-distribution-by-architecture)
- [DynamoDB Tables](#dynamodb-tables)
  - [DynamoDB Table Count](#total-count-1)
  - [Distribution by Region](#dynamodb-table-distribution-by-region)
  - [Distribution by Delete Protection](#distribution-by-delete-protection)
  - [Distribution by Table Status](#distribution-by-table-status)

## Why sana?

Inspired heavily by Werner Vogels' frugal architect laws mentioned at the 2023 AWS re:Invent keynote, `sana` aims to provide tooling that fills in the gaps in the space of serverless observation capabilities. Here are some problem statements that `sana` tries to solve.

- Detects how many functions in an account need to be migrated to the latest possible runtime.
- Identifies how many DynamoDB tables were not configured with delete protection.
- Eases reporting capabilities in CI/CD pipelines to enhance observability of build impact on your AWS accounts.
- Provides the ability to observe the total health of an AWS account without leaving your VS Code/terminal.
- And much more. StepFunctions, SQS, Event Bridge, S3, and CF commands are under development!"

## Installation

```sh
npm i -g @serverless-ninja/sana
sana --version

@serverless-ninja/sana 1.1.x
```

## Upgrading Existing Installation

```sh
npm uninstall -g @serverless-ninja/sana
npm i -g @serverless-ninja/sana
sana --version

@serverless-ninja/sana 1.1.x
```

## Global Flags

List of global flags that you can pass on all commands.

### Authentication Modes

`sana` can authenticate against your AWS account by either using the default AWS CLI profile or by using named profiles. Take the example below

```sh
# Use default AWS profile in you dev machine.
sana lambda-runtime-distribution

# The same syntax works for CI/CD agents
# that relies on IAM roles
sana lambda-runtime-distribution

# If you need to target multiple accounts,
# You can use named profiles
sana lambda-runtime-distribution --profile foo

# Environment variable support is under development
```

### Scanning Specific Regions

You can use the `--region` or `-r` flag to scan specific region(s) of interest.

```sh
# Single region syntax
sana ddb-count --region ap-southeast-1

# Multi-region syntax
sana ddb-count --region ap-southeast-1,us-east-1

# shorthand
sana ddb-count -r ap-southeast-1,us-east-1
```

### Distribution Charts

For distribution queries, you can pass the `-o chart` flag to get the results printed in horizontal charts

```sh
sana lambda-runtime-distribution -o chart

  ___  __ _ _ __   __ _
 / __|/ _` | '_ \ / _` |
 \__ \ (_| | | | | (_| |
 |___/\__,_|_| |_|\__,_|

Analyzing lambda-runtime-distribution using the default profile.
Scanning account enabled regions |████████████████████████████████████████| 100% | ETA: 0s | 17/17


Lambda Distribution by Runtime


 nodejs14.x (1000/4000 25.00%) **********

 nodejs16.x (1000/4000 25.00%) **********

 nodejs18.x (1000/4000 25.00%) **********

 nodejs20.x (1000/4000 25.00%) **********
```

### Silent Mode

You can pass the `--silent-mode` flag to disable all logs.

```sh
sana lambda-count --silent-mode
```

### Disable Progress Bar

You can use the `--no-progress-bar` flag to disable the progress bar. This flag is often used in build servers.

```sh
sana lambda-count --no-progress-bar
```

## Lambda Functions

Use `sana` to run basic analysis of Lambda function distribution in an AWS account.

### Total Count

Use the `lambda-count` command to get the account-wide Lambda function count.

```sh
sana lambda-count

Found a total of 4 Lambda functions
```

### Function Runtime Distribution

Use the `lambda-runtime-distribution` command to get the account-wide Lambda function runtime distribution.

```sh
sana lambda-runtime-distribution

nodejs14.x: 1000 functions (50.00%)
nodejs16.x: 250 functions (12.50%)
nodejs18.x: 500 functions (25.00%)
nodejs20.x: 250 functions (12.50%)
```

Tips:

- Useful when measuring the progress of your migration initiatives.
- Useful in identification of functions that are about to be deprecated.

### Function Package Type Distribution

Use the `lambda-package-type-distribution` command to get the account-wide Lambda function distribution by packaging type.

```sh
sana lambda-package-type-distribution

Zip: 254 functions.
Image: 5 functions.
```

### Function Region Distribution

Use the `lambda-region-distribution` command to get the account-wide Lambda function distribution by AWS region.

```sh
sana lambda-region-distribution

ap-southeast-1: 490 functions.
us-east-1: 1205 functions.
```

Notes:

- Useful for identification of regions in an account that contains Lambda functions.
- Useful when running cost analysis for sudden cost spikes.
- Useful for measuring concurrency / function ratio of a particular region.

### Function Memory Size Distribution

Use the `lambda-memory-distribution` command to get the account-wide Lambda function distribution by memory size configuration.

```sh
sana lambda-memory-distribution

128: 10 functions.
256: 15 functions.
512: 24 functions.
```

### Function Ephemeral Storage Distribution

Use the `lambda-ephemeral-storage-distribution` command to get the account-wide Lambda function distribution by ephemeral storage size.

```sh
sana lambda-ephemeral-storage-distribution

512: 24 functions.
1024: 88 functions.
```

### Function Distribution by Tracing Mode

Use the `lambda-tracing-mode-distribution` command to get the account-wide Lambda function distribution by X-ray tracing mode.

```sh
sana lambda-tracing-mode-distribution

PassThrough: 450 functions.
Active: 280 functions
```

### Function Distribution by Architecture

Use the `lambda-architecture-distribution` command to get the account-wide Lambda function distribution by underlying architecture. This command is useful for optimizing cost of systems. (ARM chips are cheaper than x86_64)

```sh
sana lambda-architecture-distribution

ARMv8: 500 functions.
ARMv7: 220 functions.
x86_64: 1405 functions.
```

## DynamoDB Tables

Use `sana` to run basic analysis of DynamoDB table count and distribution in an AWS account.

### Total Count

Use the `ddb-count` command to get the account-wide DynamoDB table count.

```sh
sana ddb-count

Found a total of 490 dynamo db tables in the account.
```

### DynamoDB Table Distribution by Region

Use the `ddb-region-distribution` command to get DynamoDB Table count per region

```sh
sana ddb-region-distribution

us-east-1: 250 tables.
us-west-1: 42 tables.
ap-southeast-1: 28 tables.
```

### Distribution by Delete Protection

Use the `ddb-delete-protection-distribution` command to get DynamoDB table count based on their delete protection flag.

```sh
sana ddb-delete-protection-distribution

Delete Protection Enabled: 250 tables
Delete Protection Disabled: 5 tables # Exposes potential problem due to accidental deletion.
```

### Distribution by Table Status

Use the `ddb-table-status-distribution` command to get DynamoDB table count based on their table status.

```sh
sana ddb-table-status-distribution

ACTIVE: 10500 table(s)
CREATING: 1 table(s)
UPDATING: 0 table(s)
DELETING: 0 table(s)
INACCESSIBLE_ENCRYPTION_CREDENTIALS: 0 table(s)
```
