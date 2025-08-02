'use client'

import type { AppType } from '@/content/apps'
import { useCommand } from '@/hooks/use-command'
import type { Button } from '../primitives/button'
import { ClipboardButton } from '../primitives/clipboard-button'

interface CopyCommandProps extends React.ComponentProps<typeof Button> {
  /**
   * The app to copy the command for
   */
  data: AppType | AppType[]
}

export const CopyCommand = (props: CopyCommandProps) => {
  const { data, children, ...rest } = props

  const command = useCommand(data)

  return (
    <ClipboardButton {...rest} value={command}>
      <span className="sr-only">Copy command</span>

      {children}
    </ClipboardButton>
  )
}
