import type { PlatformType } from '@/content/platforms'

export const IOS_REGEX = /iphone|ipad|ipod/i
export const ANDROID_REGEX = /android/i
export const WINDOWS_REGEX = /windows/i
export const LINUX_REGEX = /linux/i

export const getPlatform = (headers: Headers) => {
  const userAgent = headers.get('user-agent') ?? ''

  const getPlatformType = (): PlatformType => {
    const ua = userAgent.toLowerCase()

    if (IOS_REGEX.test(ua)) {
      return 'ios'
    }

    if (ANDROID_REGEX.test(ua)) {
      return 'android'
    }

    if (WINDOWS_REGEX.test(ua)) {
      return 'windows'
    }
    if (LINUX_REGEX.test(ua)) {
      return 'linux'
    }

    return 'windows'
  }

  const platform = getPlatformType()
  const isMobile = platform === 'ios' || platform === 'android'

  return {
    platform,
    isWindows: platform === 'windows',
    isMac: platform === 'mac',
    isLinux: platform === 'linux',
    isIOS: platform === 'ios',
    isAndroid: platform === 'android',
    isMobile,
    isDesktop: !isMobile,
  }
}
