import { renderPageLayout } from "../layouts/pageLayout.js";
import { renderStatusTag } from "../components/statusTag.js";
import { categories, items, getCategoryById } from "../data/sampleData.js";
import { formatMoney } from "../fn/format.js";
import { CATEGORY_STORAGE_KEY } from "./homePage.js";
import { t, tl } from "../i18n/i18n.js";
function renderFilters(selected) {
  const buttons = [{ id: "all", label: t("items.all") }, ...categories.map((c) => ({ id: c.id, label: tl(c.name) }))];
  return `
    <div class="buttons app-filters" id="categoryFilters">
      ${buttons
        .map((b) => `<button class="button is-small ${b.id === selected ? "is-primary" : "is-light"}" data-filter="${b.id}">${b.label}</button>`)
        .join("")}
    </div>`;
}
function renderTable(selected) {
  const rows = items.filter((item) => selected === "all" || item.category === selected);
  if (!rows.length) return `<div class="notification is-warning is-light">${t("items.empty")}</div>`;
  return `
    <p class="app-found">${t("items.found")}: <strong id="itemCount">${rows.length}</strong></p>
    <div class="table-container">
      <table class="table is-fullwidth is-hoverable app-tbl" id="itemsTable">
        <thead>
          <tr>
            <th>${t("items.code")}</th><th>${t("items.name")}</th><th>${t("items.category")}</th>
            <th class="has-text-right">${t("items.price")}</th><th class="has-text-right">${t("items.deposit")}</th><th>${t("items.status")}</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (item) => `
          <tr data-item="${item.id}">
            <td>${item.id}</td>
            <td>${tl(item.name)}</td>
            <td>${tl(getCategoryById(item.category)?.name)}</td>
            <td class="has-text-right">${formatMoney(item.pricePerDay)}</td>
            <td class="has-text-right">${formatMoney(item.deposit)}</td>
            <td>${renderStatusTag(item.status)}</td>
          </tr>`,
            )
            .join("")}
        </tbody>
      </table>
    </div>`;
}
export function renderItemsPage() {
  const app = document.getElementById("app");
  // Нүүр хуудсын ангилалын картаас ирсэн сонголтыг нэг удаа хэрэглэнэ.
  const preselected = sessionStorage.getItem(CATEGORY_STORAGE_KEY);
  sessionStorage.removeItem(CATEGORY_STORAGE_KEY);
  let selected = categories.some((c) => c.id === preselected) ? preselected : "all";
  app.innerHTML = renderPageLayout({
    id: "items",
    title: t("items.title"),
    subtitle: t("items.subtitle"),
    content: `<div id="itemsFilterBox">${renderFilters(selected)}</div><div id="itemsTableBox">${renderTable(selected)}</div>`,
  });
  const filterBox = document.getElementById("itemsFilterBox");
  const tableBox = document.getElementById("itemsTableBox");
  filterBox.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    selected = button.dataset.filter;
    filterBox.innerHTML = renderFilters(selected);
    tableBox.innerHTML = renderTable(selected);
  });
}
