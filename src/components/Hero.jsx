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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-fixed"
        style={{ 
          backgroundImage: 'url(/images/hero/equiponutsport.jpg)',
          backgroundPosition: 'center 20%',
          zIndex: -1
        }}
      >
        {/* Overlay Negro Opaco */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container-custom max-w-5xl relative z-10">
        <div className="flex items-center justify-center min-h-[85vh]">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center space-y-8 text-center"
          >
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight min-h-[300px] flex flex-col justify-center">
                <div className="text-white mb-2 leading-none drop-shadow-lg">Tu progreso</div>
                <div className="text-white mb-2 leading-none drop-shadow-lg">comienza con</div>
                <div className="text-[#11AEF4] leading-none">
                  <FlipWords 
                    words={changingTexts} 
                    duration={2500}
                    className="text-[#11AEF4] font-extrabold leading-none tracking-tight drop-shadow-lg"
                  />
                </div>
              </div>
            </motion.div>

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
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-block"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-white blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 rounded-full"></div>
                
                {/* Button */}
                <div className="relative bg-white hover:bg-white/95 text-neutral-900 font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl">
                  Agenda tu evaluación
                </div>
              </motion.a>
            </motion.div>

            {/* Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 md:gap-6 pt-6 w-full max-w-md md:max-w-none"
            >
              {bullets.map((bullet, index) => (
                <motion.div
                  key={bullet}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full justify-center"
                >
                  <div className="w-2 h-2 bg-[#11AEF4] rounded-full flex-shrink-0 shadow-lg"></div>
                  <span className="text-white font-medium text-xs md:text-sm drop-shadow-lg whitespace-nowrap">{bullet}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero