import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";

const TRAILING_SLASH = /\/$/;

const robots = (): MetadataRoute.Robots => {
  const base = SITE_CONFIG.url.replace(TRAILING_SLASH, "");

  return {
    rules: {
      allow: "/",
      userAgent: "*",
    },
    sitemap: `${base}/sitemap.xml`,
  };
};

export default robots;
