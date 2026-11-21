// Түрээсийн үнийн дүрэм:
//   7+ хоног  -> 10% хөнгөлөлт
//   30+ хоног -> 20% хөнгөлөлт
// Барьцаа нь хөнгөлөлтөд хамаарахгүй бөгөөд бараагаа буцаахад буцаан олгоно.
export function getDiscountRate(days) {
  if (days >= 30) return 0.2;
  if (days >= 7) return 0.1;
  return 0;
}
export function calculateRental({ pricePerDay, deposit = 0 }, days) {
  const safeDays = Math.max(0, Math.floor(Number(days) || 0));
  const subtotal = pricePerDay * safeDays;
  const discountRate = getDiscountRate(safeDays);
  const discount = subtotal * discountRate;
  const rent = subtotal - discount;
  return { days: safeDays, subtotal, discountRate, discount, rent, deposit, totalPayable: rent + deposit };
}
