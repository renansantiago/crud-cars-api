# NestJS Cars API

## Description

CRUD cars API using:
- [Nest](https://github.com/nestjs/nest)
- [Apollo GraphQL](https://www.apollographql.com/)
- [Mongoose](https://mongoosejs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/products/docker-desktop/)

## Installation

```bash
$ npm install
```

## Running the api

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Docker

Make sure you have [Docker](https://www.docker.com/products/docker-desktop/) installed and opened then run:

```bash
$ docker compose up
```

Check the local playground that should be running under port 3000.

```bash
http://localhost:3000/graphql
```
