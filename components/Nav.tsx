'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Work' },
    { href: '/writing', label: 'Writing' },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'var(--color-paper)' : 'transparent',
        borderBottom: scrolled ? '0.5px solid var(--color-border)' : 'none',
        transition: 'background-color 0.3s ease, border-bottom 0.3s ease',
      }}>
        <div style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Link href="/" style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '20px',
            fontWeight: 400,
            color: 'var(--color-ink)',
          }}>
            SA
          </Link>

          <div style={{ display: 'flex', gap: '32px' }} className="nav-center-links">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--color-ink)',
                textDecoration: pathname === href ? 'underline' : 'none',
                textUnderlineOffset: '4px',
              }}>
                {label}
              </Link>
            ))}
          </div>

          <a
            href="https://brandgoto.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: 'var(--color-accent)',
            }}
            className="nav-brandgoto"
          >
            → BrandGoto
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-hamburger"
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              padding: '8px',
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              cursor: 'none',
            }}
          >
            <span style={{ display: 'block', width: '22px', height: '1px', background: 'var(--color-ink)' }} />
            <span style={{ display: 'block', width: '22px', height: '1px', background: 'var(--color-ink)' }} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'var(--color-paper)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '0 24px',
            }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'none',
                border: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--color-ink-tertiary)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'none',
              }}
            >
              Close
            </button>
            {([...navLinks, { href: 'https://brandgoto.com', label: '→ BrandGoto', external: true }] as { href: string; label: string; external?: boolean }[]).map(({ href, label, external }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontSize: '40px',
                      fontWeight: 300,
                      color: 'var(--color-accent)',
                      display: 'block',
                      marginBottom: '16px',
                    }}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    href={href}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontSize: '40px',
                      fontWeight: 300,
                      color: 'var(--color-ink)',
                      display: 'block',
                      marginBottom: '16px',
                    }}
                  >
                    {label}
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </>
  )
}
