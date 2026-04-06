import { Badge } from "@/components/primitives/badge";
import { ScrollArea } from "@/components/primitives/scroll-area";
import { NavLink } from "@/components/ui/nav-link";
import { ShimmerImage } from "@/components/ui/shimmer-image";
import { CATEGORY_QUERY_KEY } from "@/config/globals";
import type { AppType } from "@/content/apps";
import { cn } from "@/lib/cn";
import { capitalize, deslugify } from "@/utils/formatter";

interface HeroSectionProps extends React.ComponentProps<"div"> {
  /**
   * The app data
   */
  app: AppType;
}

export const HeroSection = (props: HeroSectionProps) => {
  const { app, className } = props;

  return (
    <div className={cn("grid gap-8", className)}>
      <div className="flex items-start gap-5">
        <ShimmerImage
          alt={`${app.name} icon`}
          className="size-16 rounded-lg object-contain"
          height={64}
          src={`/images/apps/${app.slug}.webp`}
          width={64}
        />

        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-semibold text-3xl">{app.name}</h1>
            <p className="text-muted-foreground">{app.developer}</p>
          </div>
        </div>
      </div>

      <ScrollArea>
        <div className="flex gap-2 pb-2">
          {app.category.map((category) => (
            <Badge asChild key={category}>
              <NavLink
                href={{
                  pathname: "/apps",
                  query: { [CATEGORY_QUERY_KEY]: category },
                }}
              >
                {capitalize(deslugify(category))}
              </NavLink>
            </Badge>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
