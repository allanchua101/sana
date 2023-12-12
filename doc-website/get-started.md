# Get Started

`sana` is a command-line interface used for analyzing an AWS account's serverless resources. The CLI is used to provide metrics such as distribution of AWS Lambda functions by runtime, DynamoDB tables with no delete protections, what is the average package size of your functions and many more.

To start using sana, you should install it using the command below.

```sh
$ npm i -g @serverless-ninja/sana
```

After the installation completes, you can run the command below to check if you have the latest version of sana

```sh
$ sana --version

> @serverless-ninja/sana 1.1.x
```

### Running your first scan

The command below instructs sana to run a full analysis of lambda functions in all the regions enabled in the AWS account associated with the default AWS CLI profile of your machine.

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
Found 16 functions in the account.
--------------------------------------------
Avg Package Size: 561.75 Bytes
--------------------------------------------
Avg Function Timeout: 8.25 seconds
--------------------------------------------
Avg Memory Size: 184 MB
--------------------------------------------
Avg Ephemeral Storage Size: 544 MB
--------------------------------------------
Lambda Distribution by Architecture
arm64: 0 functions.
x86_64: 16 functions.
--------------------------------------------
Lambda Distribution by Number of Attached Layers
0 Layers: 12 functions.
1 Layers: 3 functions.
3 Layers: 1 functions.
--------------------------------------------
Lambda Distribution by DLQ
arn:aws:sqs:us-east-2::my-app-dlq: 4 functions.
No DLQ: 12 functions.
--------------------------------------------
Lambda Distribution by Ephemeral Storage
512: 15 functions.
1024: 1 functions.
--------------------------------------------
Lambda Distribution by Log Format
JSON: 1 functions.
Text: 15 functions.
--------------------------------------------
Lambda Distribution by Memory
128: 15 functions.
1024: 1 functions.
--------------------------------------------
Lambda Distribution by Package Type
Zip: 16 functions.
--------------------------------------------
Lambda Distribution by Region
ap-southeast-1: 4 functions.
us-east-1: 8 functions.
us-east-2: 4 functions.
--------------------------------------------
Lambda Distribution by Runtime
nodejs14.x: 5 functions (31.25%)
nodejs16.x: 4 functions (25.00%)
nodejs18.x: 3 functions (18.75%)
nodejs20.x: 4 functions (25.00%)
--------------------------------------------
Lambda Distribution by Tracing Mode
PassThrough: 16 functions.
--------------------------------------------
Lambda Distribution by VPC
vpc-xxxxxx: 1 functions.
No VPC: 15 functions.
--------------------------------------------
Done!
```

### Next Steps

Learn more about the most common flags that could be used to modify the default behaviors of sana.
