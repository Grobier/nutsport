import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  // WhatsApp configuration
  const phone = "+56949651758"
  const whatsappHref = `https://wa.me/${phone}?text=Hola%20NutSport%2C%20quiero%20agendar%20mi%20evaluación`

  const bullets = [
    'Seguimiento continuo',
    'Resultados medibles',
    'Clubes e instituciones',
    'Equipo experto'
  ]

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#073995] mb-6 leading-tight"
            >
              Rendimiento que se{' '}
              <span className="text-[#11AEF4]">mide.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed"
            >
              Evaluaciones científicas, planes personalizados y seguimiento 
              profesional para deportistas y equipos.
            </motion.p>

            {/* Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
            >
              {bullets.map((bullet, index) => (
                <motion.div
                  key={bullet}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-success rounded-full flex-shrink-0"></div>
                  <span className="text-neutral-700 font-medium">{bullet}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-center"
              >
                Agenda tu evaluación
              </motion.a>
              
              <motion.a
                href="#servicios"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-center"
              >
                Ver servicios
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Imagen del equipo NutSport */}
              <img 
                src="/images/hero/equiponutsport.jpg" 
                alt="Equipo NutSport - Nutricionistas y psicólogos deportivos" 
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#11AEF4]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#073995]/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

