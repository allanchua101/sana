# `sana lambda-architecture-distribution`

is used to get the Lambda function distribution by underlying architecture.

```sh
$ sana lambda-architecture-distribution

> arm64: 20 functions.
> x86_64: 220 functions.
```

## Use-cases

- Useful for optimizing cost of systems. (ARM chips are cheaper than x86_64)
- Useful for measuring migration progress.

## Tips

- ARM64 functions are generally more energy-efficient than their x86_64 counterparts, leading to lower energy costs.
- ARM64 is based on a RISC (Reduced Instruction Set Computing) architecture, which is typically simpler and more power-efficient than the CISC (Complex Instruction Set Computing) architecture used in x86_64.
- Regardless of the lambda runtime you have, you'll gain performance while saving on cost.
- If you are building latency constrained or memory-heavy workloads, stick with x86_64.

## Related Benchmarks and Materials

- [Comparing AWS Lambda Arm vs. x86 Performance, Cost, and Analysis](https://aws.amazon.com/blogs/apn/comparing-aws-lambda-arm-vs-x86-performance-cost-and-analysis-2/)
