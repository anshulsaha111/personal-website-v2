import type { Metadata } from 'next'
import { Work_Sans, Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const headline = Work_Sans({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'anshul sahai',
  description: 'I build AI systems that scale. Product Manager, builder, data scientist, thinker.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⭐</text></svg>',
      },
    ],
  },
  metadataBase: new URL('https://anshulsahai.vercel.app/'), // Replace with your actual domain
  openGraph: {
    title: 'anshul sahai',
    description: 'personal website of anshul sahai, full-time product manager & part-time builder',
    url: 'https://anshulsahai.vercel.app/', // Replace with your actual domain
    siteName: 'anshul sahai',
    images: [
      {
        url: '/og-image.png', // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'anshul sahai - AI Product Manager and Builder',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'anshul sahai',
    description: 'personal website of anshul sahai, full-time product manager & part-time builder',
    images: ['/og-image.png'], // You'll need to add this image to your public folder
    creator: '@anshulsaha111', // Uncomment and add your Twitter handle if you have one
  },
}

// Scripts to run before page renders
const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('garden-theme');
      if (theme === 'moon') {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`

const scrollScript = `
  (function() {
    if (window.history && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    
    // Run again after DOM ready and after a short delay
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        window.scrollTo(0, 0);
      });
    }
    
    window.addEventListener('load', function() {
      window.scrollTo(0, 0);
      setTimeout(function() { window.scrollTo(0, 0); }, 0);
      setTimeout(function() { window.scrollTo(0, 0); }, 100);
    });
  })();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${headline.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: scrollScript }} />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
