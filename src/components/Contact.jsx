import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaCheckCircle } from 'react-icons/fa'
import { HiPaperAirplane } from 'react-icons/hi'

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'byaparimoumi@gmail.com',
    href: 'mailto:byaparimoumi@gmail.com',
    color: '#22d3ee',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+91 9641568694',
    href: 'tel:+919641568694',
    color: '#34d399',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/moumi',
    href: 'https://www.linkedin.com/in/moumibyapari',
    color: '#0ea5e9',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/moumi',
    href: 'https://github.com/Moumi2024/',
    color: '#a78bfa',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:byaparimoumi@gmail.com?subject=${subject}&body=${body}`
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    }, 1200)
  }

  return (
    <section id="contact" className="relative py-32 px-6">
      {/* BG blob */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #22d3ee, transparent)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="font-mono text-cyan-400 text-xs tracking-[0.4em] uppercase mb-3">05. Connect</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-line max-w-xs mx-auto mt-4" />
          <p className="font-body text-[#8892a4] mt-6 max-w-md mx-auto">
            Open for internships, collaborations, and exciting opportunities. Let's build something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-display text-xl font-semibold mb-8">Contact Details</h3>

            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 8, borderColor: info.color }}
                className="flex items-center gap-4 p-4 glass rounded-xl border border-white/5 transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${info.color}15`, border: `1px solid ${info.color}30` }}
                >
                  <info.icon size={16} style={{ color: info.color }} />
                </div>
                <div>
                  <div className="font-mono text-xs text-[#8892a4] mb-0.5">{info.label}</div>
                  <div className="font-body text-sm text-white/80 group-hover:text-white transition-colors">
                    {info.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social icons row */}
            <div className="flex gap-3 pt-4">
              {[
                { icon: FaGithub, href: 'https://github.com/Moumi2024/', color: '#22d3ee' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/moumibyapari', color: '#0ea5e9' },
                { icon: FaInstagram, href: 'https://www.instagram.com/https.moumi/', color: '#ec4899' },
                { icon: FaFacebook, href: 'https://www.facebook.com/share/1EDAXkftvM/?mibextid=wwXIfr', color: '#3b82f6' },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[#8892a4] border border-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.15, color: s.color, borderColor: s.color, y: -3 }}
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8 border border-white/5">
              <h3 className="font-display text-xl font-semibold mb-8">Send a Message</h3>

              <div className="space-y-5">
                <div>
                  <label className="font-mono text-xs text-[#8892a4] tracking-wider uppercase mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className="form-input w-full rounded-xl px-4 py-3 font-body text-sm text-white placeholder-[#8892a4]/50"
                    required
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-[#8892a4] tracking-wider uppercase mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    className="form-input w-full rounded-xl px-4 py-3 font-body text-sm text-white placeholder-[#8892a4]/50"
                    required
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-[#8892a4] tracking-wider uppercase mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={5}
                    className="form-input w-full rounded-xl px-4 py-3 font-body text-sm text-white placeholder-[#8892a4]/50 resize-none"
                    required
                  />
                </div>

                <motion.button
                  onClick={handleSubmit}
                  disabled={sending || sent}
                  className="w-full py-4 rounded-xl font-display text-sm font-semibold text-[#050810] flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70"
                  style={{ background: sent ? 'linear-gradient(135deg, #34d399, #059669)' : 'linear-gradient(135deg, #22d3ee, #a78bfa)' }}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(34,211,238,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {sent ? (
                    <>
                      <FaCheckCircle size={16} />
                      Message Sent!
                    </>
                  ) : sending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-[#050810]/30 border-t-[#050810] rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane size={16} className="rotate-90" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
