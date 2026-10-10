/**
 * Infrared sauna accessories on amazon.com. These are universal add-ons linked
 * via Amazon search (no ASIN is asserted) — check the listing before buying.
 * `fits` uses model ids from models.ts ("universal" for everything here).
 */
export type AccessoryKind = "meter" | "comfort" | "care";

export interface Accessory {
  /** Amazon search query (used for the buy link). */
  query: string;
  name: string;
  kind: AccessoryKind;
  brand: string;
  fits: string[];
  price: number;
  why: string;
}

export const ACCESSORIES: Accessory[] = [
  {
    query: "EMF meter TriField TF2",
    name: "EMF Meter (TriField-style)",
    kind: "meter",
    brand: "TriField",
    fits: ["universal"],
    price: 150,
    why: "Verify your cabin's low/ultra-low EMF claims yourself — hold it 6 inches from a heater panel, the way makers measure.",
  },
  {
    query: "sauna thermometer hygrometer 2 in 1",
    name: "Sauna Thermometer & Hygrometer",
    kind: "meter",
    brand: "Generic",
    fits: ["universal"],
    price: 20,
    why: "Cabin controllers show set temperature, not what your bench actually feels. A wall dial keeps sessions honest.",
  },
  {
    query: "sauna backrest headrest wooden",
    name: "Wooden Sauna Backrest",
    kind: "comfort",
    brand: "Generic",
    fits: ["universal"],
    price: 45,
    why: "An S-shaped backrest keeps you off the hot rear heaters and makes 30-minute sessions far more comfortable.",
  },
  {
    query: "bamboo bath mat sauna duckboard",
    name: "Bamboo Duckboard / Floor Mat",
    kind: "comfort",
    brand: "Generic",
    fits: ["universal"],
    price: 35,
    why: "A duckboard keeps feet off the floor heater panel and adds airflow underfoot.",
  },
  {
    query: "sauna seat pad towel set",
    name: "Sauna Seat Pads (set)",
    kind: "care",
    brand: "Generic",
    fits: ["universal"],
    price: 25,
    why: "Washable pads protect the hemlock bench from sweat stains — the single best longevity buy for any cabin.",
  },
  {
    query: "eucalyptus essential oil sauna",
    name: "Eucalyptus Sauna Oil",
    kind: "care",
    brand: "Generic",
    fits: ["universal"],
    price: 15,
    why: "A few drops on the bench (never directly on heaters) for the classic sauna aroma. Infrared cabins have no stones, so oils go on wood or a diffuser pad.",
  },
  {
    query: "wood cleaner sauna cedar oil",
    name: "Sauna Wood Cleaner",
    kind: "care",
    brand: "Generic",
    fits: ["universal"],
    price: 18,
    why: "Mild cleaner made for sauna wood — keeps hemlock and cedar from darkening unevenly with sweat and humidity.",
  },
];

export const KIND_LABEL: Record<AccessoryKind, string> = {
  meter: "Meters",
  comfort: "Comfort",
  care: "Care",
};

const KIND_ORDER: AccessoryKind[] = ["meter", "comfort", "care"];

export function accessoriesFor(_modelId: string): Accessory[] {
  return [...ACCESSORIES].sort((a, b) => KIND_ORDER.indexOf(a.kind) - KIND_ORDER.indexOf(b.kind));
}
