'use client'

import type React from 'react'
import { CollectionCard } from '@/components/ui/collection-card'
import { cn } from '@/lib/cn'
import { useCollectionList } from './use-collection-list'

interface CollectionListBlockProps extends React.ComponentProps<'section'> {}

export const CollectionListBlock = (props: CollectionListBlockProps) => {
  const { className, ...rest } = props

  const { collections } = useCollectionList()

  return (
    <section className={cn('container grid gap-20', className)} {...rest}>
      {collections.map((collection, index) => (
        <CollectionCard
          data={collection}
          key={collection.slug}
          reverse={index % 2 === 1}
        />
      ))}
    </section>
  )
}
