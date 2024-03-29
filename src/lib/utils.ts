import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function coppyToClipboard(text: string) {
  navigator.clipboard.writeText(text)
}

export function resetLocalStorage() {
  localStorage.removeItem("gradient-colors")
}