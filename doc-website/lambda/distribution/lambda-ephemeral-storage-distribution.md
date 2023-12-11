# `sana lambda-ephemeral-storage-distribution`

is used to get the Lambda function distribution by ephemeral storage size.

```sh
$ sana lambda-ephemeral-storage-distribution

> 512:  200 functions.
> 1024:   5 functions.
> 10240:  1 functions.
```

## Tips

- Useful for measuring the amount of functions that work with temporary file systems.
- Useful for identification of misconfigured functions
- Useful for identification of a compromised account through the form of large numbers of functions that utilizes large ephemeral storage.
