import Link from 'next/link'

const posts = [
  {
    date: '2026 · 05',
    title: 'Why I stopped doing social media automation — and what I built instead',
    slug: 'why-i-stopped-social-media-automation',
  },
  {
    date: '2026 · 04',
    title: "The GTM gap most early-stage founders don't see until it's too late",
    slug: 'gtm-gap-founders-miss',
  },
  {
    date: '2026 · 03',
    title: 'Building BrandGoto from $0: what the first 90 days actually looked like',
    slug: 'building-brandgoto-from-zero',
  },
]

export default function WritingPreview() {
  return (
    <section id="writing">
      <div className="container">
        <span className="mono-label" style={{ display: 'block', marginBottom: '24px' }}>
          [ WRITING ]
        </span>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: '48px',
          marginBottom: '48px',
          lineHeight: 1.15,
        }}>
          Thinking out loud<br />while building.
        </h2>

        <div>
          {posts.map(({ date, title, slug }) => (
            <Link
              key={slug}
              href={`/writing/${slug}`}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '0.5px solid var(--color-border)',
                padding: '20px 0',
                textDecoration: 'none',
                color: 'inherit',
              }}
              className="writing-row"
            >
              <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--color-ink-tertiary)',
                  flexShrink: 0,
                }}>
                  {date}
                </span>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }} className="writing-title">
                  {title}
                </span>
              </div>
              <span style={{
                color: 'var(--color-ink-secondary)',
                flexShrink: 0,
                marginLeft: '16px',
                transition: 'transform 0.2s',
              }} className="writing-arrow">
                →
              </span>
            </Link>
          ))}
        </div>

        <div style={{ borderTop: '0.5px solid var(--color-border)', paddingTop: '24px', marginTop: '0' }}>
          <Link
            href="/writing"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: 'var(--color-ink)',
              borderBottom: '1px solid var(--color-ink)',
              paddingBottom: '2px',
            }}
          >
            → All writing
          </Link>
        </div>
      </div>

    </section>
  )
}
