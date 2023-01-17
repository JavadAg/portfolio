'use client'

import { Heebo, League_Spartan } from '@next/font/google'
import { ThemeProvider } from 'next-themes'
import ThemeProviderProvider from '../context/ThemeContext'
import '../styles/globals.scss'

const league_spartan = League_Spartan({ subsets: ['latin'] })
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
