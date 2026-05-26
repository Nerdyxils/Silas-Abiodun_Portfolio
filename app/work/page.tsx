import type { Metadata } from 'next'
import WorkPageClient from './WorkPageClient'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Projects and case studies from Silas Abiodun and BrandGoto.',
}

export default function WorkPage() {
  return <WorkPageClient />
}
