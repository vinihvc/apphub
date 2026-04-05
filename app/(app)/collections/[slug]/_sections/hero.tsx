import { ShareLink } from "@/components/ui/share-link";
import type { AppCollectionType } from "@/content/collections";
import { cn } from "@/lib/cn";

interface HeroSectionProps extends React.ComponentProps<"div"> {
  /**
   * The collection data
   */
  collection: AppCollectionType;
}

export const HeroSection = (props: HeroSectionProps) => {
  const { collection, className } = props;
  const Icon = collection.icon;

  return (
    <div
      className={cn(
        "grid items-start justify-between gap-8 sm:grid-cols-2",
        className
      )}
    >
      <div className="grid gap-8">
        <div className="flex items-center gap-4">
          <div
            aria-hidden
            className="flex size-12 shrink-0 items-center justify-center rounded-full border bg-muted/50"
          >
            <Icon className="size-4 text-muted-foreground" />
          </div>

          <h1 className="font-semibold text-xl sm:text-2xl">
            {collection.title}
          </h1>
        </div>

        <p className="text-muted-foreground">{collection.description}</p>
      </div>

      <div className="hidden justify-self-end sm:flex">
        <ShareLink size="icon-md" variant="outline" />
      </div>
    </div>
  );
};
