import type { PlatformType } from '@/content/platforms'

export const getPlatform = (headers: Headers) => {
  const userAgentString = headers.get('user-agent') || ''

  const getPlatformType = (): PlatformType => {
    const ua = userAgentString.toLowerCase()

    if (/iphone|ipad|ipod/.test(ua)) return 'ios'
    if (/android/.test(ua)) return 'android'
    if (/windows/.test(ua)) return 'windows'
    if (/macintosh|mac os/.test(ua)) return 'mac'
    if (/linux/.test(ua)) return 'linux'

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
