"use client";

import type React from "react";
import type { AppType } from "@/content/apps";
import { usePlatform } from "@/context/platform";
import { cn } from "@/lib/cn";
import { withUtmSource } from "@/utils/utm";
import { AppStoreIcon } from "../icons/app-store";
import { PlayStoreIcon } from "../icons/play-store";
import { Button } from "../primitives/button";

interface VisitStoreProps extends React.ComponentProps<typeof Button> {
  /**
   * App data to visit the store for
   */
  app: AppType;
}

const ICON_MAP = {
  ios: AppStoreIcon,
  android: PlayStoreIcon,
} as const;

export const VisitStore = (props: VisitStoreProps) => {
  const { app, className, ...rest } = props;

  const { platform } = usePlatform();

  const Icon = ICON_MAP[platform as keyof typeof ICON_MAP] ?? AppStoreIcon;

  if (!(app.command.android && app.command.ios)) {
    return null;
  }

  return (
    <Button
      aria-label="Go to store"
      asChild
      className={cn("sm:hidden", className)}
      size="icon-md"
      variant="outline"
      {...rest}
    >
      <a
        href={withUtmSource(app.command[platform ?? "android"] ?? "")}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon />
        Store
      </a>
    </Button>
  );
};
