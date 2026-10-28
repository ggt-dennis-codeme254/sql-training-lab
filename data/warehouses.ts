import type { Prisma } from "../generated/prisma/client";

// Warehouse 10 (Dubai) is intended to have no inventory records (newly opened).

export const warehouses: Prisma.WarehouseCreateManyInput[] = [
  { WarehouseName: "Nairobi Central Warehouse",       City: "Nairobi",      Country: "Kenya" },
  { WarehouseName: "Nairobi Airport Hub",             City: "Nairobi",      Country: "Kenya" },
  { WarehouseName: "Mombasa Port Warehouse",          City: "Mombasa",      Country: "Kenya" },
  { WarehouseName: "Kisumu Regional Depot",           City: "Kisumu",       Country: "Kenya" },
  { WarehouseName: "Lagos Distribution Center",       City: "Lagos",        Country: "Nigeria" },
  { WarehouseName: "Johannesburg Fulfillment Center", City: "Johannesburg", Country: "South Africa" },
  { WarehouseName: "Mumbai Logistics Park",           City: "Mumbai",       Country: "India" },
  { WarehouseName: "London Gateway Depot",            City: "London",       Country: "United Kingdom" },
  { WarehouseName: "Rotterdam Europe Hub",            City: "Rotterdam",    Country: "Netherlands" },
  { WarehouseName: "Dubai Free Zone Warehouse",       City: "Dubai",        Country: "United Arab Emirates" },
];