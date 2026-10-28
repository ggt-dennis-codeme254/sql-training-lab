import type { Prisma } from "../generated/prisma/client";

export const suppliers: Prisma.SupplierCreateManyInput[] = [
  // ---- China (6) ----
  { SupplierName: "Pearl River Electronics Ltd",       ContactEmail: "orders@pearlriver-electronics.cn",  Country: "China" },
  { SupplierName: "Dragonfly Components Co.",          ContactEmail: "sales@dragonfly-components.cn",     Country: "China" },
  { SupplierName: "Guangzhou Nova Displays Ltd",       ContactEmail: "contact@novadisplays.cn",           Country: "China" },
  { SupplierName: "Shenzhen Brightwave Technology Co.", ContactEmail: "info@brightwave-tech.cn",          Country: "China" },
  { SupplierName: "Hangzhou Orion Peripherals Ltd",    ContactEmail: "sales@orionperipherals.cn",         Country: "China" },
  { SupplierName: "Jade Circuit Manufacturing Co.",    ContactEmail: "support@jadecircuit.cn",            Country: "China" },

  // ---- Taiwan (4) ----
  { SupplierName: "Formosa Micro Devices Inc.",        ContactEmail: "sales@formosamicro.com.tw",         Country: "Taiwan" },
  { SupplierName: "Taipei Silicon Works Ltd",          ContactEmail: "contact@siliconworks.com.tw",       Country: "Taiwan" },
  { SupplierName: "Lotus Network Systems Co.",         ContactEmail: "info@lotusnetworks.com.tw",         Country: "Taiwan" },
  { SupplierName: "Pacific Rim Memory Corp.",          ContactEmail: "orders@pacificrimmemory.com.tw",    Country: "Taiwan" },

  // ---- United States (4) ----
  { SupplierName: "Redwood Digital Supply Inc.",       ContactEmail: "sales@redwooddigital.com",          Country: "United States" },
  { SupplierName: "Summit Peripherals LLC",            ContactEmail: "info@summitperipherals.com",        Country: "United States" },
  { SupplierName: "Bluestone Technologies Inc.",       ContactEmail: "contact@bluestonetech.com",         Country: "United States" },
  { SupplierName: "Atlas Cable & Connect LLC",         ContactEmail: "orders@atlascable.com",             Country: "United States" },

  // ---- Germany (3) ----
  { SupplierName: "Rheinland Elektronik GmbH",         ContactEmail: "vertrieb@rheinland-elektronik.de",  Country: "Germany" },
  { SupplierName: "Nordlicht Displays GmbH",           ContactEmail: "info@nordlicht-displays.de",        Country: "Germany" },
  { SupplierName: "Bavaria Components AG",             ContactEmail: "sales@bavaria-components.de",       Country: "Germany" },

  // ---- South Korea (2) ----
  { SupplierName: "Hanguk Semiconductor Co. Ltd",      ContactEmail: "sales@hanguksemi.co.kr",            Country: "South Korea" },
  { SupplierName: "Seoul Visual Technologies Inc.",    ContactEmail: "info@seoulvisual.co.kr",            Country: "South Korea" },

  // ---- Japan (2) ----
  { SupplierName: "Sakura Precision Devices KK",       ContactEmail: "export@sakura-precision.co.jp",     Country: "Japan" },
  { SupplierName: "Kyoto Audio & Optics Co.",          ContactEmail: "sales@kyotoaudio.co.jp",            Country: "Japan" },

  // ---- India (2) ----
  { SupplierName: "Bharat Tech Distributors Pvt Ltd",  ContactEmail: "sales@bharattechdist.in",           Country: "India" },
  { SupplierName: "Deccan Computing Supplies Pvt Ltd", ContactEmail: "info@deccansupplies.in",            Country: "India" },

  // ---- One supplier each (3) ----
  { SupplierName: "Saigon Hardware Trading Co.",       ContactEmail: "sales@saigonhardware.vn",           Country: "Vietnam" },
  { SupplierName: "Merlion Network Solutions Pte Ltd", ContactEmail: "info@merlionnetworks.sg",           Country: "Singapore" },
  { SupplierName: "Savannah Tech Imports Ltd",         ContactEmail: "orders@savannahtech.co.ke",         Country: "Kenya" },

  // ---- Country unknown (4): Country is NULL ----
  { SupplierName: "Orbit Wholesale Traders",           ContactEmail: "contact@orbitwholesale.com",        Country: null },
  { SupplierName: "Meridian Global Supply",            ContactEmail: "info@meridianglobal.com",           Country: null },
  { SupplierName: "Quickship Distribution",            ContactEmail: "sales@quickshipdist.com",           Country: null },
  { SupplierName: "Horizon Trade Partners",            ContactEmail: "orders@horizontrade.com",           Country: null },
];