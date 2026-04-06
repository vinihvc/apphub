import { Card, CardContent } from "@/components/primitives/card";
import { CartButton } from "@/components/ui/cart-button";
import { NavLink } from "@/components/ui/nav-link";
import type { AppType } from "@/content/apps";
import { cn } from "@/lib/cn";
import { LinkBox, LinkOverlay } from "../primitives/link-overlay";
import { ShimmerImage } from "./shimmer-image";

interface AppCardProps extends React.ComponentProps<typeof Card> {
  /**
   * The data to display in the card
   */
  data: AppType;
}

export const AppCard = (props: AppCardProps) => {
  const { data, className, ...rest } = props;

  return (
    <LinkBox asChild>
      <Card className={cn("group isolate", className)} {...rest}>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShimmerImage
                alt={`${data.name} icon`}
                className="size-8 rounded-lg object-contain"
                height={32}
                src={`/images/apps/${data.slug}.webp`}
                width={32}
              />

              <LinkOverlay asChild>
                <NavLink
                  className="line-clamp-1 font-medium text-foreground text-sm"
                  href={{ pathname: `/apps/${data.slug}` }}
                >
                  {data.name}
                </NavLink>
              </LinkOverlay>
            </div>

            <CartButton className="z-10" data={data} />
          </div>
        </CardContent>
      </Card>
    </LinkBox>
  );
};
