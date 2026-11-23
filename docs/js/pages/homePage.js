import { renderPageLayout } from "../layouts/pageLayout.js";
import { renderCategoryCard } from "../components/categoryCard.js";
import { categories, items, bookings } from "../data/sampleData.js";
import { t } from "../i18n/i18n.js";
export const CATEGORY_STORAGE_KEY = "renttreck.category";
function renderStat(value, label, icon) {
  return `
    <div class="column is-12-mobile is-4-tablet">
      <div class="box has-text-centered app-stat">
        <span class="icon is-medium has-text-primary"><i class="fas ${icon} fa-lg"></i></span>
        <p class="title is-3" data-stat="${label}">${value}</p>
        <p class="subtitle is-6">${t(label)}</p>
      </div>
    </div>`;
}
function renderStep(number, titleKey, textKey) {
  return `
    <div class="column is-12-mobile is-4-tablet">
      <div class="app-step">
        <span class="app-step-number">${number}</span>
        <h3 class="title is-5">${t(titleKey)}</h3>
        <p>${t(textKey)}</p>
      </div>
    </div>`;
}
export function renderHomePage() {
  const app = document.getElementById("app");
  const availableCount = items.filter((item) => item.status === "available").length;
  const activeCount = bookings.filter((booking) => booking.status === "active").length;
  const content = `
    <div class="app-hero">
      <h1 class="title is-2 app-hero-title">${t("home.title")}</h1>
      <p class="subtitle is-5 app-hero-text">${t("home.subtitle")}</p>
      <div class="buttons">
        <a class="button is-primary is-medium" href="#/items" id="ctaItems">${t("home.ctaItems")}</a>
        <a class="button is-light is-medium" href="#/bookings" id="ctaBookings">${t("home.ctaBookings")}</a>
      </div>
    </div>
    <div class="columns is-multiline app-stats">
      ${renderStat(items.length, "home.statItems", "fa-boxes-stacked")}
      ${renderStat(availableCount, "home.statAvailable", "fa-circle-check")}
      ${renderStat(activeCount, "home.statActive", "fa-key")}
    </div>
    <h2 class="title is-4 app-section-title">${t("home.categoriesTitle")}</h2>
    <div class="columns is-multiline" id="categoryGrid">
      ${categories.map((category) => renderCategoryCard(category, items.filter((item) => item.category === category.id).length)).join("")}
    </div>
    <h2 class="title is-4 app-section-title">${t("home.howTitle")}</h2>
    <div class="columns is-multiline">
      ${renderStep(1, "home.step1Title", "home.step1Text")}
      ${renderStep(2, "home.step2Title", "home.step2Text")}
      ${renderStep(3, "home.step3Title", "home.step3Text")}
    </div>
  `;
  app.innerHTML = renderPageLayout({ id: "home", content });
  // Ангилалын карт дээр дарахад сонгосон ангиллыг Бараа хуудас руу дамжуулна.
  app.querySelectorAll("[data-category]").forEach((card) => {
    card.addEventListener("click", () => sessionStorage.setItem(CATEGORY_STORAGE_KEY, card.dataset.category));
  });
}
