import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://kush10casino.vercel.app'

export const metadata: Metadata = {
  title: 'Kush Casino официальный сайт — играть онлайн через рабочее зеркало без блокировок',
  description: 'Kush Casino — официальный сайт с играми и слотами. Куш казино онлайн предлагает рабочее зеркало для входа, бонусы новым игрокам, быстрый вывод средств и круглосуточную поддержку опытных специалистов.',
  keywords: [
    'kush casino',
    'kush casino официальный сайт',
    'kush casino официальный',
    'куш казино официальный сайт',
    'куш казино официальный',
    'куш казино',
    'kush casino зеркало',
    'kush casino играть',
    'куш казино зеркало рабочее',
    'куш казино играть',
    'куш казино онлайн',
    'куш казино зеркало',
    'kush казино',
  ],
  authors: [{ name: 'Kush Casino' }],
  creator: 'Kush Casino',
  publisher: 'Kush Casino',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Kush Casino — официальный сайт для игры онлайн',
    description: 'Kush Casino — официальный сайт с играми и слотами. Куш казино онлайн предлагает рабочее зеркало для входа и быстрые выплаты.',
    url: SITE_URL,
    siteName: 'Kush Casino',
    locale: 'ru_RU',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0d0d0d',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="application-name" content="Kush Casino" />
        <meta name="msapplication-TileColor" content="#0d0d0d" />
        <meta name="theme-color" content="#0d0d0d" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="3 days" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="alternate" hrefLang="ru" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
      </head>
      <body className="kc9x_root">
        {children}
      </body>
    </html>
  )
}
