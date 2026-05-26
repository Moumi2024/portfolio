import { motion } from 'framer-motion'
import { HiAcademicCap, HiStar } from 'react-icons/hi'

const education = [
  {
    institution: 'Ideal Institute of Engineering',
    university: 'MAKAUT University',
    degree: 'B.Tech in Electronics & Communication Engineering',
    period: 'Expected July 2027',
    gpa: 'Currently Pursuing',
    status: 'ongoing',
    color: '#22d3ee',
    icon: '🎓',
  },
  {
    institution: 'JIS School of Polytechnic',
    university: 'JIS University',
    degree: 'Diploma in Electronics & Tele-Communication Engineering',
    period: 'Aug 2020 – Aug 2023',
    gpa: '8.08 / 10.00',
    status: 'completed',
    color: '#a78bfa',
    icon: '🏫',
  },
]

export default function Education() {
  return (
    <section id="education" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="font-mono text-cyan-400 text-xs tracking-[0.4em] uppercase mb-3">04. Background</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="section-line max-w-xs mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{ background: 'linear-gradient(to bottom, #22d3ee, #a78bfa)' }}
          />

          <div className="space-y-12">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
              >
                {/* Center dot */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 hidden md:block"
                  style={{ borderColor: edu.color, background: '#050810', boxShadow: `0 0 15px ${edu.color}60` }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                />

                {/* Card */}
                <div className="w-full md:w-5/12">
                  <motion.div
                    whileHover={{ y: -4, boxShadow: `0 20px 60px ${edu.color}20` }}
                    className="glass rounded-2xl p-6 border border-white/5 transition-all duration-400"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{edu.icon}</div>
                      <div className="flex items-center gap-2">
                        {edu.status === 'ongoing' ? (
                          <span className="flex items-center gap-1.5 font-mono text-xs px-3 py-1 rounded-full"
                            style={{ background: '#22d3ee15', color: '#22d3ee', border: '1px solid #22d3ee30' }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Ongoing
                          </span>
                        ) : (
                          <span className="flex items-center gap-1.5 font-mono text-xs px-3 py-1 rounded-full"
                            style={{ background: '#a78bfa15', color: '#a78bfa', border: '1px solid #a78bfa30' }}>
                            <HiStar size={10} />
                            Completed
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-bold mb-1" style={{ color: edu.color }}>
                      {edu.institution}
                    </h3>
                    <div className="font-mono text-xs text-[#8892a4] mb-3">{edu.university}</div>
                    <p className="font-body text-sm text-white/80 mb-4">{edu.degree}</p>

                    <div className="flex items-center justify-between">
                      <div className="font-mono text-xs text-[#8892a4]">{edu.period}</div>
                      <div className="flex items-center gap-1.5">
                        <HiAcademicCap size={14} style={{ color: edu.color }} />
                        <span className="font-mono text-xs font-medium" style={{ color: edu.color }}>
                          CGPA: {edu.gpa}
                        </span>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className="mt-4 h-px w-full"
                      style={{ background: `linear-gradient(90deg, ${edu.color}40, transparent)` }} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
