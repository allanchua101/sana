# sana (SErverless ANalyzer)

A command-line interface for running analysis on your AWS account's serverless resources.

## Installation

```sh
npm i -g @serverless-ninja/sana
```

### Counting Account-wide Functions

You can use the `count-account-functions` command to get the account-wide Lambda function count.

```sh
$ sana count-account-functions --profile foo

Found a total of 4 Lambda functions
```

### Account-wide Function Runtime Distribution

You can use the `get-function-runtime-distribution` command to get the account-wide Lambda function runtime distribution.

```sh
$ sana get-function-runtime-distribution --profile foo

nodejs14.x: 1024 functions.
nodejs16.x: 500 functions.
nodejs18.x: 200 functions.
nodejs20.x: 600 functions.
```

### Account-wide Function Package Type Distribution

You can use the `get-function-distribution-by-package-type` command to get the account-wide Lambda function distribution by packaging type.

```sh
$ sana get-function-distribution-by-package-type --profile foo

Zip: 254 functions.
```
