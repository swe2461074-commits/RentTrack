// Hash router: URL-ийн # хэсгээр хуудас сольдог.
//   index.html#/items  ->  routes["#/items"]()
// Хоосон hash бол "#/home" руу, танигдаагүй hash бол "#/404" руу чиглүүлнэ.
const DEFAULT_ROUTE = "#/home";
const NOT_FOUND_ROUTE = "#/404";
export function initRouter(routes) {
  function markActiveLink(hash) {
    // Зөвхөн цэсний (navbar-menu) холбоосыг тэмдэглэнэ. Брэнд лого мөн "#/home" руу заадаг ч идэвхтэй болохгүй.
    document.querySelectorAll("#topNavbar .navbar-item[href^='#/']").forEach((link) => {
      const isActive = link.getAttribute("href") === hash;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }
  function renderRoute() {
    if (!window.location.hash) {
      history.replaceState(null, "", DEFAULT_ROUTE);
    }
    const hash = window.location.hash;
    const known = Object.prototype.hasOwnProperty.call(routes, hash) && hash !== NOT_FOUND_ROUTE;
    const page = known ? routes[hash] : routes[NOT_FOUND_ROUTE];
    page?.();
    markActiveLink(known ? hash : "");
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", renderRoute);
  renderRoute();
  return { refreshRoute: renderRoute };
}
