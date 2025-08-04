'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import type * as React from 'react'
import {
  PlatformProvider,
  type PlatformProviderProps,
} from '@/context/platform'

interface ProvidersProps
  extends React.ComponentProps<typeof NextThemesProvider>,
    PlatformProviderProps {}

export const Providers = (props: ProvidersProps) => {
  const { initialData, ...rest } = props

  return (
    <PlatformProvider initialData={initialData}>
      <NuqsAdapter>
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
          {...rest}
        />
      </NuqsAdapter>
    </PlatformProvider>
  )
}
