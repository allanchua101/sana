# Global Flags

This page describes the default flags that could be used to alter sana's behavior.

## `--profile`, `-p`

By default, `sana` utilizes a machine's default `aws-cli` profile. To use a [named profile](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html#cli-configure-files-using-profiles) instead of the default one, you can use the `--profile` flag to specify the named profile you'd like to use.

```sh
$ sana lambda --profile foo
```

## `--region`, `r`

By default, `sana` scans all the regions enabled in an AWS account to provide an account-wide analysis report. To target particular region/regions of interest, you can pass in the `--region` flag to reduce the time required by sana to produce an analysis.

```sh
# Runs a single-region scan against Singapore region
$ sana lambda --region ap-southeast-1

# Runs multi-region scan
$ sana lambda --region ap-southeast-1,us-east-1,us-east-2

# You can also use the -r flag
# as a shorthand syntax for this
$ sana lambda -r ap-southeast-1,us-east-1,us-east-2
```

## `--output chart`

For distribution queries, you can pass the `--output chart` flag to get the results printed in horizontal charts

```sh
# long form syntax
$ sana lambda-runtime-distribution --output chart

# short-hand syntax
$ sana lambda-runtime-distribution -o chart
```

## `--no-progress-bar`

You can use the `--no-progress-bar` flag to disable the progress bar. This flag is often used in build servers.

```sh
$ sana lambda-count --no-progress-bar
```

## `--silent-mode`

You can use the `--silent-mode` mode flag to prevent non-critical logs from getting displayed

```sh
$ sana lambda-avg-package-size --silent-mode
```
