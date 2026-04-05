import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { AppsListBlock } from "@/components/blocks/apps-list/apps-list";
import { LinkBox, LinkOverlay } from "@/components/primitives/link-overlay";
import { cn } from "@/lib/cn";

export const AppsSection = (props: React.ComponentProps<"section">) => {
  const { className, ...rest } = props;

  return (
    <section
      className={cn("container flex flex-col gap-4", className)}
      {...rest}
    >
      <LinkBox>
        <LinkOverlay asChild>
          <Link
            className="group inline-flex items-center gap-2 font-semibold"
            href="/apps"
          >
            Recents added
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </LinkOverlay>
      </LinkBox>

      <AppsListBlock />
    </section>
  );
};
