import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-display text-2xl font-bold gradient-text mb-1">MB.</div>
            <div className="font-mono text-xs text-[#8892a4]">Moumi Byapari — Software Developer</div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: FaGithub, href: 'https://github.com' },
              { icon: FaLinkedin, href: 'https://linkedin.com' },
              { icon: FaInstagram, href: 'https://instagram.com' },
              { icon: FaFacebook, href: 'https://facebook.com' },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg glass flex items-center justify-center text-[#8892a4] border border-white/5 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300"
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <s.icon size={14} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="font-mono text-xs text-[#8892a4] flex items-center gap-1.5">
            Built with <FaHeart size={10} className="text-pink-400" /> by Moumi © 2026
          </div>
        </div>

        {/* Bottom line */}
        <div className="section-line mt-8" />
      </div>
    </footer>
  )
}
