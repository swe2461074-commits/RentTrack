import { renderPageLayout } from "../layouts/pageLayout.js";
import { items } from "../data/sampleData.js";
import { calculateRental } from "../fn/pricing.js";
import { formatMoney, formatPercent } from "../fn/format.js";
import { t, tl } from "../i18n/i18n.js";
function renderResult(item, days) {
  const r = calculateRental(item, days);
  const row = (id, label, value, cls = "") =>
    `<tr class="${cls}"><th>${label}</th><td class="has-text-right" id="${id}">${value}</td></tr>`;
  return `
    <table class="table is-fullwidth app-tbl">
      <tbody>
        ${row("calc-rate", t("calculator.rate"), formatMoney(item.pricePerDay))}
        ${row("calc-subtotal", `${t("calculator.subtotal")} (${r.days} ${t("calculator.unit")})`, formatMoney(r.subtotal))}
        ${row("calc-discount", `${t("calculator.discount")} (${formatPercent(r.discountRate)})`, `−${formatMoney(r.discount)}`)}
        ${row("calc-rent", t("calculator.rent"), formatMoney(r.rent), "has-text-weight-semibold")}
        ${row("calc-deposit", t("calculator.deposit"), formatMoney(r.deposit))}
        ${row("calc-total", t("calculator.total"), formatMoney(r.totalPayable), "is-selected")}
      </tbody>
    </table>`;
}
export function renderCalculatorPage() {
  const app = document.getElementById("app");
  const content = `
    <div class="columns">
      <div class="column is-5">
        <div class="field">
          <label class="label" for="calcItem">${t("calculator.item")}</label>
          <div class="control"><div class="select is-fullwidth">
            <select id="calcItem">
              ${items.map((item) => `<option value="${item.id}">${tl(item.name)}</option>`).join("")}
            </select>
          </div></div>
        </div>
        <div class="field">
          <label class="label" for="calcDays">${t("calculator.days")}</label>
          <div class="control"><input class="input" id="calcDays" type="number" min="1" max="365" step="1" value="3" /></div>
          <p class="help">${t("calculator.rule")}</p>
        </div>
      </div>
      <div class="column is-7"><div id="calcResult"></div></div>
    </div>`;
  app.innerHTML = renderPageLayout({ id: "calculator", title: t("calculator.title"), subtitle: t("calculator.subtitle"), content });
  const select = document.getElementById("calcItem");
  const daysInput = document.getElementById("calcDays");
  const result = document.getElementById("calcResult");
  const update = () => {
    const item = items.find((i) => i.id === select.value);
    result.innerHTML = renderResult(item, daysInput.value);
  };
  select.addEventListener("change", update);
  daysInput.addEventListener("input", update);
  update();
}
