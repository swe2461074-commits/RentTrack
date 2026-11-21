import { renderHomePage } from "./pages/homePage.js";
import { renderItemsPage } from "./pages/itemsPage.js";
import { renderCalculatorPage } from "./pages/calculatorPage.js";
import { renderBookingsPage } from "./pages/bookingsPage.js";
import { renderContactPage } from "./pages/contactPage.js";
import { renderNotFoundPage } from "./pages/notFoundPage.js";
export const routes = {
  "#/home": renderHomePage,
  "#/items": renderItemsPage,
  "#/calculator": renderCalculatorPage,
  "#/bookings": renderBookingsPage,
  "#/contact": renderContactPage,
  "#/404": renderNotFoundPage,
};
