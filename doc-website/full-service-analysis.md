# Full Service Analysis

You can use the service-level commands to run all supported analysis for particular a service.

## Lambda Functions

`sana lambda` is used to run all analysis supported by sana.

```sh
$ sana lambda
```

To learn more about lambda-specific commands, visit the [lambda-specific command page](/lambda).

## DynamoDB Tables

`sana ddb` is used to run all analysis supported by sana.

```sh
$ sana ddb
```

## Analyzing Multiple Services

If you want to scan multiple services using a single command, use comma-separated syntax to support scanning of several services in a single shot. (EG. `sana svc1,svc2,svc3,etc)`)

```sh
$ sana lambda,ddb
```
