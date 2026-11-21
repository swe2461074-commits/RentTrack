import { renderPageLayout } from "../layouts/pageLayout.js";
import { renderStatusTag } from "../components/statusTag.js";
import { bookings, getItemById } from "../data/sampleData.js";
import { calculateRental } from "../fn/pricing.js";
import { formatMoney } from "../fn/format.js";
import { t, tl } from "../i18n/i18n.js";
export function renderBookingsPage() {
  const app = document.getElementById("app");
  const statuses = ["active", "upcoming", "overdue", "returned"];
  const summary = statuses
    .map((status) => `<span class="control"><span class="tags has-addons"><span class="tag">${t(`status.${status}`)}</span><span class="tag is-light is-primary" data-count="${status}">${bookings.filter((b) => b.status === status).length}</span></span></span>`)
    .join("");
  const rows = bookings
    .map((booking) => {
      const item = getItemById(booking.itemId);
      const { rent } = calculateRental(item, booking.days);
      return `
      <tr data-booking="${booking.id}">
        <td>${booking.id}</td>
        <td>${booking.customer}</td>
        <td>${tl(item.name)}</td>
        <td>${booking.start} → ${booking.end} <span class="has-text-grey">(${booking.days} ${t("calculator.unit")})</span></td>
        <td class="has-text-right">${formatMoney(rent)}</td>
        <td>${renderStatusTag(booking.status)}</td>
      </tr>`;
    })
    .join("");
  const content = `
    <div class="field is-grouped is-grouped-multiline app-summary">
      <span class="control"><span class="tags has-addons"><span class="tag is-dark">${t("bookings.total")}</span><span class="tag is-primary" id="bookingTotal">${bookings.length}</span></span></span>
      ${summary}
    </div>
    <div class="table-container">
      <table class="table is-fullwidth is-hoverable app-tbl" id="bookingsTable">
        <thead>
          <tr>
            <th>${t("bookings.id")}</th><th>${t("bookings.customer")}</th><th>${t("bookings.item")}</th>
            <th>${t("bookings.period")}</th><th class="has-text-right">${t("bookings.sum")}</th><th>${t("bookings.status")}</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
  app.innerHTML = renderPageLayout({ id: "bookings", title: t("bookings.title"), subtitle: t("bookings.subtitle"), content });
}
