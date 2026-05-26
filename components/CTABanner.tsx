'use client'

export default function CTABanner() {
  return (
    <section
      style={{
        background: 'var(--color-ink)',
        padding: '120px 0',
      }}
    >
      <div className="container">
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: 'clamp(40px, 5vw, 72px)',
          color: 'white',
          marginBottom: '20px',
          lineHeight: 1.1,
        }}>
          Building something?
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '18px',
          color: 'rgba(255,255,255,0.7)',
          marginBottom: '40px',
          maxWidth: '480px',
          lineHeight: 1.6,
        }}>
          BrandGoto can have your brand, site, and automation stack live
          in 14 days. Fixed price. No retainers.
        </p>
        <a
          href="https://brandgoto.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'white',
            color: 'var(--color-ink)',
            border: 'none',
            borderRadius: '0',
            height: '48px',
            padding: '0 28px',
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-accent-muted)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'white')}
        >
          → Work with BrandGoto
        </a>
      </div>
    </section>
  )
}
