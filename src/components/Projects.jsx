import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaJava } from 'react-icons/fa'
import { SiPython, SiSpringboot, SiMysql, SiTensorflow } from 'react-icons/si'
import { HiChip } from 'react-icons/hi'

const projects = [
  {
    title: 'Multi-level Parking Lot System',
    emoji: '🅿️',
    description:
      'Built a concurrent multi-level parking system supporting multiple vehicle types and entry/exit gates using Java OOP. Implemented real-time slot tracking, hourly billing, and scalable floor management with thread-safe structures.',
    tech: ['Java', 'OOP', 'MySQL'],
    techIcons: [FaJava, SiMysql],
    color: '#22d3ee',
    gradient: 'from-cyan-500/10 to-transparent',
    github: 'https://github.com',
    demo: null,
  },
  {
    title: 'Spring WebSocket Chat App',
    emoji: '💬',
    description:
      'Built a real-time chat application using Spring Boot and WebSocket with instant messaging, join/leave notifications, and live message broadcasting using event-driven communication.',
    tech: ['Java', 'Spring Boot', 'WebSocket', 'STOMP'],
    techIcons: [FaJava, SiSpringboot],
    color: '#a78bfa',
    gradient: 'from-violet-500/10 to-transparent',
    github: 'https://github.com',
    demo: null,
  },
  {
    title: 'CyberWatch — AI Threat Dashboard',
    emoji: '🛡️',
    description:
      'Created a real-time cybersecurity monitoring dashboard with AI-powered threat explanations, attack visualization, live attack feeds, geographic mapping, and automated IP intelligence lookup.',
    tech: ['Python', 'Streamlit', 'TensorFlow', 'APIs'],
    techIcons: [SiPython, SiTensorflow],
    color: '#f472b6',
    gradient: 'from-pink-500/10 to-transparent',
    github: 'https://github.com',
    demo: null,
  },
]

function TechBadge({ label, color }) {
  return (
    <span
      className="font-mono text-xs px-2 py-1 rounded-md border"
      style={{ color, borderColor: `${color}30`, background: `${color}08` }}
    >
      {label}
    </span>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      {/* BG accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full blur-3xl opacity-5"
          style={{ background: '#a78bfa' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="font-mono text-violet-400 text-xs tracking-[0.4em] uppercase mb-3">03. Work</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-line max-w-xs mx-auto mt-4" />
        </motion.div>

        {/* Project cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="project-card glass rounded-2xl overflow-hidden border border-white/5 flex flex-col group"
            >
              {/* Project image / placeholder */}
              <div
                className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                style={{ borderBottom: `1px solid ${project.color}20` }}
              >
                {/* Grid lines decoration */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(${project.color}40 1px, transparent 1px),
                      linear-gradient(90deg, ${project.color}40 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px'
                  }}
                />

                {/* Floating emoji icon */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                  className="text-6xl filter drop-shadow-lg z-10"
                >
                  {project.emoji}
                </motion.div>

                {/* Tech icon cluster */}
                <div className="absolute top-3 right-3 flex gap-2">
                  {project.techIcons.map((Icon, ii) => (
                    <div key={ii} className="w-8 h-8 rounded-lg flex items-center justify-center glass border border-white/10">
                      <Icon size={14} style={{ color: project.color }} />
                    </div>
                  ))}
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 left-0 w-16 h-1 rounded-r-full"
                  style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-lg font-bold mb-3 group-hover:text-white transition-colors"
                  style={{ color: 'inherit' }}>
                  {project.title}
                </h3>

                <p className="font-body text-sm text-[#8892a4] leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <TechBadge key={t} label={t} color={project.color} />
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium border transition-all duration-300 flex-1 justify-center"
                    style={{ borderColor: `${project.color}30`, color: project.color }}
                    whileHover={{
                      borderColor: project.color,
                      background: `${project.color}10`,
                      scale: 1.02,
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub size={14} />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all duration-300 justify-center"
                    style={{ background: `${project.color}15`, color: project.color }}
                    whileHover={{ scale: 1.02, background: `${project.color}25` }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt size={12} />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More projects hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-[#8892a4] hover:text-cyan-400 transition-colors duration-300 group"
            whileHover={{ x: 4 }}
          >
            View all projects on GitHub
            <FaGithub size={16} className="group-hover:scale-110 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
