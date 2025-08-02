'use client'

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
import { CheckIcon, Filter, X } from 'lucide-react'
import { useQueryState } from 'nuqs'
import React from 'react'

interface CategoriesFilterBlockProps
  extends React.ComponentProps<typeof Button> {}

export const CategoriesFilterBlock = (props: CategoriesFilterBlockProps) => {
  const { className, ...rest } = props

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
    <Popover open={open} onOpenChange={setOpen}>
      <div className="flex items-center gap-2">
        {category !== 'all' && (
          <div className="fade-in-0 slide-in-from-right-5 animate-in">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCategory('all')}
            >
              <X />
            </Button>
          </div>
        )}

        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" aria-expanded={open} {...rest}>
            <Filter />

            <>
              <Separator orientation="vertical" className="!h-4" />

              {capitalize(deslugify(category))}
            </>
          </Button>
        </PopoverTrigger>
      </div>

      <PopoverContent className="w-64 p-0" align="start">
        <Command>
          <CommandInput placeholder="Search categories..." />
          <CommandList>
            <CommandEmpty>No categories found.</CommandEmpty>
            <CommandGroup heading="Categories">
              {categories.map((item) => (
                <CommandItem
                  key={item}
                  value={item}
                  className="justify-between"
                  onSelect={() => handleSelect(item)}
                >
                  <div className="flex items-center gap-2">
                    <CategoryIcon data={item} className="size-4" />
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
