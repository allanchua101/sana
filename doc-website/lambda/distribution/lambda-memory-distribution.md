# `sana lambda-memory-distribution`

is used to get the Lambda function distribution by memory size.

```sh
$ sana lambda-memory-distribution

# Uncovers outliers in the form of large functions
> 128: 10 functions.
> 256: 15 functions.
> 512: 24 functions.
> 10240: 1 functions.
```

## Tips

- Useful for awareness about the existence of outliers in terms of memory configuration
- Useful for identification of most common memory configurations used by an account.
