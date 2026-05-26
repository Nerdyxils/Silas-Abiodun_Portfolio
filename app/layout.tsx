import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.silasabiodun.com'),
  title: {
    default: 'Silas Abiodun — Full-Stack Developer, AI Engineer & Tech Founder',
    template: '%s — Silas Abiodun',
  },
  description:
    'Silas Abiodun is a full-stack developer and AI engineer turned tech founder. Founder of BrandGoto — GTM Infrastructure for early-stage founders. Ontario, Canada.',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.silasabiodun.com',
    siteName: 'Silas Abiodun',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@silasabiodun',
  },
  icons: {
    icon: '/Logo.png',
    apple: '/Logo.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CustomCursor />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
