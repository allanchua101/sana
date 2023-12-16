# `sana lambda-log-format-distribution`

is used to get the Lambda function distribution by log format (Text or JSON)

```sh
$ sana lambda-log-format-distribution

> Lambda Distribution by Log Format
> JSON: 0 functions.
> Text: 4 functions.
> --------------------------------------------
> Done!
```

## Configuration Purpose

`LoggingConfig.LogFormat` property indicates the format in which Lambda sends your function's application and system logs to CloudWatch.

## Use-cases

- Useful for measuring progress of logging format change rollout / migrations.
- Useful for quantifying the amount of functions that uses Text vs JSON log format.

## Analyzing Overall Log KPIs

Use the following command to get a quick overview of Logging-related metrics in your target account/region:

```sh
sana lambda-log-format-distribution,lambda-app-log-lvl-distribution,lambda-sys-log-lvl-distribution

  ___  __ _ _ __   __ _
 / __|/ _` | '_ \ / _` |
 \__ \ (_| | | | | (_| |
 |___/\__,_|_| |_|\__,_|


Running the following command(s) using the default profile ☕...
- lambda-log-format-distribution
- lambda-app-log-lvl-distribution
- lambda-sys-log-lvl-distribution
Scanning Lambda Functions from account regions |████████████████████████████████████████| 100% | ETA: 0s | 17/17
Lambda Distribution by Log Format
JSON: 6 functions.
Text: 12 functions.
--------------------------------------------
Lambda Distribution by Application Log Level
DEBUG: 1 functions.
ERROR: 1 functions.
FATAL: 1 functions.
INFO: 1 functions.
TRACE: 1 functions.
WARN: 1 functions.
null: 12 functions.
--------------------------------------------
Lambda Distribution by System Log Level
DEBUG: 1 functions.
INFO: 4 functions.
WARN: 1 functions.
null: 12 functions.
--------------------------------------------
Done!
```

## Tips

- Structured logging (like JSON format) can make it easier and more cost-effective to query and analyze logs.
- Use AWS Cost Explorer and CloudWatch Logs Insights to analyze your logging patterns and identify opportunities for cost optimization
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
