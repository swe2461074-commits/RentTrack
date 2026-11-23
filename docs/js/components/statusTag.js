import { t } from "../i18n/i18n.js";
const tagClass = {
  available: "is-success",
  rented: "is-warning",
  maintenance: "is-danger",
  active: "is-info",
  upcoming: "is-link",
  returned: "is-success",
  overdue: "is-danger",
};
// status: "available" | "rented" | "maintenance" | "active" | "upcoming" | "returned" | "overdue"
export function renderStatusTag(status) {
  return `<span class="tag is-light ${tagClass[status] ?? ""}" data-status="${status}">${t(`status.${status}`)}</span>`;
}
