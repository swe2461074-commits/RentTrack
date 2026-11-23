import { t, toggleLanguage } from "../i18n/i18n.js";
const links = [
  { href: "#/home", icon: "fa-house", color: "has-text-primary", key: "nav.home" },
  { href: "#/items", icon: "fa-boxes-stacked", color: "has-text-link", key: "nav.items" },
  { href: "#/calculator", icon: "fa-calculator", color: "has-text-info", key: "nav.calculator" },
  { href: "#/bookings", icon: "fa-calendar-check", color: "has-text-warning", key: "nav.bookings" },
  { href: "#/contact", icon: "fa-address-card", color: "has-text-danger", key: "nav.contact" },
];
export function renderNavbar() {
  return `
    <header class="app-sticky app-shadow">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item app-logo" href="#/home">
              <img src="./img/logo.svg" alt="RentTreck logo" width="32" height="32" />
              <span class="app-logo-text">${t("nav.brand")}</span>
            </a>
            <a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false" data-target="topNavbar">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div class="navbar-menu has-text-weight-semibold" id="topNavbar">
            <div class="navbar-start">
              ${links
                .map(
                  (link) => `
              <a class="navbar-item" href="${link.href}">
                <span class="icon ${link.color}"><i class="fas ${link.icon}"></i></span>
                <span>${t(link.key)}</span>
              </a>`,
                )
                .join("")}
            </div>
            <div class="navbar-end">
              <a class="navbar-item" href="#" id="langToggle">${t("nav.language")}</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  `;
}
// root дотор navbar-ыг зурж, burger цэс болон хэл солих товчийг холбоно.
export function mountNavbar(root, onLanguageChange) {
  root.innerHTML = renderNavbar();
  const burger = root.querySelector(".navbar-burger");
  const menu = root.querySelector("#topNavbar");
  const setMenu = (open) => {
    burger.classList.toggle("is-active", open);
    menu.classList.toggle("is-active", open);
    burger.setAttribute("aria-expanded", String(open));
  };
  burger.addEventListener("click", () => setMenu(!menu.classList.contains("is-active")));
  // Хуудас руу шилжихэд (mobile дээр) цэсийг хаана.
  menu.querySelectorAll(".navbar-item[href^='#/']").forEach((link) => link.addEventListener("click", () => setMenu(false)));
  root.querySelector("#langToggle").addEventListener("click", (event) => {
    event.preventDefault();
    toggleLanguage();
    mountNavbar(root, onLanguageChange); // navbar-ыг шинэ хэлээр дахин зурна
    onLanguageChange?.(); // хуудсыг дахин зурна
  });
}
