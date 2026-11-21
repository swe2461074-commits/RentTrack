// RentTreck - туршилтын (sample) өгөгдөл.
// 2.1-2.5-д хуудсуудыг харуулахад зориулсан статик өгөгдөл. Дараагийн хэсэгт JSON + service болгон салгана.
export const categories = [
  { id: "camera", icon: "fa-camera", color: "has-text-link", name: { mn: "Камер", en: "Cameras" } },
  { id: "tent", icon: "fa-campground", color: "has-text-success", name: { mn: "Майхан", en: "Tents" } },
  { id: "car", icon: "fa-car-side", color: "has-text-danger", name: { mn: "Машин", en: "Cars" } },
  { id: "bicycle", icon: "fa-person-biking", color: "has-text-warning", name: { mn: "Унадаг дугуй", en: "Bicycles" } },
  { id: "projector", icon: "fa-video", color: "has-text-info", name: { mn: "Проектор", en: "Projectors" } },
  { id: "tools", icon: "fa-screwdriver-wrench", color: "has-text-primary", name: { mn: "Багаж хэрэгсэл", en: "Tools" } },
];
export const items = [
  { id: "RT-001", category: "camera", name: { mn: "Sony A7 III камер", en: "Sony A7 III camera" }, pricePerDay: 90000, deposit: 500000, status: "available" },
  { id: "RT-002", category: "camera", name: { mn: "Canon EOS R6 камер", en: "Canon EOS R6 camera" }, pricePerDay: 85000, deposit: 450000, status: "rented" },
  { id: "RT-003", category: "tent", name: { mn: "4 хүний майхан", en: "4-person tent" }, pricePerDay: 25000, deposit: 50000, status: "available" },
  { id: "RT-004", category: "tent", name: { mn: "8 хүний айлын майхан", en: "8-person family tent" }, pricePerDay: 40000, deposit: 80000, status: "available" },
  { id: "RT-005", category: "car", name: { mn: "Toyota Prius 2018", en: "Toyota Prius 2018" }, pricePerDay: 150000, deposit: 1000000, status: "rented" },
  { id: "RT-006", category: "car", name: { mn: "Hyundai Starex ван", en: "Hyundai Starex van" }, pricePerDay: 220000, deposit: 1500000, status: "available" },
  { id: "RT-007", category: "bicycle", name: { mn: "Trek Marlin 7 уулын дугуй", en: "Trek Marlin 7 mountain bike" }, pricePerDay: 20000, deposit: 100000, status: "available" },
  { id: "RT-008", category: "bicycle", name: { mn: "Хотын дугуй", en: "City bike" }, pricePerDay: 12000, deposit: 60000, status: "available" },
  { id: "RT-009", category: "projector", name: { mn: "Epson EB-X49 проектор", en: "Epson EB-X49 projector" }, pricePerDay: 35000, deposit: 200000, status: "available" },
  { id: "RT-010", category: "projector", name: { mn: "BenQ MW550 проектор", en: "BenQ MW550 projector" }, pricePerDay: 40000, deposit: 250000, status: "maintenance" },
  { id: "RT-011", category: "tools", name: { mn: "Bosch хонх өрөм", en: "Bosch hammer drill" }, pricePerDay: 18000, deposit: 120000, status: "available" },
  { id: "RT-012", category: "tools", name: { mn: "Цахилгаан хөрөө", en: "Electric saw" }, pricePerDay: 22000, deposit: 150000, status: "rented" },
];
// customer: жишээ нэрс; itemId: items дахь id; days: түрээсийн хоног
export const bookings = [
  { id: "BK-1001", customer: "Батаа", itemId: "RT-002", start: "2026-11-18", end: "2026-11-25", days: 7, status: "active" },
  { id: "BK-1002", customer: "Сарнай", itemId: "RT-005", start: "2026-11-20", end: "2026-11-23", days: 3, status: "active" },
  { id: "BK-1003", customer: "Тэмүүлэн", itemId: "RT-012", start: "2026-11-15", end: "2026-11-19", days: 4, status: "overdue" },
  { id: "BK-1004", customer: "Оюунаа", itemId: "RT-003", start: "2026-11-27", end: "2026-11-30", days: 3, status: "upcoming" },
  { id: "BK-1005", customer: "Ганаа", itemId: "RT-001", start: "2026-12-01", end: "2026-12-10", days: 9, status: "upcoming" },
  { id: "BK-1006", customer: "Номин", itemId: "RT-007", start: "2026-11-05", end: "2026-11-08", days: 3, status: "returned" },
  { id: "BK-1007", customer: "Анужин", itemId: "RT-009", start: "2026-11-10", end: "2026-11-11", days: 1, status: "returned" },
  { id: "BK-1008", customer: "Мөнх-Эрдэнэ", itemId: "RT-006", start: "2026-12-05", end: "2027-01-04", days: 30, status: "upcoming" },
];
export function getItemById(id) {
  return items.find((item) => item.id === id);
}
export function getCategoryById(id) {
  return categories.find((category) => category.id === id);
}
