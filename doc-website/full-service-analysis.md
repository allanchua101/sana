# Full Service Analysis

You can use the service-level commands to run all supported analysis for particular a service.

## Lambda Functions

`sana lambda` is used to run all analysis supported by sana.

```sh
$ sana lambda
```

To learn more about Lambda-specific commands, visit the [Lambda-dedicated page](/lambda).

## DynamoDB Tables

`sana ddb` is used to run all analysis supported by sana.

```sh
$ sana ddb
```

To learn more about DynamoDB-specific commands, visit the [DynamoDB-dedicated page](/dynamodb).

## Analyzing Multiple Services

If you want to scan multiple services using a single command, use comma-separated syntax to support scanning of several services in a single shot. (EG. `sana svc1,svc2,svc3,etc)`)

```sh
$ sana lambda,ddb
```
