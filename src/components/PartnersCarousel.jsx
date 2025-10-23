import React from 'react'
import { motion } from 'framer-motion'

const PartnersCarousel = () => {
  // Lista de instituciones partners usando solo las imágenes que existen
  const partners = [
    {
      id: 1,
      name: "Orcamp",
      logo: "/images/logos/partners/orcamp.png",
      category: "Institución"
    },
    {
      id: 2,
      name: "Amici",
      logo: "/images/logos/partners/amici.png",
      category: "Club Deportivo"
    },
    {
      id: 3,
      name: "Coach Pérez",
      logo: "/images/logos/partners/coach-perez.png",
      category: "Entrenamiento"
    },
    {
      id: 4,
      name: "Gorila",
      logo: "/images/logos/partners/gorila.png",
      category: "Club Deportivo"
    },
    {
      id: 5,
      name: "Kutral",
      logo: "/images/logos/partners/kutral.png",
      category: "Club Deportivo"
    },
    {
      id: 6,
      name: "Liceo",
      logo: "/images/logos/partners/liceo.png",
      category: "Institución"
    },
    {
      id: 7,
      name: "Lo Manchester",
      logo: "/images/logos/partners/lomanchester.png",
      category: "Club Deportivo"
    },
    {
      id: 8,
      name: "NeuroSport Chile",
      logo: "/images/logos/partners/neuro.png",
      category: "Institución"
    },
    {
      id: 9,
      name: "Alma",
      logo: "/images/logos/partners/alma.png",
      category: "Institución"
    },
    {
      id: 10,
      name: "Ates",
      logo: "/images/logos/partners/ates.png",
      category: "Club Deportivo"
    },
    {
      id: 11,
      name: "Caribes",
      logo: "/images/logos/partners/caribes.png",
      category: "Club Deportivo"
    },
    {
      id: 12,
      name: "Dmoov",
      logo: "/images/logos/partners/dmoov.png",
      category: "Centro Deportivo"
    },
    {
      id: 13,
      name: "Espacio Social",
      logo: "/images/logos/partners/espacio-social-1.png",
      category: "Institución"
    },
    {
      id: 14,
      name: "FAM",
      logo: "/images/logos/partners/fam.png",
      category: "Club Deportivo"
    },
    {
      id: 15,
      name: "Fuerza Mov",
      logo: "/images/logos/partners/fuerza-mov.png",
      category: "Centro Deportivo"
    },
    {
      id: 16,
      name: "Global",
      logo: "/images/logos/partners/global.png",
      category: "Institución"
    },
    {
      id: 17,
      name: "Greco",
      logo: "/images/logos/partners/greco.png",
      category: "Club Deportivo"
    },
    {
      id: 18,
      name: "JRP Kinesiología",
      logo: "/images/logos/partners/jrp-kine.png",
      category: "Centro de Salud"
    },
    {
      id: 19,
      name: "Maga",
      logo: "/images/logos/partners/maga.png",
      category: "Club Deportivo"
    },
    {
      id: 20,
      name: "Men Pilates",
      logo: "/images/logos/partners/men-pilates.png",
      category: "Centro de Entrenamiento"
    },
    {
      id: 21,
      name: "Newen",
      logo: "/images/logos/partners/newen.png",
      category: "Club Deportivo"
    },
    {
      id: 22,
      name: "Ñuñoa",
      logo: "/images/logos/partners/nunoa.png",
      category: "Club Deportivo"
    },
    {
      id: 23,
      name: "Orinoco",
      logo: "/images/logos/partners/orinoco.png",
      category: "Club Deportivo"
    },
    {
      id: 24,
      name: "Palestino",
      logo: "/images/logos/partners/palestino.png",
      category: "Club Deportivo"
    },
    {
      id: 25,
      name: "Rama",
      logo: "/images/logos/partners/rama.png",
      category: "Club Deportivo"
    },
    {
      id: 26,
      name: "Unity",
      logo: "/images/logos/partners/unity.png",
      category: "Club Deportivo"
    },
    {
      id: 27,
      name: "Vikimgos",
      logo: "/images/logos/partners/vikimgos.png",
      category: "Club Deportivo"
    }
  ]

  // Duplicar partners para crear efecto de carrusel infinito
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-12 bg-white border-t border-b border-neutral-100">
      <div className="container mx-auto px-4">
        {/* Header - Más grande y prominente */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            <span className="text-neutral-900">CONFÍAN EN </span>
            <span className="text-[#11AEF4]">NOSOTROS</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Más de 50 instituciones deportivas confían en nuestro equipo
          </p>
        </motion.div>

        {/* Carrusel - Logos más grandes */}
        <div className="relative overflow-hidden py-4">
          <motion.div
            className="flex space-x-16"
            animate={{
              x: "-50%"
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear"
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                whileHover={{ y: -8, scale: 1.15 }}
                transition={{ duration: 0.3 }}
              >
                {/* Logos mucho más grandes */}
                <img 
                  src={partner.logo} 
                  alt={`Logo de ${partner.name}`}
                  className="h-24 md:h-32 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Gradientes laterales más pronunciados */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}

export default PartnersCarousel
