# `sana lambda-vpc-kpis`

Use this command to get a quick overview of vpc-related metrics for Lambda functions in the target account/region.

```sh
$ sana lambda-vpc-kpis

>   ___  __ _ _ __   __ _
>  / __|/ _` | '_ \ / _` |
>  \__ \ (_| | | | | (_| |
>  |___/\__,_|_| |_|\__,_|


> Running the following command(s) using the default profile ☕...
> - lambda-vpc-kpis
> Scanning Lambda Functions from account regions |████████████████████████████████████████| 100% | ETA: 0s | 17/17
> Analyzing VPC-related KPIs
> --------------------------------------------
> Lambda Distribution by Security Groups
> sg-4edf8025: 2 Lambda functions (11.11%)
> --------------------------------------------
> Lambda Distribution by VPC
> vpc-03e07f6b: 2 Lambda functions (11.11%)
> No VPC: 16 Lambda functions (88.89%)
> --------------------------------------------
> Done!
```

## Combined Commands

This alias combines the following commands:

- [lambda-security-group-distribution](/lambda/distribution/lambda-security-group-distribution)
- [lambda-vpc-distribution](/lambda/distribution/lambda-vpc-distribution)
