'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ borderTop: '0.5px solid var(--color-border)', padding: '60px 0 40px' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          marginBottom: '40px',
        }} className="footer-grid">
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '18px',
              fontWeight: 400,
              marginBottom: '12px',
            }}>
              SA
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              color: 'var(--color-ink-secondary)',
              marginBottom: '20px',
              maxWidth: '280px',
              lineHeight: 1.6,
            }}>
              Full-stack developer &amp; AI engineer. Founder of BrandGoto.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              {[
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abiodun-silas-timi/' },
                { label: 'X', href: 'https://x.com/ayomide_muyi' },
                { label: 'GitHub', href: 'https://github.com/Nerdyxils/' },
                { label: 'Instagram', href: 'https://www.instagram.com/xilssilas/' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--color-ink-secondary)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-ink-secondary)')}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{
              border: '0.5px solid var(--color-border)',
              padding: '20px 24px',
              maxWidth: '260px',
              width: '100%',
            }}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                fontWeight: 500,
                marginBottom: '6px',
              }}>
                Building something?
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--color-ink-secondary)',
                marginBottom: '14px',
              }}>
                Let&apos;s talk.
              </p>
              <a
                href="https://brandgoto.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'var(--color-accent)',
                }}
              >
                → BrandGoto
              </a>
            </div>
          </div>
        </div>

        <hr className="divider" />
        <div style={{
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
        }}>
          <span className="mono-label">
            © 2026 Silas Abiodun · Ontario, Canada
          </span>
          <span className="mono-label">
            Site built with BrandGoto&apos;s own GTM stack
          </span>
        </div>
      </div>

    </footer>
  )
}
