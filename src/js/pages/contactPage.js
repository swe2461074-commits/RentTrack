import { renderPageLayout } from "../layouts/pageLayout.js";
import { t } from "../i18n/i18n.js";
function renderRow(icon, label, value) {
  return `
    <div class="media app-contact-row">
      <div class="media-left"><span class="icon has-text-primary"><i class="fas ${icon}"></i></span></div>
      <div class="media-content"><p class="has-text-grey is-size-7">${label}</p><p class="has-text-weight-semibold">${value}</p></div>
    </div>`;
}
export function renderContactPage() {
  const app = document.getElementById("app");
  const content = `
    <div class="box app-contact-card">
      ${renderRow("fa-location-dot", t("contact.address"), t("contact.addressValue"))}
      ${renderRow("fa-phone", t("contact.phone"), "+976 0000 0000")}
      ${renderRow("fa-envelope", t("contact.email"), "info@renttreck.example")}
      ${renderRow("fa-clock", t("contact.hours"), t("contact.hoursValue"))}
    </div>`;
  app.innerHTML = renderPageLayout({ id: "contact", title: t("contact.title"), subtitle: t("contact.subtitle"), content });
}
