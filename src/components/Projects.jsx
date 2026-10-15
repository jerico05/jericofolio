import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolio'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? projects : projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-24 bg-gray-50/50">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="section-title">Projets sélectionnés</p>
            <h2 className="section-heading">Mes réalisations</h2>
          </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:gap-3 transition-all"
          >
            {showAll ? 'Voir les projets phares' : 'Voir tous les projets'}
            <ArrowUpRight size={16} />
          </button>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayed.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-shadow duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <span className="text-white/90 text-5xl font-bold">{project.title.charAt(0)}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{project.category}</p>
                    </div>
                    <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-primary-600 group-hover:border-primary-600 transition-all flex-shrink-0">
                      <ExternalLink size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
