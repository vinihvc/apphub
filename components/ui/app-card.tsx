import { Ellipsis } from 'lucide-react'
import { Badge } from '@/components/primitives/badge'
import { Card, CardContent, CardFooter } from '@/components/primitives/card'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/primitives/hover-card'
import { CartButton } from '@/components/ui/cart-button'
import { NavLink } from '@/components/ui/nav-link'
import { CATEGORY_QUERY_KEY } from '@/config/globals'
import type { AppType } from '@/content/apps'
import { cn } from '@/lib/cn'
import { capitalize, deslugify } from '@/utils/formatter'
import { ShimmerImage } from './shimmer-image'

interface AppCardProps extends React.ComponentProps<typeof Card> {
  /**
   * The data to display in the card
   */
  data: AppType
}

export const AppCard = (props: AppCardProps) => {
  const { data, className, ...rest } = props

  return (
    <Card className={cn('group relative isolate', className)} {...rest}>
      <NavLink
        aria-label={`View ${data.name}`}
        className="absolute inset-0"
        href={{ pathname: `/apps/${data.slug}` }}
      />

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

            <h3 className="line-clamp-1 font-medium text-foreground text-sm">
              {data.name}
            </h3>
          </div>

          <CartButton className="z-10" data={data} />
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t p-4">
        <div className="relative flex items-center gap-2">
          {data.category.slice(0, 1).map((category) => (
            <Badge asChild key={category} variant="outline">
              <NavLink
                href={{
                  pathname: '/apps',
                  query: { [CATEGORY_QUERY_KEY]: category },
                }}
              >
                {capitalize(deslugify(category))}
              </NavLink>
            </Badge>
          ))}

          {data.category.length > 1 && (
            <HoverCard>
              <HoverCardTrigger asChild>
                <Badge className="hover:bg-accent" variant="outline">
                  <Ellipsis />
                  <span className="sr-only">More categories</span>
                </Badge>
              </HoverCardTrigger>

              <HoverCardContent className="max-w-64">
                <div className="flex flex-wrap gap-2">
                  {data.category.slice(1).map((category) => (
                    <Badge asChild key={category} variant="outline">
                      <NavLink
                        href={{
                          pathname: '/apps',
                          query: { [CATEGORY_QUERY_KEY]: category },
                        }}
                      >
                        {capitalize(deslugify(category))}
                      </NavLink>
                    </Badge>
                  ))}
                </div>
              </HoverCardContent>
            </HoverCard>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
