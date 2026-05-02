import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perps Quest — Learn Crypto Derivatives',
  description: 'The gamified way to learn perpetual contracts.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body style={{ margin: 0, padding: 0, background: '#0c0c0f' }}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}