export const profile = {
  firstName: 'Kossi',
  lastName: 'Senyo',
  fullName: 'Koudozian Kossi Senyo',
  initials: 'KS',
  title: 'Développeur Backend & AI Engineer',
  titleHighlight: 'Intelligence Artificielle',
  bio: "Spécialisé dans la conception d'applications web et mobiles et l'intégration de solutions d'intelligence artificielle. Je conçois des solutions robustes, évolutives et orientées vers des besoins métiers concrets.",
  email: 'fkoudozian@gmail.com',
  phone: '+228 79 56 35 07',
  location: 'Lomé, Togo',
  website: 'jericokfolio.netlify.app',
  cvUrl: '/CV_Koudozian_Kossi_Senyo.pdf',
  photo: '/profil.jpg',
  stats: [
    { value: '2+', label: "Années d'expérience" },
    { value: '5+', label: 'Projets réalisés' },
    { value: '3+', label: 'Technologies IA' },
  ],
  social: [
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'GitHub', url: 'https://github.com', icon: 'github' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  ],
}

export const navLinks = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projets', href: '#projects' },
  { label: 'Processus', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export const projects = [
  {
    id: 1,
    title: 'TechMentor AI',
    category: 'Plateforme de mentorat IA',
    description:
      "Plateforme web de mentorat pour étudiants en informatique, intégrant un agent IA conversationnel basé sur du RAG.",
    image: '/techmentor-ai.png',
    stack: ['Next.js', 'Python', 'PostgreSQL', 'RAG', 'Docker'],
    year: '2024',
    featured: true,
  },
  {
    id: 2,
    title: 'Veloria AI',
    category: 'Assistance pédagogique IA',
    description:
      "Plateforme d'assistance pédagogique s'appuyant sur l'IA générative et le RAG pour répondre aux besoins des utilisateurs.",
    image: '/veloria-ai.png',
    stack: ['Next.js', 'Spring Boot', 'IA générative', 'RAG'],
    year: '2024',
    featured: true,
  },
  {
    id: 3,
    title: 'EventHub',
    category: 'Application mobile',
    description:
      "Application mobile de découverte et de gestion d'événements technologiques.",
    image: '/eventhub.png',
    stack: ['React Native', 'Node.js', 'PostgreSQL', 'Firebase', 'Expo'],
    year: '2024',
    featured: true,
  },
  {
    id: 4,
    title: 'StockManager',
    category: 'Application web Flask',
    description:
      'Suivi des produits, quantités et valeur du stock avec ajout, consultation, modification et suppression depuis une interface web.',
    image: '/gestion-stock.jpg',
    stack: ['Flask', 'Python', 'HTML/CSS', 'JSON'],
    year: '2025',
    featured: true,
  },
  {
    id: 5,
    title: 'Gestion des tâches',
    category: 'Application web Flask',
    description:
      'Organisation des tâches (création, liste, édition, suppression) avec persistance des données dans un fichier JSON côté serveur.',
    image: '/gestion-taches.jpg',
    stack: ['Flask', 'Python', 'HTML/CSS', 'JSON'],
    year: '2025',
    featured: true,
  },
]

export const services = [
  {
    icon: 'server',
    title: 'Développement Backend',
    description:
      'Conception et développement de APIs REST robustes avec Python, Flask, Java et Spring Boot.',
  },
  {
    icon: 'brain',
    title: 'Intelligence Artificielle',
    description:
      "Intégration d'agents IA, IA générative et systèmes RAG pour des solutions intelligentes.",
  },
  {
    icon: 'database',
    title: 'Bases de données',
    description:
      'Modélisation et optimisation de bases PostgreSQL, MySQL et MariaDB pour des performances optimales.',
  },
  {
    icon: 'smartphone',
    title: 'Applications Mobiles',
    description:
      'Développement d\'applications mobiles cross-platform avec React Native et Expo.',
  },
]

export const skills = [
  { name: 'Développement Backend', level: 90 },
  { name: 'APIs REST & CRUD', level: 92 },
  { name: 'Intelligence Artificielle', level: 85 },
  { name: 'Systèmes RAG', level: 88 },
  { name: 'Bases de données', level: 87 },
  { name: 'Développement Mobile', level: 78 },
]

export const tools = [
  { name: 'Python', icon: '🐍' },
  { name: 'Flask', icon: '🌶️' },
  { name: 'Java', icon: '☕' },
  { name: 'Spring Boot', icon: '🍃' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'React Native', icon: '📱' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Firebase', icon: '🔥' },
]

export const processSteps = [
  {
    number: '01',
    title: 'Découvrir',
    description: 'Analyse des besoins métier et définition des objectifs techniques du projet.',
  },
  {
    number: '02',
    title: 'Planifier',
    description: 'Architecture système, choix technologiques et planification des sprints.',
  },
  {
    number: '03',
    title: 'Concevoir',
    description: 'Modélisation des données, design des APIs et prototypage des interfaces.',
  },
  {
    number: '04',
    title: 'Développer',
    description: 'Implémentation backend, intégration IA et développement des fonctionnalités.',
  },
  {
    number: '05',
    title: 'Livrer',
    description: 'Tests, déploiement Docker et documentation technique complète.',
  },
]

export const experience = {
  title: 'Stagiaire en développement backend Python',
  company: 'Numerum Dev Center',
  period: '2026',
  description: [
    "Mise en place d'APIs REST avec Flask pour des applications métiers.",
    'Conception de routes CRUD et intégration avec les bases de données.',
    "Participation aux échanges techniques de l'équipe pour l'amélioration continue.",
  ],
}

export const education = {
  school: 'École Polytechnique de Lomé (EPL)',
  degree: 'Licence en Génie Logiciel',
  period: '2023 - Présent',
}
