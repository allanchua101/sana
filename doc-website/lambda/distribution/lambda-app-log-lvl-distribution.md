# `sana lambda-app-log-lvl-distribution`

is used to get the Lambda function distribution by application-level logging configuration.

```sh
$ sana lambda-app-log-lvl-distribution

> Lambda Distribution by Application Log Level
> ALL: 322 functions.
> DEBUG: 3 functions.
> ERROR: 5 functions.
> FATAL: 16 functions.
> INFO: 9 functions.
> TRACE: 5 functions.
> WARN: 21 functions.
> --------------------------------------------
> Done!
```

## Configuration Purpose

`LoggingConfig.ApplicationLogLevel` property is used to filter the application logs for your function that Lambda sends to CloudWatch. Lambda only sends application logs at the selected level and lower.

## Use-cases

- Useful for analyzing account-level or region-level compliance to logging policies.
- Useful for measuring application-level logging adoption rates across functions.
