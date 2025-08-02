'use client'

import { NavLink } from '@/components/ui/nav-link'
import { APP_COLLECTIONS } from '@/content/collections'
import { getApps } from '@/services/queries'
import { useRouter } from 'next/navigation'
import React from 'react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../primitives/command'
import { ShimmerImage } from '../ui/shimmer-image'

interface GlobalSearchDialogProps
  extends React.ComponentProps<typeof CommandDialog> {}

const GlobalSearchDialog = (props: GlobalSearchDialogProps) => {
  const { onOpenChange } = props

  const router = useRouter()

  const handleSelect = (slug: string) => {
    router.push(`/apps/${slug}`)
    onOpenChange?.(false)
  }

  const apps = React.useMemo(() => {
    return getApps()
  }, [])

  return (
    <CommandDialog {...props}>
      <CommandInput placeholder="Search for apps or collections..." />

      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Apps">
          {apps.map((app) => (
            <CommandItem
              key={app.slug}
              keywords={[app.name, app.developer, app.category.join(', ')]}
              onSelect={() => handleSelect(app.slug)}
              asChild
            >
              <NavLink
                className="flex w-full items-center gap-4"
                href={{ pathname: `/apps/${app.slug}` }}
              >
                <ShimmerImage
                  src={`/images/apps/${app.slug}.webp`}
                  alt={app.name}
                  width={24}
                  height={24}
                  className="rounded-md"
                />

                <div className="grid gap-1">
                  <span className="font-medium text-sm">{app.name}</span>
                  <p className="text-muted-foreground text-sm">
                    {app.developer}
                  </p>
                </div>
              </NavLink>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading="Collections">
          {APP_COLLECTIONS.map((collection) => (
            <CommandItem
              key={collection.slug}
              keywords={[collection.title, collection.description]}
              onSelect={() => handleSelect(collection.slug)}
              asChild
            >
              <NavLink href={{ pathname: `/collections/${collection.slug}` }}>
                <div className="flex w-full items-center gap-5">
                  <collection.icon className="size-6" />

                  <span className="font-medium text-sm">
                    {collection.title}
                  </span>
                </div>
              </NavLink>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}

export default GlobalSearchDialog
