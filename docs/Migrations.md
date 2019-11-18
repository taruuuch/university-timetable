# **Work with migrations**

## **Configuration**

First you need to register in **.env** configuration connection uri to mongodb:

```console
DATABASE_URL="yourUri"
```

## **Migration to db collection**

```console
yarn migration up -m ./src/migrations --table migration
```

## **Up all**

```console
yarn migration up -m ./src/migrations
```

## **Up once of migration**

```console
yarn migration up name_of_migration -m ./src/migrations
```

## **Roll back all**

```console
yarn migration down -m ./src/migrations --table migration
```

## **Create**

```console
yarn migration create name_of_migration -m ./src/migrations
```

## **Reset all**

```console
yarn migration reset -m ./src/migrations --table migration
```
