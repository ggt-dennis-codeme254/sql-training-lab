import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, Prisma } from "./generated/prisma/client.js";
import { categories } from "./data/categories";
import { suppliers } from "./data/suppliers";
import { departments } from "./data/departments";
import { warehouses } from "./data/warehouses";
import { customers } from "./data/customers";
import { employees } from "./data/employees";
import { products } from "./data/products";
import { orders } from "./data/orders";
import { payments } from "./data/payment";
import { inventory } from "./data/inventory";
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set.");
}
const prisma = new PrismaClient({
    adapter: new PrismaPg({ connectionString: databaseUrl }),
});
const sequenceColumns = [
    ["categories", "category_id"],
    ["suppliers", "supplier_id"],
    ["departments", "department_id"],
    ["warehouses", "warehouse_id"],
    ["customers", "customer_id"],
    ["employees", "employee_id"],
    ["products", "product_id"],
    ["orders", "order_id"],
    ["payments", "payment_id"],
    ["inventory", "inventory_id"],
];
async function seedDatabase() {
    try {
        const inserted = await prisma.$transaction(async (tx) => {
            const counts = {
                categories: (await tx.category.createMany({ data: categories })).count,
                suppliers: (await tx.supplier.createMany({ data: suppliers })).count,
                departments: (await tx.department.createMany({ data: departments })).count,
                warehouses: (await tx.warehouse.createMany({ data: warehouses })).count,
                customers: (await tx.customer.createMany({ data: customers })).count,
                employees: (await tx.employee.createMany({ data: employees })).count,
                products: (await tx.product.createMany({ data: products })).count,
                orders: (await tx.order.createMany({ data: orders })).count,
                payments: (await tx.payment.createMany({ data: payments })).count,
                inventory: (await tx.inventory.createMany({ data: inventory })).count,
            };
            for (const [table, column] of sequenceColumns) {
                await tx.$queryRaw(Prisma.sql `
          SELECT setval(
            pg_get_serial_sequence(${table}, ${column}),
            COALESCE(MAX(${Prisma.raw(column)}), 1),
            MAX(${Prisma.raw(column)}) IS NOT NULL
          )
          FROM ${Prisma.raw(table)}
        `);
            }
            return counts;
        });
        console.info("Seed data inserted:", inserted);
        console.info("Skipped orderItems: data/orderitems.ts is empty.");
    }
    finally {
        await prisma.$disconnect();
    }
}
await seedDatabase();
