import { motion } from 'framer-motion'
import { ArrowUpRight, Download, Bot, Layers, Briefcase, Users, Sparkles } from 'lucide-react'
import { profile } from '../data/portfolio'

const floatingCards = [
  {
    icon: Bot,
    label: 'AGENT IA',
    title: 'RAG System',
    position: 'top-8 -left-4 lg:-left-12',
    delay: 0.5,
  },
  {
    icon: Layers,
    label: 'API REST',
    title: 'Backend Flask',
    position: 'bottom-16 -right-4 lg:-right-8',
    delay: 0.8,
  },
]

const statIcons = [Briefcase, Sparkles, Users]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-50/60 rounded-full blur-3xl" />
        <svg className="absolute top-1/4 right-1/4 w-96 h-96 opacity-[0.03]" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-600" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-600" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-600" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-xs font-semibold tracking-widest rounded-full mb-6"
            >
              BONJOUR, JE SUIS
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4"
            >
              {profile.firstName}{' '}
              <span className="text-gradient">{profile.lastName}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 mb-2"
            >
              {profile.title.split('&')[0]}&{' '}
              <span className="text-primary-600 font-semibold">{profile.titleHighlight}</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-gray-500 mb-8 max-w-lg leading-relaxed"
            >
              {profile.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a href="#projects" className="btn-primary">
                Voir mes projets
                <ArrowUpRight size={18} />
              </a>
              <a href={profile.cvUrl} download className="btn-outline">
                <Download size={18} />
                Télécharger CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8"
            >
              {profile.stats.map((stat, i) => {
                const Icon = statIcons[i]
                return (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                      <Icon size={18} className="text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-xs text-gray-500">{stat.label}</p>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 sm:w-80 lg:w-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-400 rounded-[2rem] rotate-3 scale-105 opacity-20" />
              <motion.img
                src={profile.photo}
                alt={profile.fullName}
                className="relative w-full h-auto rounded-[2rem] object-cover shadow-2xl"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />

              {floatingCards.map((card) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: card.delay, duration: 0.5 }}
                  className={`absolute ${card.position} glass-card p-4 w-44 hidden sm:block`}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: card.delay }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <card.icon size={16} className="text-primary-600" />
                      <span className="text-[10px] font-bold tracking-wider text-primary-600">{card.label}</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-800">{card.title}</p>
                    <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '75%' }}
                        transition={{ delay: card.delay + 0.5, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
