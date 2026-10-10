export type Tier = "budget" | "mid" | "premium";

export interface SaunaModel {
  /** URL slug: /saunas/<id>/ */
  id: string;
  name: string;
  /** Compact name for tables and buttons, e.g. "Venice Elite". */
  shortName: string;
  brand: string;
  tier: Tier;
  /** rated occupants */
  capacity: number;
  /** exterior dimensions, human-readable e.g. '43" W × 37" D × 68" H' */
  extDims: string;
  /** footprint for the space-fit checker: [widthIn, depthIn] */
  footprint: [number, number];
  /** exterior height in inches */
  heightIn: number;
  /** heater description, e.g. "6 carbon PureTech panels" */
  heaters: string;
  heaterCount: number;
  /** total wattage */
  wattage: number;
  /** electrical service, e.g. "120V / 15A" */
  electrical: string;
  /** wood species */
  wood: string;
  /** EMF claim as published, e.g. "Ultra-low EMF (<3 mG)" */
  emf: string;
  /** max temperature in °F */
  maxTempF: number;
  /** typical US street price range (lowest observed sale → typical list) */
  priceLow: number;
  priceHigh: number;
  /** Caveats shown under the spec table (variant differences, unverified figures). */
  specNotes?: string[];
  /** Amazon search query for the buy link */
  query: string;
  /** Amazon ASIN — when set, links go straight to the product page */
  asin?: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  /** Editorial score out of 10 — research-based, see /how-we-research/ */
  score: number;
  scores: { heat: number; build: number; features: number; value: number };
  /** One-paragraph verdict */
  verdict: string;
  sources: string[];
}

/**
 * Specs and US street prices as of October 10, 2026, compiled from manufacturer
 * pages, retailer listings and professional reviews (see `sources`).
 * Treat as guidance — prices move weekly; verify before buying.
 */
export const MODELS: SaunaModel[] = [
  {
    id: "dynamic-venice-elite-2-person",
    name: "Dynamic Venice Elite 2-Person",
    shortName: "Venice Elite",
    brand: "Dynamic Saunas",
    tier: "premium",
    capacity: 2,
    extDims: '43" W × 37" D × 68" H',
    footprint: [43, 37],
    heightIn: 68,
    heaters: "6 carbon PureTech ultra-low EMF far-infrared panels",
    heaterCount: 6,
    wattage: 1750,
    electrical: "120V / 15A",
    wood: "Canadian hemlock",
    emf: "Ultra-low EMF (<3 mG at 6–8\")",
    maxTempF: 135,
    priceLow: 1799,
    priceHigh: 2199,
    specNotes: [
      "Wattage is not published by the maker for this variant; 1,750W is the figure commonly listed by retailers — treat as approximate.",
      "Ideal operating range per the maker is 118–132°F; the cabin can reach 135°F.",
    ],
    query: "Dynamic Saunas Venice Elite 2 person infrared sauna",
    asin: "B0CFRSV1J7",
    bestFor: "Couples who want the best-regarded 2-person cabin on Amazon: ultra-low EMF panels, red light therapy and simple 120V plug-and-play setup.",
    pros: [
      "Ultra-low EMF carbon panels (under 3 mG near the heaters)",
      "Red light therapy + chromotherapy and Bluetooth sound included",
      "Standard 120V/15A plug — no electrician visit",
      "5-year manufacturer warranty",
    ],
    cons: ["Tight for two larger adults", "Curbside freight delivery", "No 20A option for faster heat-up"],
    score: 9.1,
    scores: { heat: 9, build: 9.5, features: 9, value: 8.5 },
    verdict:
      "The 2-person cabin to beat on Amazon. Six ultra-low EMF carbon panels surround both seats, the hemlock cabinet feels a class above the price, and it plugs into a normal outlet. It is a true 2-person fit only for average builds — taller users should check the interior height first.",
    sources: [
      "https://www.amazon.com/dp/B0CFRSV1J7",
      "https://selectfitness.com/products/dynamic-saunas-venice-elite-ultra-low-emf-far-infrared-sauna",
    ],
  },
  {
    id: "jnh-joyous-2-person",
    name: "JNH Lifestyles Joyous 2-Person",
    shortName: "Joyous 2-Person",
    brand: "JNH Lifestyles",
    tier: "mid",
    capacity: 2,
    extDims: '47.3" W × 39.5" D × 75" H',
    footprint: [47.3, 39.5],
    heightIn: 75,
    heaters: "7 carbon fiber far-infrared heaters",
    heaterCount: 7,
    wattage: 1540,
    electrical: "110–120V / 15A",
    wood: "Canadian hemlock (FSC-certified)",
    emf: "Low EMF (avg 2–3 mG at 6\")",
    maxTempF: 140,
    priceLow: 1199,
    priceHigh: 1899,
    specNotes: [
      "EMF figures are the maker's published averages; independent verification varies by unit.",
      "2-year residential warranty on electrical components, heaters and wood.",
    ],
    query: "JNH Lifestyles Joyous 2 person far infrared sauna",
    bestFor: "The value play in 2-person saunas: seven heaters and 1,540W for noticeably less than the premium cabins.",
    pros: [
      "7 heaters — more coverage than most 2-person cabins",
      "1,540W on a standard 15A circuit",
      "Dual-wall hemlock construction holds heat well",
      "Frequently discounted well below list",
    ],
    cons: ["EMF higher than ultra-low rivals", "Basic control panel", "Assembly takes two people"],
    score: 8.9,
    scores: { heat: 9, build: 8.5, features: 8.5, value: 9.5 },
    verdict:
      "The best watts-per-dollar in a 2-person cabin. Seven carbon fiber heaters and 1,540W give it genuinely strong heat for the money, and sale prices regularly undercut the premium brands by hundreds. If ultra-low EMF is your priority, the Venice Elite justifies its premium.",
    sources: [
      "https://jnhlifestyles.com/",
      "https://woodartsupply.com/products/jnh-lifestyles-joyous-2-person-canadian-hemlock-low-emf-far-infrared-sauna",
    ],
  },
  {
    id: "dynamic-barcelona-1-2-person",
    name: "Dynamic Barcelona 1-2 Person",
    shortName: "Barcelona",
    brand: "Dynamic Saunas",
    tier: "mid",
    capacity: 2,
    extDims: '39" W × 36" D × 73" H',
    footprint: [39, 36],
    heightIn: 73,
    heaters: "Low EMF far-infrared carbon panels",
    heaterCount: 6,
    wattage: 1600,
    electrical: "120V / 15A",
    wood: "Canadian hemlock",
    emf: "Low EMF",
    maxTempF: 140,
    priceLow: 1599,
    priceHigh: 1999,
    specNotes: [
      "Marketed as 1-2 person; the 39\" × 36\" footprint is comfortable for one, cozy for two.",
      "Wattage varies by retailer listing — treat 1,600W as approximate.",
    ],
    query: "Dynamic Saunas Barcelona 1-2 person infrared sauna",
    asin: "B00A2F99F0",
    bestFor: "Solo users and small rooms: the smallest true wooden cabin on this list that still fits two in a pinch.",
    pros: [
      "Compact 39\" × 36\" footprint fits spare rooms and large closets",
      "Low EMF carbon panels with red light therapy",
      "Canadian hemlock cabinet, Bluetooth sound",
      "120V plug-and-play, no special wiring",
    ],
    cons: ["Cozy for two adults", "Low EMF, not ultra-low", "Fewer published specs than the Elite line"],
    score: 8.8,
    scores: { heat: 8.5, build: 9, features: 8.5, value: 9 },
    verdict:
      "The small-space answer. At 39 by 36 inches it goes where 2-person cabins can't, while still seating two for shorter sessions. You give up the Elite line's ultra-low EMF panels, but for solo daily use in a tight room, it's the most cabin for the footprint.",
    sources: ["https://www.amazon.com/dp/B00A2F99F0"],
  },
  {
    id: "sunray-sedona-1-person",
    name: "SunRay Sedona 1-Person (HL100K)",
    shortName: "Sedona HL100K",
    brand: "SunRay",
    tier: "premium",
    capacity: 1,
    extDims: '36" W × 42" D × 75" H',
    footprint: [36, 42],
    heightIn: 75,
    heaters: "5 carbon-nano infrared heaters",
    heaterCount: 5,
    wattage: 1290,
    electrical: "120V / 15A",
    wood: "Canadian red cedar",
    emf: "Low EMF (≤2.4 mG per maker)",
    maxTempF: 140,
    priceLow: 1799,
    priceHigh: 2799,
    specNotes: [
      "Dealer pricing varies widely; Amazon street prices are often well under the $2,798 dealer list.",
      "7-year structural warranty, 1-year electronics/heater warranty.",
    ],
    query: "SunRay Sedona HL100K 1 person infrared sauna",
    bestFor: "Solo sauna users who want real cedar: aromatic Canadian red cedar and a 7-year structural warranty.",
    pros: [
      "Solid Canadian red cedar — aroma and durability",
      "7-year structural warranty is best-in-class here",
      "Only 1,290W: the cheapest cabin to run on this list",
      "Chromotherapy, Bluetooth, oxygen ionizer included",
    ],
    cons: ["Strictly one person", "Premium price for a solo cabin", "Heats more slowly than 1,500W+ cabins"],
    score: 8.8,
    scores: { heat: 8.5, build: 9.5, features: 8.5, value: 8 },
    verdict:
      "The cedar purist's pick. Red cedar costs more than hemlock and smells like a proper sauna, and the 7-year structural warranty backs the build. At 1,290W it's also the cheapest to run — but it's strictly solo, and patient: lower wattage means a longer preheat.",
    sources: [
      "https://thrillseekergear.com/products/sunray-saunas-sedona-1-person-infrared-sauna",
      "https://competitorsoutlet.com/products/sunray-1-person-hl100k-sedona-sauna",
    ],
  },
  {
    id: "radiant-coronado-2-person",
    name: "Radiant Saunas Coronado 2-Person",
    shortName: "Coronado",
    brand: "Radiant Saunas",
    tier: "mid",
    capacity: 2,
    extDims: '49" W × 39" D × 75" H',
    footprint: [49, 39],
    heightIn: 75,
    heaters: "6 carbon infrared heaters",
    heaterCount: 6,
    wattage: 1750,
    electrical: "120V / 15A",
    wood: "Canadian hemlock",
    emf: "Low EMF",
    maxTempF: 141,
    priceLow: 1499,
    priceHigh: 1999,
    specNotes: [
      "Sold under the HeatWave / Blue Wave umbrella (model BSA2409); branding varies by retailer.",
      "7-year limited warranty: 7 years wood, 5 years heating/electronics, 1 year radio.",
    ],
    query: "Radiant Saunas 2 person hemlock infrared sauna BSA2409",
    asin: "B0063E9DZA",
    bestFor: "Buyers who want the longest warranty in the class: 7 years on the wood from a long-established maker.",
    pros: [
      "7-year limited warranty — longest here",
      "Extra-deep bench runs the full back wall",
      "Chromotherapy + oxygen ionizer included",
      "Buckle assembly is genuinely quick",
    ],
    cons: ["Low EMF, not ultra-low", "Sound system is dated (CD/aux era)", "329 lb — plan the delivery path"],
    score: 8.7,
    scores: { heat: 8.5, build: 9, features: 8.5, value: 9 },
    verdict:
      "The safe-bet 2-person cabin. Radiant/Blue Wave has sold this design for years, the warranty is the longest on this list, and the full-width bench is genuinely comfortable for two. The tech extras feel dated, but the heat and the cabinet are what you're buying.",
    sources: ["https://www.amazon.com/dp/B0063E9DZA"],
  },
  {
    id: "dynamic-madrid-3-person",
    name: "Dynamic Madrid 3-Person",
    shortName: "Madrid",
    brand: "Dynamic Saunas",
    tier: "premium",
    capacity: 3,
    extDims: '42" W × 60" D × 75" H',
    footprint: [42, 60],
    heightIn: 75,
    heaters: "Ultra-low EMF far-infrared carbon panels",
    heaterCount: 8,
    wattage: 2100,
    electrical: "120V / 15A",
    wood: "Canadian hemlock",
    emf: "Ultra-low EMF",
    maxTempF: 140,
    priceLow: 2199,
    priceHigh: 2799,
    specNotes: [
      "Heater count and wattage are compiled from retailer listings — the maker publishes limited specs for this model.",
      "At 60\" deep, measure your room and doorways before ordering.",
    ],
    query: "Dynamic Saunas Madrid 3 person infrared sauna",
    bestFor: "Families and shared sessions: a true 3-person cabin with ultra-low EMF panels on a standard 15A plug.",
    pros: [
      "True 3-person capacity with ultra-low EMF panels",
      "Runs on a standard 120V/15A outlet",
      "Canadian hemlock cabinet with Bluetooth and red light",
      "Narrow 42\" width fits along a wall",
    ],
    cons: ["Needs 60\" of clear depth", "Highest price on this list", "Heavy — freight delivery"],
    score: 8.7,
    scores: { heat: 9, build: 9, features: 8.5, value: 7.5 },
    verdict:
      "The family-size answer without stepping up to 20A wiring. Three real seats, ultra-low EMF panels and a 15A plug make it the easiest big cabin to live with — as long as you have five feet of wall. Pricey, but there's no cheaper true 3-person ultra-low EMF cabin on Amazon.",
    sources: ["https://www.amazon.com/s?k=Dynamic+Saunas+Madrid+3+person+infrared+sauna"],
  },
  {
    id: "heatwave-santa-fe-3-person",
    name: "HeatWave Santa Fe 3-Person Corner",
    shortName: "Santa Fe Corner",
    brand: "HeatWave",
    tier: "premium",
    capacity: 3,
    extDims: '53" W × 53" D × 75" H',
    footprint: [53, 53],
    heightIn: 75,
    heaters: "7 carbon infrared heaters",
    heaterCount: 7,
    wattage: 1805,
    electrical: "120V / 20A",
    wood: "Canadian hemlock",
    emf: "Low EMF",
    maxTempF: 140,
    priceLow: 1799,
    priceHigh: 2499,
    specNotes: [
      "Requires a 120V/20A circuit — a standard 15A outlet is not enough. Budget for an electrician if you don't have one.",
      "Corner footprint saves wall space but the diagonal door needs clear swing room.",
    ],
    query: "HeatWave Santa Fe 3 person corner infrared sauna",
    bestFor: "Three users in a corner: the space-efficient way to seat three, with the strongest heater array here.",
    pros: [
      "Seats three in a corner footprint",
      "1,805W / 7 heaters — the most powerful cabin here",
      "7-year limited warranty",
      "Chromotherapy, sound system, oxygen ionizer included",
    ],
    cons: ["Needs a 20A circuit — not plug-and-play", "Low EMF, not ultra-low", "458 lb shipping weight"],
    score: 8.6,
    scores: { heat: 9, build: 8.5, features: 8.5, value: 8 },
    verdict:
      "The most heat per dollar for three people — if your panel can spare a 20A circuit. The corner design turns dead space into a 3-person sauna, and 1,805W across seven heaters means fast warm-ups. Just price the electrician visit into your budget before you fall in love with it.",
    sources: [
      "https://bluewaveproducts.com/products/sante-fe-3-person-hemlock-corner-infrared-sauna-w-7-carbon-heaters",
      "http://saunaplace.com/products/heatwave-santa-fe-3-person-carbon-corner-infrared-sauna",
    ],
  },
  {
    id: "dynamic-andora-2-person",
    name: "Dynamic Andora 2-Person",
    shortName: "Andora",
    brand: "Dynamic Saunas",
    tier: "mid",
    capacity: 2,
    extDims: '47" W × 43.1" D × 74.4" H',
    footprint: [47, 43.1],
    heightIn: 74.4,
    heaters: "Low EMF far-infrared carbon panels",
    heaterCount: 6,
    wattage: 1750,
    electrical: "120V / 15A",
    wood: "Canadian hemlock",
    emf: "Low EMF",
    maxTempF: 140,
    priceLow: 1799,
    priceHigh: 2299,
    specNotes: [
      "Wattage compiled from retailer listings — treat as approximate.",
      "Roomier than the Venice Elite but without its ultra-low EMF panels.",
    ],
    query: "Dynamic Saunas Andora 2 person infrared sauna",
    bestFor: "Taller couples: extra interior room over the Venice Elite at a similar price.",
    pros: [
      "Roomiest 2-person Dynamic cabin",
      "Canadian hemlock, Bluetooth, red light therapy",
      "120V plug-and-play",
      "Good sale pricing vs. the Elite line",
    ],
    cons: ["Low EMF, not ultra-low like the Venice Elite", "Large footprint for a 2-person", "Sparse maker-published specs"],
    score: 8.5,
    scores: { heat: 8.5, build: 8.5, features: 8.5, value: 8.5 },
    verdict:
      "Pick the Andora if the Venice Elite sounds right but you want elbow room. It's the roomiest 2-person cabin Dynamic makes, at a similar street price — the trade is low EMF instead of ultra-low. For most buyers the Elite's panels are worth more than the extra inches.",
    sources: ["https://www.amazon.com/s?k=Dynamic+Saunas+Andora+2+person+infrared+sauna"],
  },
  {
    id: "dynamic-elite-1-person",
    name: "Dynamic Elite 1-Person Compact",
    shortName: "Elite 1-Person",
    brand: "Dynamic Saunas",
    tier: "budget",
    capacity: 1,
    extDims: '28" W × 35.5" D × 65" H',
    footprint: [28, 35.5],
    heightIn: 65,
    heaters: "Ultra-low EMF far-infrared carbon panels",
    heaterCount: 5,
    wattage: 1400,
    electrical: "120V / 15A",
    wood: "Canadian hemlock",
    emf: "Ultra-low EMF",
    maxTempF: 140,
    priceLow: 1199,
    priceHigh: 1599,
    specNotes: [
      "The smallest wooden cabin on this list — check ceiling height: 65\" exterior needs a bit more for assembly.",
      "Heater count and wattage compiled from retailer listings.",
    ],
    query: "Dynamic Saunas Elite 1 person compact infrared sauna",
    asin: "B0FLWMT968",
    bestFor: "The cheapest way into a real wooden cabin with ultra-low EMF panels: apartments, offices, tiny rooms.",
    pros: [
      "Ultra-low EMF at the lowest cabin price here",
      "28\" × 35.5\" footprint fits almost anywhere",
      "Canadian hemlock, Bluetooth, red light",
      "120V plug-and-play",
    ],
    cons: ["Strictly solo — and snug", "65\" height feels low for tall users", "Fewer heaters than bigger cabins"],
    score: 8.4,
    scores: { heat: 8, build: 8.5, features: 8, value: 8.5 },
    verdict:
      "The entry ticket to a proper wooden sauna. Nothing else this small and this cheap offers ultra-low EMF panels and real hemlock. It's snug and solo-only, but if your constraint is space or budget rather than luxury, this is where the list starts.",
    sources: ["https://www.amazon.com/dp/B0FLWMT968"],
  },
  {
    id: "higherdose-sauna-blanket",
    name: "HigherDOSE Infrared Sauna Blanket V4",
    shortName: "Sauna Blanket V4",
    brand: "HigherDOSE",
    tier: "budget",
    capacity: 1,
    extDims: '72.5" L × 32" W (unfolds flat)',
    footprint: [72.5, 32],
    heightIn: 0,
    heaters: "Far-infrared heating elements (single zone)",
    heaterCount: 1,
    wattage: 420,
    electrical: "100–120V (standard outlet)",
    wood: "N/A — portable blanket",
    emf: "Low EMF",
    maxTempF: 175,
    priceLow: 699,
    priceHigh: 699,
    specNotes: [
      "Not a cabin: a zip-up blanket. No wood, no bench, no room needed — but also no cabin experience.",
      "350–420W draw; heats in about 10 minutes per professional reviews.",
    ],
    query: "HigherDOSE Infrared Sauna Blanket",
    bestFor: "Renters and the sauna-curious: real infrared heat for $699 with zero installation and zero floor space.",
    pros: [
      "$699 — a tenth of a premium cabin",
      "Zero installation, stores in a closet",
      "350–420W costs pennies per session to run",
      "The most-reviewed sauna blanket in its class",
    ],
    cons: ["Not a real sauna cabin experience", "Single heating zone", "Insert towel sold separately"],
    score: 8.2,
    scores: { heat: 7.5, build: 8, features: 8, value: 9 },
    verdict:
      "The honest budget answer. It won't replace a cedar cabin, but at $699 with no install and pennies-per-session running costs, it's how most people should find out whether they actually like infrared heat before spending two grand on furniture.",
    sources: [
      "https://shop.equinox.com/products/higherdose-infrared-sauna-blanket-v4",
      "https://www.wareable.com/health-tech/best-infrared-sauna-blankets",
    ],
  },
];

export function getModel(id: string): SaunaModel {
  const m = MODELS.find((x) => x.id === id);
  if (!m) throw new Error(`Unknown model id: ${id}`);
  return m;
}

export function formatMoney(n: number): string {
  return "$" + n.toLocaleString("en-US");
}

export function formatPrice(m: SaunaModel): string {
  return m.priceLow === m.priceHigh ? formatMoney(m.priceLow) : `${formatMoney(m.priceLow)}–${formatMoney(m.priceHigh)}`;
}

/** Price bands shown instead of exact figures (prices move weekly). */
export const PRICE_TIERS = [
  { level: 1, sym: "$", label: "Budget", range: "under $800", under: 800 },
  { level: 2, sym: "$$", label: "Value", range: "$800–$1,400", under: 1400 },
  { level: 3, sym: "$$$", label: "Mid-range", range: "$1,400–$2,000", under: 2000 },
  { level: 4, sym: "$$$$", label: "Premium", range: "$2,000+", under: Infinity },
] as const;
export type PriceTier = (typeof PRICE_TIERS)[number];

export function priceTierOf(price: number): PriceTier {
  return PRICE_TIERS.find((t) => price < t.under) ?? PRICE_TIERS[PRICE_TIERS.length - 1];
}

export function priceTier(m: SaunaModel): PriceTier {
  return priceTierOf(m.priceLow);
}

/** Footprint area in sq ft, for the space-fit checker. */
export function footprintSqFt(m: SaunaModel): number {
  return (m.footprint[0] * m.footprint[1]) / 144;
}

/** kWh per 45-minute session, for the session cost estimator. */
export function sessionKwh(m: SaunaModel): number {
  return (m.wattage * 0.75) / 1000;
}
