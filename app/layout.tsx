import type { Metadata, Viewport } from 'next'
import { Providers } from './provider'
import '@/styles/globals.css'
import { headers } from 'next/headers'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Analytics } from '@/components/tracking/analytics'
import { META_THEME_COLORS, SITE_CONFIG } from '@/config/site'
import { fontSans } from '@/lib/fonts'
import { getPlatform } from '@/lib/platform'

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s - ${SITE_CONFIG.name}`,
  },
  metadataBase: new URL(SITE_CONFIG.url),
  description: SITE_CONFIG.description,
  keywords: ['Download', 'Apps', 'Software', 'New'],
  authors: [
    {
      name: SITE_CONFIG.author,
      url: SITE_CONFIG.url,
    },
  ],
  creator: SITE_CONFIG.author,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: '@vinihvc',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${SITE_CONFIG.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.dark,
}

const RootLayout = async ({ children }: React.PropsWithChildren) => {
  const { platform } = getPlatform(await headers())

  return (
    <html className={fontSans.variable} lang="en" suppressHydrationWarning>
      <body>
        <Providers initialData={{ platform }}>
          <Header />

          {children}

          <Footer />

          <Analytics />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
