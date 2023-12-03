# sana (SErverless aNAlyzer)

A command-line interface for running analysis of an AWS account's serverless resources.

## Installation

```sh
npm i -g @serverless-ninja/sana
```

## Lambda Functions

You can use `sana` to run basic analysis of Lambda function distribution in an AWS account.

#### Counting Account-wide Functions

You can use the `count-account-functions` command to get the account-wide Lambda function count.

```sh
$ sana count-account-functions --profile foo

Found a total of 4 Lambda functions
```

#### Account-wide Function Runtime Distribution

You can use the `get-function-runtime-distribution` command to get the account-wide Lambda function runtime distribution.

```sh
$ sana get-function-runtime-distribution --profile foo

nodejs14.x: 1024 functions.
nodejs16.x: 500 functions.
nodejs18.x: 200 functions.
nodejs20.x: 600 functions.
```

#### Account-wide Function Package Type Distribution

You can use the `get-function-distribution-by-package-type` command to get the account-wide Lambda function distribution by packaging type.

```sh
$ sana get-function-distribution-by-package-type --profile foo

Zip: 254 functions.
Image: 5 functions.
```

#### Account-wide Function by Region Distribution

You can use the `get-function-distribution-by-region` command to get the account-wide Lambda function distribution by AWS region.

```sh
$ sana get-function-distribution-by-region --profile foo

ap-southeast-1: 490 functions.
us-east-1: 1205 functions.
```
