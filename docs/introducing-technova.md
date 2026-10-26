# Introducing Technova

## About Technova

Welcome to Technova, a fictional technology retail company that sells a variety of technology products, including laptops, smartphones, monitors, computer accessories, and networking equipment.

Like any growing business, Technova needs a way to manage its products, customers, orders, payments, suppliers, employees, and inventory.

To support these operations, Technova uses a relational database built with PostgreSQL.

Throughout SQL Power Hour, you'll work with Technova's database to solve practical problems using SQL. Each topic introduces a set of questions based on the same database, allowing you to apply what you've learned in a consistent, realistic environment.

## Understanding the Database

Technova's database consists of 11 tables. Each table represents a particular entity or concept within the business.

The tables are related through primary keys and foreign keys, allowing us to retrieve and analyze information across the database.

The following sections describe each table, its columns, and the information stored in each column.

**Note:** `PK` identifies a primary key, while `FK` identifies a foreign key referencing another table. These labels are included in the descriptions for clarity.

**Nullability:** A column marked `NULL` in its data type may contain missing values. Every other column is required and always has a value.

### Naming Conventions

All table and column names use `snake_case`: lowercase words separated by underscores, such as `order_items` and `customer_id`. Table names are plural.

Because the names are lowercase, you can write them in your queries without double quotes:

```sql
SELECT customer_id, first_name
FROM customers;
```

To inspect a table's structure at any time in `psql`, use `\d` followed by the table name, for example `\d products`. Use `\dt` to list all tables.

---

# 1. categories

The `categories` table stores the categories into which Technova organizes its products.

Examples include Laptops, Smartphones, Monitors, Accessories, and Networking Equipment.

| Column Name | Data Type | Description |
|---|---|---|
| category_id | INTEGER | Primary key. Uniquely identifies each category. |
| category_name | VARCHAR(100) | Name of the product category. |
| description | VARCHAR(255), NULL | Brief description of the category, if provided. |

# 2. suppliers

The `suppliers` table stores information about the companies that supply products to Technova.

| Column Name | Data Type | Description |
|---|---|---|
| supplier_id | INTEGER | Primary key. Uniquely identifies each supplier. |
| supplier_name | VARCHAR(150) | Name of the supplier company. |
| contact_email | VARCHAR(150) | Supplier's contact email address. |
| country | VARCHAR(100), NULL | Country in which the supplier operates, if known. |

# 3. products

The `products` table stores information about the products Technova offers for sale.

Each product belongs to a category and has a primary supplier.

| Column Name | Data Type | Description |
|---|---|---|
| product_id | INTEGER | Primary key. Uniquely identifies each product. |
| product_name | VARCHAR(150) | Name of the product. |
| category_id | INTEGER | Foreign key referencing `categories`. Identifies the product's category. |
| supplier_id | INTEGER | Foreign key referencing `suppliers`. Identifies the product's primary supplier. |
| unit_price | NUMERIC(10,2) | Current selling price of one unit of the product. |
| cost_price | NUMERIC(10,2) | Cost to Technova of acquiring one unit of the product. |
| created_at | DATE | Date the product was added to Technova's catalog. |

# 4. customers

The `customers` table stores information about people who purchase products from Technova.

| Column Name | Data Type | Description |
|---|---|---|
| customer_id | INTEGER | Primary key. Uniquely identifies each customer. |
| first_name | VARCHAR(100) | Customer's first name. |
| last_name | VARCHAR(100) | Customer's last name. |
| email | VARCHAR(150) | Customer's email address. Unique: no two customers share an email. |
| city | VARCHAR(100) | City in which the customer resides. |
| country | VARCHAR(100) | Country in which the customer resides. |
| registered_at | DATE | Date the customer registered with Technova. |

# 5. departments

The `departments` table stores information about Technova's organizational departments.

Examples include Sales, Customer Support, Logistics, IT, and Finance.

| Column Name | Data Type | Description |
|---|---|---|
| department_id | INTEGER | Primary key. Uniquely identifies each department. |
| department_name | VARCHAR(100) | Name of the department. |
| location | VARCHAR(100), NULL | Location associated with the department, if any. |

# 6. employees

The `employees` table stores information about people working at Technova.

Each employee belongs to a department and may be assigned responsibility for handling customer orders.

| Column Name | Data Type | Description |
|---|---|---|
| employee_id | INTEGER | Primary key. Uniquely identifies each employee. |
| first_name | VARCHAR(100) | Employee's first name. |
| last_name | VARCHAR(100) | Employee's last name. |
| department_id | INTEGER | Foreign key referencing `departments`. Identifies the employee's department. |
| hire_date | DATE | Date the employee joined Technova. |
| job_title | VARCHAR(100) | Employee's job title. |

# 7. orders

The `orders` table stores information about orders placed by Technova's customers.

Each order belongs to a customer and may be assigned to an employee.

| Column Name | Data Type | Description |
|---|---|---|
| order_id | INTEGER | Primary key. Uniquely identifies each order. |
| customer_id | INTEGER | Foreign key referencing `customers`. Identifies the customer who placed the order. |
| employee_id | INTEGER, NULL | Foreign key referencing `employees`. Identifies the employee responsible for the order, if assigned. |
| order_date | DATE | Date the order was placed. |
| order_status | VARCHAR(30) | Current status of the order. One of: `Pending`, `Processing`, `Shipped`, `Delivered`, or `Cancelled`. |

# 8. order_items

The `order_items` table stores the individual products included in each order.

An order can contain multiple products, and a product can appear in multiple orders. This table records the relationship between orders and products.

| Column Name | Data Type | Description |
|---|---|---|
| order_item_id | INTEGER | Primary key. Uniquely identifies each order item. |
| order_id | INTEGER | Foreign key referencing `orders`. Identifies the order containing the item. |
| product_id | INTEGER | Foreign key referencing `products`. Identifies the product purchased. |
| quantity | INTEGER | Number of units of the product included in the order. Always greater than zero. |
| unit_price | NUMERIC(10,2) | Price per unit at the time the order was placed. |

**Important:** The `unit_price` in this table represents the historical purchase price, whereas `products.unit_price` represents the current selling price. These values may differ.

# 9. payments

The `payments` table records payments associated with customer orders.

An order may have multiple payment records, allowing Technova to track payments made through separate transactions.

| Column Name | Data Type | Description |
|---|---|---|
| payment_id | INTEGER | Primary key. Uniquely identifies each payment record. |
| order_id | INTEGER | Foreign key referencing `orders`. Identifies the order associated with the payment. |
| payment_date | DATE | Date the payment was recorded. |
| amount | NUMERIC(10,2) | Monetary amount of the payment. |
| payment_method | VARCHAR(30) | Method used to make the payment. One of: `Card`, `PayPal`, or `Bank Transfer`. |
| payment_status | VARCHAR(30) | Status of the payment. One of: `Pending`, `Completed`, or `Failed`. |

# 10. warehouses

The `warehouses` table stores information about the locations where Technova keeps its inventory.

| Column Name | Data Type | Description |
|---|---|---|
| warehouse_id | INTEGER | Primary key. Uniquely identifies each warehouse. |
| warehouse_name | VARCHAR(100) | Name of the warehouse. |
| city | VARCHAR(100) | City in which the warehouse is located. |
| country | VARCHAR(100) | Country in which the warehouse is located. |

# 11. inventory

The `inventory` table tracks the quantity of each product stored at individual warehouses.

A product may be stored in multiple warehouses, and each warehouse may store multiple products. Each product has at most one inventory record per warehouse.

| Column Name | Data Type | Description |
|---|---|---|
| inventory_id | INTEGER | Primary key. Uniquely identifies each inventory record. |
| product_id | INTEGER | Foreign key referencing `products`. Identifies the product being tracked. |
| warehouse_id | INTEGER | Foreign key referencing `warehouses`. Identifies the warehouse storing the product. |
| quantity_in_stock | INTEGER | Number of units currently available in the warehouse. |
| reorder_level | INTEGER | Stock threshold below which replenishment should be considered. |
| last_updated | DATE | Date the inventory record was last updated. |

---

## Summary

Technova's database contains 11 tables covering four main areas of the business:

| Area | Tables | Purpose |
|---|---|---|
| Product Catalog | `categories`, `suppliers`, `products` | Organizes products and their suppliers. |
| Customers & Sales | `customers`, `orders`, `order_items`, `payments` | Tracks customers, purchases, and payments. |
| Inventory | `warehouses`, `inventory` | Tracks stock across warehouse locations. |
| Company Operations | `departments`, `employees` | Represents Technova's internal organization. |

As you work through SQL Power Hour, you'll use these tables to practise retrieving, filtering, sorting, grouping, joining, and analyzing data.

The same database will support increasingly challenging exercises, allowing you to build on your existing knowledge and develop stronger SQL problem-solving skills.