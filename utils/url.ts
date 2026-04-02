import { SITE_CONFIG } from "@/config/site";

export const withUtmSource = (url: string): string => {
  try {
    const parsed = new URL(url);
    parsed.searchParams.set("utm_source", SITE_CONFIG.name);
    return parsed.href;
  } catch {
    return url;
  }
};
