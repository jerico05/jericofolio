import { motion } from 'framer-motion'
import { processSteps } from '../data/portfolio'

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gray-50/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-title">Mon processus</p>
          <h2 className="section-heading">Un processus simple et efficace</h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 border-t-2 border-dashed border-primary-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative text-center lg:text-left"
              >
                <div className="relative z-10 w-16 h-16 mx-auto lg:mx-0 bg-white border-2 border-primary-200 rounded-full flex items-center justify-center mb-4 shadow-soft">
                  <span className="text-lg font-bold text-primary-600">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
