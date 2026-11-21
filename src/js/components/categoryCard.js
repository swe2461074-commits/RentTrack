import { t, tl } from "../i18n/i18n.js";
export function renderCategoryCard(category, itemCount) {
  return `
    <div class="column is-12-mobile is-6-tablet is-4-desktop">
      <a class="box app-category-card" href="#/items" data-category="${category.id}">
        <span class="icon is-large ${category.color}"><i class="fas ${category.icon} fa-2x"></i></span>
        <div>
          <p class="title is-5">${tl(category.name)}</p>
          <p class="subtitle is-6">${itemCount} ${t("home.itemsCount")}</p>
        </div>
      </a>
    </div>
  `;
}
