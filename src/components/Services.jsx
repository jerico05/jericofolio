import { motion } from 'framer-motion'
import { Server, Brain, Database, Smartphone } from 'lucide-react'
import { services } from '../data/portfolio'

const iconMap = { server: Server, brain: Brain, database: Database, smartphone: Smartphone }

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-title">Services</p>
          <h2 className="section-heading">Ce que je fais</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-glow hover:border-primary-200 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <Icon size={26} className="text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
