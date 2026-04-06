import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { CollectionListBlock } from "@/components/blocks/collection-list/collection-list";
import { LinkBox, LinkOverlay } from "@/components/primitives/link-overlay";
import { cn } from "@/lib/cn";

interface CollectionsSectionProps extends React.ComponentProps<"section"> {}

export const CollectionsSection = (props: CollectionsSectionProps) => {
  const { className, ...rest } = props;

  return (
    <section className={cn("border-t bg-card", className)} {...rest}>
      <div className="container flex flex-col gap-4">
        <LinkBox>
          <LinkOverlay asChild>
            <Link
              className="group inline-flex items-center gap-2 font-semibold"
              href="/collections"
            >
              Collections
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </LinkOverlay>
        </LinkBox>

        <CollectionListBlock />
      </div>
    </section>
  );
};
