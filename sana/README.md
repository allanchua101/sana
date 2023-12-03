# sana (SErverless ANalyzer)

A command-line interface for running analysis on your AWS account's serverless resources.

### Counting Account-wide Functions

You can use the `count-account-functions` command to get the account-wide Lambda function count.

```sh
$ sana count-account-functions -p my-aws-profile1

Found a total of 4 Lambda functions
```
