# sana (SErverless aNAlyzer)

[![npm version](https://badge.fury.io/js/@serverless-ninja%2Fsana.svg)](https://badge.fury.io/js/@serverless-ninja%2Fsana)

![Sample Function Distribution by Runtime](https://imgur.com/2ne53o0.gif, "Charted Function Distribution by Runtime")

A command-line interface for analyzing an AWS account's serverless resources. Designed by AWS serverless engineers, for AWS serverless engineers.

[Visit Documentation Website](https://allanchua101.github.io/sana/)

## Table of Contents

- [Why sana?](#why-sana)
- [Installation](#installation)
- [Full Service Analysis](#full-service-analysis)
- [Multi-command Prompts](#multi-command-prompts)
- [Global flags](#global-flags)
  - [Authentication modes](#authentication-modes)
  - [Scanning specific regions](#scanning-specific-regions)
  - [Distribution charts](#distribution-charts)
  - [Silent mode](#silent-mode)
  - [Disable progress bar](#disable-progress-bar)
- [Lambda Functions](#lambda-functions)
  - [Lambda Count](#total-count)
  - [Average](#average-ephemeral-storage-size)
    - [Ephemeral Storage Size](#average-ephemeral-storage-size)
    - [Memory Size](#average-memory-size)
    - [Package Size](#average-package-size)
    - [Timeout](#average-timeout)
  - [Distribution Analysis](#function-distribution-by-architecture)
    - [By Architecture](#function-distribution-by-architecture)
    - [By Runtime](#function-runtime-distribution)
    - [By Package Type](#function-package-type-distribution)
    - [By Region](#function-region-distribution)
    - [By Memory Size](#function-memory-size-distribution)
    - [By Ephemeral Storage](#function-ephemeral-storage-distribution)
    - [By Tracing Mode](#function-distribution-by-tracing-mode)
    - [By Lambda Layer Count](#function-distribution-by-layer-count)
    - [By DLQ](#function-distribution-by-dlq)
- [DynamoDB Tables](#dynamodb-tables)
  - [DynamoDB Table Count](#total-count-1)
  - [Distribution Analysis](#distribution-by-delete-protection)
    - [By Delete Protection](#distribution-by-delete-protection)
    - [By Region](#dynamodb-table-distribution-by-region)
    - [By Status](#distribution-by-table-status)

## Why sana?

Inspired heavily by Werner Vogels' frugal architect laws mentioned at the 2023 AWS re:Invent keynote, `sana` aims to provide tooling that fills in the gaps in the space of serverless observability. Here are some problem statements that `sana` tries to solve.

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

## Full Service Analysis

You can easily run full service analysis using the following commands:

```sh
sana lambda # Full Lambda Function Analysis

sana ddb # Full DynamoDB Table Analysis
```

## Multi-command Prompts

You can also run multiple analysis in a single prompt using comma-separated commands.

```sh
# Runs full analysis for DynamoDB and Lambda
sana ddb,lambda

# Runs both average memory and timeout commands
sana lambda-avg-memory,lambda-avg-timeout
```

## Global Flags

List of global flags that you can pass on all commands.

#### Authentication Modes

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

#### Scanning Specific Regions

You can use the `--region` or `-r` flag to scan specific region(s) of interest.

```sh
# Single region syntax
sana ddb-count --region ap-southeast-1

# Multi-region syntax
sana ddb-count --region ap-southeast-1,us-east-1

# shorthand
sana ddb-count -r ap-southeast-1,us-east-1
```

#### Distribution Charts

For distribution queries, you can pass the `-o chart` flag to get the results printed in horizontal charts

```sh
# Lambda runtime distribution chart
sana lambda-runtime-distribution -o chart

# DynamoDB chart for delete protection status
sana ddb-delete-protection-distribution -r us-east-1  -o chart
```

#### Silent Mode

You can pass the `--silent-mode` flag to disable all logs.

```sh
sana lambda-count --silent-mode
```

#### Disable Progress Bar

You can use the `--no-progress-bar` flag to disable the progress bar. This flag is often used in build servers.

```sh
sana lambda-count --no-progress-bar
```

## Lambda Functions

`sana lambda` is used to run full analysis of all lambda functions in the specified account.

```sh
$ sana lambda -o chart

Running Full Lambda Analysis
--------------------------------------------
Found 16 functions in the account.
--------------------------------------------
Avg Package Size: 535 Bytes
--------------------------------------------
Avg Function Timeout: 8.25 seconds
--------------------------------------------
Avg Memory Size: 184 MB
--------------------------------------------
Lambda Distribution by Runtime


 nodejs14.x (5/16 31.25%) **********

 nodejs16.x (4/16 25.00%) ********

 nodejs18.x (3/16 18.75%) ******

 nodejs20.x (4/16 25.00%) ********

--------------------------------------------
Lambda Distribution by Package Type


 Zip (16/16 100.00%) **********

--------------------------------------------
Lambda Distribution by Region


 ap-southeast-1 (4/16 25.00%) *****

      us-east-1 (8/16 50.00%) **********

      us-east-2 (4/16 25.00%) *****

--------------------------------------------
Lambda Distribution by Memory


 128 (15/16 93.75%) **********

  1024 (1/16 6.25%) *

--------------------------------------------
Lambda Distribution by Ephemeral Storage


 512 (16/16 100.00%) **********

--------------------------------------------
Lambda Distribution by Tracing Mode


 PassThrough (16/16 100.00%) **********

--------------------------------------------
Lambda Distribution by Architecture


        ARMv7 (0/16 0%)

        ARMv8 (0/16 0%)

 x86_64 (16/16 100.00%) **********

--------------------------------------------
Lambda Distribution by Number of Attached Lambda Layers


 0 Layers (12/16 75.00%) **********

  1 Layers (3/16 18.75%) ***

   3 Layers (1/16 6.25%) *

--------------------------------------------
Lambda Distribution by DLQ


 arn:aws:sqs:us-east-2::my-app-dlq (4/16 25.00%) ***

                           No DLQ (12/16 75.00%) **********

--------------------------------------------
Done!
```

#### Total Count

`lambda-count` is used to get the total number of Lambda functions.

```sh
sana lambda-count

Found a total of 4 Lambda functions
```

Tips:

- Useful when measuring the impact of deployments
- Could be used for both pre-deployment, post-deployment and rollback steps.

#### Average Ephemeral Storage Size

`lambda-avg-ephemeral-storage-size` is used to retrieve the average ephemeral storage size.

```sh
sana lambda-avg-ephemeral-storage-size

Avg Ephemeral Storage Size: 512 MB
```

#### Average Memory Size

`lambda-avg-memory` is used to retrieve the average memory size.

```sh
sana lambda-avg-memory

Avg Memory Size: 184 MB
```

Tips:

- Useful when measuring global optimization impact to global KPIs of an account/region.

#### Average Package Size

`lambda-avg-package-size` is used to retrieve the average Lambda function package size.

```sh
$ sana lambda-avg-package-size

Avg Package Size: 759.92 Bytes
```

Tips:

- Useful for package size and cold start optimization activities.
- Useful for measuring the impact of `esbuild` to global / regional package size metrics.

#### Average Timeout

`lambda-avg-timeout` is used to retrieve the average timeout.

```sh
sana lambda-avg-timeout

Avg Function Timeout: 8.25 seconds
```

#### Function Runtime Distribution

`lambda-runtime-distribution` is used to get the Lambda function runtime distribution.

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

#### Function Package Type Distribution

`lambda-package-type-distribution` is used to get the Lambda function distribution by packaging type.

```sh
sana lambda-package-type-distribution

Zip: 254 functions.
Image: 5 functions.
```

#### Function Region Distribution

`lambda-region-distribution` is used to get the Lambda function distribution by AWS region.

```sh
sana lambda-region-distribution

ap-southeast-1: 490 functions.
us-east-1: 1205 functions.
```

Notes:

- Useful for identification of regions in an account that contains Lambda functions.
- Useful when running cost analysis for sudden cost spikes.
- Useful for measuring concurrency / function ratio of a particular region.

#### Function Memory Size Distribution

`lambda-memory-distribution` is used to get the Lambda function distribution by memory size.

```sh
sana lambda-memory-distribution

128: 10 functions.
256: 15 functions.
512: 24 functions.
```

#### Function Ephemeral Storage Distribution

`lambda-ephemeral-storage-distribution` is used to get the Lambda function distribution by ephemeral storage size.

```sh
sana lambda-ephemeral-storage-distribution

512: 24 functions.
1024: 88 functions.
```

#### Function Distribution by Tracing Mode

`lambda-tracing-mode-distribution` is used to get the Lambda function distribution by X-ray tracing mode.

```sh
sana lambda-tracing-mode-distribution

PassThrough: 450 functions.
Active: 280 functions
```

#### Function Distribution by Architecture

`lambda-architecture-distribution` is used to get the Lambda function distribution by underlying architecture.

```sh
sana lambda-architecture-distribution

ARMv8: 500 functions.
ARMv7: 220 functions.
x86_64: 1405 functions.
```

Tips:

- This command is useful for optimizing cost of systems. (ARM chips are cheaper than x86_64)

#### Function Distribution by Layer Count

`lambda-attached-layer-count-distribution` is used to get the Lambda functions distribution based on the number of attached Lambda layers.

```sh
sana lambda-attached-layer-count-distribution -o chart

 0 Layers (12/16 75.00%) **********
  1 Layers (3/16 18.75%) ***
   3 Layers (1/16 6.25%) *
```

#### Function Distribution by DLQ

`lambda-dlq-distribution` is used to get the Lambda function distribution by DLQ arn.

```sh
sana lambda-dlq-distribution -o chart

Lambda Distribution by DLQ

 arn:aws:sqs:us-east-2::my-app-dlq (4/16 25.00%) ***

                           No DLQ (12/16 75.00%) **********
```

Tips:

- Useful for measuring amount of functions with no dead-letter queue.
- Useful for tracking progress of clean-up activities.
- Useful for installing CI-based quality gates.

Notes:

- Functions with no DLQ configured, are displayed under the `No DLQ` label.

## DynamoDB Tables

`sana ddb` is used to run full analysis of DynamoDB tables.

```sh
$ sana ddb -o chart

Running Full DynamoDB Analysis
--------------------------------------------
DynamoDB Table Count: 3
--------------------------------------------
DynamoDB Table Distribution by Region


 us-east-1 (3/3 100.00%) **********

--------------------------------------------
DynamoDB Table Distribution by Delete Protection


 Delete Protection Enabled (3/3 100.00%) **********

     Delete Protection Disabled (0/3 0%)

--------------------------------------------
DynamoDB Table Distribution by Status


                         ACTIVE (3/3 100.00%) **********

                            CREATING (0/3 0%)

                            UPDATING (0/3 0%)

                            DELETING (0/3 0%)

 INACCESSIBLE_ENCRYPTION_CREDENTIALS (0/3 0%)

--------------------------------------------
Done!
```

#### Total Count

Use the `ddb-count` command to get the account-wide DynamoDB table count.

```sh
sana ddb-count

Found a total of 490 dynamo db tables in the account.
```

#### DynamoDB Table Distribution by Region

Use the `ddb-region-distribution` command to get DynamoDB Table count per region

```sh
sana ddb-region-distribution

us-east-1: 250 tables.
us-west-1: 42 tables.
ap-southeast-1: 28 tables.
```

#### Distribution by Delete Protection

Use the `ddb-delete-protection-distribution` command to get DynamoDB table count based on their delete protection flag.

```sh
sana ddb-delete-protection-distribution

Delete Protection Enabled: 250 tables
Delete Protection Disabled: 5 tables # Exposes potential problem due to accidental deletion.
```

#### Distribution by Table Status

Use the `ddb-table-status-distribution` command to get DynamoDB table count based on their table status.

```sh
sana ddb-table-status-distribution

ACTIVE: 10500 table(s)
CREATING: 1 table(s)
UPDATING: 0 table(s)
DELETING: 0 table(s)
INACCESSIBLE_ENCRYPTION_CREDENTIALS: 0 table(s)
```
