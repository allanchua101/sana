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
