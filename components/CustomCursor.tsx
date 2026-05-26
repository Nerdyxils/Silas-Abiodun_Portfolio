'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [ready, setReady] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)')
    if (coarse.matches) return

    setEnabled(true)

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setReady(true)
    }

    const onEnter = (e: Event) => {
      if ((e.target as Element).closest('a, button')) setHovered(true)
    }
    const onLeave = (e: Event) => {
      if ((e.target as Element).closest('a, button')) setHovered(false)
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)

    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
    }
  }, [])

  if (!enabled) return null

  const size = hovered ? 32 : 12
  const opacity = ready ? (hovered ? 0.6 : 1) : 0

  return (
    <div
      style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: 'var(--color-accent)',
        pointerEvents: 'none',
        zIndex: 99999,
        transform: 'translate(-50%, -50%)',
        opacity,
        transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease',
      }}
    />
  )
}
