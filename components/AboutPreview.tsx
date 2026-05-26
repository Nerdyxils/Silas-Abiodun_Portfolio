import Link from 'next/link'
import Image from 'next/image'

export default function AboutPreview() {
  return (
    <section>
      <div className="container">
        <div className="about-preview-grid" style={{
          display: 'grid',
          gridTemplateColumns: '45fr 55fr',
          gap: '80px',
          alignItems: 'start',
        }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              aspectRatio: '4/5',
              width: '100%',
              overflow: 'hidden',
              position: 'relative',
              background: 'var(--color-border)',
            }}>
              <Image
                src="/silas.jpg"
                alt="Silas Abiodun"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                style={{ objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.06,
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                backgroundSize: '200px 200px',
                pointerEvents: 'none',
                mixBlendMode: 'multiply',
              }} />
            </div>
          </div>

          <div>
            <span className="mono-label" style={{ display: 'block', marginBottom: '20px' }}>
              [ ABOUT ]
            </span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: '40px',
              color: 'var(--color-ink)',
              marginBottom: '24px',
              lineHeight: 1.15,
            }}>
              The builder behind the brand.
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--color-ink-secondary)',
              lineHeight: 1.7,
              marginBottom: '16px',
            }}>
              I started as a developer. I&apos;m still a developer — just one who
              also runs a studio and thinks deeply about what separates ideas from actual businesses.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--color-ink-secondary)',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}>
              BrandGoto exists because I kept seeing the same gap: founders with
              real ideas who couldn&apos;t bridge the space between &ldquo;I have a product&rdquo;
              and &ldquo;I&apos;m investor-ready.&rdquo; The gap is infrastructure — brand,
              web, and automation. I build that infrastructure.
            </p>
            <Link
              href="/about"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--color-ink)',
                borderBottom: '1px solid var(--color-ink)',
                paddingBottom: '2px',
              }}
            >
              → The full story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
