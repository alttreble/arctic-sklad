# Arctic Sklad

Arctic Sklad is a web application for managing the inventory for the Bulgarian missions in Antarctica 🇧🇬

## Structure
The application consists of the following components:

 - **Frontend**: the web application implemented in Svelte
 - **GraphQL API**: a GraphQL API that provides data to the frontend
 - **Database**: a PostgreSQL database that stores the data

## Installation

The project is structured as a monorepo and uses `pnpm` as a package manager.

In order to run the application you need to install all dependencies first.

```bash
npm install -g pnpm
```

We can install all dependencies in each workspace (api, frontend) with:
```bash
pnpm i -r
```

### API

The API is located in `apps/api` and is responsible for providing the data to the frontend.

Before running the api we need to configure the connection to the database.
The connection is configured through an environment variable `DATABASE_URL`.

In the api directory, `apps/api` create a file `.env` that contains the following connection information:

```bash
DATABASE_URL=postgresql://{username}:{password}@{ip_address}/{database_name}?schema=public
```

Where 
 - `{username}` - username of the database
 - `{password}` - password of the database
 - `{ip_address}` - address of the database
 - `{database_name}` - name of the database

After configuring the connection, we can run the api from the root directory of the project with:

```bash
pnpm run dev:api
```

You should be greeted with the following message:

```exasol
api:dev: Using default config
api:dev: Built in: 131.193ms
api:dev: 🚀 The Arctic Sklad Server is ready at http://localhost:4000/
```
