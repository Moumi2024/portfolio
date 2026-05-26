import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaGithub, FaLinkedin, FaInstagram, FaFacebook
} from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'

const roles = [
  'Software Developer',
  'Java Backend Developer',
  'AI Engineer',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIdx]
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
        return () => clearTimeout(t)
      } else {
        setRoleIdx((roleIdx + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIdx])

  // Mouse parallax for image
  useEffect(() => {
    const move = (e) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  const socials = [
    { icon: FaGithub, href: 'https://github.com/Moumi2024/', label: 'GitHub', color: '#22d3ee' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/moumibyapari', label: 'LinkedIn', color: '#0ea5e9' },
    { icon: FaInstagram, href: 'https://www.instagram.com/https.moumi/', label: 'Instagram', color: '#ec4899' },
    { icon: FaFacebook, href: 'https://www.facebook.com/share/1EDAXkftvM/?mibextid=wwXIfr', label: 'Facebook', color: '#3b82f6' }
  ]

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG gradient blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #22d3ee, transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl"
          style={{ background: 'radial-gradient(circle, #a78bfa, transparent)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-mono text-cyan-400 text-sm tracking-[0.3em] uppercase mb-4"
            >
              &lt; Welcome &gt;
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-4"
            >
              Moumi
              <br />
              <span className="gradient-text">Byapari</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-2 mb-8 h-8"
            >
              <span className="text-[#8892a4] font-body text-lg">Aspiring</span>
              <span className="font-display text-lg text-white font-medium">
                {displayed}
                <span className="animate-blink inline-block w-0.5 h-5 bg-cyan-400 ml-0.5 align-middle"
                  style={{ animation: 'blink 1s step-end infinite' }} />
              </span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <motion.a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-body text-sm font-medium text-[#050810] transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #22d3ee, #a78bfa)' }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34,211,238,0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <HiDownload className="text-base" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex items-center gap-4"
            >
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + i * 0.1, type: 'spring' }}
                  whileHover={{
                    scale: 1.2,
                    y: -4,
                    boxShadow: `0 0 20px ${s.color}60`,
                    borderColor: s.color,
                    color: s.color,
                  }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[#8892a4] border border-white/10 transition-all duration-300"
                >
                  <s.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — Photo */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #22d3ee, #a78bfa, #22d3ee)',
                  padding: '2px',
                  borderRadius: '9999px',
                  filter: 'blur(1px)',
                }}
              />

              {/* Orbit dots */}
              {[0, 120, 240].map((deg, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    background: i === 0 ? '#22d3ee' : i === 1 ? '#a78bfa' : '#f472b6',
                    top: '50%',
                    left: '50%',
                    boxShadow: `0 0 10px currentColor`,
                  }}
                  animate={{
                    x: Math.cos((deg * Math.PI) / 180) * 180,
                    y: Math.sin((deg * Math.PI) / 180) * 180,
                    rotate: 360,
                  }}
                  transition={{
                    rotate: { duration: 8 + i * 2, repeat: Infinity, ease: 'linear' },
                    x: { duration: 8 + i * 2, repeat: Infinity, ease: 'linear' },
                    y: { duration: 8 + i * 2, repeat: Infinity, ease: 'linear' },
                  }}
                />
              ))}

              {/* Hexagon glow background */}
              <motion.div
                className="absolute -inset-8 opacity-20 blur-2xl rounded-full"
                style={{ background: 'radial-gradient(circle, #22d3ee 0%, #a78bfa 50%, transparent 70%)' }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Photo container */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotateY: mousePos.x * 10,
                  rotateX: -mousePos.y * 10,
                }}
                transition={{
                  y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                  rotateY: { duration: 0.1 },
                  rotateX: { duration: 0.1 },
                }}
                whileHover={{ scale: 1.03 }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden"
                style={{
                  border: '2px solid rgba(34,211,238,0.4)',
                  boxShadow: '0 0 40px rgba(34,211,238,0.2), 0 0 80px rgba(167,139,250,0.1), inset 0 0 40px rgba(34,211,238,0.05)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  src="/moumi.png"
                  alt="Moumi Byapari"
                  className="w-full h-full object-cover object-top"
                />
                {/* Scan line effect */}
                <motion.div
                  className="absolute left-0 right-0 h-px opacity-40 pointer-events-none"
                  style={{ background: 'linear-gradient(90deg, transparent, #22d3ee, transparent)' }}
                  animate={{ top: ['0%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
                />
                {/* Holographic overlay */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(34,211,238,0.05) 0%, transparent 50%, rgba(167,139,250,0.05) 100%)'
                  }}
                />
              </motion.div>

              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: 'spring' }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full border border-green-400/30 flex items-center gap-2 whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-green-400">Available for Opportunities</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-[#8892a4] tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8"
            style={{ background: 'linear-gradient(to bottom, #22d3ee, transparent)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
