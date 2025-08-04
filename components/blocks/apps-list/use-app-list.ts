import { useQueryState } from 'nuqs'
import React from 'react'
import {
  CATEGORY_QUERY_KEY,
  PLATFORM_QUERY_KEY,
  SEARCH_QUERY_KEY,
} from '@/config/globals'
import type { AppType } from '@/content/apps'
import { usePlatform } from '@/context/platform'
import { getApps } from '@/services/queries'

export const useAppList = () => {
  const { platform: userPlatform } = usePlatform()

  const [query] = useQueryState(SEARCH_QUERY_KEY)
  const [category] = useQueryState(CATEGORY_QUERY_KEY)
  const [platform] = useQueryState(PLATFORM_QUERY_KEY)

  const filteredApps = React.useMemo(() => {
    let filtered = getApps()

    if (query) {
      const searchLower = query.toLowerCase()
      filtered = filtered.filter(
        (app: AppType) =>
          app.name.toLowerCase().includes(searchLower) ||
          app.description.toLowerCase().includes(searchLower),
      )
    }

    if (category) {
      const categoryLower = category.toLowerCase()
      filtered = filtered.filter((app: AppType) =>
        app.category.some((c) => c.toLowerCase() === categoryLower),
      )
    }

    if (platform === userPlatform) {
      filtered = filtered.filter((app: AppType) =>
        app.platform.some((p) => p.toLowerCase() === userPlatform),
      )
    }

    if (platform && platform !== 'all') {
      const platformLower = platform.toLowerCase()
      filtered = filtered.filter((app: AppType) =>
        app.platform.some((p) => p.toLowerCase() === platformLower),
      )
    }

    return filtered.sort((a: AppType, b: AppType) =>
      a.name.localeCompare(b.name),
    )
  }, [query, category, platform, userPlatform])

  return {
    apps: filteredApps,
  }
}
