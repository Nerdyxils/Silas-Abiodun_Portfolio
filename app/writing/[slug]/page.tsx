import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPost } from '@/lib/posts'

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const post = getPost(params.slug)
    return { title: post.title, description: `${post.category} — Silas Abiodun` }
  } catch {
    return {}
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  let post
  try {
    post = getPost(params.slug)
  } catch {
    notFound()
  }

  const [year, month] = post.date.split('-')

  return (
    <>
      <section style={{ paddingTop: '120px', paddingBottom: '64px' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <Link
            href="/writing"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--color-ink-tertiary)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'inline-block',
              marginBottom: '40px',
            }}
          >
            ← Writing
          </Link>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--color-ink-tertiary)',
            }}>
              {year} · {month}
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              background: 'var(--color-accent-muted)',
              color: 'var(--color-accent)',
              padding: '2px 8px',
              borderRadius: '2px',
            }}>
              {post.category}
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(32px, 4vw, 52px)',
            lineHeight: 1.15,
            marginBottom: '64px',
          }}>
            {post.title}
          </h1>

          <hr style={{ border: 'none', borderTop: '0.5px solid var(--color-border)', marginBottom: '48px' }} />

          <div className="prose">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </section>

    </>
  )
}
