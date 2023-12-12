# `sana lambda-dlq-distribution`

is used to get the Lambda function distribution by DLQ arn.

```sh
$ sana lambda-dlq-distribution -o chart

> Lambda Distribution by DLQ

>  arn:aws:sqs:us-east-2::my-app-dlq (4/16 25.00%) ***

>                            No DLQ (12/16 75.00%) **********
```

## Use-cases

- Useful for measuring amount of functions with no dead-letter queue.
- Useful for tracking progress of DLQ installation activities.
- Useful for installing CI-based quality gates

## Notes:

- Functions with no DLQ configured, are displayed under the `No DLQ` label.
