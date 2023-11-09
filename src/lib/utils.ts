import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isBase64Image(imageData: string) {
  const base64ImageRegex =
    /^data:image\/(png|jpg|jpeg|gif|svg\+xml|webp);base64,/;
  return base64ImageRegex.test(imageData);
}
