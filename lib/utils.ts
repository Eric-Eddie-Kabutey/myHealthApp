import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const setNewParams = (searchParams: URLSearchParams, key: string, value: string) => {
  const params = new URLSearchParams(searchParams.toString());
  params.set(key, value);

  return `?`+params.toString()
};