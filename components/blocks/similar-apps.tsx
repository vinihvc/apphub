import { AppCard } from '@/components/ui/app-card'
import type { AppType } from '@/content/apps'
import { cn } from '@/lib/cn'
import { getApps } from '@/services/queries'
import React from 'react'

interface SimilarAppsProps extends React.ComponentProps<'section'> {
  /**
   * The app to get similar apps for
   */
  data: AppType
  /**
   * The number of similar apps to show
   */
  limit?: number
}

export const SimilarAppsBlock = (props: SimilarAppsProps) => {
  const { data, className, limit = 4, ...rest } = props

  const similarApps = React.useMemo(() => {
    const filteredApps = getApps().filter(
      (a) =>
        a.category.some((c) => data.category.includes(c)) &&
        a.slug !== data.slug,
    )

    return filteredApps.slice(0, limit)
  }, [data.category, data.slug, limit])

  if (similarApps.length === 0) return null

  return (
    <section className={cn('grid gap-6', className)} {...rest}>
      <h2 className="font-bold text-2xl">Similar Apps</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {similarApps.map((app) => (
          <AppCard key={app.slug} data={app} />
        ))}
      </div>
    </section>
  )
}
