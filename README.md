# sana (Serverless ANAlyzer)

[![npm version](https://badge.fury.io/js/@serverless-ninja%2Fsana.svg)](https://badge.fury.io/js/@serverless-ninja%2Fsana)

![Sample Function Distribution by Runtime](https://imgur.com/2ne53o0.gif, "Charted Function Distribution by Runtime")

A command-line interface for analyzing an AWS account's serverless resources. Made by frugal engineers for AWS serverless engineers.

[Visit Documentation Website](https://allanchua101.github.io/sana/)

## Table of Contents

- [Why sana?](#why-sana)
- [Installation](#installation)
- [Full Service Analysis](#full-service-analysis)
- [Multi-command Prompts](#multi-command-prompts)
- [Global flags](#global-flags)
  - [Authentication modes](#authentication-modes)
  - [Scanning specific regions](#scanning-specific-regions)
  - [Distribution charts](#distribution-charts)
  - [Silent mode](#silent-mode)
  - [Disable progress bar](#disable-progress-bar)

## Why sana?

Inspired heavily by Werner Vogels' frugal architect laws mentioned at the 2023 AWS re:Invent keynote, `sana` aims to provide tooling that fills in the gaps in the space of serverless observability. Here are some problem statements that `sana` tries to solve.

- Detects how many functions in an account need to be migrated to the latest possible runtime.
- Identifies how many DynamoDB tables were not configured with delete protection.
- Eases reporting capabilities in CI/CD pipelines to enhance observability of build impact on your AWS accounts.
- Provides the ability to observe the total health of an AWS account without leaving your VS Code/terminal.
- And much more. StepFunctions, SQS, Event Bridge, S3, and CF commands are under development!"

## Installation

```sh
npm i -g @serverless-ninja/sana
sana --version

@serverless-ninja/sana 1.1.x
```

## Upgrading Existing Installation

```sh
npm uninstall -g @serverless-ninja/sana
npm i -g @serverless-ninja/sana
sana --version

@serverless-ninja/sana 1.1.x
```

## Full Service Analysis

You can easily run full service analysis using the following commands:

```sh
sana lambda # Full Lambda Function Analysis

sana ddb # Full DynamoDB Table Analysis
```

## Multi-command Prompts

You can also run multiple analysis in a single prompt using comma-separated commands.

```sh
# Runs full analysis for DynamoDB and Lambda
sana ddb,lambda

# Runs both average memory and timeout commands
sana lambda-avg-memory,lambda-avg-timeout
```

## Global Flags

List of global flags that you can pass on all commands.

#### Authentication Modes

`sana` can authenticate against your AWS account by either using the default AWS CLI profile or by using named profiles. Take the example below

```sh
# Use default AWS profile in you dev machine.
sana lambda-runtime-distribution

# The same syntax works for CI/CD agents
# that relies on IAM roles
sana lambda-runtime-distribution

# If you need to target multiple accounts,
# You can use named profiles
sana lambda-runtime-distribution --profile foo

# Environment variable support is under development
```

#### Scanning Specific Regions

You can use the `--region` or `-r` flag to scan specific region(s) of interest.

```sh
# Single region syntax
sana ddb-count --region ap-southeast-1

# Multi-region syntax
sana ddb-count --region ap-southeast-1,us-east-1

# shorthand
sana ddb-count -r ap-southeast-1,us-east-1
```

#### Distribution Charts

For distribution queries, you can pass the `-o chart` flag to get the results printed in horizontal charts

```sh
# Lambda runtime distribution chart
sana lambda-runtime-distribution -o chart

# DynamoDB chart for delete protection status
sana ddb-delete-protection-distribution -r us-east-1  -o chart
```

#### Silent Mode

You can pass the `--silent-mode` flag to disable all logs.

```sh
sana lambda-count --silent-mode
```

#### Disable Progress Bar

You can use the `--no-progress-bar` flag to disable the progress bar. This flag is often used in build servers.

```sh
sana lambda-count --no-progress-bar
```
