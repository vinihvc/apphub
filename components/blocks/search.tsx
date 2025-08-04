'use client'

import { Search } from 'lucide-react'
import { useQueryState } from 'nuqs'
import React from 'react'
import { SEARCH_QUERY_KEY } from '@/config/globals'
import { cn } from '@/lib/cn'
import { mergeRefs } from '@/utils/merge-refs'
import { Input } from '../primitives/input'
import { Kbd } from '../primitives/kbd'

interface SearchBlockProps extends React.ComponentProps<typeof Input> {
  /**
   * The class name for the root element
   */
  rootClassName?: string
}

export const SearchBlock = (props: SearchBlockProps) => {
  const { rootClassName, className, ref, ...rest } = props

  const $ref = React.useRef<HTMLInputElement>(null)

  const [query, setQuery] = useQueryState(SEARCH_QUERY_KEY, {
    defaultValue: '',
  })

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isInput = ['INPUT', 'TEXTAREA'].includes(
        document.activeElement?.tagName || '',
      )

      if (e.key === '/' && !isInput) {
        e.preventDefault()
        $ref.current?.focus()
      }

      if (e.key === 'Escape' && document.activeElement === $ref.current) {
        setQuery('')
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [setQuery])

  return (
    <div
      className={cn(
        'group/search-input relative mx-auto w-full max-w-md',
        rootClassName,
      )}
    >
      <Search className="-translate-y-1/2 absolute top-1/2 left-3 size-4 text-muted-foreground" />

      <Input
        className={cn('h-9 bg-card ps-10 pe-10', className)}
        onChange={(e) => setQuery(e.target.value)}
        ref={mergeRefs($ref, ref)}
        value={query}
        {...rest}
      />

      <Kbd className="-translate-y-1/2 pointer-events-none absolute top-1/2 right-3 font-bold font-sans transition-all group-focus-within/search-input:opacity-0">
        <span className="sr-only">Press</span>
        <span>/</span>
      </Kbd>
    </div>
  )
}
