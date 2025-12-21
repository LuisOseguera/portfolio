import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility to combine Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility to format dates
export function formatDate(date: string): string {
  const [month, year] = date.split("/");
  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  return `${months[parseInt(month) - 1]} ${year}`;
}
