'use client'

import { useState } from 'react'

const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/mawa001mi2q2wc3peaorx54y8tvgeg0p'

export default function WorkPageClient() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedEmail = email.trim()
    if (!trimmedEmail) return

    setSending(true)
    fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ email: trimmedEmail }).toString(),
    })
      .then(async res => {
        if (!res.ok) {
          const text = await res.text().catch(() => '')
          throw new Error(`Webhook request failed (${res.status}): ${text}`)
        }
        setSubmitted(true)
      })
      .catch(err => {
        // Keep UI simple: log the error for debugging.
        // If you want, we can add an inline error message next.
        console.error(err)
      })
      .finally(() => setSending(false))
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
            Work in the wild.
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            color: 'var(--color-ink-secondary)',
            maxWidth: '480px',
            lineHeight: 1.65,
            marginBottom: '48px',
          }}>
            BrandGoto case studies live on the studio site, and my own products — like OddLogic and SwiftCut — are already shipping. If you want to see new work as it lands, drop your email below. Or just reach out directly at silas@brandgoto.com.
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
                disabled={sending}
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
