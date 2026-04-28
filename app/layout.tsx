// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perps Quest — Learn Crypto Derivatives',
  description: 'The gamified way to learn perpetual contracts, leverage, funding rates, and liquidations. Free interactive lessons and paper trading.',
  keywords: ['perps', 'perpetual contracts', 'crypto', 'defi', 'leverage', 'trading', 'learn'],
  metadataBase: new URL('https://perpsquest.app'),
  openGraph: {
    title: 'Perps Quest',
    description: 'Learn perps through interactive lessons and paper trading. No real money needed.',
    url: 'https://perpsquest.app',
    siteName: 'Perps Quest',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perps Quest — Learn Crypto Derivatives',
    description: 'The gamified way to learn perps. Interactive lessons, paper trading, real market data.',
    creator: '@perpsquest',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#0c0c0f', overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  )
}