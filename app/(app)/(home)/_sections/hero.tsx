import { StarsIcon } from "lucide-react";
import Link from "next/link";
import {
  Announcement,
  AnnouncementBadge,
  AnnouncementTitle,
} from "@/components/primitives/announcement";
import { Button } from "@/components/primitives/button";
import { NavLink } from "@/components/ui/nav-link";
import { SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/cn";

interface HeroSectionProps extends React.ComponentProps<"section"> {}

export const HeroSection = (props: HeroSectionProps) => {
  const { className, ...rest } = props;

  return (
    <section
      className={cn("container flex flex-col items-center gap-6", className)}
      {...rest}
    >
      <Announcement asChild className="bg-background">
        <Link href="/apps">
          <AnnouncementBadge variant="success">
            <StarsIcon /> New apps
          </AnnouncementBadge>
          <AnnouncementTitle>
            Visit the app page to install them
          </AnnouncementTitle>
        </Link>
      </Announcement>

      <div className="flex flex-col items-center gap-6">
        <h1 className="font-semibold text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
          Welcome to
          <span className="font-bold text-primary">
            {` ${SITE_CONFIG.name}`}
          </span>
        </h1>

        <p className="mx-auto max-w-md text-pretty text-center text-lg text-muted-foreground">
          Curated list of apps for your new machine. Select all apps you want
          and we'll install them for you.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <NavLink href="/apps">Browse Apps</NavLink>
          </Button>

          <Button asChild size="lg" variant="outline">
            <NavLink href="/collections">View Collections</NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};
