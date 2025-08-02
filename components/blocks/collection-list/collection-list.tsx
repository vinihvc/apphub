'use client'

import { CollectionCard } from '@/components/ui/collection-card'
import { cn } from '@/lib/cn'
import type React from 'react'
import { useCollectionList } from './use-collection-list'

interface CollectionListBlockProps extends React.ComponentProps<'section'> {}

export const CollectionListBlock = (props: CollectionListBlockProps) => {
  const { className, ...rest } = props

  const { collections } = useCollectionList()

  return (
    <section className={cn('container grid gap-20', className)} {...rest}>
      {collections.map((collection, index) => (
        <CollectionCard
          key={collection.slug}
          data={collection}
          reverse={index % 2 === 1}
        />
      ))}
    </section>
  )
}
