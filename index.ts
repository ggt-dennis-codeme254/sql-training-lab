import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaMssql } from "@prisma/adapter-mssql";

import { categories } from "./data/categories";
import { customers } from "./data/customers";
import { departments } from "./data/departments";
import { employees } from "./data/employees";
import { inventory } from "./data/inventory";
import { orderItems } from "./data/orderitems";
import { orders } from "./data/orders";
import { payments } from "./data/payment";
import { products } from "./data/products";
import { suppliers } from "./data/suppliers";
import { warehouses } from "./data/warehouses";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not defined in your environment.");
}

const adapter = new PrismaMssql(databaseUrl);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Starting database seeding...\n");

  await prisma.$transaction(async (tx) => {
    console.log("Seeding categories...");
    await tx.category.createMany({ data: categories });

    console.log("Seeding suppliers...");
    await tx.supplier.createMany({ data: suppliers });

    console.log("Seeding departments...");
    await tx.department.createMany({ data: departments });

    console.log("Seeding warehouses...");
    await tx.warehouse.createMany({ data: warehouses });

    console.log("Seeding customers...");
    await tx.customer.createMany({ data: customers });

    console.log("Seeding employees...");
    await tx.employee.createMany({ data: employees });

    console.log("Seeding products...");
    await tx.product.createMany({ data: products });

    console.log("Seeding orders...");
    await tx.order.createMany({ data: orders });

    console.log("Seeding order items...");
    await tx.orderItem.createMany({ data: orderItems });

    console.log("Seeding payments...");
    await tx.payment.createMany({ data: payments });

    console.log("Seeding inventory...");
    await tx.inventory.createMany({ data: inventory });
  });

  console.log("\nDatabase seeding completed successfully!");
}

main()
  .catch((error: unknown) => {
    console.error("\nDatabase seeding failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
