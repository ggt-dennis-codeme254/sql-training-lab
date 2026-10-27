import type { Prisma } from "../generated/prisma/client";

// Warehouse 10 (Dubai) is intended to have no inventory records (newly opened).

export const warehouses: Prisma.WarehouseCreateManyInput[] = [
  { WarehouseId: 1,  WarehouseName: "Nairobi Central Warehouse",       City: "Nairobi",      Country: "Kenya" },
  { WarehouseId: 2,  WarehouseName: "Nairobi Airport Hub",             City: "Nairobi",      Country: "Kenya" },
  { WarehouseId: 3,  WarehouseName: "Mombasa Port Warehouse",          City: "Mombasa",      Country: "Kenya" },
  { WarehouseId: 4,  WarehouseName: "Kisumu Regional Depot",           City: "Kisumu",       Country: "Kenya" },
  { WarehouseId: 5,  WarehouseName: "Lagos Distribution Center",       City: "Lagos",        Country: "Nigeria" },
  { WarehouseId: 6,  WarehouseName: "Johannesburg Fulfillment Center", City: "Johannesburg", Country: "South Africa" },
  { WarehouseId: 7,  WarehouseName: "Mumbai Logistics Park",           City: "Mumbai",       Country: "India" },
  { WarehouseId: 8,  WarehouseName: "London Gateway Depot",            City: "London",       Country: "United Kingdom" },
  { WarehouseId: 9,  WarehouseName: "Rotterdam Europe Hub",            City: "Rotterdam",    Country: "Netherlands" },
  { WarehouseId: 10, WarehouseName: "Dubai Free Zone Warehouse",       City: "Dubai",        Country: "United Arab Emirates" },
];