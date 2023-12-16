# `sana lambda-app-log-lvl-distribution`

is used to get the Lambda function distribution by application-level logging configuration.

```sh
$ sana lambda-app-log-lvl-distribution

> Lambda Distribution by Application Log Level
> null: 322 functions.
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

`LoggingConfig.ApplicationLogLevel` property is used to filter the application logs for your function that Lambda sends to CloudWatch. Lambda only sends application logs at the selected level and lower. The default configuration for this property is `null`, which means that no log filtering is applied by default.

## Use-cases

- Useful for analyzing account-level or region-level compliance to logging policies.
- Useful for measuring application-level logging adoption rates across functions.

## Analyze Logging KPIs

Use the [`lambda-logging-kpis`](/lambda/concepts/logging-kpis) command to run all logging-related commands including.

## Tips

- Without log level filtering, you will capture all log messages, including potentially verbose debugging information. This can result in a significant increase in log volume.
- Storing and managing large volumes of logs can impact your AWS CloudWatch Logs costs, as you pay based on the volume of log data ingested and stored.
- Analyzing logs without log level filtering can make it more challenging to identify and focus on specific issues or errors within the logs, as you'll need to sift through a larger amount of data.
