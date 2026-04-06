import type { CategoriesType } from "./categories";

export interface AppType {
  category: CategoriesType[];
  command: {
    android?: string;
    ios?: string;
    linux?: string;
    mac?: string;
    windows?: string;
  };
  description: string;
  developer: string;
  download: string;
  name: string;
  platform: string[];
  slug: string;
  website: string;
}

export const APPS: AppType[] = [
  {
    slug: "1password",
    name: "1Password",
    description:
      "Securely store, share, and autofill passwords across all your devices.",
    developer: "1Password",
    category: ["security", "password-manager"],
    platform: ["mac", "ios", "android", "windows", "linux"],
    website: "https://1password.com",
    download: "https://1password.com/downloads",
    command: {
      android:
        "https://play.google.com/store/apps/details?id=com.onepassword.android",
      ios: "https://apps.apple.com/app/1password-password-manager/id568903335",
      linux: "1password",
      mac: "1password",
      windows: "AgileBits.1Password",
    },
  },
  {
    slug: "slack",
    name: "Slack",
    description: "A focused, distraction-free team communication platform.",
    developer: "Slack Technologies, Inc.",
    category: ["communication", "productivity"],
    platform: ["mac", "ios", "android", "windows", "linux"],
    website: "https://slack.com",
    download: "https://slack.com/downloads",
    command: {
      android: "https://play.google.com/store/apps/details?id=com.Slack",
      ios: "https://apps.apple.com/app/slack/id618783545",
      linux: "slack",
      mac: "slack",
      windows: "SlackTechnologies.Slack",
    },
  },
  {
    slug: "kap",
    name: "Kap",
    description: "Screen capture and video recording for Mac.",
    developer: "Kap, Inc.",
    category: ["productivity", "recording"],
    platform: ["mac"],
    website: "https://getkap.co",
    download: "https://getkap.co/",
    command: {
      mac: "kap",
    },
  },
  {
    slug: "hoppscotch",
    name: "Hoppscotch",
    description:
      "The open-source API development environment used by teams to build, test, and document APIs.",
    developer: "Hoppscotch",
    category: ["development"],
    platform: ["mac", "windows", "linux"],
    website: "https://hoppscotch.io",
    download: "https://hoppscotch.io",
    command: {
      mac: "hoppscotch",
      windows: "hoppscotch.Hoppscotch",
      linux: "hoppscotch",
    },
  },
  {
    slug: "raycast",
    name: "Raycast",
    description:
      "Boost your productivity with hotkeys, keywords, and text expansion.",
    developer: "Raycast",
    category: ["productivity"],
    platform: ["mac", "windows"],
    website: "https://www.raycast.com",
    download: "https://www.raycast.com/download",
    command: {
      mac: "raycast",
      windows: "Raycast.Raycast",
    },
  },
  {
    slug: "granola",
    name: "Granola",
    description:
      "Meeting notes, task lists, and more. Granola is your personal assistant.",
    developer: "Granola",
    category: ["productivity"],
    platform: ["mac", "windows", "linux"],
    website: "https://www.granola.ai/",
    download: "https://www.granola.ai/",
    command: {
      mac: "granola",
      windows: "granola",
      linux: "granola",
    },
  },
  {
    slug: "firefox",
    name: "Firefox",
    description: "Fast, secure, and private web browser.",
    developer: "Mozilla",
    category: ["browser"],
    platform: ["mac", "windows", "linux", "ios", "android"],
    website: "https://www.firefox.com",
    download: "https://www.firefox.com/thanks",
    command: {
      android:
        "https://play.google.com/store/apps/details?id=org.mozilla.firefox",
      ios: "https://apps.apple.com/app/firefox-web-browser/id989804926",
      linux: "firefox",
      mac: "firefox",
      windows: "Mozilla.Firefox",
    },
  },
  {
    slug: "chrome",
    name: "Chrome",
    description: "Fast, secure, and private web browser.",
    developer: "Google",
    category: ["browser"],
    platform: ["mac", "windows", "linux", "ios", "android"],
    website: "https://www.google.com/chrome",
    download: "https://www.google.com/chrome/thank-you",
    command: {
      android:
        "https://play.google.com/store/apps/details?id=com.android.chrome",
      ios: "https://apps.apple.com/app/google-chrome/id535886823",
      linux: "google-chrome-stable",
      mac: "google-chrome",
      windows: "Google.Chrome",
    },
  },
  {
    slug: "discord",
    name: "Discord",
    description: "Chat, voice, and video for teams and communities.",
    developer: "Discord",
    category: ["communication", "productivity"],
    platform: ["mac", "ios", "android", "windows", "linux"],
    website: "https://discord.com",
    download: "https://discord.com/download",
    command: {
      android: "https://play.google.com/store/apps/details?id=com.discord",
      ios: "https://apps.apple.com/app/discord-chat-for-games/id985746746",
      linux: "discord",
      mac: "discord",
      windows: "Discord.Discord",
    },
  },
  {
    slug: "beekeeper-studio",
    name: "Beekeeper Studio",
    description:
      "Modern, open source database management tool for MySQL, PostgreSQL, and SQLite.",
    developer: "Beekeeper Studio",
    category: ["database", "development"],
    platform: ["mac", "windows", "linux"],
    download: "https://www.beekeeperstudio.io/get",
    website: "https://www.beekeeperstudio.io",
    command: {
      mac: "beekeeper-studio",
      windows: "beekeeper-studio.beekeeper-studio",
      linux: "beekeeper-studio",
    },
  },
  {
    slug: "tablepro",
    name: "TablePro",
    description:
      "Native macOS database client with SQL editor, inline editing, and AI assistance. Connects to MySQL, MariaDB, PostgreSQL, SQLite, MongoDB, Redis, SQL Server, and Redshift.",
    developer: "TablePro",
    category: ["database", "development"],
    platform: ["mac"],
    website: "https://tablepro.app",
    download: "https://github.com/TableProApp/TablePro/releases",
    command: {
      mac: "tablepro",
    },
  },
  {
    slug: "cursor",
    name: "Cursor",
    description: "Code faster with AI-powered coding assistance.",
    developer: "Cursor",
    category: ["development", "code-editor"],
    platform: ["mac", "windows", "linux"],
    website: "https://www.cursor.com",
    download: "https://cursor.com/downloads",
    command: {
      mac: "cursor",
      windows: "Anysphere.Cursor",
      linux: "cursor",
    },
  },
  {
    slug: "zed",
    name: "Zed",
    description:
      "A fast, multiplayer code editor built in Rust—with real-time collaboration and a GPU-accelerated UI.",
    developer: "Zed Industries",
    category: ["development", "code-editor"],
    platform: ["mac", "windows", "linux"],
    website: "https://zed.dev",
    download: "https://zed.dev/download",
    command: {
      mac: "zed",
      windows: "ZedIndustries.Zed",
      linux: "zed",
    },
  },

  {
    slug: "iina",
    name: "IINA",
    description: "The modern video player for Mac.",
    developer: "IINA",
    category: ["video-player"],
    platform: ["mac"],
    website: "https://iina.io",
    download: "https://iina.io/download",
    command: {
      mac: "iina",
    },
  },
  {
    slug: "warp",
    name: "Warp",
    description: "Terminal with AI-powered coding assistance.",
    developer: "Warp",
    website: "https://warp.dev",
    category: ["terminal", "development"],
    platform: ["mac"],
    download: "https://warp.dev/download",
    command: {
      mac: "warp",
    },
  },
  {
    slug: "gimp",
    name: "GIMP",
    description: "Free and open-source image editor.",
    developer: "GIMP",
    website: "https://www.gimp.org",
    category: ["photo-editor"],
    platform: ["mac", "windows", "linux"],
    download: "https://www.gimp.org/downloads",
    command: {
      mac: "gimp",
      windows: "GIMP.GIMP",
      linux: "gimp",
    },
  },
  {
    slug: "orbstack",
    name: "OrbStack",
    description: "Docker Desktop alternative for Mac.",
    developer: "OrbStack",
    category: ["development", "docker"],
    platform: ["mac"],
    website: "https://orbstack.dev",
    download: "https://orbstack.dev/download",
    command: {
      mac: "orbstack",
    },
  },
  {
    slug: "nextdns",
    name: "NextDNS",
    description: "Custom DNS server that blocks ads, trackers, and malware.",
    developer: "NextDNS",
    website: "https://nextdns.io",
    category: ["security", "network"],
    platform: ["mac", "windows", "linux"],
    download: "https://nextdns.io",
    command: {
      mac: "nextdns",
      windows: "NextDNS.NextDNS",
      linux: "nextdns",
    },
  },
  {
    slug: "upscayl",
    name: "Upscayl",
    description:
      "Image upscaler. Powered by AI to upscale images to 4K and beyond.",
    developer: "Upscayl",
    website: "https://upscayl.org",
    category: ["utility"],
    platform: ["mac", "windows", "linux"],
    download: "https://upscayl.org/download",
    command: {
      mac: "upscayl",
      windows: "Upscayl.Upscayl",
      linux: "upscayl",
    },
  },
  {
    slug: "shottr",
    name: "Shottr",
    description: "Screenshot tool for Mac.",
    developer: "Shottr",
    website: "https://shottr.cc",
    category: ["productivity", "screenshot"],
    platform: ["mac"],
    download: "https://shottr.cc/download",
    command: {
      mac: "shottr",
    },
  },
  {
    slug: "bitwarden",
    name: "Bitwarden",
    description:
      "Open-source password manager with secure sharing and autofill across devices.",
    developer: "Bitwarden",
    website: "https://bitwarden.com",
    category: ["security", "password-manager"],
    platform: ["mac", "windows", "linux", "ios", "android"],
    download: "https://bitwarden.com/download",
    command: {
      android:
        "https://play.google.com/store/apps/details?id=com.x8bit.bitwarden",
      ios: "https://apps.apple.com/app/bitwarden-password-manager/id1137397744",
      linux: "bitwarden",
      mac: "bitwarden",
      windows: "Bitwarden.Bitwarden",
    },
  },
  {
    slug: "ghostty",
    name: "Ghostty",
    description:
      "Fast, feature-rich, and cross-platform terminal emulator that uses platform-native UI and GPU acceleration.",
    developer: "Ghostty",
    website: "https://ghostty.org",
    category: ["terminal", "development"],
    platform: ["mac", "linux"],
    download: "https://ghostty.org/download",
    command: {
      mac: "ghostty",
      linux: "ghostty",
    },
  },
  {
    slug: "ice",
    name: "Ice",
    description:
      "Powerful menu bar management tool. While its primary function is hiding and showing menu bar items, it aims to cover a wide variety of additional features to make it one of the most versatile menu bar tools available.",
    developer: "Ice",
    website: "https://icemenubar.app",
    category: ["utility", "mac-utility"],
    platform: ["mac"],
    download: "https://jordanbaird.gumroad.com/l/ice",
    command: {
      mac: "ice",
    },
  },
  {
    slug: "mediamate",
    name: "MediaMate",
    description: "Fresh visuals for Volume, Brightness, and Now Playing.",
    developer: "MediaMate",
    website: "https://wouter01.github.io/MediaMate",
    category: ["mac-utility"],
    platform: ["mac"],
    download: "https://wouter01.github.io/MediaMate",
    command: {
      mac: "mediamate",
    },
  },
  {
    slug: "sentinel",
    name: "Sentinel",
    description: "GUI for controlling Gatekeeper and more.",
    developer: "Alin Lupascu",
    website: "https://itsalin.com/appInfo/?id=sentinel",
    category: ["mac-utility"],
    platform: ["mac"],
    download: "https://itsalin.com/appInfo/?id=sentinel",
    command: {
      mac: "sentinel",
    },
  },
  {
    slug: "mos",
    name: "Mos",
    description: "Smooth mouse scrolling for macOS.",
    developer: "Mos",
    website: "https://mos.caldis.me",
    category: ["mac-utility"],
    platform: ["mac"],
    download: "https://mos.caldis.me",
    command: {
      mac: "mos",
    },
  },
  {
    slug: "linearmouse",
    name: "LinearMouse",
    description:
      "The mouse utility for Mac with per-device settings and scrolling customization.",
    developer: "LinearMouse",
    website: "https://linearmouse.app",
    category: ["mac-utility"],
    platform: ["mac"],
    download: "https://linearmouse.app",
    command: {
      mac: "linearmouse",
    },
  },
  {
    slug: "netnewswire",
    name: "NetNewsWire",
    description: "Free, open-source RSS feed reader.",
    developer: "Ranchero Software",
    website: "https://netnewswire.com",
    category: ["productivity"],
    platform: ["mac", "ios"],
    download: "https://netnewswire.com",
    command: {
      ios: "https://apps.apple.com/app/netnewswire/id1487939747",
      mac: "netnewswire",
    },
  },
  {
    slug: "obsidian",
    name: "Obsidian",
    description:
      "Local-first Markdown notes and knowledge base with plugins, backlinks, and graph view.",
    developer: "Obsidian",
    website: "https://obsidian.md",
    category: ["productivity"],
    platform: ["mac", "windows", "linux", "ios", "android"],
    download: "https://obsidian.md/download",
    command: {
      android: "https://play.google.com/store/apps/details?id=md.obsidian",
      ios: "https://apps.apple.com/app/obsidian-connected-notes/id1557175442",
      mac: "obsidian",
      windows: "Obsidian.Obsidian",
    },
  },
  {
    slug: "logseq",
    name: "Logseq",
    description:
      "Privacy-first, open-source outliner for notes, tasks, and knowledge in Markdown and Org-mode files.",
    developer: "Logseq",
    website: "https://logseq.com",
    category: ["productivity"],
    platform: ["mac", "windows", "linux", "ios", "android"],
    download: "https://logseq.com/downloads",
    command: {
      android: "https://f-droid.org/packages/com.logseq.app/",
      ios: "https://apps.apple.com/app/logseq/id1610101498",
      mac: "logseq",
      windows: "Logseq.Logseq",
    },
  },
  {
    slug: "transmission",
    name: "Transmission",
    description: "Fast, easy, free BitTorrent client.",
    developer: "Transmission Project",
    website: "https://transmissionbt.com",
    category: ["utility"],
    platform: ["mac", "windows", "linux"],
    download: "https://transmissionbt.com/download",
    command: {
      mac: "transmission",
      windows: "Transmission.Transmission",
      linux: "transmission",
    },
  },
  {
    slug: "node",
    name: "Node.js",
    description:
      "JavaScript runtime built on V8 for building server-side and CLI applications.",
    developer: "OpenJS Foundation",
    website: "https://nodejs.org",
    category: ["development"],
    platform: ["mac", "windows", "linux"],
    download: "https://nodejs.org",
    command: {
      mac: "nodeenv",
      windows: "OpenJS.NodeJS.LTS",
      linux: "nodeenv",
    },
  },
  {
    slug: "thunderbird",
    name: "Thunderbird",
    description:
      "Free, open-source email client with RSS and calendar support.",
    developer: "Mozilla",
    website: "https://www.thunderbird.net",
    category: ["communication"],
    platform: ["mac", "windows", "linux"],
    download: "https://www.thunderbird.net/download/",
    command: {
      mac: "thunderbird",
      windows: "Mozilla.Thunderbird",
      linux: "thunderbird",
    },
  },
];
