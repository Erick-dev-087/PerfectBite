/**
 * Format a number as a Kenyan Shilling price string.
 * e.g. 1000 -> "KSh 1,000"
 */
export function formatPrice(amount: number): string {
  return `KSh ${amount.toLocaleString("en-KE")}`;
}
