# `sana lambda-logging-kpis`

Use this command to get a quick overview of logging-related metrics in your target account/region:

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
