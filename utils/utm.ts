import { SITE_CONFIG } from "@/config/site";

export const withUtmSource = (url: string, directory?: string): string => {
  const source = SITE_CONFIG.url.replace("https://", "");

  try {
    const parsed = new URL(url);
    parsed.searchParams.set("utm_source", source);
    parsed.searchParams.set("utm_medium", "referral");

    if (directory) {
      parsed.searchParams.set("utm_campaign", directory);
    }

    return parsed.href;
  } catch {
    return url;
  }
};
