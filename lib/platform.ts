import type { PlatformType } from '@/content/platforms'

export const IOS_REGEX = /iphone|ipad|ipod/i
export const ANDROID_REGEX = /android/i
export const WINDOWS_REGEX = /windows/i
export const LINUX_REGEX = /linux/i
export const MAC_REGEX = /macintosh|mac os/i

export interface PlatformReturn {
  platform: PlatformType
  isDesktop: boolean
  isMobile: boolean
}

export const getPlatformFromHeaders = (headers: Headers): PlatformReturn => {
  const userAgent = headers.get('user-agent') ?? ''

  return getPlatform(userAgent)
}

export const getPlatformFromClient = (): PlatformReturn => {
  if (typeof window === 'undefined') {
    return {
      platform: 'windows',
      isMobile: false,
      isDesktop: true,
    }
  }

  const { userAgent, platform } = navigator

  return getPlatform(userAgent, platform)
}

const getPlatform = (userAgent: string, platform?: string): PlatformReturn => {
  const ua = userAgent.toLowerCase() ?? ''
  const pl = platform?.toLowerCase() ?? ''

  const getPlatformType = (): PlatformType => {
    const checks: Array<{ type: PlatformType; regex: RegExp; test: string[] }> =
      [
        { type: 'ios', regex: IOS_REGEX, test: [ua] },
        { type: 'android', regex: ANDROID_REGEX, test: [ua] },
        { type: 'mac', regex: MAC_REGEX, test: [pl, ua] },
        { type: 'windows', regex: WINDOWS_REGEX, test: [pl, ua] },
        { type: 'linux', regex: LINUX_REGEX, test: [pl, ua] },
      ]

    for (const { type, regex, test } of checks) {
      for (const value of test) {
        if (value && regex.test(value)) {
          return type
        }
      }
    }

    return 'windows'
  }

  const platformType = getPlatformType()
  const isMobile = platformType === 'ios' || platformType === 'android'

  return {
    platform: platformType,
    isDesktop: !isMobile,
    isMobile,
  }
}
