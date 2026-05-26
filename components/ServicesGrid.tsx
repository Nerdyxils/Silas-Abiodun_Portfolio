const services = [
  {
    title: 'Full-Stack & AI Engineering',
    body: 'React, Next.js, Node.js, Python, TypeScript. I build end-to-end — database schema to deployed UI, API to automation pipeline.',
    footer: 'The technical foundation',
  },
  {
    title: 'GTM Web Systems',
    body: 'Conversion-optimised Next.js builds. Performance-tuned, SEO-ready, and connected to your actual business outcomes — not just a pretty site.',
    footer: 'The growth layer',
  },
  {
    title: 'AI Automation',
    body: 'Claude API, OpenAI, Make.com, n8n. I automate the workflows that drain founder time — outreach systems, ops pipelines, data processing.',
    footer: 'The leverage layer',
  },
]

export default function ServicesGrid() {
  return (
    <section>
      <div className="container">
        <span className="mono-label" style={{ display: 'block', marginBottom: '24px' }}>
          [ SERVICES ]
        </span>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '20px',
          fontWeight: 500,
          color: 'var(--color-ink)',
          marginBottom: '64px',
        }}>
          Three capabilities. One integrated system.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '48px',
        }} className="services-grid">
          {services.map(({ title, body, footer }) => (
            <div key={title} style={{ borderTop: '1.5px solid var(--color-ink)', paddingTop: '24px' }}>
              <h3 style={{
                fontFamily: 'var(--font-body)',
                fontSize: '17px',
                fontWeight: 500,
                marginBottom: '16px',
              }}>
                {title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--color-ink-secondary)',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}>
                {body}
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontStyle: 'italic',
                color: 'var(--color-ink-secondary)',
                marginBottom: '16px',
              }}>
                {footer}
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
                → See work at BrandGoto
              </a>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
