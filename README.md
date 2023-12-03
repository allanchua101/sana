# sana (SErverless ANalyzer)

A command-line interface for running analysis on your AWS account's serverless resources.

### Counting Account-wide Functions

You can use the `count-account-functions` command to get the account-wide Lambda function count.

```sh
$ sana count-account-functions -p my-aws-profile1

Found a total of 4 Lambda functions
```

### Analyzing Account-wide Function Runtime Distribution

You can use the `get-function-runtime-distribution` command to get the account-wide Lambda function runtime distribution.

```sh
$ sana get-function-runtime-distribution -p my-aws-profile1

nodejs14.x: 1024 functions.
nodejs16.x: 500 functions.
nodejs18.x: 200 functions.
nodejs20.x: 600 functions.
```
