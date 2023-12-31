# Global Flags

This page describes the global flags used to alter sana's behavior.

## `--profile`, `-p`

By default, `sana` utilizes a machine's default `aws-cli` profile. To use a [named profile](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html#cli-configure-files-using-profiles), you can specify the `--profile` or `-p` flag.

```sh
# Uses default aws-cli profile
$ sana lambda

# Regular syntax for using
# named profiles
$ sana lambda --profile foo

# Short-hand syntax for
# named profiles
$ sana lambda -p foo
```

## `--region`, `-r`

By default, `sana` scans all the regions enabled in an AWS account to provide an account-wide analysis report. If you wish to target regions of interest, you can pass the `--region` or `-r` flag to reduce the time required by sana to produce an analysis report.

```sh
# Runs a single-region scan against Singapore region
$ sana lambda --region ap-southeast-1

# Runs multi-region scan
$ sana lambda --region ap-southeast-1,us-east-1,us-east-2

# You can also use the -r flag
# as a shorthand syntax for this
$ sana lambda -r ap-southeast-1,us-east-1,us-east-2
```

## `--output`, `-o`

Controls the output mode of commands.

```sh
# long form syntax
$ sana lambda-runtime-distribution --output chart

# short-hand syntax
$ sana lambda-runtime-distribution -o chart

# By not passing a value, raw text is printed in the console
$ sana lambda-vpc-distribution

# The previous command is equal to this syntax
$ sana lambda-vpc-distribution -o text

# By passing cli-table, you get a well formatted table in the terminal
$ sana lambda-region-distribution -o cli-table
```

Valid Inputs:

- `text` (default): prints out results in raw text
- `chart`: prints out a cli-based horizontal chart for distribution commands
- `cli-table`: prints out a cli-based table for distribution commands.

## `--no-progress-bar`

You can use the `--no-progress-bar` flag to disable the progress bar.

```sh
$ sana lambda-count --no-progress-bar
```

> TIP: This flag is often used in automation servers.

## `--silent-mode`

You can use the `--silent-mode` mode flag to prevent non-critical logs from getting displayed

```sh
$ sana lambda-avg-package-size --silent-mode
```
