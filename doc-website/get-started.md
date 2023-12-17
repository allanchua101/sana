# Get Started

`sana` is a command-line interface used for analyzing an AWS account's serverless resources. The CLI is used to provide metrics such as distribution of AWS Lambda functions by runtime, DynamoDB tables with no delete protections, what is the average package size of your functions and many more.

In order to start using `sana`, you need to install it using the npm by running the command below:

```sh
$ npm i -g @serverless-ninja/sana
```

After the installation successfully completes, you can use the command below to check if you have the latest version of sana

```sh
$ sana --version

> @serverless-ninja/sana 1.1.x
```

### Running your first scan

The command below instructs sana to run a full analysis of Lambda functions in an AWS account. By default, `sana` scans all the regions enabled in an AWS account to produce reports. The sample below uses the default AWS CLI profile or the IAM role attached to the automation server.

```sh
$ sana lambda

  ___  __ _ _ __   __ _
 / __|/ _` | '_ \ / _` |
 \__ \ (_| | | | | (_| |
 |___/\__,_|_| |_|\__,_|

Running the following command(s) using the default profile ☕...
- lambda
Scanning Lambda Functions from account regions |████████████████████████████████████████| 100% | ETA: 0s | 17/17
Running Full Lambda Analysis
--------------------------------------------
Found 18 functions in the account.
--------------------------------------------
Avg Package Size: 695 Bytes
--------------------------------------------
Max Package Size: 1.53 KB
--------------------------------------------
Avg Function Timeout: 7.67 seconds
--------------------------------------------
Avg Memory Size: 177.78 MB
--------------------------------------------
Avg Ephemeral Storage Size: 540.44 MB
--------------------------------------------
Lambda Distribution by Application Log Level
DEBUG: 1 Lambda functions (5.56%)
ERROR: 1 Lambda functions (5.56%)
FATAL: 1 Lambda functions (5.56%)
INFO: 1 Lambda functions (5.56%)
TRACE: 1 Lambda functions (5.56%)
WARN: 1 Lambda functions (5.56%)
null: 12 Lambda functions (66.67%)
--------------------------------------------
Lambda Distribution by Architecture
arm64: 0 Lambda functions (0%)
x86_64: 18 Lambda functions (100.00%)
--------------------------------------------
Lambda Distribution by Number of Attached Lambda Layers
0 Layers: 12 Lambda functions (66.67%)
1 Layers: 5 Lambda functions (27.78%)
3 Layers: 1 Lambda functions (5.56%)
--------------------------------------------
Lambda Distribution by DLQ
arn:aws:sqs:us-east-2::my-app-dlq: 6 Lambda functions (33.33%)
No DLQ: 12 Lambda functions (66.67%)
--------------------------------------------
Lambda Distribution by Ephemeral Storage
512 (512 MB): 17 Lambda functions (94.44%)
1024 (1 GB): 1 Lambda functions (5.56%)
--------------------------------------------
Lambda Distribution by Log Format
JSON: 6 Lambda functions (33.33%)
Text: 12 Lambda functions (66.67%)
--------------------------------------------
Lambda Distribution by Memory
128 MB: 17 Lambda functions (94.44%)
1 GB: 1 Lambda functions (5.56%)
--------------------------------------------
Lambda Distribution by Package Type
Zip: 18 Lambda functions (100.00%)
--------------------------------------------
Lambda Distribution by Region
ap-southeast-1: 4 Lambda functions (22.22%)
us-east-1: 8 Lambda functions (44.44%)
us-east-2: 6 Lambda functions (33.33%)
--------------------------------------------
Lambda Distribution by Runtime
nodejs14.x: 5 Lambda functions (27.78%)
nodejs16.x: 4 Lambda functions (22.22%)
nodejs18.x: 3 Lambda functions (16.67%)
nodejs20.x: 6 Lambda functions (33.33%)
--------------------------------------------
Lambda Distribution by Security Groups
sg-xxxxxxv3: 2 Lambda functions (11.11%)
--------------------------------------------
Lambda Distribution by SnapStart
Off: 18 Lambda functions (100.00%)
On: 0 Lambda functions (0%)
--------------------------------------------
Lambda Distribution by System Log Level
DEBUG: 1 Lambda functions (5.56%)
INFO: 4 Lambda functions (22.22%)
WARN: 1 Lambda functions (5.56%)
null: 12 Lambda functions (66.67%)
--------------------------------------------
Lambda Distribution by Tracing Mode
PassThrough: 18 Lambda functions (100.00%)
--------------------------------------------
Lambda Distribution by VPC
vpc-xxxxx32: 2 Lambda functions (11.11%)
No VPC: 16 Lambda functions (88.89%)
--------------------------------------------
Done!
```

### Next Steps

Learn more about the most common flags that could be used to modify the default behaviors of sana.
