import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Silas Abiodun thinks out loud about building products, AI automation, and the transition from developer to tech founder.',
}

function formatDate(iso: string) {
  const [year, month] = iso.split('-')
  return `${year} · ${month}`
}

export default function WritingPage() {
  const posts = getAllPosts()

  const categories = Array.from(new Set(posts.map(p => p.category)))

  return (
    <>
      <section style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container">
          <span className="mono-label" style={{ display: 'block', marginBottom: '24px' }}>
            [ WRITING ]
          </span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(40px, 6vw, 64px)',
            lineHeight: 1.1,
          }}>
            Thinking out loud.
          </h1>
        </div>
      </section>

      <section style={{ paddingTop: '0' }}>
        <div className="container">
          {posts.map(({ slug, title, date, category }) => (
            <Link
              key={slug}
              href={`/writing/${slug}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                borderTop: '0.5px solid var(--color-border)',
                padding: '20px 0',
                textDecoration: 'none',
                color: 'inherit',
              }}
              className="writing-row"
            >
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--color-ink-tertiary)',
                flexShrink: 0,
                minWidth: '72px',
              }}>
                {formatDate(date)}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                background: 'var(--color-accent-muted)',
                color: 'var(--color-accent)',
                padding: '2px 8px',
                borderRadius: '2px',
                flexShrink: 0,
              }}>
                {category}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  fontWeight: 500,
                  flex: 1,
                  transition: 'color 0.2s',
                }}
                className="writing-title"
              >
                {title}
              </span>
              <span
                style={{
                  color: 'var(--color-ink-secondary)',
                  flexShrink: 0,
                  transition: 'transform 0.2s',
                }}
                className="writing-arrow"
              >
                →
              </span>
            </Link>
          ))}
          <div style={{ borderTop: '0.5px solid var(--color-border)' }} />
        </div>
      </section>

    </>
  )
}
