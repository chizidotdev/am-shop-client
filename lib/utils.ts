import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export { format as formatDate } from "date-and-time";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat().format(value);
}

export function formatCurrency(value: number, currencyCode: string) {
  const currency = currencyCode.toUpperCase() || "NGN";

  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
    maximumFractionDigits: 2,
  }).format(value);
}
