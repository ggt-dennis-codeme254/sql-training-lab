import type { Prisma } from "../generated/prisma/client";

// ISO date-only strings parse as UTC midnight, so the stored DATE never shifts
// with the machine's timezone. Never use new Date(year, month, day) here.
const d = (iso: string) => new Date(iso);

export const customers: Prisma.CustomerCreateManyInput[] = [
  // ---- Registered in 2021 (8) ----
  { CustomerId: 1,  FirstName: "Amina",     LastName: "Wanjiru",   Email: "amina.wanjiru@gmail.com",      City: "Nairobi",        Country: "Kenya",                RegisteredAt: d("2021-02-03") },
  { CustomerId: 2,  FirstName: "Rahul",     LastName: "Mehta",     Email: "rahul.mehta@outlook.com",      City: "Mumbai",         Country: "India",                RegisteredAt: d("2021-03-17") },
  { CustomerId: 3,  FirstName: "Emily",     LastName: "Carter",    Email: "emily.carter@gmail.com",       City: "New York",       Country: "United States",        RegisteredAt: d("2021-04-09") },
  { CustomerId: 4,  FirstName: "Oliver",    LastName: "Bennett",   Email: "oliver.bennett@yahoo.co.uk",   City: "London",         Country: "United Kingdom",       RegisteredAt: d("2021-05-22") },
  { CustomerId: 5,  FirstName: "Chidi",     LastName: "Okafor",    Email: "chidi.okafor@gmail.com",       City: "Lagos",          Country: "Nigeria",              RegisteredAt: d("2021-07-01") },
  { CustomerId: 6,  FirstName: "Hannah",    LastName: "Schmidt",   Email: "hannah.schmidt@proton.me",     City: "Berlin",         Country: "Germany",              RegisteredAt: d("2021-08-14") },
  { CustomerId: 7,  FirstName: "Kenji",     LastName: "Tanaka",    Email: "kenji.tanaka@gmail.com",       City: "Tokyo",          Country: "Japan",                RegisteredAt: d("2021-10-05") },
  { CustomerId: 8,  FirstName: "Priya",     LastName: "Sharma",    Email: "priya.sharma@gmail.com",       City: "Mumbai",         Country: "India",                RegisteredAt: d("2021-12-20") },

  // ---- Registered in 2022 (10) ----
  { CustomerId: 9,  FirstName: "David",     LastName: "Kamau",     Email: "david.kamau@techhub.io",       City: "Nairobi",        Country: "Kenya",                RegisteredAt: d("2022-01-11") },
  { CustomerId: 10, FirstName: "Sophie",    LastName: "Martin",    Email: "sophie.martin@outlook.com",    City: "Paris",          Country: "France",               RegisteredAt: d("2022-02-28") },
  { CustomerId: 11, FirstName: "Lucas",     LastName: "Silva",     Email: "lucas.silva@gmail.com",        City: "São Paulo",      Country: "Brazil",               RegisteredAt: d("2022-04-04") },
  { CustomerId: 12, FirstName: "Aisha",     LastName: "Mohammed",  Email: "aisha.mohammed@yahoo.com",     City: "Abuja",          Country: "Nigeria",              RegisteredAt: d("2022-05-19") },
  { CustomerId: 13, FirstName: "James",     LastName: "Wilson",    Email: "james.wilson@gmail.com",       City: "Austin",         Country: "United States",        RegisteredAt: d("2022-06-30") },
  { CustomerId: 14, FirstName: "Neha",      LastName: "Patel",     Email: "neha.patel@outlook.com",       City: "Bengaluru",      Country: "India",                RegisteredAt: d("2022-08-08") },
  { CustomerId: 15, FirstName: "Thabo",     LastName: "Nkosi",     Email: "thabo.nkosi@gmail.com",        City: "Johannesburg",   Country: "South Africa",         RegisteredAt: d("2022-09-23") },
  { CustomerId: 16, FirstName: "Grace",     LastName: "Achieng",   Email: "grace.achieng@yahoo.com",      City: "Mombasa",        Country: "Kenya",                RegisteredAt: d("2022-10-12") },
  { CustomerId: 17, FirstName: "Liam",      LastName: "O'Connor",  Email: "liam.oconnor@gmail.com",       City: "Sydney",         Country: "Australia",            RegisteredAt: d("2022-11-15") },
  { CustomerId: 18, FirstName: "Charlotte", LastName: "Davies",    Email: "charlotte.davies@outlook.com", City: "Manchester",     Country: "United Kingdom",       RegisteredAt: d("2022-12-31") },

  // ---- Registered in 2023 (12) ----
  { CustomerId: 19, FirstName: "Arjun",     LastName: "Reddy",     Email: "arjun.reddy@gmail.com",        City: "Bengaluru",      Country: "India",                RegisteredAt: d("2023-01-01") },
  { CustomerId: 20, FirstName: "Michael",   LastName: "Johnson",   Email: "michael.johnson@gmail.com",    City: "Chicago",        Country: "United States",        RegisteredAt: d("2023-02-14") },
  { CustomerId: 21, FirstName: "Fatima",    LastName: "Bello",     Email: "fatima.bello@proton.me",       City: "Lagos",          Country: "Nigeria",              RegisteredAt: d("2023-03-15") },
  { CustomerId: 22, FirstName: "Daniel",    LastName: "Mwangi",    Email: "daniel.mwangi@acme-corp.com",  City: "Nairobi",        Country: "Kenya",                RegisteredAt: d("2023-03-15") },
  { CustomerId: 23, FirstName: "Ana",       LastName: "Costa",     Email: "ana.costa@yahoo.com.br",       City: "Rio de Janeiro", Country: "Brazil",               RegisteredAt: d("2023-04-27") },
  { CustomerId: 24, FirstName: "Jonas",     LastName: "Weber",     Email: "jonas.weber@gmx.de",           City: "Munich",         Country: "Germany",              RegisteredAt: d("2023-05-18") },
  { CustomerId: 25, FirstName: "Wei Ling",  LastName: "Tan",       Email: "weiling.tan@gmail.com",        City: "Singapore",      Country: "Singapore",            RegisteredAt: d("2023-06-06") },
  { CustomerId: 26, FirstName: "Sarah",     LastName: "Thompson",  Email: "sarah.thompson@outlook.com",   City: "Toronto",        Country: "Canada",               RegisteredAt: d("2023-07-21") },
  { CustomerId: 27, FirstName: "Mohammed",  LastName: "Al Farsi",  Email: "m.alfarsi@gmail.com",          City: "Dubai",          Country: "United Arab Emirates", RegisteredAt: d("2023-08-09") },
  { CustomerId: 28, FirstName: "Zanele",    LastName: "Dlamini",   Email: "zanele.dlamini@yahoo.com",     City: "Cape Town",      Country: "South Africa",         RegisteredAt: d("2023-09-02") },
  { CustomerId: 29, FirstName: "Harry",     LastName: "Evans",     Email: "harry.evans@gmail.com",        City: "London",         Country: "United Kingdom",       RegisteredAt: d("2023-10-25") },
  { CustomerId: 30, FirstName: "Anjali",    LastName: "Verma",     Email: "anjali.verma@outlook.com",     City: "Delhi",          Country: "India",                RegisteredAt: d("2023-12-12") },

  // ---- Registered in 2024 (12) ----
  { CustomerId: 31, FirstName: "Peter",     LastName: "Otieno",    Email: "peter.otieno@gmail.com",       City: "Kisumu",         Country: "Kenya",                RegisteredAt: d("2024-01-16") },
  { CustomerId: 32, FirstName: "Jessica",   LastName: "Lee",       Email: "jessica.lee@proton.me",        City: "San Francisco",  Country: "United States",        RegisteredAt: d("2024-02-29") },
  { CustomerId: 33, FirstName: "Tobias",    LastName: "Fischer",   Email: "tobias.fischer@gmx.de",        City: "Hamburg",        Country: "Germany",              RegisteredAt: d("2024-03-20") },
  { CustomerId: 34, FirstName: "Ngozi",     LastName: "Eze",       Email: "ngozi.eze@gmail.com",          City: "Lagos",          Country: "Nigeria",              RegisteredAt: d("2024-04-08") },
  { CustomerId: 35, FirstName: "Daniel",    LastName: "Brown",     Email: "daniel.brown@outlook.com",     City: "Melbourne",      Country: "Australia",            RegisteredAt: d("2024-05-13") },
  { CustomerId: 36, FirstName: "Mei",       LastName: "Sato",      Email: "mei.sato@gmail.com",           City: "Osaka",          Country: "Japan",                RegisteredAt: d("2024-06-27") },
  { CustomerId: 37, FirstName: "Sunita",    LastName: "Iyer",      Email: "sunita.iyer@yahoo.com",        City: "Chennai",        Country: "India",                RegisteredAt: d("2024-07-10") },
  { CustomerId: 38, FirstName: "Ryan",      LastName: "Murphy",    Email: "ryan.murphy@techhub.io",       City: "Seattle",        Country: "United States",        RegisteredAt: d("2024-08-21") },
  { CustomerId: 39, FirstName: "Lerato",    LastName: "Mokoena",   Email: "lerato.mokoena@gmail.com",     City: "Cape Town",      Country: "South Africa",         RegisteredAt: d("2024-09-18") },
  { CustomerId: 40, FirstName: "Emma",      LastName: "Roberts",   Email: "emma.roberts@outlook.com",     City: "Edinburgh",      Country: "United Kingdom",       RegisteredAt: d("2024-10-30") },
  { CustomerId: 41, FirstName: "Vikram",    LastName: "Singh",     Email: "vikram.singh@gmail.com",       City: "Pune",           Country: "India",                RegisteredAt: d("2024-11-19") },
  { CustomerId: 42, FirstName: "Mercy",     LastName: "Njeri",     Email: "mercy.njeri@yahoo.com",        City: "Nyeri",          Country: "Kenya",                RegisteredAt: d("2024-12-05") },

  // ---- Registered in 2025 (8) ----
  { CustomerId: 43, FirstName: "Noah",      LastName: "Tremblay",  Email: "noah.tremblay@gmail.com",      City: "Vancouver",      Country: "Canada",               RegisteredAt: d("2025-01-22") },
  { CustomerId: 44, FirstName: "Carlos",    LastName: "Almeida",   Email: "carlos.almeida@outlook.com",   City: "São Paulo",      Country: "Brazil",               RegisteredAt: d("2025-03-03") },
  { CustomerId: 45, FirstName: "Priya",     LastName: "Sharma",    Email: "priya.sharma@outlook.com",     City: "London",         Country: "United Kingdom",       RegisteredAt: d("2025-04-14") },
  { CustomerId: 46, FirstName: "Brian",     LastName: "Odhiambo",  Email: "brian.odhiambo@acme-corp.com", City: "Nairobi",        Country: "Kenya",                RegisteredAt: d("2025-05-29") },
  { CustomerId: 47, FirstName: "Olivia",    LastName: "Taylor",    Email: "olivia.taylor@gmail.com",      City: "Austin",         Country: "United States",        RegisteredAt: d("2025-07-08") },
  { CustomerId: 48, FirstName: "Lena",      LastName: "Hoffmann",  Email: "lena.hoffmann@gmx.de",         City: "Berlin",         Country: "Germany",              RegisteredAt: d("2025-08-19") },
  { CustomerId: 49, FirstName: "Ravi",      LastName: "Kumar",     Email: "ravi.kumar@gmail.com",         City: "Mumbai",         Country: "India",                RegisteredAt: d("2025-09-24") },
  { CustomerId: 50, FirstName: "Wanjiku",   LastName: "Kamau",     Email: "wanjiku.kamau@gmail.com",      City: "Nairobi",        Country: "Kenya",                RegisteredAt: d("2025-11-18") },
];