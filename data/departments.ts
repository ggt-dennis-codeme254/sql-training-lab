import type { Prisma } from "../generated/prisma/client";

// Department 10 (Legal & Compliance) is intended to have no employees.
// Departments 7 and 9 have no fixed location (Location is NULL).

export const departments: Prisma.DepartmentCreateManyInput[] = [
  { DepartmentName: "Sales",                  Location: "Nairobi" },
  { DepartmentName: "Customer Support",       Location: "Nairobi" },
  { DepartmentName: "Logistics",              Location: "Mombasa" },
  { DepartmentName: "IT",                     Location: "Nairobi" },
  { DepartmentName: "Finance",                Location: "Nairobi" },
  { DepartmentName: "Human Resources",        Location: "Nairobi" },
  { DepartmentName: "Marketing",              Location: null },
  { DepartmentName: "Procurement",            Location: "Mombasa" },
  { DepartmentName: "Research & Development", Location: null },
  { DepartmentName: "Legal & Compliance",     Location: "Nairobi" },
];