import React from 'react'
import { motion } from 'framer-motion'

const PartnersCarousel = () => {
  // Lista de instituciones partners (usando solo las imágenes que existen)
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
      name: "Neuro",
      logo: "/images/logos/partners/neuro.png",
      category: "Institución"
    }
  ]

  // Duplicar partners para crear efecto de carrusel infinito
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-16 bg-gradient-to-r from-[#073995]/5 to-[#11AEF4]/5">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#073995] mb-4">
            Instituciones que Confían en NutSport
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Trabajamos con los principales clubes, federaciones e instituciones deportivas del país
          </p>
        </motion.div>

        {/* Carrusel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{
              x: "-50%"
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear"
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                {/* Solo el logo, más grande y sin fondo */}
                <img 
                  src={partner.logo} 
                  alt={`Logo de ${partner.name}`}
                  className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Gradientes laterales para efecto de desvanecimiento */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#073995]/5 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#073995]/5 to-transparent pointer-events-none"></div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center space-x-2 mt-8">
          {partners.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 bg-[#073995]/30 rounded-full"
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersCarousel
