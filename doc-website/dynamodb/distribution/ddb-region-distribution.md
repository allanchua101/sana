# `sana ddb-region-distribution`

is used to analyze the DynamoDB Table count per region.

```sh
$ sana ddb-region-distribution

> us-east-1: 21 tables.
> us-west-1: 4 tables.
> ap-southeast-1: 3 tables.
```

## Use-cases

- Useful for searching the main region used by engineers in an account.
- Useful for searching orphaned / misconfigured DynamoDB tables residing in seldomly used regions of an account.
