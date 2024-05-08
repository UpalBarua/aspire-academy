import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const nameRegex = /^[a-z ,.'-]+$/i;
const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateName = (name: string) => nameRegex.test(name);
