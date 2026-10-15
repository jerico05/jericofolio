import { Heart, Linkedin, Github, Twitter } from 'lucide-react'
import { profile, navLinks } from '../data/portfolio'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                {profile.initials}
              </div>
              <span className="font-bold text-white">{profile.fullName}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Développeur Backend & AI Engineer passionné par la création de solutions intelligentes et évolutives.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-primary-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Suivez-moi</h4>
            <div className="flex gap-3">
              {[Linkedin, Github, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-3">Restez informé de mes derniers projets.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-sm outline-none focus:border-primary-500 transition-colors"
              />
              <button className="px-4 py-2.5 bg-primary-600 rounded-xl hover:bg-primary-700 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} {profile.fullName}. Tous droits réservés.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Conçu avec <Heart size={14} className="text-primary-500 fill-primary-500" /> par Kossi Senyo
          </p>
        </div>
      </div>
    </footer>
  )
}
