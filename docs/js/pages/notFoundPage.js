import { renderPageLayout } from "../layouts/pageLayout.js";
import { t } from "../i18n/i18n.js";
export function renderNotFoundPage() {
  const app = document.getElementById("app");
  const content = `
    <div class="notification is-warning is-light">
      <p>${t("notFound.text")}</p>
    </div>
    <a class="button is-primary" href="#/home" id="backHome">${t("notFound.back")}</a>`;
  app.innerHTML = renderPageLayout({ id: "not-found", title: t("notFound.title"), content });
}
