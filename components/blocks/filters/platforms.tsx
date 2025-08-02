'use client'

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
import { CommandInput } from 'cmdk'
import { CheckIcon, Monitor } from 'lucide-react'
import { useQueryState } from 'nuqs'
import React from 'react'

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
      (platform) => !PLATFORM_TO_REMOVE.includes(platform),
    )

    const userPlatformFirst = filteredPlatforms.sort((a, b) => {
      if (a === userPlatform) return -1
      if (b === userPlatform) return 1
      return 0
    })

    return [...userPlatformFirst, 'all']
  }, [userPlatform])

  const handleSelect = (value: string) => {
    setPlatform(value)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          variant="outline"
          className="justify-between"
          size="sm"
          {...rest}
        >
          <Monitor />
          {capitalize(platform)}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-32 p-0" align="end">
        <Command>
          <CommandInput placeholder="Search platforms..." className="sr-only" />

          <CommandList>
            <CommandGroup heading="Platforms">
              {platforms.map((item) => (
                <CommandItem
                  key={item}
                  value={item}
                  onSelect={() => handleSelect(item)}
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
