# `sana lambda-runtime-distribution`

is used to get the Lambda function runtime distribution.

```sh
$ sana lambda-runtime-distribution

> nodejs14.x: 1000 functions (50.00%)
> nodejs16.x: 250 functions (12.50%)
> nodejs18.x: 500 functions (25.00%)
> nodejs20.x: 250 functions (12.50%)
```

## Command Use-cases

- Useful for measuring the progress of your runtime migration initiatives.
- Useful for identification of functions that are soon to be deprecated.
