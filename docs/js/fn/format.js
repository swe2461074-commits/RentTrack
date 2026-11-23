// Мөнгөн дүн: 1250000 -> "1,250,000₮"
export function formatMoney(value) {
  const number = Number(value) || 0;
  return `${Math.round(number).toLocaleString("en-US")}₮`;
}
// Хувь: 0.1 -> "10%"
export function formatPercent(rate) {
  return `${Math.round((Number(rate) || 0) * 100)}%`;
}
