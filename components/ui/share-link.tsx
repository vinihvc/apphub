'use client'

import { Check, Share2 } from 'lucide-react'
import React from 'react'
import { Button } from '../primitives/button'

interface ShareLinkProps extends React.ComponentProps<typeof Button> {
  /**
   * The title of the link
   */
  title?: string
  /**
   * The URL to share
   */
  url?: string
  /**
   * The text to share
   */
  text?: string
}

export const ShareLink = (props: ShareLinkProps) => {
  const {
    children,
    url = typeof window !== 'undefined' ? window.location.href : '',
    title = 'Share this link',
    text,
    ...rest
  } = props
  const [isCopied, setIsCopied] = React.useState(false)
  const [isSharing, setIsSharing] = React.useState(false)

  const hasNativeShare =
    typeof navigator !== 'undefined' && 'share' in navigator

  const handleShare = async () => {
    if (hasNativeShare && !isSharing) {
      setIsSharing(true)

      try {
        await navigator.share({
          title,
          text,
          url,
        })
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          await handleCopy()
        }
      } finally {
        setIsSharing(false)
      }
    } else {
      await handleCopy()
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Button {...rest} onClick={handleShare} disabled={isSharing}>
      {isCopied ? <Check /> : <Share2 />}
      <span className="sr-only">{isCopied ? 'Copied!' : 'Share'}</span>
    </Button>
  )
}
