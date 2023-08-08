import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ReduxProvider } from '@/store/provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LetoCTF',
  description: 'Удобный клиент для участия пользователя во время летней школы CTF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="ru">
          <head>
              <link rel="manifest" href="@/manifest.webmanifest"/>
          </head>
          <body className={inter.className}>
            <ReduxProvider>
                {children}
            </ReduxProvider>
          </body>
      </html>
  )
}
