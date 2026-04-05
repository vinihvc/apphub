import { Badge } from "@/components/primitives/badge";
import { ScrollArea } from "@/components/primitives/scroll-area";
import { NavLink } from "@/components/ui/nav-link";
import { SEARCH_QUERY_KEY } from "@/config/globals";
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
    <div className={cn("grid gap-8", className)}>
      <div className="flex items-start gap-5">
        <div
          aria-hidden
          className="flex size-16 shrink-0 items-center justify-center rounded-lg border bg-muted/50"
        >
          <Icon className="size-7 text-muted-foreground" />
        </div>

        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-semibold text-3xl">{collection.title}</h1>
            <p className="text-muted-foreground">{collection.description}</p>
          </div>
        </div>
      </div>

      <ScrollArea>
        <div className="flex gap-2 pb-2">
          {collection.tags.map((tag) => (
            <Badge asChild key={tag}>
              <NavLink
                href={{
                  pathname: "/collections",
                  query: { [SEARCH_QUERY_KEY]: tag },
                }}
              >
                {tag}
              </NavLink>
            </Badge>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
