import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";

const TRAILING_SLASH = /\/$/;

export default function robots(): MetadataRoute.Robots {
  const base = SITE_CONFIG.url.replace(TRAILING_SLASH, "");

  return {
    rules: {
      allow: "/",
      userAgent: "*",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
