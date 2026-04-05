import { SITE_CONFIG } from "@/config/site";
import { APPS } from "@/content/apps";

const TRAILING_SLASH = /\/$/;

const escapeXml = (value: string): string =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const base = SITE_CONFIG.url.replace(TRAILING_SLASH, "");
const buildDate = new Date().toUTCString();

const channelXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_CONFIG.name)} — Apps</title>
    <link>${escapeXml(`${base}/`)}</link>
    <description>${escapeXml(SITE_CONFIG.description)}</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${escapeXml(`${base}/rss.xml`)}" rel="self" type="application/rss+xml"/>
${APPS.map((app) => {
  const link = `${base}/apps/${app.slug}`;
  return `    <item>
      <title>${escapeXml(app.name)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <description><![CDATA[${app.description}]]></description>
    </item>`;
}).join("\n")}
  </channel>
</rss>`;

export function GET(): Response {
  return new Response(channelXml, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
