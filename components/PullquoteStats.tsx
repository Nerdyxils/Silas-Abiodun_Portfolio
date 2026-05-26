'use client'

import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function CountUp({ target, suffix = '' }: { target: number | string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView || typeof target !== 'number') {
      setDisplay(String(target))
      return
    }
    const start = performance.now()
    const duration = 1000
    const raf = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setDisplay(String(Math.floor(progress * target)))
      if (progress < 1) requestAnimationFrame(raf)
      else setDisplay(String(target))
    }
    requestAnimationFrame(raf)
  }, [inView, target])

  return <span ref={ref}>{display}{suffix}</span>
}

const stats = [
  { value: 14, suffix: ' days', label: 'Average BrandGoto delivery from kickoff to live' },
  { value: '3-in-1', label: 'Brand + web engineering + AI automation as one system' },
  { value: '$0 → live', label: "How BrandGoto's own infrastructure was built" },
]

export default function PullquoteStats() {
  return (
    <section>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '60fr 40fr',
          gap: '80px',
          alignItems: 'start',
        }} className="pullquote-grid">
          <blockquote style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            color: 'var(--color-ink)',
            lineHeight: 1.3,
          }}>
            &ldquo;I stopped writing code for
            other people&apos;s visions.
            Now I build the systems that
            make founders&apos; ideas fundable.&rdquo;
          </blockquote>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {stats.map(({ value, suffix, label }, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '64px',
                  fontWeight: 300,
                  color: 'var(--color-ink)',
                  lineHeight: 1,
                }}>
                  {typeof value === 'number' ? (
                    <CountUp target={value} suffix={suffix} />
                  ) : (
                    value
                  )}
                </div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'var(--color-ink-secondary)',
                  marginTop: '6px',
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
