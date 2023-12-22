# `sana ddb-stream-status-distribution`

is used to get DynamoDB table distribution based on their stream status.

```sh
$ sana ddb-stream-status-distribution

> DynamoDB Table Distribution by DynamoDB Stream Status
> Enabled: 2 DynamoDB table (28.57%)
> Disabled: 5 DynamoDB table (71.43%)
> --------------------------------------------
> Done!
```

## Configuration Purpose

The `StreamSpecification.StreamEnabled` property is used to indicate whether DynamoDB Streams is enabled (true) or disabled (false) on the table.

## Command Use-cases

- Useful for optimizing resource allocation and managing cost of integrations
- Useful for data engineers installing streams used for delivering data to their own microservices and generate reports
- Useful for operations engineers who need to implement cross-region backups using DynamoDB streams.
- Useful for newly installed engineering managers who needs to understand the landscape of infrastructure he/she will be taking over.

## Tips

- Enabled streams, especially if they're in high numbers, can impact the performance of your DynamoDB tables, so keeping an eye on this distribution helps in maintaining optimal performance
- Knowing the distribution of streaming usage provide insights into how your team is utilizing features or lack of awareness.
- Finding a small number of enabled DynamoDB streams (Outliers) can be useful when identifying cause of data-leakage. Understanding this distribution is key for maintaining security.
