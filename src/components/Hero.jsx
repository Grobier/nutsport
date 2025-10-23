import React from 'react'
import { motion } from 'framer-motion'
import { FlipWords } from './ui/flip-words'

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

  const changingTexts = [
    "una buena alimentación",
    "el equilibrio mental", 
    "una guía profesional",
    "decisiones conscientes"
  ]

  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-white to-neutral-50">
      <div className="container-custom max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[85vh]">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight min-h-[300px] flex flex-col justify-center">
                <div className="text-[#073995] mb-4">Tu progreso</div>
                <div className="text-[#073995] mb-4">comienza con</div>
                <div className="text-[#11AEF4]">
                  <FlipWords 
                    words={changingTexts} 
                    duration={2500}
                    className="text-[#11AEF4] font-bold"
                  />
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-neutral-600 font-medium"
            >
              Evaluaciones científicas, planes personalizados y seguimiento profesional para deportistas y equipos.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-4"
            >
              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-[#073995] to-[#11AEF4] hover:from-[#073995]/90 hover:to-[#11AEF4]/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-center block text-lg shadow-lg hover:shadow-xl"
              >
                Agenda tu evaluación
              </motion.a>
            </motion.div>

            {/* Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6"
            >
              {bullets.map((bullet, index) => (
                <motion.div
                  key={bullet}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-3 h-3 bg-[#11AEF4] rounded-full flex-shrink-0"></div>
                  <span className="text-neutral-700 font-medium text-lg">{bullet}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg lg:max-w-xl">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/hero/equiponutsport.jpg" 
                  alt="Equipo NutSport - Nutricionistas y psicólogos deportivos profesionales especializados en evaluación nutricional deportiva" 
                  className="w-full h-[500px] lg:h-[650px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#073995]/10 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#11AEF4]/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#073995]/10 rounded-full blur-2xl"></div>
              
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-neutral-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#073995] to-[#11AEF4] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#073995] text-lg">+500</p>
                    <p className="text-neutral-600 text-sm">Deportistas atendidos</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero