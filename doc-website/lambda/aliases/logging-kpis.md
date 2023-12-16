# `sana lambda-logging-kpis`

Use this command to get a quick overview of logging-related metrics for Lambda functions in the target account/region.

```sh
$ sana lambda-logging-kpis

  ___  __ _ _ __   __ _
 / __|/ _` | '_ \ / _` |
 \__ \ (_| | | | | (_| |
 |___/\__,_|_| |_|\__,_|


Running the following command(s) using the default profile ☕...
- lambda-logging-kpis
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

## Combined Commands

This alias combines the following commands:

- [lambda-app-log-lvl-distribution](/lambda/distribution/lambda-app-log-lvl-distribution)
- [lambda-log-format-distribution](/lambda/distribution/lambda-log-format-distribution)
- [lambda-sys-log-lvl-distribution](/lambda/distribution/lambda-sys-log-lvl-distribution)
