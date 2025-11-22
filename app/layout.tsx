import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { LocaleProvider } from '@/contexts/LocaleContext'
import { ThemeProvider } from '@/contexts/ThemeContext'

// Load Inter for English/Latin text fallback
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

// Note: Vazirmatn is loaded via @fontsource in globals.css
// This is the recommended approach as Vazirmatn is not available in Google Fonts

export const metadata: Metadata = {
  title: 'Paradik - B2B Marketplace',
  description: 'Connecting Iranian manufacturers with buyers worldwide',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>
          <LocaleProvider>
            <Navbar />
            <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
              {children}
            </main>
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
