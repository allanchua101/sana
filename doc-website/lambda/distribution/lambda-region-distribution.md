# `sana lambda-region-distribution`

is used to get the Lambda function distribution by AWS region.

```sh
$ sana lambda-region-distribution

> ap-southeast-1: 490 functions.
> us-east-1: 1205 functions.
```

## Use-cases

- Useful for identification of main and fallback regions used by an account.
- Useful for identification of regions in an account that contains Lambda functions.
- Useful for measuring concurrency / function ratio of regions
