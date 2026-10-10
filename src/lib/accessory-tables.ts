/** Accessory tables rendered into markdown via `[[accessories:all]]`. */
import { ACCESSORIES, KIND_LABEL, type Accessory } from "../data/accessories";
import { AFFILIATE_REL, amazonLink } from "./amazon";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const buy = (a: Accessory) =>
  `<a class="btn buy btn-xs" href="${amazonLink(a.query)}" rel="${AFFILIATE_REL}" target="_blank">Check price</a>`;

export function accessoriesTable(): string {
  const rows = ACCESSORIES.map(
    (a) =>
      `<tr><th scope="row">${esc(a.name)}</th><td data-label="Type">${KIND_LABEL[a.kind]}</td><td data-label="Why">${esc(a.why)}</td><td data-label="Typical price">~$${a.price}</td><td class="c-buy">${buy(a)}</td></tr>`
  ).join("");
  return `<div class="cmp-wrap acc-table"><table class="cmp">
  <caption>Infrared sauna accessories on Amazon (universal fit; check listings)</caption>
  <thead><tr><th scope="col">Accessory</th><th scope="col">Type</th><th scope="col">Why</th><th scope="col">Typical price</th><th scope="col"><span class="sr-only">Buy</span></th></tr></thead>
  <tbody>${rows}</tbody>
</table></div>`;
}
