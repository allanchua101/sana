# `sana lambda-avg-ephemeral-storage-size`

is used to retrieve the average ephemeral storage size.

```sh
$ sana lambda-avg-ephemeral-storage-size

> Avg Ephemeral Storage Size: 512 MB
```

## More Examples

```sh
# Scan resources from us-east-1 and us-east-2
# using the default AWS profile
$ sana lambda-avg-ephemeral-storage-size -r us-east-1,us-west-1

# San resources from ap-southeast-1
# using the profile named foo
$ sana lambda-avg-ephemeral-storage-size -r ap-southeast-1 -p foo
```
