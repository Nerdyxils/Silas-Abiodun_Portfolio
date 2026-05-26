export default function HeroSection() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: '80px',
    }}>
      <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span
          className="mono-label hero-fade"
          style={{ display: 'block', marginBottom: '32px' }}
        >
          [ Full-Stack Developer · AI Engineer · Tech Founder ]
        </span>

        <h1 style={{ lineHeight: 1.05, marginBottom: '32px' }}>
          {['Building the', 'infrastructure', 'founders need.'].map((line, i) => (
            <span
              key={i}
              className="hero-fade"
              style={{
                display: 'block',
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(56px, 8vw, 110px)',
                color: 'var(--color-ink)',
                animationDelay: `${0.1 + i * 0.12}s`,
              }}
            >
              {line}
            </span>
          ))}
        </h1>

        <p
          className="hero-fade"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            color: 'var(--color-ink-secondary)',
            maxWidth: '540px',
            lineHeight: 1.6,
            marginBottom: '40px',
            animationDelay: '0.45s',
          }}
        >
          I&apos;m Silas Abiodun — a full-stack developer and AI engineer who crossed
          over to the founder side. I build BrandGoto: a GTM Infrastructure studio
          that gets early-stage founders from zero to investor-ready in 14 days.
        </p>

        <div
          className="hero-fade"
          style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', animationDelay: '0.6s' }}
        >
          <a
            href="https://brandgoto.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
            style={{
              background: 'var(--color-accent)',
              color: 'white',
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
              transition: 'transform 0.2s',
            }}
          >
            See BrandGoto →
          </a>
          <a
            href="#writing"
            className="cta-secondary"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-ink)',
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              borderBottom: '1px solid transparent',
              transition: 'border-color 0.2s',
              height: '48px',
            }}
          >
            Read my thinking ↓
          </a>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '40px' }}>
        <hr className="divider" style={{ marginBottom: '16px' }} />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <span className="mono-label">Scroll</span>
        </div>
      </div>
    </section>
  )
}
