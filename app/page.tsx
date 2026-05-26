import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import PullquoteStats from '@/components/PullquoteStats'
import ServicesGrid from '@/components/ServicesGrid'
import AboutPreview from '@/components/AboutPreview'
import ProjectsGrid from '@/components/ProjectsGrid'
import WritingPreview from '@/components/WritingPreview'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Silas Abiodun — Full-Stack Developer, AI Engineer & Tech Founder',
  description:
    'Silas Abiodun is a full-stack developer and AI engineer turned tech founder. Founder of BrandGoto — GTM Infrastructure for early-stage founders. Ontario, Canada.',
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <PullquoteStats />
      <hr style={{ border: 'none', borderTop: '0.5px solid var(--color-border)' }} />
      <ServicesGrid />
      <hr style={{ border: 'none', borderTop: '0.5px solid var(--color-border)' }} />
      <AboutPreview />
      <hr style={{ border: 'none', borderTop: '0.5px solid var(--color-border)' }} />
      <ProjectsGrid />
      <hr style={{ border: 'none', borderTop: '0.5px solid var(--color-border)' }} />
      <WritingPreview />
      <CTABanner />
    </>
  )
}
