'use client'

import { useState } from 'react'

export default function WorkPageClient() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="container">
        <div>
          <span className="mono-label" style={{ display: 'block', marginBottom: '24px' }}>
            [ WORK ]
          </span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(40px, 6vw, 64px)',
            lineHeight: 1.1,
            marginBottom: '24px',
          }}>
            Case studies coming.
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            color: 'var(--color-ink-secondary)',
            maxWidth: '480px',
            lineHeight: 1.65,
            marginBottom: '48px',
          }}>
            I&apos;m documenting BrandGoto&apos;s first projects.
            Get notified when they go live.
          </p>

          {submitted ? (
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--color-accent)',
                letterSpacing: '0.06em',
              }}
            >
              [ You&apos;re on the list. ]
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', gap: '0', maxWidth: '440px' }}
            >
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  height: '48px',
                  flex: 1,
                  border: '0.5px solid var(--color-border)',
                  borderRight: 'none',
                  borderRadius: '0',
                  padding: '0 16px',
                  background: 'transparent',
                  color: 'var(--color-ink)',
                  outline: 'none',
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--color-ink)')}
                onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
              />
              <button
                type="submit"
                style={{
                  background: 'var(--color-accent)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0',
                  height: '48px',
                  padding: '0 24px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  fontWeight: 500,
                  flexShrink: 0,
                  cursor: 'none',
                }}
              >
                Notify me →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
