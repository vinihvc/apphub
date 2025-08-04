'use client'

import { CheckIcon, Filter, X } from 'lucide-react'
import { useQueryState } from 'nuqs'
import React from 'react'
import { Button } from '@/components/primitives/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/primitives/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/primitives/popover'
import { Separator } from '@/components/primitives/separator'
import { CategoryIcon } from '@/components/ui/category-icon'
import { CATEGORY_QUERY_KEY } from '@/config/globals'
import { cn } from '@/lib/cn'
import { getCategories } from '@/services/queries'
import { capitalize, deslugify } from '@/utils/formatter'

interface CategoriesFilterBlockProps
  extends React.ComponentProps<typeof Button> {}

export const CategoriesFilterBlock = (props: CategoriesFilterBlockProps) => {
  const [category, setCategory] = useQueryState(CATEGORY_QUERY_KEY, {
    defaultValue: 'all',
  })

  const [open, setOpen] = React.useState(false)

  const categories = React.useMemo(() => {
    return getCategories()
  }, [])

  const handleSelect = (value: string) => {
    setCategory(value)
    setOpen(false)
  }

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <div className="flex items-center gap-2">
        {category !== 'all' && (
          <div className="fade-in-0 slide-in-from-right-5 animate-in">
            <Button
              onClick={() => setCategory('all')}
              size="icon"
              variant="outline"
            >
              <X />
            </Button>
          </div>
        )}

        <PopoverTrigger asChild>
          <Button aria-expanded={open} size="sm" variant="outline" {...props}>
            <Filter />

            <Separator className="!h-4" orientation="vertical" />

            {capitalize(deslugify(category))}
          </Button>
        </PopoverTrigger>
      </div>

      <PopoverContent align="start" className="w-64 p-0">
        <Command>
          <CommandInput placeholder="Search categories..." />
          <CommandList>
            <CommandEmpty>No categories found.</CommandEmpty>
            <CommandGroup heading="Categories">
              {categories.map((item) => (
                <CommandItem
                  className="justify-between"
                  key={item}
                  onSelect={() => handleSelect(item)}
                  value={item}
                >
                  <div className="flex items-center gap-2">
                    <CategoryIcon className="size-4" data={item} />
                    {capitalize(deslugify(item))}
                  </div>
                  <CheckIcon
                    className={cn(
                      'mr-2 size-4',
                      category === item ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
