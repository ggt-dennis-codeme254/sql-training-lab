# Basic SELECT
1. Retrieve all columns and rows from the `products` table.

2. A colleague needs a quick overview of the company's customers. Retrieve each customer's first name, last name, and email address.

3. Create a supplier directory displaying each supplier's name, contact email, and country. In the output, use the column headings `Name`, `Email`, and `Location` instead of the original column names..

4. Retrieve the names, unit prices, and cost prices of all products use the column headings `Product Name`, `Buying Price` and `Selling Price` instead of the original column names.

5. Find out which countries the company's suppliers operate in. Return each country only once. Output should exclude `NULL` values.

6. A customer wants to compare product prices, starting with the cheapest. List all product names by ascending `unit_price`. In the output, use the column headings `Product Name` and `Buying Price` instead of the original column names.

7. Retrieve the names and job titles of all employees, starting with the most recently hired.

8. Which customers live in Kenya? Return their names, cities, and email addresses. Order the output by descending order of the first name.

9. The product catalogue contains products from different categories. Retrieve the distinct category IDs represented in the `products` table.

10. Find all products with a `unit_price` greater than 5,000. Display their names and prices, starting with the most expensive.

11. A finance analyst is reviewing payments. Retrieve the payment ID, order ID, amount, and payment status for payments marked as `Failed`.

12. List all orders placed during 2025, showing their order IDs, customer IDs, and order dates. Display the oldest orders first.

13. Retrieve the names and prices of products whose selling price is at least twice their cost price. Sort the results by selling price from highest to lowest.

14. A customer directory should list customers alphabetically by last name. If two customers share a last name, sort them by first name in descending order. Return their names and email addresses.

15. Find employees hired before 1 January 2024. Display their names, job titles, and hire dates, starting with the earliest hire.

16. Which cities have registered customers? Return a list of distinct cities in alphabetical order.

17. Identify inventory records where the quantity in stock is below the reorder level. Show the product ID, warehouse ID, quantity in stock, and reorder level, starting with the lowest stock quantity.

18. Retrieve products created between 1 January 2025 and 31 December 2025, inclusive. Display their names, prices, and creation dates, starting with the newest.

19. A sales analyst needs to review orders that are either `Pending` or `Processing`. Return the order ID, customer ID, order date, and status, with the oldest orders first.

20. Prepare a product catalogue showing each product's name, selling price, and cost price. Include only products priced between 1,000 and 10,000, inclusive, and arrange them from lowest to highest selling price. If prices are equal, sort by product name in descending alphabetical order.

## Boss Challenge
The inventory team needs a report to help them determine which products require immediate restocking and which are running low.

Using the `inventory` table, write a query that returns exactly four columns:

- `product_id`, renamed to **Product ID**
- `quantity_in_stock`, renamed to **Quantity Currently In Stock**
- `reorder_level`, renamed to **Reorder Level**
- A calculated column named **Stock Status**, determined by the following rules:
  - If the quantity in stock is `0`, display **Reorder Now**.
  - If the quantity in stock is less than the reorder level, display **Place Order Soon**.
  - Otherwise, display **In Stock**.

Order the output by 'Stock Status' column in descending order.