import Link from "next/link";
import { NavLink } from "@/components/ui/nav-link";
import type { AppCollectionType } from "@/content/collections";
import { cn } from "@/lib/cn";
import { CopyCommand } from "./copy-command";
import { ShimmerImage } from "./shimmer-image";

interface CollectionCardProps extends React.ComponentProps<"article"> {
  /**
   * The collection to display
   */
  data: AppCollectionType;
  /**
   * Whether to reverse the order of the collection
   */
  reverse?: boolean;
}

export const CollectionCard = (props: CollectionCardProps) => {
  const { data, reverse = false, className, ...rest } = props;

  return (
    <article
      className={cn(
        "grid gap-8 md:grid-cols-2",
        { "md:flex-row-reverse": reverse },
        className
      )}
      {...rest}
    >
      <div
        className={cn("flex flex-col justify-center gap-4", {
          "md:order-2": reverse,
        })}
      >
        <div className="grid gap-1">
          <NavLink
            aria-label={`View collection ${data.title}`}
            href={{ pathname: `/collections/${data.slug}` }}
          >
            <h3 className="font-bold text-2xl tracking-tight">{data.title}</h3>
          </NavLink>

          <div className="text-pretty text-muted-foreground">
            {data.description}
          </div>
        </div>

        <div>
          <CopyCommand data={data.apps}>Copy command</CopyCommand>
        </div>
      </div>

      <div className={cn({ "md:order-1": reverse })}>
        <div className="h-full rounded-lg border bg-accent p-4">
          <div className="grid gap-4">
            <div className="flex flex-wrap items-center gap-6 max-md:justify-center">
              {data.apps.map((app) => (
                <Link
                  className="flex items-center gap-2"
                  href={{ pathname: `/apps/${app.slug}` }}
                  key={app.slug}
                >
                  <ShimmerImage
                    alt={app.name}
                    className="size-10 rounded-lg object-contain"
                    height={48}
                    key={app.slug}
                    src={`/images/apps/${app.slug}.webp`}
                    width={48}
                  />

                  <span className="sr-only">{`View ${app.name}`}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
