import React from 'react'
import { motion } from 'framer-motion'
import { TypewriterEffect } from './ui/typewriter-effect'

export function TypewriterEffectDemo() {
  const changingTexts = [
    "una buena alimentación",
    "el equilibrio mental", 
    "una guía profesional",
    "decisiones conscientes."
  ]

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-neutral-600 mb-10"
      >
        Evaluaciones científicas, planes personalizados y seguimiento profesional para deportistas y equipos.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-12"
      >
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#073995] leading-tight min-h-[200px] flex flex-col justify-center">
          <span className="text-[#073995]">Tu progreso comienza con </span>
          <TypewriterEffect words={changingTexts.map(text => ({ text, className: "text-[#11AEF4]" }))} className="text-[#11AEF4]" />
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <motion.a
          href="https://wa.me/56949651758?text=Hola%20NutSport%2C%20quiero%20agendar%20mi%20evaluación"
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
    </div>
  )
}
