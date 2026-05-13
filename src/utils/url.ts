import { SITE_URL } from "@/lib/constants";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
