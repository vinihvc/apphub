import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";
import { APPS } from "@/content/apps";
import { APP_COLLECTIONS } from "@/content/collections";

const staticPaths = ["/", "/apps", "/collections", "/install"] as const;

const TRAILING_SLASH = /\/$/;

const sitemap = (): MetadataRoute.Sitemap => {
  const lastModified = new Date();
  const base = SITE_CONFIG.url.replace(TRAILING_SLASH, "");

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    changeFrequency: "weekly",
    lastModified,
    priority: path === "/" ? 1 : 0.8,
    url: path === "/" ? `${base}/` : `${base}${path}`,
  }));

  const appEntries: MetadataRoute.Sitemap = APPS.map((app) => ({
    changeFrequency: "weekly",
    lastModified,
    priority: 0.7,
    url: `${base}/apps/${app.slug}`,
  }));

  const collectionEntries: MetadataRoute.Sitemap = APP_COLLECTIONS.map(
    (collection) => ({
      changeFrequency: "weekly",
      lastModified,
      priority: 0.7,
      url: `${base}/collections/${collection.slug}`,
    })
  );

  return [...staticEntries, ...appEntries, ...collectionEntries];
};

export default sitemap;
