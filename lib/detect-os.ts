import type { PlatformType } from '@/content/platforms'

export const detectOS = (): PlatformType => {
  if (typeof window === 'undefined') return 'windows'

  const userAgent = navigator.userAgent.toLowerCase()
  const platform = navigator.platform.toLowerCase()

  if (/iphone|ipad|ipod/.test(userAgent)) return 'ios'
  if (/android/.test(userAgent)) return 'android'
  if (/win/.test(platform) || /windows/.test(userAgent)) return 'windows'
  if (/mac/.test(platform) || /macintosh/.test(userAgent)) return 'mac'
  if (/linux/.test(platform) || /linux/.test(userAgent)) return 'linux'

  return 'windows'
}
