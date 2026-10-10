// Central site config. Domain: infrared-sauna-guide-cg2.pages.dev
// (also update `SITE` in astro.config.mjs and public/robots.txt).
export const SITE_NAME = "Infrared Sauna Guide";
export const SITE_URL = "https://infrared-sauna-guide-cg2.pages.dev";
export const SITE_TAGLINE = "Infrared sauna reviews, comparisons, and cost calculators.";
export const SITE_DESCRIPTION =
  "Independent guides to home infrared saunas: model comparisons, EMF explainers, sizing and cost calculators, and electrical setup advice so you buy the right sauna the first time.";
export const OG_DEFAULT = `${SITE_URL}/og-default.png`;

// Amazon Associates Store ID. Every product link on the site picks it up.
// After changing it, clear Astro's content cache (rm -rf node_modules/.astro)
// so already-rendered markdown links are rebuilt with the new tag.
export const AMAZON_TAG = "room4205-20";

// Primary navigation, shared by header and footer.
export const NAV = [
  { href: "/posts/best-infrared-saunas-2026/", label: "Best Saunas" },
  { href: "/saunas/", label: "Compare" },
  { href: "/guides/", label: "Guides" },
  { href: "/tools/", label: "Tools" },
];
