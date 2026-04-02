"use client";

import { Check, Share2 } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import { SITE_CONFIG } from "@/config/site";
import { withUtmSource } from "@/utils/url";
import { Button } from "../primitives/button";

interface ShareLinkProps extends React.ComponentProps<typeof Button> {
  /**
   * The text to share
   */
  text?: string;
  /**
   * The title of the link
   */
  title?: string;
  /**
   * Overrides the canonical share URL (`SITE_CONFIG.url` + current path + `utm_source`)
   */
  url?: string;
}

export const ShareLink = (props: ShareLinkProps) => {
  const pathname = usePathname();
  const {
    url: urlProp,
    title = "Share this link",
    text,
    children,
    ...rest
  } = props;

  const url = React.useMemo(
    () => urlProp ?? withUtmSource(new URL(pathname, SITE_CONFIG.url).href),
    [pathname, urlProp]
  );

  const [isCopied, setIsCopied] = React.useState(false);
  const [isSharing, setIsSharing] = React.useState(false);

  const hasNativeShare =
    typeof navigator !== "undefined" && "share" in navigator;

  const handleShare = async () => {
    if (hasNativeShare && !isSharing) {
      setIsSharing(true);

      try {
        await navigator.share({
          title,
          text,
          url,
        });
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          await handleCopy();
        }
      } finally {
        setIsSharing(false);
      }
    } else {
      await handleCopy();
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button {...rest} disabled={isSharing} onClick={handleShare}>
      {isCopied ? <Check /> : <Share2 />}
      {children}
    </Button>
  );
};
