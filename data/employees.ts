import type { Prisma } from "../generated/prisma/client";

// ISO date-only strings parse as UTC midnight, so the stored DATE never shifts
// with the machine's timezone. Never use new Date(year, month, day) here.
const d = (iso: string) => new Date(iso);

// Department IDs: 1 Sales, 2 Customer Support, 3 Logistics, 4 IT, 5 Finance,
//   6 Human Resources, 7 Marketing, 8 Procurement, 9 Research & Development,
//   10 Legal & Compliance (intentionally has no employees)
//
// Plan: only Sales (1-8) and Customer Support (9-15) employees are assigned to orders.
// An employee can only handle orders placed on or after their HireDate.

export const employees: Prisma.EmployeeCreateManyInput[] = [
  // ---- Sales (8) ----
  { FirstName: "Joseph",   LastName: "Kariuki",  DepartmentId: 1, HireDate: d("2018-03-12"), JobTitle: "Sales Manager" },
  { FirstName: "Mary",     LastName: "Wambui",   DepartmentId: 1, HireDate: d("2018-09-03"), JobTitle: "Senior Sales Representative" },
  { FirstName: "David",    LastName: "Kamau",    DepartmentId: 1, HireDate: d("2019-02-18"), JobTitle: "Sales Representative" },
  { FirstName: "Faith",    LastName: "Chebet",   DepartmentId: 1, HireDate: d("2020-01-13"), JobTitle: "Sales Representative" },
  { FirstName: "Samuel",   LastName: "Otieno",   DepartmentId: 1, HireDate: d("2021-06-01"), JobTitle: "Sales Representative" },
  { FirstName: "Linda",    LastName: "Akinyi",   DepartmentId: 1, HireDate: d("2022-01-10"), JobTitle: "Sales Representative" },
  { FirstName: "John",     LastName: "Mutua",    DepartmentId: 1, HireDate: d("2023-04-17"), JobTitle: "Sales Representative" },
  { FirstName: "Kevin",    LastName: "Rotich",   DepartmentId: 1, HireDate: d("2025-08-04"), JobTitle: "Sales Representative" },

  // ---- Customer Support (7) ----
  { FirstName: "Esther",   LastName: "Njoroge",  DepartmentId: 2, HireDate: d("2018-06-25"), JobTitle: "Support Team Lead" },
  { FirstName: "Peter",    LastName: "Maina",    DepartmentId: 2, HireDate: d("2019-08-05"), JobTitle: "Customer Support Agent" },
  { FirstName: "Grace",    LastName: "Achieng",  DepartmentId: 2, HireDate: d("2020-10-19"), JobTitle: "Customer Support Agent" },
  { FirstName: "Brian",    LastName: "Kiprop",   DepartmentId: 2, HireDate: d("2021-06-01"), JobTitle: "Customer Support Agent" },
  { FirstName: "Naomi",    LastName: "Chelimo",  DepartmentId: 2, HireDate: d("2022-01-10"), JobTitle: "Customer Support Agent" },
  { FirstName: "Victor",   LastName: "Kamau",    DepartmentId: 2, HireDate: d("2023-09-11"), JobTitle: "Customer Support Agent" },
  { FirstName: "Mary",     LastName: "Wairimu",  DepartmentId: 2, HireDate: d("2025-06-02"), JobTitle: "Customer Support Agent" },

  // ---- Logistics (4) ----
  { FirstName: "Hassan",   LastName: "Abdi",     DepartmentId: 3, HireDate: d("2018-04-09"), JobTitle: "Logistics Manager" },
  { FirstName: "Janet",    LastName: "Atieno",   DepartmentId: 3, HireDate: d("2019-11-04"), JobTitle: "Logistics Coordinator" },
  { FirstName: "Moses",    LastName: "Kimani",   DepartmentId: 3, HireDate: d("2020-07-27"), JobTitle: "Warehouse Supervisor" },
  { FirstName: "Zawadi",   LastName: "Mwinyi",   DepartmentId: 3, HireDate: d("2022-08-22"), JobTitle: "Logistics Coordinator" },

  // ---- IT (4) ----
  { FirstName: "Daniel",   LastName: "Karanja",  DepartmentId: 4, HireDate: d("2018-05-14"), JobTitle: "IT Manager" },
  { FirstName: "Cynthia",  LastName: "Wangari",  DepartmentId: 4, HireDate: d("2020-03-02"), JobTitle: "Software Engineer" },
  { FirstName: "Ibrahim",  LastName: "Salim",    DepartmentId: 4, HireDate: d("2021-09-13"), JobTitle: "Systems Administrator" },
  { FirstName: "Rose",     LastName: "Mutheu",   DepartmentId: 4, HireDate: d("2024-02-05"), JobTitle: "IT Support Specialist" },

  // ---- Finance (2) ----
  { FirstName: "Caroline", LastName: "Njeri",    DepartmentId: 5, HireDate: d("2018-08-20"), JobTitle: "Finance Manager" },
  { FirstName: "Thomas",   LastName: "Odongo",   DepartmentId: 5, HireDate: d("2022-05-09"), JobTitle: "Financial Analyst" },

  // ---- Human Resources (1) ----
  { FirstName: "Agnes",    LastName: "Kamande",  DepartmentId: 6, HireDate: d("2019-01-14"), JobTitle: "HR Manager" },

  // ---- Marketing (2) ----
  { FirstName: "Patrick",  LastName: "Mwangi",   DepartmentId: 7, HireDate: d("2019-06-10"), JobTitle: "Marketing Manager" },
  { FirstName: "Lucy",     LastName: "Waweru",   DepartmentId: 7, HireDate: d("2023-01-23"), JobTitle: "Marketing Specialist" },

  // ---- Procurement (1) ----
  { FirstName: "Eric",     LastName: "Ndungu",   DepartmentId: 8, HireDate: d("2020-02-17"), JobTitle: "Procurement Officer" },

  // ---- Research & Development (1) ----
  { FirstName: "Amara",    LastName: "Okeke",    DepartmentId: 9, HireDate: d("2024-07-01"), JobTitle: "Research Engineer" },
];