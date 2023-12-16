# `sana lambda-log-format-distribution`

is used to get the Lambda function distribution by log format (Text or JSON)

```sh
$ sana lambda-log-format-distribution

> Lambda Distribution by Log Format
> JSON: 329 functions.
> Text: 455 functions.
> --------------------------------------------
> Done!
```

## Configuration Purpose

`LoggingConfig.LogFormat` property indicates the format in which Lambda sends your function's application and system logs to CloudWatch.

## Use-cases

- Useful for measuring progress of logging format change rollout / migrations.
- Useful for quantifying the amount of functions that uses Text vs JSON log format.

## Analyze Logging KPIs

Use the [`lambda-logging-kpis`](/lambda/concepts/logging-kpis) command to run all logging-related commands.

## Tips

- Structured logging (like JSON format) can make it easier and more cost-effective to query and analyze logs.
- Lambda currently supports the option to output JSON structured application logs for the following runtimes:
  - `java8.al2`
  - `java11`
  - `java17`
  - `java21`
  - `nodejs16.x`
  - `nodejs18.x`
  - `nodejs20.x`
  - `python3.7`
  - `python3.8`
  - `python3.9`
  - `python3.10`
  - `python3.11`
  - `python3.12`

## Related Articles

- [Using Amazon CloudWatch logs with AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-cloudwatchlogs.html)
