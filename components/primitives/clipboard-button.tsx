'use client'

import { Check, Copy } from 'lucide-react'
import React from 'react'
import { Button } from './button'

interface ClipboardButtonProps extends React.ComponentProps<typeof Button> {
  /**
   * The value to copy
   */
  value: string
  /**
   * The duration to show the copied state
   *
   * @default 4000
   */
  duration?: number
}

export const ClipboardButton = (props: ClipboardButtonProps) => {
  const { value, onClick, children, ...rest } = props

  const [isCopied, setIsCopied] = React.useState(false)

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    onClick?.(e)

    try {
      await navigator.clipboard.writeText(value)
    } catch {
      // biome-ignore lint/suspicious/noConsole: error handling
      console.error('Failed to copy to clipboard')
    }

    setIsCopied(true)
  }

  React.useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    }
  }, [isCopied])

  return (
    <Button onClick={handleCopy} {...rest}>
      {isCopied ? <Check /> : <Copy />}

      {children}
    </Button>
  )
}
