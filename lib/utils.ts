import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-GB", {
    weekday: "short", // "Sat"
    day: "2-digit", // "20"
    month: "short", // "Apr"
    year: "numeric", // "2020"
  });
}

export const clipSentence = (str: string, wordAmout: number) => {
  if (str?.length > wordAmout) {
    str = str.substring(0, wordAmout) + "...";
  }
  return str;
};

export const formatProgramModeColor = (mode: string) => {
  if (mode === "Bootcamp" || mode === "Upcoming")
    return "text-[#0077FF] bg-[#D4E0F3]";
  else return "text-[#008000] bg-[#D4F3D4]";
};
export const formatProgramModeDotColor = (mode: string) => {
  if (mode === "Bootcamp" || mode === "Upcoming") return "bg-[#0077FF]";
  else return "bg-[#008000]";
};

export function formatDateToCustomStyle(isoDate: string): string {
  const date = new Date(isoDate);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const formatted = date.toLocaleDateString("en-US", options);

  const [weekday, month, day, year] = formatted.split(" ");
  return `${weekday}. ${month} ${day.replace(",", "")}, ${year}`;
}

export const getTimeAgo = (timestamp: string) => {
  const currentDate = new Date();
  const date = new Date(timestamp);

  const timeDifference = currentDate.getTime() - date.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  } else if (months > 0) {
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else if (weeks > 0) {
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  } else if (days > 0) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else {
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  }
};
