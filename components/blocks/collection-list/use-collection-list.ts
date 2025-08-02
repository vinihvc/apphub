import { SEARCH_QUERY_KEY } from '@/config/globals'
import { getCollections } from '@/services/queries'
import { useQueryState } from 'nuqs'
import React from 'react'

export const useCollectionList = () => {
  const [searchQuery] = useQueryState(SEARCH_QUERY_KEY)

  const filteredCollections = React.useMemo(() => {
    let collections = getCollections()

    if (searchQuery) {
      collections = collections.filter(
        (collection) =>
          collection.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          collection.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()),
      )
    }

    return collections
  }, [searchQuery])

  return {
    collections: filteredCollections,
  }
}
