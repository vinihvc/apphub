import { Button } from '@/components/primitives/button'
import { Kbd } from '@/components/primitives/kbd'
import dynamic from 'next/dynamic'
import React from 'react'

const GlobalSearchDialog = dynamic(
  () => import('@/components/dialog/global-search'),
  {
    ssr: false,
  },
)

export const HeaderSearch = () => {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)

    return () => {
      document.removeEventListener('keydown', down)
    }
  }, [])

  return (
    <>
      <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
        <Button
          className="relative h-8 w-full justify-start bg-muted/50 font-normal text-muted-foreground hover:bg-accent hover:text-accent-foreground sm:pr-12 md:w-40 lg:w-56 xl:w-64"
          onClick={() => setOpen(true)}
        >
          <span className="hidden lg:inline-flex">Search for apps...</span>

          <span className="inline-flex lg:hidden">Search...</span>
          <Kbd className="-translate-y-1/2 absolute top-1/2 right-2">⌘K</Kbd>
        </Button>
      </div>

      <GlobalSearchDialog open={open} onOpenChange={setOpen} />
    </>
  )
}
