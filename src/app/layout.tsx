import type { Metadata } from 'next'
import { Work_Sans, Libre_Baskerville } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const headline = Work_Sans({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const body = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Anshul Sahai — AI Systems Builder',
  description: 'I build AI systems that scale. Product Manager, builder, data scientist, thinker.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${headline.variable} ${body.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
