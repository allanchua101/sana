# sana (SErverless aNAlyzer)

A command-line interface for running analysis of an AWS account's serverless resources. For AWS serverless engineers by AWS serverless engineers.

## Table of Contents

- [Installation](#installation)
- [Why sana?](#why-sana)
- [Authentication Modes](#authentication-modes)
- [Lambda Functions](#lambda-functions)
  - [Total Lambda Count](#total-lambda-count)
  - [Runtime Distribution](#function-runtime-distribution)
  - [Package Type Distribution](#function-package-type-distribution)
  - [Region Distribution](#function-region-distribution)
  - [Memory Size Distribution](#function-memory-size-distribution)
  - [Ephemeral Storage Distribution](#function-ephemeral-storage-distribution)
- [DynamoDB Tables](#dynamodb-tables)
  - [Total DynamoDB Table Count](#total-dynamodb-table-count)
  - [Distribution by Region](#dynamodb-table-distribution-by-region)

## Why sana?

Heavily inspired by Werner Vogels' frugal architect laws mentioned at 2023 AWS re:Invent keynote, `sana` aims to provide tooling that fills in the gaps in the space of serverless observation capabilities. `sana` tries to solve the following problem statements.

- Understand how many functions in an account needs to be migrated to latest runtimes
- Ease reporting capabilities in CI/CD pipelines to enhance impact of builds
- Provide the ability to observe the total health of an AWS account without leaving your VS code / terminal.

## Authentication Modes

`sana` can authenticate against your AWS account by either using the default AWS CLI profile or by using named profiles. Take the example below

```sh
# To use the default named profile
# The same approach works for CI/CD agents that uses IAM roles instead
sana lambda-runtime-distribution

# If you need to target multiple accounts from the same server
# use the following approach
sana lambda-runtime-distribution --profile foo
```

## Installation

```sh
$ npm i -g @serverless-ninja/sana
$ sana --version

@serverless-ninja/sana 1.1.x
```

## Lambda Functions

Use `sana` to run basic analysis of Lambda function distribution in an AWS account.

### Total Lambda Count

Use the `lambda-count` command to get the account-wide Lambda function count.

```sh
$ sana lambda-count

Found a total of 4 Lambda functions
```

### Function Runtime Distribution

Use the `lambda-runtime-distribution` command to get the account-wide Lambda function runtime distribution.

```sh
$ sana lambda-runtime-distribution

nodejs14.x: 1024 functions.
nodejs16.x: 500 functions.
nodejs18.x: 200 functions.
nodejs20.x: 600 functions.
```

### Function Package Type Distribution

Use the `lambda-package-type-distribution` command to get the account-wide Lambda function distribution by packaging type.

```sh
$ sana lambda-package-type-distribution

Zip: 254 functions.
Image: 5 functions.
```

### Function Region Distribution

Use the `lambda-region-distribution` command to get the account-wide Lambda function distribution by AWS region.

```sh
$ sana lambda-region-distribution

ap-southeast-1: 490 functions.
us-east-1: 1205 functions.
```

### Function Memory Size Distribution

Use the `lambda-memory-distribution` command to get the account-wide Lambda function distribution by memory size configuration.

```sh
$ sana lambda-memory-distribution

128: 10 functions.
256: 15 functions.
512: 24 functions.
```

### Function Ephemeral Storage Distribution

Use the `lambda-ephemeral-storage-distribution` command to get the account-wide Lambda function distribution by ephemeral storage size.

```sh
$ sana lambda-ephemeral-storage-distribution

512: 24 functions.
1024: 88 functions.
```

## DynamoDB Tables

Use `sana` to run basic analysis of DynamoDB table count and distribution in an AWS account.

### Total DynamoDB Table Count

Use the `ddb-count` command to get the account-wide DynamoDB table count.

```sh
$ sana ddb-count

Found a total of 490 dynamo db tables in the account.
```

### DynamoDB Table Distribution by Region

Use the `ddb-region-distribution` command to get DynamoDB Table count per region

```sh
$ sana ddb-region-distribution

us-east-1: 250 tables.
us-west-1: 42 tables.
ap-southeast-1: 28 tables.
```
