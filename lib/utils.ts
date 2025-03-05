import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString:string) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-GB", {
    weekday: "short", // "Sat"
    day: "2-digit", // "20"
    month: "short", // "Apr"
    year: "numeric", // "2020"
  });
}

