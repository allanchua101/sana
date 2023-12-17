# `sana lambda-security-group-distribution`

is used to get the Lambda function distribution by security group(s).

```sh
$ sana lambda-security-group-distribution

> Lambda Distribution by Security Groups
> sg-xxxxxxx1: 25 Lambda functions (25.00%)
> sg-xxxxxxx2: 50 Lambda functions (50.00%)
> sg-xxxxxxx3: 10 Lambda functions (10.00%)
```

## Configuration Purpose

`VpcConfig.SecurityGroupIds` property is the list of security group IDs attached to each Lambda function. Attaching a security group to an AWS Lambda function is necessary when it needs to interact with resources inside a VPC.

## Use-cases

- Useful for performing security audits and compliance checks.
- Useful for risk assessments and identification for misconfigurations that generates potential vulnerabilities.
- Useful for incident response and forensics.

## Tips

- You can use this information to conduct thorough security audits. By understanding which Lambda functions are associated with which security groups, you can ensure that each function has the appropriate level of network access, adhering to the principle of least privilege.
- Analyzing the security group distribution allows you to optimize network access policies. You might find that some functions are assigned to overly permissive security groups, posing potential security risks, or to overly restrictive groups, hindering their functionality. Adjusting these can enhance both security and performance.
