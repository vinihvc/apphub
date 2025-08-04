import { ArrowRight } from 'lucide-react'
import { AppsListBlock } from '@/components/blocks/apps-list/apps-list'
import { Button } from '@/components/primitives/button'
import { NavLink } from '@/components/ui/nav-link'
import { cn } from '@/lib/cn'

interface AppsSectionProps extends React.ComponentProps<'section'> {}

export const AppsSection = (props: AppsSectionProps) => {
  const { className, ...rest } = props

  return (
    <section className={cn('py-12 md:py-16 lg:py-20', className)} {...rest}>
      <div className="container grid place-items-center gap-8">
        <div className="grid max-w-screen-sm gap-4 text-center">
          <h2 className="font-bold text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Apps for every task
          </h2>

          <p className="text-balance text-lg text-muted-foreground">
            Discover apps organized by category to help you be more productive,
            creative, and efficient
          </p>
        </div>

        <AppsListBlock />

        <div className="flex justify-center">
          <Button asChild className="group" size="lg" variant="outline">
            <NavLink href="/apps">
              See All Apps
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  )
}
