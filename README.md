# sana (SErverless aNAlyzer)

A command-line interface for running analysis of an AWS account's serverless resources.

## Table of Contents

- [Installation](#Installation)
- [Lambda Functions](#Lambda-Functions)
  - [Total Lambda Count](####Total-Lambda-Count)
  - [Function Runtime Distribution](####Function-Runtime-Distribution)
  - [Function Package Type Distribution](####Function-Package-Type-Distribution)
  - [Function Region Distribution](####Function-Region-Distribution)
  - [Function Memory Size Distribution](####Function-Memory-Size-Distribution)
  - [Function Ephemeral Storage Distribution](####Function-Ephemeral-Storage-Distribution)
- [DynamoDB Tables](#DynamoDB-Tables)
  - [Total DynamoDB Table Count](####Total DynamoDB Table Count)

## Installation

```sh
$ npm i -g @serverless-ninja/sana
$ sana --version

@serverless-ninja/sana 1.1.x
```

## Lambda Functions

Use `sana` to run basic analysis of Lambda function distribution in an AWS account.

#### Total Lambda Count

Use the `lambda-count` command to get the account-wide Lambda function count.

```sh
$ sana lambda-count --profile foo

Found a total of 4 Lambda functions
```

#### Function Runtime Distribution

Use the `lambda-runtime-distribution` command to get the account-wide Lambda function runtime distribution.

```sh
$ sana lambda-runtime-distribution --profile foo

nodejs14.x: 1024 functions.
nodejs16.x: 500 functions.
nodejs18.x: 200 functions.
nodejs20.x: 600 functions.
```

#### Function Package Type Distribution

Use the `lambda-package-type-distribution` command to get the account-wide Lambda function distribution by packaging type.

```sh
$ sana lambda-package-type-distribution --profile foo

Zip: 254 functions.
Image: 5 functions.
```

#### Function Region Distribution

Use the `lambda-region-distribution` command to get the account-wide Lambda function distribution by AWS region.

```sh
$ sana lambda-region-distribution --profile foo

ap-southeast-1: 490 functions.
us-east-1: 1205 functions.
```

#### Function Memory Size Distribution

Use the `lambda-memory-distribution` command to get the account-wide Lambda function distribution by memory size configuration.

```sh
$ sana lambda-memory-distribution --profile foo

128: 10 functions.
256: 15 functions.
512: 24 functions.
```

#### Function Ephemeral Storage Distribution

Use the `lambda-ephemeral-storage-distribution` command to get the account-wide Lambda function distribution by ephemeral storage size.

```sh
$ sana lambda-ephemeral-storage-distribution --profile foo

512: 24 functions.
1024: 88 functions.
```

## DynamoDB Tables

Use `sana` to run basic analysis of DynamoDB table count and distribution in an AWS account.

#### Total DynamoDB Table Count

Use the `ddb-count` command to get the account-wide DynamoDB table count.

```sh
$ sana ddb-count --profile foo

Found a total of 490 dynamo db tables in the account.
```

#### DynamoDB Table Distribution by Region

Use the `ddb-region-distribution` command to get DynamoDB Table count per region

```sh
$ sana ddb-region-distribution --profile foo

us-east-1: 250 tables.
us-west-1: 42 tables.
ap-southeast-1: 28 tables.
```
