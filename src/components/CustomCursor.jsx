import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [ring, setRing] = useState({ x: -100, y: -100 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    let ringX = -100, ringY = -100
    let animId

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }

    const animate = () => {
      setRing(prev => {
        ringX += (pos.x - ringX) * 0.12
        ringY += (pos.y - ringY) * 0.12
        return { x: ringX, y: ringY }
      })
      animId = requestAnimationFrame(animate)
    }

    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    const checkHover = (e) => {
      const el = e.target
      setHovering(
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.closest('a') ||
        el.closest('button') ||
        el.dataset?.hover
      )
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', checkHover)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    animId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', checkHover)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(animId)
    }
  }, [pos.x, pos.y])

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: pos.x - 4,
          top: pos.y - 4,
          transform: clicking ? 'scale(0.5)' : hovering ? 'scale(2)' : 'scale(1)',
          background: hovering ? '#a78bfa' : '#22d3ee',
        }}
      />
      <div
        className="cursor-ring"
        style={{
          left: ring.x - 16,
          top: ring.y - 16,
          transform: clicking ? 'scale(0.7)' : hovering ? 'scale(1.5)' : 'scale(1)',
          borderColor: hovering ? 'rgba(167,139,250,0.6)' : 'rgba(34,211,238,0.5)',
        }}
      />
    </>
  )
}
