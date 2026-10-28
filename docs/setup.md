# TechNova Database Setup

This guide walks you through setting up the TechNova database locally using Docker, Microsoft SQL Server, and Prisma. By the end, you will have a running SQL Server database populated with sample data that you can explore using SQL Server Management Studio (SSMS).

## Prerequisites

Before you begin, ensure you have the following installed on your machine.

### 1. Node.js and npm

Node.js allows you to run the JavaScript and TypeScript tooling used by this project. npm is included with Node.js and is used to install project dependencies.

Verify your installation by running:

```bash
node --version
npm --version
```

If both commands return version numbers, you're ready to proceed. If not, you can [follow this tutorial to learn how to install nodejs](https://youtu.be/6vdQi_BK-uM)

### 2. Docker Desktop

Docker runs the SQL Server database in a container, so you don't need to install SQL Server directly on your machine.

Ensure Docker Desktop is installed and running.

Verify that Docker is available by running:

```bash
docker --version
docker compose version
```

Both commands should return version information. If not, you can [follow this tutorial to install docker](https://youtu.be/5Mfe54238xE)

### 3. SQL Server Management Studio (SSMS)

SSMS is a graphical tool for connecting to SQL Server databases, executing SQL queries, and inspecting tables and their data.

You will use it to connect to and write queries against the TechNova database.

You can download and install SQL Server Management Studio from [here](https://learn.microsoft.com/en-us/ssms/install/install)

:::tip
You do not need to install SQL Server separately. Docker will run the database for you.
:::
---

## Setup Instructions

### Step 1: Clone the repository

Clone the [project repository](https://github.com/ggt-dennis-codeme254/sql-training-lab.git) to your local machine.

```bash
git clone https://github.com/ggt-dennis-codeme254/sql-training-lab.git sql-training-lab
```

### Step 2: Navigate to the project directory

Move into the directory created when you cloned the repository, in this case `sql-training-lab/`.

```bash
cd sql-training-lab
```

Run the remaining commands from this directory unless instructed otherwise.

### Step 3: Install dependencies

Install the project's dependencies using npm.

```bash
npm install
```

This reads the project's `package.json` file and installs the packages required to run the project.

:::info
Installation might take a while
:::

Wait for the command to finish before proceeding.

### Step 4: Configure environment variables

At the root of the project, create a file named `.env`.

Copy the contents of `.env.example` into your new `.env` file:

```dotenv
DATABASE_URL="sqlserver://localhost:1433;database=TechNovaDB;user=sa;password=PASSWORD;encrypt=true;trustServerCertificate=true"
MSSQL_SA_PASSWORD="PASSWORD"
```

Replace both occurrences of `PASSWORD` with a strong password of your choice.

:::info
The password must be a strong password:
- A minimum of 8 characters
- Must include Uppercase letters, lowercase letters, numbers and symbols
:::

:::info
The passwords in `DATABASE_URL` and `MSSQL_SA_PASSWORD` **must match**. SQL Server uses `MSSQL_SA_PASSWORD` to configure the `sa` login, while Prisma uses the credentials in `DATABASE_URL` to connect to the database.
:::

For example, if your chosen password is `MyStrongPassword123!`, the configuration would look like this:

```dotenv
DATABASE_URL="sqlserver://localhost:1433;database=TechNovaDB;user=sa;password=MyStrongPassword123!;encrypt=true;trustServerCertificate=true"
MSSQL_SA_PASSWORD="MyStrongPassword123!"
```

Use your own password rather than copying the example.

### Step 5: Start the SQL Server database

Start the database container by running:

```bash
docker compose up -d
```

Docker Compose reads the project's `compose.yaml` or `docker-compose.yml` file and starts the services defined in it.

The `-d` option runs the container in the background, allowing you to continue using your terminal.

:::tip
This command might take a while
:::

#### Confirm that the container is running

Open Docker Desktop and navigate to **Containers**.

You should see a running container named:

`technova-db`

Alternatively, verify its status from your terminal:

```bash
docker ps
```

Look for `technova-db` in the list of running containers.

If the container is not running, inspect its logs:

```bash
docker compose logs mssql
```

### Step 6: Update the database schema

Run the following command:

```bash
npm run db-update
```

Prisma reads your schema and applies the required changes to the SQL Server database, creating the tables and relationships defined by the project.

You should run this step before seeding the database because the tables must exist before records can be inserted.

Wait for the command to finish successfully before proceeding.

### Step 7: Seed the database

Populate the database with the project's sample data by running:

```bash
npm run seed
```

The seed script inserts sample records into the TechNova tables, including customers, products, suppliers, orders, and inventory.

When the command completes successfully, your database should be ready to explore.

:::info
The seed script may not be safe to run repeatedly against an already populated database. If you encounter duplicate-key errors, it might mean the database is already populated with the seed data.
:::


## Verify Your Setup

Let's confirm that the database is accessible and that the sample data was inserted successfully.

### Step 1: Connect using SQL Server Management Studio

Open SQL Server Management Studio (SSMS).

In the **Connect to Server** dialog, enter the following details:

| Setting | Value |
|---|---|
| Server name | `localhost` |
| Authentication | Select `SQL Server Authentication` |
| Login | `sa` |
| Password | The password you configured in Step 4 |

Under the connection options, enable **Trust server certificate**.

Click **Connect**.

If the connection succeeds, SQL Server Management Studio should connect to your local SQL Server instance.

### Step 2: Confirm that the database exists

In Object Explorer on the left:

1. Expand **Databases**.
2. Look for `TechNovaDB`.

If you can see `TechNovaDB`, the database has been created successfully.

If it does not appear, right-click **Databases** and select **Refresh**.

### Step 3: Confirm that the data was seeded

Open a new query window in SSMS and execute the following SQL:

```sql
USE TechNovaDB;
GO

SELECT *
FROM Customers;
```

Click **Execute**.

You should see the customer records inserted by the seed script.

If rows are returned, **your database setup and seeding were successful!**

You can explore other tables in the same way. For example:

```sql
USE TechNovaDB;
GO

SELECT *
FROM Products;

SELECT *
FROM Orders;

SELECT *
FROM Inventory;
```

---

## Troubleshooting

### Docker cannot start the container

Make sure Docker Desktop is running, then check the container logs:

```bash
docker compose logs mssql
```

If Docker reports that port `1433` is already in use, another SQL Server instance or container may already be using that port. Stop the conflicting service or update the port mapping and connection settings consistently.

### Prisma cannot connect to SQL Server

Check the following:

- The `technova-db` container is running.
- The database port is correctly mapped to your local machine.
- The `DATABASE_URL` in `.env` contains the correct server, port, database name, username, and password.
- The password in `DATABASE_URL` matches `MSSQL_SA_PASSWORD`.

After changing the password in `.env`, be aware that an existing SQL Server container with a persistent data volume may continue using the password configured when its database was initialized. Updating `.env` alone does not necessarily change the existing SQL Server login password.

### The database exists, but the tables are missing

Run:

```bash
npm run db-update
```

Check the output for errors before attempting to seed the database again.

### The tables exist, but no records are returned

Run the seed script:

```bash
npm run seed
```

If it fails, read the error message and address the problem before retrying.
