import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const RAINBOW_COLORS = [
  "#FF3B3B",
  "#FF8C42",
  "#FFD93D",
  "#6BCB77",
  "#45B7D1",
  "#4D96FF",
  "#6C5CE7",
  "#A855F7",
];

export function getRainbowColor(index: number): string {
  return RAINBOW_COLORS[index % RAINBOW_COLORS.length];
}
