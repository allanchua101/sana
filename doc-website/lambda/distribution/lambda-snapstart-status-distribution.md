# `sana lambda-snapstart-status-distribution`

is used to get the Lambda function distribution by SnapStart Optimization Status

```sh
$ sana lambda-snapstart-status-distribution

> Lambda Distribution by SnapStart
> Off: 18 functions.
> On: 0 functions.
> --------------------------------------------
> Done!
```

## Configuration Purpose

`SnapStart.OptimizationStatus` property indicates whether SnapStart is activated for the specified function version.

## Use-cases

- Useful for analyzing account-level or region-level SnapStart adoption rates
- Useful for measuring optimization of latency-sensitive workloads built on top of Java-functions

## Tips

- This feature is extremely helpful for lowering cold-start times for Java-based functions.
- Lambda SnapStart for Java can improve startup performance for latency-sensitive applications by up to 10x at no extra cost, typically with no changes to your function code
- AWS Lambda SnapStart is a feature designed to significantly improve the startup performance of Java functions. It achieves this by creating a snapshot of the initialized execution environment of a Lambda function, which can then be quickly restored for new invocations.

## Related Articles

- [Improving Startup Performance with Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html)
