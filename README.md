# sana (SErverless aNAlyzer)

A command-line interface for running analysis of an AWS account's serverless resources.

## Installation

```sh
$ npm i -g @serverless-ninja/sana
$ sana --version

@serverless-ninja/sana 1.1.x
```

## Lambda Functions

You can use `sana` to run basic analysis of Lambda function distribution in an AWS account.

#### Counting Account-wide Functions

You can use the `lambda-count` command to get the account-wide Lambda function count.

```sh
$ sana lambda-count --profile foo

Found a total of 4 Lambda functions
```

#### Account-wide Function Runtime Distribution

You can use the `lambda-runtime-distribution` command to get the account-wide Lambda function runtime distribution.

```sh
$ sana lambda-runtime-distribution --profile foo

nodejs14.x: 1024 functions.
nodejs16.x: 500 functions.
nodejs18.x: 200 functions.
nodejs20.x: 600 functions.
```

#### Account-wide Function Package Type Distribution

You can use the `lambda-package-type-distribution` command to get the account-wide Lambda function distribution by packaging type.

```sh
$ sana lambda-package-type-distribution --profile foo

Zip: 254 functions.
Image: 5 functions.
```

#### Account-wide Function by Region Distribution

You can use the `lambda-region-distribution` command to get the account-wide Lambda function distribution by AWS region.

```sh
$ sana lambda-region-distribution --profile foo

ap-southeast-1: 490 functions.
us-east-1: 1205 functions.
```

## DynamoDBs

You can use `sana` to run basic analysis of DynamoDB table count and distribution in an AWS account.

#### Account-wide DynamoDB Table Count

You can use the `ddb-count` command to get the account-wide DynamoDB table count.

```sh
$ sana ddb-count --profile foo

Found a total of 490 dynamo db tables in the account.
```

#### Account-wide DynamoDB Table Distribution by Region

You can use the `ddb-region-distribution` command to get DynamoDB Table count per region

```sh
$ sana ddb-region-distribution --profile foo

us-east-1: 250 tables.
us-west-1: 42 tables.
ap-southeast-1: 28 tables.
```
