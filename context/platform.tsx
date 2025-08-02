'use client'

import type { PlatformType } from '@/content/platforms'
import { detectOS } from '@/lib/detect-os'
import React from 'react'

interface PlatformContextType {
  /**
   * The platform of the user
   */
  platform: PlatformType
  /**
   * Whether the user is on a Windows platform
   */
  isWindows: boolean
  /**
   * Whether the user is on a Mac device
   */
  isMac: boolean
  /**
   * Whether the user is on a Linux device
   */
  isLinux: boolean
}

const PlatformContext = React.createContext({} as PlatformContextType)

export interface PlatformProviderProps extends React.PropsWithChildren {
  initialData?: {
    /**
     * The initial data to use for the platform
     */
    platform: PlatformType
  }
}

/**
 * Only desktop platforms are necessary for the app
 */
export const PlatformProvider = (props: PlatformProviderProps) => {
  const { initialData, children } = props

  const platform = initialData?.platform || detectOS()

  const isWindows = platform === 'windows'
  const isMac = platform === 'mac'
  const isLinux = platform === 'linux'

  return (
    <PlatformContext.Provider
      value={{
        platform,
        isWindows,
        isMac,
        isLinux,
      }}
    >
      {children}
    </PlatformContext.Provider>
  )
}

export const usePlatform = () => {
  const context = React.useContext(PlatformContext)

  if (!context) {
    throw new Error('usePlatform must be used within an PlatformProvider')
  }

  return context
}
