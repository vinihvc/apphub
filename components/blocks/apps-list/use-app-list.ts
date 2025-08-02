import { CATEGORY_QUERY_KEY, SEARCH_QUERY_KEY } from '@/config/globals'
import { PLATFORM_QUERY_KEY } from '@/config/globals'
import { usePlatform } from '@/context/platform'
import { getApps } from '@/services/queries'
import { useQueryState } from 'nuqs'
import React from 'react'

export const useAppList = () => {
  const [query] = useQueryState(SEARCH_QUERY_KEY)
  const [category] = useQueryState(CATEGORY_QUERY_KEY)
  const [platform] = useQueryState(PLATFORM_QUERY_KEY)
  const { platform: userPlatform } = usePlatform()

  const filteredApps = React.useMemo(() => {
    let filtered = getApps()

    if (query) {
      const searchLower = query.toLowerCase()
      filtered = filtered.filter(
        (app) =>
          app.name.toLowerCase().includes(searchLower) ||
          app.description.toLowerCase().includes(searchLower),
      )
    }

    if (category) {
      const categoryLower = category.toLowerCase()
      filtered = filtered.filter((app) =>
        app.category.some((c) => c.toLowerCase() === categoryLower),
      )
    }

    if (platform === userPlatform) {
      filtered = filtered.filter((app) =>
        app.platform.some((p) => p.toLowerCase() === userPlatform),
      )
    }

    if (platform && platform !== 'all') {
      const platformLower = platform.toLowerCase()
      filtered = filtered.filter((app) =>
        app.platform.some((p) => p.toLowerCase() === platformLower),
      )
    }

    return filtered.sort((a, b) => a.name.localeCompare(b.name))
  }, [query, category, platform, userPlatform])

  return {
    apps: filteredApps,
  }
}
