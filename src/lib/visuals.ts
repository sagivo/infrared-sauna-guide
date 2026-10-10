/**
 * Charts and diagrams rendered to HTML strings at build time, so they work both
 * in Astro pages (via <Visual />) and inside markdown (via `[[chart:value]]`
 * placeholders, see rehype-visuals.ts). Hover/focus tooltips come from the
 * global [data-tip] handler in BaseLayout.
 *
 * Palette (warm sauna theme, validated for CVD separation):
 *   heater glow = #ea580c, wood = #b07a45, deep = #2b1508.
 */
import { MODELS, priceTier, type SaunaModel } from "../data/models";
import { accessoriesTable } from "./accessory-tables";

const GLOW = "#ea580c";
const WOOD = "#b07a45";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function figure(title: string, sub: string, body: string, note?: string) {
  return `<figure class="viz">
  <figcaption class="viz-head"><strong>${esc(title)}</strong><span>${esc(sub)}</span></figcaption>
  ${body}
  ${note ? `<p class="viz-note">${note}</p>` : ""}
</figure>`;
}

/** Horizontal bar chart of heater wattage by model. */
export function wattageChart(models: SaunaModel[] = MODELS): string {
  const rows = [...models].sort((a, b) => b.wattage - a.wattage || a.shortName.localeCompare(b.shortName));
  const max = 2200;
  const ticks = [0, 500, 1000, 1500, 2000];
  const bars = rows
    .map((m) => {
      const corner = m.id === "heatwave-santa-fe-3-person";
      return `<a class="hbar" href="/saunas/${m.id}/" data-tip-value="${m.wattage}W · ${m.heaterCount} heaters" data-tip-label="${esc(m.shortName)}${corner ? " · needs 20A" : ""}">
      <span class="hbar-label">${esc(m.shortName)}</span>
      <span class="hbar-track"><span class="hbar-fill" style="width:${(m.wattage / max) * 100}%;background:${GLOW}"></span></span>
      <span class="hbar-val">${m.wattage}W</span>
    </a>`;
    })
    .join("");
  const axis = `<div class="hbar-axis" aria-hidden="true"><span></span><span class="hbar-ticks">${ticks
    .map((t) => `<i style="left:${(t / max) * 100}%">${t}W</i>`)
    .join("")}</span><span></span></div>`;
  return figure(
    "Heater power by model",
    "Total wattage, manufacturer/retailer figures. More watts = faster heat-up and higher running cost.",
    `<div class="hbar-chart" role="list">${bars}</div>${axis}`,
    `The Santa Fe's 1,805W needs a 20A circuit — everything else runs on a standard 15A outlet. Estimate your <a href="/tools/session-cost/">cost per session</a>.`
  );
}

/** Scatter: Guide score (x) vs street price (y). Upper-left is the value zone. */
export function valueChart(models: SaunaModel[] = MODELS): string {
  const xMin = 7.8;
  const xMax = 9.5;
  const yMax = 3000;
  const labels: Record<string, "right" | "left" | "above" | "below"> = {
    "dynamic-venice-elite-2-person": "above",
    "jnh-joyous-2-person": "right",
    "dynamic-barcelona-1-2-person": "below",
    "higherdose-sauna-blanket": "right",
    "heatwave-santa-fe-3-person": "left",
    "dynamic-madrid-3-person": "below",
  };
  const dots = models
    .map((m) => {
      const x = ((m.score - xMin) / (xMax - xMin)) * 100;
      const y = (m.priceLow / yMax) * 100;
      const label = labels[m.id] ? `<span class="sc-lbl ${labels[m.id]}">${esc(m.shortName)}</span>` : "";
      return `<a class="sc-dot" href="/saunas/${m.id}/" style="left:${x}%;bottom:${y}%" data-tip-value="${m.score.toFixed(1)}/10 · from ~$${m.priceLow.toLocaleString()}" data-tip-label="${esc(m.shortName)}" aria-label="${esc(m.shortName)}: score ${m.score.toFixed(1)}, from $${m.priceLow}"><i></i>${label}</a>`;
    })
    .join("");
  const yTicks = [0, 1000, 2000, 3000];
  const xTicks = [8, 8.5, 9, 9.5];
  const grid =
    yTicks.map((t) => `<span class="sc-gy" style="bottom:${(t / yMax) * 100}%"><em>$${t.toLocaleString()}</em></span>`).join("") +
    xTicks.map((t) => `<span class="sc-gx" style="left:${((t - xMin) / (xMax - xMin)) * 100}%"><em>${t}</em></span>`).join("");
  return figure(
    "Score vs. street price",
    "Each dot is one model (Guide score, cheapest typical street price). Upper area costs more; right side scores higher.",
    `<div class="sc-wrap"><div class="sc-plot">${grid}${dots}</div><div class="sc-xlab">Guide score (out of 10)</div></div>`,
    `Hover or tap a dot for details. Full numbers are in the <a href="/saunas/">comparison chart</a>. Prices move weekly — check Amazon for today's price.`
  );
}

/** Footprint visualizer: cabin footprints drawn to scale against familiar references. */
export function footprintDiagram(models: SaunaModel[] = MODELS): string {
  const refs: [string, number, number, string][] = [
    ["Queen bed", 60, 80, "60\" × 80\""],
    ["Parking space", 108, 216, "9' × 18'"],
  ];
  const cabins: [string, number, number, string][] = models
    .filter((m) => m.heightIn > 0)
    .map((m) => [m.shortName, m.footprint[0], m.footprint[1], `${m.capacity}-person`]);
  const maxW = 216;
  const items = [...cabins.map((c): [string, number, number, string, boolean] => [...c, false]), ...refs.map((r): [string, number, number, string, boolean] => [...r, true])];
  const boxes = items
    .map(([name, w, d, sub, ref]) => {
      const pw = Math.max((w / maxW) * 100, 2);
      const ph = Math.max((d / maxW) * 100, 2);
      return `<div class="ls-item"><div class="ls-box${ref ? " ref" : ""}" style="width:${pw}%;padding-bottom:${ph}%;background:${ref ? undefined : WOOD}"></div><strong>${esc(name)}</strong><span>${esc(sub)}</span></div>`;
    })
    .join("");
  return figure(
    "How much floor space does a sauna need?",
    "Footprints drawn to scale (top-down). Grey boxes are familiar references.",
    `<div class="ls-row">${boxes}</div>`,
    `Leave 2–4 inches of clearance on each side for assembly and airflow. Check your room with the <a href="/tools/space-fit/">space-fit checker</a>.`
  );
}

export const VISUALS: Record<string, () => string> = {
  "chart:value": () => valueChart(),
  "chart:wattage": () => wattageChart(),
  "diagram:footprint": () => footprintDiagram(),
  "accessories:all": accessoriesTable,
};
