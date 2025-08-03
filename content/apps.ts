import type { CategoriesType } from './categories'

export type AppType = {
  slug: string
  name: string
  description: string
  developer: string
  category: CategoriesType[]
  platform: string[]
  website: string
  download: string
  command: {
    mac?: string
    windows?: string
    linux?: string
  }
}

export const APPS: AppType[] = [
  {
    slug: '1password',
    name: '1Password',
    description:
      'Securely store, share, and autofill passwords across all your devices.',
    developer: '1Password',
    category: ['security', 'password-manager'],
    platform: ['mac', 'ios', 'android', 'windows', 'linux'],
    website: 'https://1password.com',
    download: 'https://1password.com/downloads',
    command: {
      mac: '1password',
      windows: '1password',
      linux: '1password',
    },
  },
  {
    slug: 'slack',
    name: 'Slack',
    description:
      'A powerful communication platform that offers a focused and distraction-free communication experience.',
    developer: 'Slack Technologies, Inc.',
    category: ['communication', 'productivity'],
    platform: ['mac', 'ios', 'android', 'windows', 'linux'],
    website: 'https://slack.com',
    download: 'https://slack.com/downloads',
    command: {
      mac: 'slack',
      windows: 'slack',
      linux: 'slack',
    },
  },
  {
    slug: 'kap',
    name: 'Kap',
    description: 'Screen capture and video recording for Mac.',
    developer: 'Kap, Inc.',
    category: ['productivity', 'recording'],
    platform: ['mac'],
    website: 'https://getkap.co',
    download: 'https://getkap.co/',
    command: {
      mac: 'kap',
    },
  },
  {
    slug: 'hoppscotch',
    name: 'Hoppscotch',
    description:
      'The open-source API development environment used by teams to build, test, and document APIs.',
    developer: 'Hoppscotch',
    category: ['development'],
    platform: ['mac', 'windows', 'linux'],
    website: 'https://hoppscotch.io',
    download: 'https://hoppscotch.io',
    command: {
      mac: 'hoppscotch',
      windows: 'hoppscotch',
      linux: 'hoppscotch',
    },
  },
  {
    slug: 'raycast',
    name: 'Raycast',
    description:
      'Boost your productivity with hotkeys, keywords, and text expansion. Search your Mac efficiently.',
    developer: 'Raycast',
    category: ['productivity'],
    platform: ['mac', 'windows'],
    website: 'https://www.raycast.com',
    download: 'https://www.raycast.com/download',
    command: {
      mac: 'raycast',
      windows: 'raycast',
    },
  },
  {
    slug: 'granola',
    name: 'Granola',
    description:
      'Meeting notes, task lists, and more. Granola is your personal assistant.',
    developer: 'Granola',
    category: ['productivity'],
    platform: ['mac', 'windows', 'linux'],
    website: 'https://granola.app',
    download: 'https://granola.app',
    command: {
      mac: 'granola',
      windows: 'granola',
      linux: 'granola',
    },
  },
  {
    slug: 'firefox',
    name: 'Firefox',
    description: 'Fast, secure, and private web browser for Mac.',
    developer: 'Mozilla',
    category: ['browser'],
    platform: ['mac', 'windows', 'linux', 'ios', 'android'],
    website: 'https://www.firefox.com',
    download: 'https://www.firefox.com/thanks',
    command: {
      mac: 'firefox',
      windows: 'firefox',
      linux: 'firefox',
    },
  },
  {
    slug: 'chrome',
    name: 'Chrome',
    description: 'Fast, secure, and private web browser for Mac.',
    developer: 'Google',
    category: ['browser'],
    platform: ['mac', 'windows', 'linux', 'ios', 'android'],
    website: 'https://www.google.com/chrome',
    download: 'https://www.google.com/chrome/thank-you',
    command: {
      mac: 'google-chrome',
      windows: 'google-chrome',
      linux: 'google-chrome',
    },
  },
  {
    slug: 'discord',
    name: 'Discord',
    description: 'Chat, voice, and video communication for Mac.',
    developer: 'Discord',
    category: ['communication', 'productivity'],
    platform: ['mac', 'ios', 'android', 'windows', 'linux'],
    website: 'https://discord.com',
    download: 'https://discord.com/download',
    command: {
      mac: 'discord',
      windows: 'discord',
      linux: 'discord',
    },
  },
  {
    slug: 'beekeeper-studio',
    name: 'Beekeeper Studio',
    description:
      'Modern, open source database management tool for MySQL, PostgreSQL, and SQLite.',
    developer: 'Beekeeper Studio',
    category: ['database', 'development'],
    platform: ['mac', 'windows', 'linux'],
    download: 'https://www.beekeeperstudio.io/get',
    website: 'https://www.beekeeperstudio.io',
    command: {
      mac: 'beekeeper-studio',
      windows: 'beekeeper-studio',
      linux: 'beekeeper-studio',
    },
  },
  {
    slug: 'cursor',
    name: 'Cursor',
    description: 'Code faster with AI-powered coding assistance.',
    developer: 'Cursor',
    category: ['development', 'code-editor'],
    platform: ['mac', 'windows', 'linux'],
    website: 'https://www.cursor.com',
    download: 'https://cursor.com/downloads',
    command: {
      mac: 'cursor',
      windows: 'cursor',
      linux: 'cursor',
    },
  },

  {
    slug: 'iina',
    name: 'IINA',
    description: 'The modern video player for Mac.',
    developer: 'IINA',
    category: ['video-player'],
    platform: ['mac'],
    website: 'https://iina.io',
    download: 'https://iina.io/download',
    command: {
      mac: 'iina',
    },
  },
  {
    slug: 'warp',
    name: 'Warp',
    description: 'Terminal with AI-powered coding assistance.',
    developer: 'Warp',
    website: 'https://warp.dev',
    category: ['terminal', 'development'],
    platform: ['mac'],
    download: 'https://warp.dev/download',
    command: {
      mac: 'warp',
    },
  },
  {
    slug: 'gimp',
    name: 'GIMP',
    description: 'Free and open-source image editor',
    developer: 'GIMP',
    website: 'https://www.gimp.org',
    category: ['photo-editor'],
    platform: ['mac', 'windows', 'linux'],
    download: 'https://www.gimp.org/downloads',
    command: {
      mac: 'gimp',
      windows: 'gimp',
      linux: 'gimp',
    },
  },
  {
    slug: 'orbstack',
    name: 'OrbStack',
    description: 'Docker desktop alternative for Mac.',
    developer: 'OrbStack',
    category: ['development', 'docker'],
    platform: ['mac'],
    website: 'https://orbstack.dev',
    download: 'https://orbstack.dev/download',
    command: {
      mac: 'orbstack',
    },
  },
  {
    slug: 'nextdns',
    name: 'NextDNS',
    description: 'Custom DNS server that blocks ads, trackers, and malware.',
    developer: 'NextDNS',
    website: 'https://nextdns.io',
    category: ['security', 'network'],
    platform: ['mac', 'windows', 'linux'],
    download: 'https://nextdns.io',
    command: {
      mac: 'nextdns',
      windows: 'nextdns',
      linux: 'nextdns',
    },
  },
  {
    slug: 'upscayl',
    name: 'Upscayl',
    description:
      'Image upscaler. Powered by AI to upscale images to 4K and beyond.',
    developer: 'Upscayl',
    website: 'https://upscayl.org',
    category: ['utility'],
    platform: ['mac', 'windows', 'linux'],
    download: 'https://upscayl.org/download',
    command: {
      mac: 'upscayl',
      windows: 'upscayl',
      linux: 'upscayl',
    },
  },
  {
    slug: 'shottr',
    name: 'Shottr',
    description: 'Screenshot tool for Mac.',
    developer: 'Shottr',
    website: 'https://shottr.cc',
    category: ['productivity', 'screenshot'],
    platform: ['mac'],
    download: 'https://shottr.cc/download',
    command: {
      mac: 'shottr',
    },
  },
  {
    slug: 'bitwarden',
    name: 'Bitwarden',
    description: 'Password manager for Mac.',
    developer: 'Bitwarden',
    website: 'https://bitwarden.com',
    category: ['security', 'password-manager'],
    platform: ['mac', 'windows', 'linux', 'ios', 'android'],
    download: 'https://bitwarden.com/download',
    command: {
      mac: 'bitwarden',
      windows: 'bitwarden',
      linux: 'bitwarden',
    },
  },
  {
    slug: 'ghostty',
    name: 'Ghostty',
    description:
      'Fast, feature-rich, and cross-platform terminal emulator that uses platform-native UI and GPU acceleration.',
    developer: 'Ghostty',
    website: 'https://ghostty.org',
    category: ['terminal', 'development'],
    platform: ['mac', 'linux'],
    download: 'https://ghostty.org/download',
    command: {
      mac: 'ghostty',
      linux: 'ghostty',
    },
  },
  {
    slug: 'ice',
    name: 'Ice',
    description:
      'Powerful menu bar management tool. While its primary function is hiding and showing menu bar items, it aims to cover a wide variety of additional features to make it one of the most versatile menu bar tools available.',
    developer: 'Ice',
    website: 'https://icemenubar.app',
    category: ['utility', 'mac-utility'],
    platform: ['mac'],
    download: 'https://jordanbaird.gumroad.com/l/ice',
    command: {
      mac: 'ice',
    },
  },
  {
    slug: 'mediamate',
    name: 'MediaMate',
    description: 'Fresh visuals for Volume, Brightness and Now Playing.',
    developer: 'MediaMate',
    website: 'https://wouter01.github.io/MediaMate',
    category: ['mac-utility'],
    platform: ['mac'],
    download: 'https://wouter01.github.io/MediaMate',
    command: {
      mac: 'mediamate',
    },
  },
  {
    slug: 'sentinel',
    name: 'Sentinel',
    description: 'Sentinel is a GUI for controlling Gatekeeper and more.',
    developer: 'Alin Lupascu',
    website: 'https://itsalin.com/appInfo/?id=sentinel',
    category: ['mac-utility'],
    platform: ['mac'],
    download: 'https://itsalin.com/appInfo/?id=sentinel',
    command: {
      mac: 'sentinel',
    },
  },
  {
    slug: 'mos',
    name: 'Mos',
    description:
      'Mos is powerful tools allow your mouse to scroll smoothly on macOS.',
    developer: 'Mos',
    website: 'https://mos.caldis.me',
    category: ['mac-utility'],
    platform: ['mac'],
    download: 'https://mos.caldis.me',
    command: {
      mac: 'mos',
    },
  },
]
