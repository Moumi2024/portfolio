import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiPython, SiCplusplus, SiMysql, SiSpring, SiSpringboot,
  SiApachemaven, SiGit, SiIntellijidea, SiLeetcode
} from 'react-icons/si'
import { FaDatabase, FaBrain, FaCode, FaLayerGroup, FaJava } from 'react-icons/fa'
import { HiLightningBolt, HiCode } from 'react-icons/hi'

const skillGroups = [
  {
    title: 'Languages',
    color: '#22d3ee',
    items: [
      { name: 'Java', icon: FaJava },
      { name: 'Python', icon: SiPython },
      { name: 'C++', icon: SiCplusplus },
      { name: 'SQL', icon: FaDatabase },
    ]
  },
  {
    title: 'Frameworks & Tools',
    color: '#a78bfa',
    items: [
      { name: 'Spring', icon: SiSpring },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'MySQL', icon: SiMysql },
      { name: 'MSSQL', icon: FaDatabase },
      { name: 'Maven', icon: SiApachemaven },
      { name: 'Git', icon: SiGit },
      { name: 'IntelliJ', icon: SiIntellijidea },
      { name: 'VS Code', icon: HiCode },
    ]
  },
  {
    title: 'Core Concepts',
    color: '#f472b6',
    items: [
      { name: 'OOP', icon: FaLayerGroup },
      { name: 'DBMS', icon: FaDatabase },
      { name: 'System Design', icon: FaBrain },
    ]
  },
  {
    title: 'DSA',
    color: '#34d399',
    items: [
      { name: 'LeetCode', icon: SiLeetcode },
      { name: 'Problem Solving', icon: FaCode },
    ]
  },
]

const learning = [
  { text: 'AI Tools with Python', icon: '🤖' },
  { text: 'Advanced DSA', icon: '📊' },
  { text: 'Backend Development', icon: '⚙️' },
  { text: 'System Design', icon: '🏗️' },
]

function SkillCard({ item, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.05 }}
      className="skill-card glass rounded-xl p-3 flex flex-col items-center gap-2 border border-white/5 cursor-default"
      style={{ '--hover-color': color }}
    >
      <item.icon size={22} style={{ color }} />
      <span className="font-mono text-xs text-[#8892a4]">{item.name}</span>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="font-mono text-cyan-400 text-xs tracking-[0.4em] uppercase mb-3">02. About</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-line max-w-xs mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8 border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #22d3ee20, #a78bfa20)', border: '1px solid #22d3ee30' }}>
                  <FaBrain className="text-cyan-400" size={14} />
                </div>
                <h3 className="font-display text-lg font-semibold">Who I Am</h3>
              </div>
              <p className="font-body text-[#8892a4] leading-relaxed">
                Moumi Byapari is an <span className="text-cyan-400 font-medium">B.Tech ECE</span> student
                passionate about software engineering, backend development, AI tools, and problem solving.
                Currently focused on <span className="text-violet-400 font-medium">improving DSA, Java backend development,
                and AI integration with Python</span>.
              </p>
            </div>

            {/* Currently learning */}
            <div className="glass rounded-2xl p-8 border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #a78bfa20, #22d3ee20)', border: '1px solid #a78bfa30' }}>
                  <HiLightningBolt className="text-violet-400" size={14} />
                </div>
                <h3 className="font-display text-lg font-semibold">Currently Learning</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {learning.map((item, i) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/2"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-body text-sm text-[#8892a4]">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats / Summary */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8 border border-white/5 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-semibold mb-6">Quick Stats</h3>
                {[
                  { label: 'Degree', value: 'B.Tech ECE (2027)', color: '#22d3ee' },
                  { label: 'College', value: 'Ideal Institute of Engineering', color: '#a855f7' },
                  { label: 'University', value: 'MAKAUT University', color: '#f472b6' },
                  { label: 'Status', value: 'Open to Work', color: '#34d399' },
                  { label: 'Location', value: 'West Bengal, India', color: '#fbbf24' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
                  >
                    <span className="font-mono text-xs text-[#8892a4] tracking-wider">{stat.label}</span>
                    <span className="font-body text-sm font-medium" style={{ color: stat.color }}>{stat.value}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5">
                <p className="font-mono text-xs text-cyan-400 leading-relaxed">
                  {'>'} Actively seeking internships & entry-level roles in Software Developer
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h3 className="font-display text-2xl font-bold text-center mb-12">
            Technical <span className="gradient-text">Skills</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: gi * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 border border-white/5"
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1 h-5 rounded-full" style={{ background: group.color }} />
                <h4 className="font-display text-sm font-semibold text-white">{group.title}</h4>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {group.items.map((item, ii) => (
                  <SkillCard key={item.name} item={item} color={group.color} index={gi * 8 + ii} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
