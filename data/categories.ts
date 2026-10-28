import type { Prisma } from "../generated/prisma/client";

export const categories: Prisma.CategoryCreateManyInput[] = [
  // ---- Computers and mobile ----
  {
    CategoryName: "Laptops",
    Description: "Portable computers for work, study, and gaming.",
  },
  {
    CategoryName: "Smartphones",
    Description: "Mobile phones with touchscreens and app support.",
  },
  {
    CategoryName: "Tablets",
    Description:
      "Touchscreen tablets for browsing, reading, and creative work.",
  },
  {
    CategoryName: "Monitors",
    Description: "Desktop displays in a range of sizes and resolutions.",
  },

  // ---- Input devices and peripherals ----
  {
    CategoryName: "Keyboards",
    Description: "Wired and wireless keyboards, including mechanical models.",
  },
  { CategoryName: "Mice", Description: null },
  {
    CategoryName: "Headphones & Headsets",
    Description:
      "Wired and wireless audio headsets with and without microphones.",
  },
  { CategoryName: "Webcams", Description: null },
  {
    CategoryName: "Printers & Scanners",
    Description: "Home and office printing and document scanning devices.",
  },

  // ---- Storage and components ----
  {
    CategoryName: "External Storage",
    Description: "Portable hard drives, SSDs, and USB flash drives.",
  },
  {
    CategoryName: "Memory & Components",
    Description: "Internal RAM, SSDs, and other upgrade components.",
  },

  // ---- Networking ----
  {
    CategoryName: "Routers",
    Description: "Home and small-office wireless routers.",
  },
  {
    CategoryName: "Network Switches",
    Description: "Managed and unmanaged Ethernet switches for wired networks.",
  },
  { CategoryName: "Wi-Fi Access Points", Description: null },

  // ---- Accessories ----
  {
    CategoryName: "Cables & Adapters",
    Description: "HDMI, USB, and Ethernet cables and common adapters.",
  },
  {
    CategoryName: "Chargers & Power Banks",
    Description: "Wall chargers, car chargers, and portable battery packs.",
  },
  { CategoryName: "Docking Stations & Hubs", Description: "" },
  { CategoryName: "Speakers", Description: null },
  {
    CategoryName: "Smartwatches & Wearables",
    Description: "Fitness trackers and smartwatches that pair with phones.",
  },
  { CategoryName: "Bags & Cases", Description: null },
];
