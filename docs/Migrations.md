# **Work with migrations**

## **Configuration**

First you need to register in **.env** configuration connection uri to mongodb:

```console
MIGRATE_dbConnectionUri="yourUri"
```

## **Up all**

```console
yarn migration up -m ./src/migrations
```

## **Roll back all**

```console
yarn migration down -m ./src/migrations
```

## **Create**

```console
yarn migration create name_of_migrate -m ./src/migrations
```
