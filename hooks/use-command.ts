import type { AppType } from '@/content/apps'
import { usePlatform } from '@/context/platform'

export const useCommand = (data: AppType | AppType[]) => {
  const { isMac, isWindows, isLinux, platform } = usePlatform()

  const command = Array.isArray(data)
    ? data
        .map((app) => {
          const commandByPlatform =
            app.command[platform as keyof typeof app.command]

          return commandByPlatform
        })
        .join(' ')
    : data.command[platform as keyof typeof data.command]

  if (isMac) {
    return `brew install ${command}`
  }

  if (isWindows) {
    return `winget install ${command}`
  }

  if (isLinux) {
    return `apt install ${command}`
  }

  return "Sorry, we don't support this platform yet."
}
