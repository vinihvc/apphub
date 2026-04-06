"use client";

import { CloudDownloadIcon, LayoutGrid } from "lucide-react";
import dynamic from "next/dynamic";
import { Button } from "@/components/primitives/button";
import { NavLink } from "@/components/ui/nav-link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { SITE_CONFIG } from "@/config/site";
import { useIsMobile } from "@/hooks/use-media-query";
import { cn } from "@/lib/cn";
import { HEADER_LINKS } from "./header.data";
import { HeaderSearch } from "./header.search";

const HeaderCart = dynamic(() => import("./header.cart"), {
  ssr: false,
  loading: () => (
    <Button size="icon-md" variant="ghost">
      <LayoutGrid />
    </Button>
  ),
});

export const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/48 backdrop-blur-md"
      )}
    >
      <div className="container flex h-14 w-full items-center">
        <NavLink className="mr-6 flex items-center gap-2" href="/">
          <CloudDownloadIcon className="relative size-6 text-primary" />

          <span className="hidden font-semibold text-base sm:inline-block">
            {SITE_CONFIG.name}
          </span>
        </NavLink>

        <nav className="flex flex-1 items-center">
          <div className="flex items-center gap-2">
            {HEADER_LINKS.map((link) => {
              if (isMobile && !link.showOnMobile) {
                return null;
              }

              return (
                <Button
                  asChild
                  data-view={link.showOnMobile ? "all" : "desktop"}
                  key={link.href}
                  variant="ghost"
                >
                  <NavLink
                    className="px-2 text-muted-foreground [&.active]:text-foreground"
                    href={link.href}
                  >
                    {link.label}
                  </NavLink>
                </Button>
              );
            })}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <HeaderSearch />

            <ThemeToggle />

            <HeaderCart />
          </div>
        </nav>
      </div>
    </header>
  );
};
