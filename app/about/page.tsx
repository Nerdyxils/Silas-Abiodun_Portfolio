import type { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = {
  title: 'About Silas Abiodun — Developer, AI Engineer, BrandGoto Founder',
  description:
    'The full story of Silas Abiodun — from self-taught developer to building BrandGoto and shipping product infrastructure.',
}

export default function AboutPage() {
  return <AboutPageClient />
}
