import type { Prisma } from "../generated/prisma/client";

export const suppliers: Prisma.SupplierCreateManyInput[] = [
  // ---- China (6) ----
  { SupplierId: 1,  SupplierName: "Pearl River Electronics Ltd",       ContactEmail: "orders@pearlriver-electronics.cn",  Country: "China" },
  { SupplierId: 2,  SupplierName: "Dragonfly Components Co.",          ContactEmail: "sales@dragonfly-components.cn",     Country: "China" },
  { SupplierId: 3,  SupplierName: "Guangzhou Nova Displays Ltd",       ContactEmail: "contact@novadisplays.cn",           Country: "China" },
  { SupplierId: 4,  SupplierName: "Shenzhen Brightwave Technology Co.", ContactEmail: "info@brightwave-tech.cn",          Country: "China" },
  { SupplierId: 5,  SupplierName: "Hangzhou Orion Peripherals Ltd",    ContactEmail: "sales@orionperipherals.cn",         Country: "China" },
  { SupplierId: 6,  SupplierName: "Jade Circuit Manufacturing Co.",    ContactEmail: "support@jadecircuit.cn",            Country: "China" },

  // ---- Taiwan (4) ----
  { SupplierId: 7,  SupplierName: "Formosa Micro Devices Inc.",        ContactEmail: "sales@formosamicro.com.tw",         Country: "Taiwan" },
  { SupplierId: 8,  SupplierName: "Taipei Silicon Works Ltd",          ContactEmail: "contact@siliconworks.com.tw",       Country: "Taiwan" },
  { SupplierId: 9,  SupplierName: "Lotus Network Systems Co.",         ContactEmail: "info@lotusnetworks.com.tw",         Country: "Taiwan" },
  { SupplierId: 10, SupplierName: "Pacific Rim Memory Corp.",          ContactEmail: "orders@pacificrimmemory.com.tw",    Country: "Taiwan" },

  // ---- United States (4) ----
  { SupplierId: 11, SupplierName: "Redwood Digital Supply Inc.",       ContactEmail: "sales@redwooddigital.com",          Country: "United States" },
  { SupplierId: 12, SupplierName: "Summit Peripherals LLC",            ContactEmail: "info@summitperipherals.com",        Country: "United States" },
  { SupplierId: 13, SupplierName: "Bluestone Technologies Inc.",       ContactEmail: "contact@bluestonetech.com",         Country: "United States" },
  { SupplierId: 14, SupplierName: "Atlas Cable & Connect LLC",         ContactEmail: "orders@atlascable.com",             Country: "United States" },

  // ---- Germany (3) ----
  { SupplierId: 15, SupplierName: "Rheinland Elektronik GmbH",         ContactEmail: "vertrieb@rheinland-elektronik.de",  Country: "Germany" },
  { SupplierId: 16, SupplierName: "Nordlicht Displays GmbH",           ContactEmail: "info@nordlicht-displays.de",        Country: "Germany" },
  { SupplierId: 17, SupplierName: "Bavaria Components AG",             ContactEmail: "sales@bavaria-components.de",       Country: "Germany" },

  // ---- South Korea (2) ----
  { SupplierId: 18, SupplierName: "Hanguk Semiconductor Co. Ltd",      ContactEmail: "sales@hanguksemi.co.kr",            Country: "South Korea" },
  { SupplierId: 19, SupplierName: "Seoul Visual Technologies Inc.",    ContactEmail: "info@seoulvisual.co.kr",            Country: "South Korea" },

  // ---- Japan (2) ----
  { SupplierId: 20, SupplierName: "Sakura Precision Devices KK",       ContactEmail: "export@sakura-precision.co.jp",     Country: "Japan" },
  { SupplierId: 21, SupplierName: "Kyoto Audio & Optics Co.",          ContactEmail: "sales@kyotoaudio.co.jp",            Country: "Japan" },

  // ---- India (2) ----
  { SupplierId: 22, SupplierName: "Bharat Tech Distributors Pvt Ltd",  ContactEmail: "sales@bharattechdist.in",           Country: "India" },
  { SupplierId: 23, SupplierName: "Deccan Computing Supplies Pvt Ltd", ContactEmail: "info@deccansupplies.in",            Country: "India" },

  // ---- One supplier each (3) ----
  { SupplierId: 24, SupplierName: "Saigon Hardware Trading Co.",       ContactEmail: "sales@saigonhardware.vn",           Country: "Vietnam" },
  { SupplierId: 25, SupplierName: "Merlion Network Solutions Pte Ltd", ContactEmail: "info@merlionnetworks.sg",           Country: "Singapore" },
  { SupplierId: 26, SupplierName: "Savannah Tech Imports Ltd",         ContactEmail: "orders@savannahtech.co.ke",         Country: "Kenya" },

  // ---- Country unknown (4): Country is NULL ----
  { SupplierId: 27, SupplierName: "Orbit Wholesale Traders",           ContactEmail: "contact@orbitwholesale.com",        Country: null },
  { SupplierId: 28, SupplierName: "Meridian Global Supply",            ContactEmail: "info@meridianglobal.com",           Country: null },
  { SupplierId: 29, SupplierName: "Quickship Distribution",            ContactEmail: "sales@quickshipdist.com",           Country: null },
  { SupplierId: 30, SupplierName: "Horizon Trade Partners",            ContactEmail: "orders@horizontrade.com",           Country: null },
];