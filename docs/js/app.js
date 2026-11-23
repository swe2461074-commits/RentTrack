import { mountNavbar } from "./components/navbar.js";
import { initRouter } from "./router.js";
import { routes } from "./routes.js";
import { setLanguage, getCurrentLanguage, t } from "./i18n/i18n.js";
// Хадгалсан хэлийг <html lang> болон хуудасны гарчигт тусгана.
setLanguage(getCurrentLanguage());
document.title = t("app.title");
const navbarRoot = document.getElementById("navbar");
// Router эхлэхээс өмнө navbar-ыг зурна (router идэвхтэй холбоосыг тэмдэглэнэ).
let router;
mountNavbar(navbarRoot, () => {
  document.title = t("app.title");
  router?.refreshRoute();
});
router = initRouter(routes);
