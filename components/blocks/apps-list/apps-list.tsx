'use client'

import type React from 'react'
import { EmptyState } from '@/components/blocks/empty-state'
import { AppCard } from '@/components/ui/app-card'
import type { AppType } from '@/content/apps'
import { cn } from '@/lib/cn'
import { useAppList } from './use-app-list'

interface AppsListBlockProps extends React.ComponentProps<'section'> {
  /**
   * The number of apps to display.
   *
   * @default 12
   */
  limit?: number
}

export const AppsListBlock = (props: AppsListBlockProps) => {
  const { className, limit = 12, ...rest } = props

  const { apps } = useAppList()

  if (apps.length === 0) {
    return (
      <EmptyState
        description="Try a different search or filter"
        title="No apps found"
      />
    )
  }

  const slicedApps: AppType[] = apps.slice(0, limit)

  return (
    <section
      className={cn(
        'grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
        className,
      )}
      {...rest}
    >
      {slicedApps.map((app) => (
        <AppCard data={app} key={app.slug} />
      ))}
    </section>
  )
}
