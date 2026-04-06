import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";
import { absoluteUrl } from "@/lib/url";

interface CreateMetadataProps {
  description: string;
  imageUrl?: string;
  keywords?: readonly string[];
  title: string;
  url: string;
}

export const createMetadata = ({
  title,
  description,
  url,
  imageUrl = "/opengraph-image.png",
  keywords,
}: CreateMetadataProps): Metadata => {
  return {
    title,
    description,
    ...(keywords && keywords.length > 0 ? { keywords: [...keywords] } : {}),
    alternates: { canonical: absoluteUrl(url) },
    openGraph: {
      title,
      description,
      type: "website",
      url: absoluteUrl(url),
      images: [{ url: absoluteUrl(imageUrl) }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(imageUrl)],
      creator: SITE_CONFIG.creator,
    },
  };
};

interface CreateOgImageUrlProps {
  description: string;
  title: string;
}

export const createOgImageUrl = ({
  title,
  description,
}: CreateOgImageUrlProps) => {
  return `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;
};
