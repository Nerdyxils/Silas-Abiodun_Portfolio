'use client'

function Tag({ label }: { label: string }) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      background: 'var(--color-accent-muted)',
      color: 'var(--color-accent)',
      padding: '3px 8px',
      borderRadius: '2px',
    }}>
      {label}
    </span>
  )
}

export default function AboutPageClient() {
  return (
    <>
      <section style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container">
          <div>
            <span className="mono-label" style={{ display: 'block', marginBottom: '24px' }}>
              [ ABOUT ]
            </span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(56px, 7vw, 96px)',
              lineHeight: 1.05,
            }}>
              The long version.
            </h1>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: '0' }}>
        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            {[
              `Started as a self-taught developer. Fell in love with the intersection of systems thinking and product design. Spent years building other people's products — got very good at it.`,
              `Kept seeing the same gap. Founders with real ideas hitting a wall between "I have a product" and "I'm investor-ready." The wall is always the same three things: no coherent brand, a website that doesn't convert, and manual workflows eating all their time.`,
              `BrandGoto is my answer. A studio that delivers brand identity, a performance web build, and AI automation as one integrated system — in 14 days, at a fixed price. No retainers, no vague scopes, no "strategy decks."`,
              `I'm drawn to the moment an idea becomes real — when it turns into infrastructure you can ship, measure, and iterate. That's the line I care about: "cool" vs. shipped.`,
            ].map((para, i) => (
              <p key={i} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '17px',
                color: i === 0 ? 'var(--color-ink)' : 'var(--color-ink-secondary)',
                lineHeight: 1.75,
                marginBottom: '28px',
              }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: '0.5px solid var(--color-border)' }} />

      <section>
        <div className="container">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '17px',
            color: 'var(--color-ink-secondary)',
            marginBottom: '48px',
            fontStyle: 'italic',
          }}>
            I don&apos;t separate engineering from product thinking. Code is just the last step.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '48px',
          }} className="how-i-work-grid">
            {[
              {
                heading: 'I build in',
                body: 'Next.js, React, Node.js, Python, TypeScript, PostgreSQL, Supabase, REST & GraphQL APIs',
              },
              {
                heading: 'I design with',
                body: 'Figma — but I bias toward working code over pixel-perfect mockups. The browser is the design tool.',
              },
              {
                heading: 'I automate using',
                body: 'Claude API, OpenAI, Make.com, n8n. AI-first workflows that replace manual founder ops.',
              },
            ].map(({ heading, body }) => (
              <div key={heading} style={{ borderTop: '1px solid var(--color-border)', paddingTop: '24px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  fontWeight: 500,
                  marginBottom: '12px',
                  color: 'var(--color-ink)',
                }}>
                  {heading}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  color: 'var(--color-ink-secondary)',
                  lineHeight: 1.65,
                }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

      <hr style={{ border: 'none', borderTop: '0.5px solid var(--color-border)' }} />

      <section>
        <div className="container">
          <span className="mono-label" style={{ display: 'block', marginBottom: '48px' }}>
            [ CURRENTLY BUILDING ]
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '720px' }}>
            {[
              {
                tag: 'Ongoing',
                title: 'BrandGoto',
                body: 'GTM Infrastructure studio for early-stage founders. Brand + web + AI automation. Fixed price. 14 days.',
                href: 'https://brandgoto.com',
              },
              {
                tag: 'In progress',
                title: 'OddLogic',
                body: 'Predictive intelligence for sports markets. OddLogic Neural Core turns thousands of data points into data-driven probabilities for Football, Basketball, and Hockey.',
                href: 'https://www.getoddlogic.com/',
              },
              {
                tag: 'NEW',
                title: 'SwiftCut',
                body: 'A Shopify app — real-time urgency tracking. Turn delivery speed into sales with precise cutoffs and storefront urgency.',
                href: 'https://getswiftcut.com/',
              },
              {
                tag: 'Ideation',
                title: 'Nigeria Charity Platform',
                body: 'Ideation stage — not started yet. Exploring tech-enabled grant distribution for underserved communities in Nigeria. Next.js + Supabase. Pre-MVP.',
                href: undefined,
              },
              {
                tag: 'Internal',
                title: 'Personal AI tooling',
                body: 'Internal automation stack powering my own ops — outreach, scheduling, content, and client comms.',
                href: undefined,
              },
            ].map(({ tag, title, body, href }) => (
              <div key={title} style={{
                border: '0.5px solid var(--color-border)',
                padding: '28px',
                borderRadius: '0',
              }}>
                <div style={{ marginBottom: '12px' }}>
                  <Tag label={tag} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  fontWeight: 500,
                  marginBottom: '8px',
                }}>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                      {title}
                    </a>
                  ) : title}
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
      </section>

      <hr style={{ border: 'none', borderTop: '0.5px solid var(--color-border)' }} />

      <section>
        <div className="container">
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '40px',
            marginBottom: '40px',
          }}>
            I reply to everyone.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { label: 'LinkedIn →', href: 'https://www.linkedin.com/in/abiodun-silas-timi/' },
              { label: 'X →', href: 'https://x.com/ayomide_muyi' },
              { label: 'GitHub →', href: 'https://github.com/Nerdyxils/' },
              { label: 'Instagram →', href: 'https://www.instagram.com/xilssilas/' },
              { label: 'Email →', href: 'mailto:contact@silasabiodun.com' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '14px',
                  color: 'var(--color-ink-secondary)',
                  display: 'inline-block',
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
      </section>
    </>
  )
}
