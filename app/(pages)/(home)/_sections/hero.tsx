import { GridPattern } from '@/components/background/grid-pattern'
import { Badge } from '@/components/primitives/badge'
import { Button } from '@/components/primitives/button'
import { NavLink } from '@/components/ui/nav-link'
import { SITE_CONFIG } from '@/config/site'
import { cn } from '@/lib/cn'
import { ArrowRight } from 'lucide-react'

interface HeroSectionProps extends React.ComponentProps<'section'> {}

export const HeroSection = (props: HeroSectionProps) => {
  const { className, ...rest } = props

  return (
    <section
      className={cn(
        'relative min-h-96 overflow-clip bg-gradient-to-b from-emerald-100 to-background dark:from-emerald-950 ',
        className,
      )}
      {...rest}
    >
      <div className="mask-b-from-40% pointer-events-none absolute inset-0">
        <GridPattern />
      </div>

      <div className="container relative mt-20 px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4">
            <Badge variant="outline" size="lg" asChild>
              <NavLink href="/apps">
                New apps available <ArrowRight />
              </NavLink>
            </Badge>
          </div>

          <div className="flex flex-col items-center gap-6">
            <h1 className="font-semibold text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
              Welcome to
              <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text font-bold text-transparent">
                {` ${SITE_CONFIG.name}`}
              </span>
            </h1>

            <p className="max-w-2xl text-balance text-lg text-muted-foreground">
              Curated list of apps for your new machine. Select all apps you
              want and we'll install them for you
            </p>

            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <NavLink href="/apps">Browse Apps</NavLink>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <NavLink href="/collections">View Collections</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
