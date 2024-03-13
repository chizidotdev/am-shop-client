import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dateTime from "date-and-time";

export const formatDate = (
  dateObj: Date | string,
  formatString: string = "ddd, MMM DD YYYY",
  utc?: boolean | undefined,
): string => {
  const date = new Date(dateObj);

  const value = dateTime.format(date, formatString, utc);
  return value;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat().format(value);
}

export function formatCurrency(value: number, currencyCode?: string) {
  const currency = currencyCode?.toUpperCase() || "NGN";

  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
    maximumFractionDigits: 2,
  }).format(value);
}
