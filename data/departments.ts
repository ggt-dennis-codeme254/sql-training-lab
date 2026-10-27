import type { Prisma } from "../generated/prisma/client";

// Department 10 (Legal & Compliance) is intended to have no employees.
// Departments 7 and 9 have no fixed location (Location is NULL).

export const departments: Prisma.DepartmentCreateManyInput[] = [
  { DepartmentId: 1,  DepartmentName: "Sales",                  Location: "Nairobi" },
  { DepartmentId: 2,  DepartmentName: "Customer Support",       Location: "Nairobi" },
  { DepartmentId: 3,  DepartmentName: "Logistics",              Location: "Mombasa" },
  { DepartmentId: 4,  DepartmentName: "IT",                     Location: "Nairobi" },
  { DepartmentId: 5,  DepartmentName: "Finance",                Location: "Nairobi" },
  { DepartmentId: 6,  DepartmentName: "Human Resources",        Location: "Nairobi" },
  { DepartmentId: 7,  DepartmentName: "Marketing",              Location: null },
  { DepartmentId: 8,  DepartmentName: "Procurement",            Location: "Mombasa" },
  { DepartmentId: 9,  DepartmentName: "Research & Development", Location: null },
  { DepartmentId: 10, DepartmentName: "Legal & Compliance",     Location: "Nairobi" },
];