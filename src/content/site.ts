/**
 * Studio name and contact placeholders.
 *
 * The company name is the `name` field below. Change that one line.
 * The wordmark, footer brand, document title, social meta tags, and manifest
 * all read it from here. The copyright line uses `legalName`.
 *
 * Replace `whatsappDisplay` and `email` before publishing.
 * They are placeholders, not real contact details.
 */

export const site = {
  name: "Melon",
  legalName: "Melon Ltd",
  city: "Accra, Ghana",
  founder: "Clarke Adjorlolo",
  role: "Final-year computer engineering student",
  url: "https://brandandwebco.vercel.app",
  whatsappDisplay: "+233 XX XXX XXXX",
  email: "you@example.com",
} as const;

export const studioTitle = `${site.name} · Websites and ordering sites in Accra`;

export const studioDescription = `${site.name} is ${site.founder}'s software studio in Accra. Websites, restaurant ordering sites with WhatsApp checkout, and online stores for small businesses.`;

export const studioUrl = site.url.endsWith("/") ? site.url : `${site.url}/`;

export type Project = {
  id: string;
  name: string;
  href: string;
  kind: string;
  image: string;
  imageAlt: string;
  summary: string;
  observed: string[];
};

export const projects: Project[] = [
  {
    id: "cravins",
    name: "Cravins",
    href: "https://cravins-landing.vercel.app",
    kind: "Restaurant ordering",
    image: "/work/cravins.jpg",
    imageAlt:
      "Cravins homepage on a dark brown background. The headline reads “Turn every table into a smart ordering point.” A phone shows a table menu for Mama’s Kitchen with Menu, Call waiter, and Order status.",
    summary:
      "A product site for QR table ordering: guests scan a code to open the menu, call a waiter, or ask for the bill.",
    observed: [
      "Homepage with a phone demo of a table menu",
      "Guest actions for the menu, calling a waiter, and the bill",
      "A written setup: build the menu, print table QR codes, watch orders",
    ],
  },
  {
    id: "takeorder",
    name: "Take Order",
    href: "https://usetakeorder.app",
    kind: "Ordering for sellers",
    image: "/work/takeorder.jpg",
    imageAlt:
      "Take Order homepage. The headline reads “Commerce, made personal.” A phone shows a shop chat for a leather tote, an accepted offer of GH₵420, and a new order notification.",
    summary:
      "A sales app for shops and their buyers: chat, agree a price, and pay, written for sellers who take orders on WhatsApp and other chats.",
    observed: [
      "Homepage showing a shop chat and an accepted price in cedis",
      "Steps for an order link, payment, and delivery status",
      "Copy aimed at WhatsApp, Instagram, and TikTok sellers",
    ],
  },
  {
    id: "wearaword",
    name: "Wear A Word",
    href: "https://wearaword.store",
    kind: "Online store",
    image: "/work/wearaword.jpg",
    imageAlt:
      "Wear A Word shop view. A white page with a menu for Shop all, Collections, Tees, and Hoodies, plus a black tee printed “unbothered” and a cream top.",
    summary:
      "An online store with a shop menu and product photos of tees from its collections.",
    observed: [
      "Shop navigation for tees, hoodies, ladies tops, and collections",
      "Product photography on the shop view",
      "Listings priced in Ghana cedis",
    ],
  },
  {
    id: "pate",
    name: "Pâte à Choux",
    href: "https://pate-a-choux-accra.netlify.app",
    kind: "Restaurant menu",
    image: "/work/pate.jpg",
    imageAlt:
      "Pâte à Choux ordering site. A brunch banner reads “Brunch, the Parisian way” beside a plated dish. Below it, photographed menu categories and a pickup location of Cantonments.",
    summary:
      "A restaurant menu and ordering prototype for Pâte à Choux in Cantonments, Accra, with pickup, delivery, dine-in, and WhatsApp.",
    observed: [
      "Pickup location set to Cantonments, with opening hours",
      "Brunch banner and photographed menu categories",
      "Pickup, delivery, and dine-in, with WhatsApp on the page",
    ],
  },
];

export type LabScore = {
  id: string;
  performance: number;
  accessibility: number;
  seo: number;
};

/**
 * Lighthouse 12.8.2, mobile, simulated throttling.
 * One run per live URL on 19 November 2026.
 * Scores are the category scores Lighthouse reported, out of 100.
 * Replace this block only after a new measurement.
 */
export const labReport: {
  tool: string;
  formFactor: string;
  throttling: string;
  measuredOn: string;
  rows: LabScore[];
} | null = {
  tool: "Lighthouse 12.8.2",
  formFactor: "mobile",
  throttling: "simulated",
  measuredOn: "19 November 2026",
  rows: [
    { id: "cravins", performance: 100, accessibility: 96, seo: 100 },
    { id: "takeorder", performance: 66, accessibility: 90, seo: 100 },
    { id: "wearaword", performance: 92, accessibility: 96, seo: 100 },
    { id: "pate", performance: 99, accessibility: 95, seo: 100 },
  ],
};

export const observedOn = "19 November 2026";

export function projectHost(href: string): string {
  return new URL(href).host;
}
