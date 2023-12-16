# `sana lambda-sys-log-lvl-distribution`

is used to get the Lambda function distribution by system-level logging configuration.

```sh
$ sana lambda-sys-log-lvl-distribution

> Lambda Distribution by System Log Level
> null: 322 functions
> DEBUG: 24 functions
> INFO: 32 functions
> WARN: 44 functions
> --------------------------------------------
> Done!
```

## Configuration Purpose

`LoggingConfig.SystemLogLevel` property to filter the system logs for your function that Lambda sends to CloudWatch. Lambda only sends system logs at the selected level and lower. The default configuration for this property is `null`, which means that no log filtering is applied by default.

## Use-cases

- Useful for analyzing account-level or region-level compliance to logging policies.
- Useful for measuring system-level logging adoption rates across functions.

## Analyze Logging KPIs

Use the [`lambda-logging-kpis`](/lambda/aliases/logging-kpis) to run all logging-related commands.

## Tips

- Without log level filtering, you will capture all log messages, including potentially verbose debugging information. This can result in a significant increase in log volume.
- Storing and managing large volumes of logs can impact your AWS CloudWatch Logs costs, as you pay based on the volume of log data ingested and stored.
- Analyzing logs without log level filtering can make it more challenging to identify and focus on specific issues or errors within the logs, as you'll need to sift through a larger amount of data.
