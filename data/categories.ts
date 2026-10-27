import type { Prisma } from "../generated/prisma/client";

export const categories: Prisma.CategoryCreateManyInput[] = [
  // ---- Computers and mobile ----
  { CategoryId: 1,  CategoryName: "Laptops",                  Description: "Portable computers for work, study, and gaming." },
  { CategoryId: 2,  CategoryName: "Smartphones",              Description: "Mobile phones with touchscreens and app support." },
  { CategoryId: 3,  CategoryName: "Tablets",                  Description: "Touchscreen tablets for browsing, reading, and creative work." },
  { CategoryId: 4,  CategoryName: "Monitors",                 Description: "Desktop displays in a range of sizes and resolutions." },

  // ---- Input devices and peripherals ----
  { CategoryId: 5,  CategoryName: "Keyboards",                Description: "Wired and wireless keyboards, including mechanical models." },
  { CategoryId: 6,  CategoryName: "Mice",                     Description: null },
  { CategoryId: 7,  CategoryName: "Headphones & Headsets",    Description: "Wired and wireless audio headsets with and without microphones." },
  { CategoryId: 8,  CategoryName: "Webcams",                  Description: null },
  { CategoryId: 9,  CategoryName: "Printers & Scanners",      Description: "Home and office printing and document scanning devices." },

  // ---- Storage and components ----
  { CategoryId: 10, CategoryName: "External Storage",         Description: "Portable hard drives, SSDs, and USB flash drives." },
  { CategoryId: 11, CategoryName: "Memory & Components",      Description: "Internal RAM, SSDs, and other upgrade components." },

  // ---- Networking ----
  { CategoryId: 12, CategoryName: "Routers",                  Description: "Home and small-office wireless routers." },
  { CategoryId: 13, CategoryName: "Network Switches",         Description: "Managed and unmanaged Ethernet switches for wired networks." },
  { CategoryId: 14, CategoryName: "Wi-Fi Access Points",      Description: null },

  // ---- Accessories ----
  { CategoryId: 15, CategoryName: "Cables & Adapters",        Description: "HDMI, USB, and Ethernet cables and common adapters." },
  { CategoryId: 16, CategoryName: "Chargers & Power Banks",   Description: "Wall chargers, car chargers, and portable battery packs." },
  { CategoryId: 17, CategoryName: "Docking Stations & Hubs",  Description: "" },
  { CategoryId: 18, CategoryName: "Speakers",                 Description: null },
  { CategoryId: 19, CategoryName: "Smartwatches & Wearables", Description: "Fitness trackers and smartwatches that pair with phones." },
  { CategoryId: 20, CategoryName: "Bags & Cases",             Description: null },
];