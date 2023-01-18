'use client'

import { Heebo } from '@next/font/google'
import ThemeProviderProvider from '../context/ThemeContext'
import '../styles/globals.scss'

const heebo = Heebo({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <div className={heebo.className}>
          <ThemeProviderProvider>{children}</ThemeProviderProvider>
        </div>
      </body>
    </html>
  )
}
