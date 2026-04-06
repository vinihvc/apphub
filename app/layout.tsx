import type { Metadata, Viewport } from "next";
import { Providers } from "./provider";
import "@/styles/globals.css";
import { headers } from "next/headers";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Analytics } from "@/components/tracking/analytics";
import { META_THEME_COLORS, SITE_CONFIG } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { createMetadata } from "@/lib/metadata";
import { getPlatformFromHeaders } from "@/lib/platform";
import { absoluteUrl } from "@/lib/url";

const rootMetadataBase = createMetadata({
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: "/",
  imageUrl: "/api/og",
});

export const metadata: Metadata = {
  ...rootMetadataBase,
  title: {
    default: SITE_CONFIG.name,
    template: `%s - ${SITE_CONFIG.name}`,
  },
  metadataBase: new URL(SITE_CONFIG.url),
  keywords: ["Download", "Apps", "Software", "macOS", "Homebrew"],
  authors: [
    {
      name: SITE_CONFIG.author,
      url: SITE_CONFIG.url,
    },
  ],
  creator: SITE_CONFIG.author,
  openGraph: {
    ...rootMetadataBase.openGraph,
    locale: "en_US",
    siteName: SITE_CONFIG.name,
    images: [
      {
        alt: SITE_CONFIG.name,
        height: 630,
        url: absoluteUrl("/api/og"),
        width: 1200,
      },
    ],
  },
  twitter: {
    ...rootMetadataBase.twitter,
    images: [absoluteUrl("/api/og")],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${SITE_CONFIG.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.dark,
};

const RootLayout = async ({ children }: LayoutProps<"/">) => {
  const { platform } = getPlatformFromHeaders(await headers());

  return (
    <html
      className={fontSans.variable}
      data-scroll-behavior="smooth"
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <Providers initialData={{ platform }}>
          <Header />

          {children}

          <Footer />

          <Analytics />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
