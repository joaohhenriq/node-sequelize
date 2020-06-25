# Node - Sequelize
Simple application using node, sequelize, knex and postgres.

## Installs the dependencies
```bash
yarn install
```

### Creates the database
```bash
yarn sequelize db:create
```

### Creates a migration
```bash
yarn sequelize migration:create --name=name-migration
```

### Runs the migrations
```bash
yarn sequelize db:migrate
```

## Running
```bash
yarn dev
```