function Tag({ label }: { label: string }) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      background: 'var(--color-accent-muted)',
      color: 'var(--color-accent)',
      padding: '3px 8px',
      borderRadius: '2px',
      letterSpacing: '0.06em',
    }}>
      {label}
    </span>
  )
}

export default function ProjectsGrid() {
  return (
    <section>
      <div className="container">
        <span className="mono-label" style={{ display: 'block', marginBottom: '48px' }}>
          [ PROJECTS ]
        </span>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '60fr 40fr',
          gap: '16px',
        }} className="projects-grid">
          <a
            href="https://brandgoto.com"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card project-card-featured"
            style={{
              border: '0.5px solid var(--color-border)',
              padding: '40px',
              borderRadius: '0',
              display: 'block',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'transform 0.2s ease, border-color 0.2s ease',
            }}
          >
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
              <Tag label="Ongoing" />
              <Tag label="Founder" />
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '36px',
              fontWeight: 400,
              marginBottom: '16px',
            }}>
              BrandGoto
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: 'var(--color-ink-secondary)',
              lineHeight: 1.7,
              marginBottom: '28px',
            }}>
              GTM Infrastructure studio for early-stage founders. Brand + web + AI automation.
              Fixed price. 14 days.
            </p>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: 'var(--color-accent)',
            }}>
              → brandgoto.com ↗
            </span>
          </a>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              {
                tag: 'Ideation',
                title: 'Nigeria Charity Platform',
                body: 'Ideation stage — not started yet. Exploring tech-enabled grant distribution for underserved communities in Nigeria. Next.js + Supabase.',
              },
              {
                tag: 'In progress',
                title: 'OddLogic',
                body: 'Predictive intelligence for sports markets. Leverage our proprietary OddLogic Neural Core to analyze thousands of data points instantly — and deliver data-driven probabilities for Football, Basketball, and Hockey.',
              },
              {
                tag: 'NEW',
                title: 'SwiftCut',
                body: 'A Shopify app — real-time urgency tracking. Turn delivery speed into sales with precise cutoffs and storefront urgency.',
              },
              {
                tag: 'Client work',
                title: 'Bible Mood App',
                body: 'AI-powered emotional wellness app with mood-based Bible verse generation. React + OpenAI.',
              },
            ].map(({ tag, title, body }) => (
              <div
                key={title}
                className="project-card"
                style={{
                  border: '0.5px solid var(--color-border)',
                  borderRadius: '0',
                  padding: '28px',
                  flex: 1,
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                }}
              >
                <div style={{ marginBottom: '16px' }}>
                  <Tag label={tag} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  fontWeight: 500,
                  marginBottom: '10px',
                }}>
                  {title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'var(--color-ink-secondary)',
                  lineHeight: 1.65,
                }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
