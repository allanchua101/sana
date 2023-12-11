# `sana lambda-architecture-distribution`

is used to get the Lambda function distribution by underlying architecture.

```sh
$ sana lambda-architecture-distribution

> ARMv8: 500 functions.
> ARMv7: 220 functions.
> x86_64: 1405 functions.
```

## Tips:

- Useful for optimizing cost of systems. (ARM chips are cheaper than x86_64)
- Useful for measuring migration progress.
