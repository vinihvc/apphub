'use client'

import { CommandInput } from 'cmdk'
import { CheckIcon, Monitor } from 'lucide-react'
import { useQueryState } from 'nuqs'
import React from 'react'
import { Button } from '@/components/primitives/button'
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/primitives/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/primitives/popover'
import { PLATFORM_QUERY_KEY } from '@/config/globals'
import { usePlatform } from '@/context/platform'
import { cn } from '@/lib/cn'
import { getPlatforms } from '@/services/queries'
import { capitalize } from '@/utils/formatter'

interface PlatformsFilterBlockProps
  extends React.ComponentProps<typeof Button> {}

const PLATFORM_TO_REMOVE = ['android', 'ios']

export const PlatformsFilterBlock = (props: PlatformsFilterBlockProps) => {
  const { className, ...rest } = props

  const { platform: userPlatform } = usePlatform()

  const [platform, setPlatform] = useQueryState(PLATFORM_QUERY_KEY, {
    defaultValue: userPlatform,
  })

  const [open, setOpen] = React.useState(false)

  const platforms = React.useMemo(() => {
    const filteredPlatforms = getPlatforms().filter(
      (p) => !PLATFORM_TO_REMOVE.includes(p),
    )

    const userPlatformFirst = filteredPlatforms.sort((a, b) => {
      if (a === userPlatform) {
        return -1
      }

      if (b === userPlatform) {
        return 1
      }

      return 0
    })

    return [...userPlatformFirst, 'all']
  }, [userPlatform])

  const handleSelect = (value: string) => {
    setPlatform(value)
    setOpen(false)
  }

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className={cn('justify-between', className)}
          size="sm"
          variant="outline"
          {...rest}
        >
          <Monitor />
          {capitalize(platform)}
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" className="w-32 p-0">
        <Command>
          <CommandInput className="sr-only" placeholder="Search platforms..." />

          <CommandList>
            <CommandGroup heading="Platforms">
              {platforms.map((item) => (
                <CommandItem
                  key={item}
                  onSelect={() => handleSelect(item)}
                  value={item}
                >
                  <CheckIcon
                    className={cn('opacity-0', {
                      'opacity-100': platform === item,
                    })}
                  />
                  {capitalize(item)}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
