import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills, tools, experience, education } from '../data/portfolio'

function SkillBar({ skill, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm font-bold text-primary-600">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-title">Outils & Compétences</p>
          <h2 className="section-heading">Mon expertise</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}

            <div className="mt-10 p-6 bg-primary-50 rounded-2xl">
              <h4 className="font-bold text-gray-900 mb-2">{experience.title}</h4>
              <p className="text-sm text-primary-600 font-medium mb-3">
                {experience.company} · {experience.period}
              </p>
              <ul className="space-y-1.5">
                {experience.description.map((item) => (
                  <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-primary-500 mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-5 gap-4 mb-10">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="aspect-square bg-white rounded-2xl border border-gray-100 shadow-card flex flex-col items-center justify-center gap-1 hover:border-primary-200 hover:shadow-glow transition-all cursor-default"
                  title={tool.name}
                >
                  <span className="text-2xl">{tool.icon}</span>
                  <span className="text-[9px] font-medium text-gray-500 text-center leading-tight px-1">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-card">
              <h4 className="font-bold text-gray-900 mb-1">Formation</h4>
              <p className="text-primary-600 font-medium text-sm">{education.school}</p>
              <p className="text-gray-600 text-sm mt-1">{education.degree}</p>
              <p className="text-gray-400 text-xs mt-1">{education.period}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {['Français (courant)', 'Anglais (intermédiaire)', 'Football', 'Voyage', 'Musique'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-gray-50 text-gray-600 text-sm rounded-full border border-gray-100">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
