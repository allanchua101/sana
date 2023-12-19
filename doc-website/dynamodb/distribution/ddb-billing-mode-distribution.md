# `sana ddb-billing-mode-distribution`

is used to get DynamoDB table distribution based on their billing mode

```sh
$ sana ddb-billing-mode-distribution

> DynamoDB Table Distribution by Billing Mode
> PAY_PER_REQUEST: 40 DynamoDB table (40.00%)
> PROVISIONED: 60 DynamoDB table (60.00%)
```

## Configuration Purpose

`BillingModeSummary.BillingMode` property is used to control how you are charged for read and write throughput and how you manage capacity for DynamoDBs.

## Command Use-cases

- Misconfiguration and outlier detection
- Quantification of DynamoDB tables that could throttle during traffic spikes
- Quantification of DynamoDB tables that could easily be backed-up.
- Quantification of DynamoDB tables that need promotion from provisioned to on-demand mode (`PAY_PER_REQUEST`) before backup could be done.

## Tips

- The cost of DynamoDB tables configured with `PROVISIONED` billing mode is lower.
- DynamoDB tables configured with `PROVISIONED` billing mode may throw throttles during traffic spikes.
- `PROVISIONED` billing mode is better suited for applications with predictable and proven traffic size.
- Its better to configure DynamoDB tables with `PAY_PER_REQUEST` option when building new applications to prevent throttles.

## Related Articles

- [DynamoDB read/write capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html)
