import React from 'react'
import { motion } from 'framer-motion'
import TextHoverEffect from './TextHoverEffect'

const TextHoverDemo = () => {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#073995] mb-6">
            Demostración del Efecto de Texto Hover
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Pasa el cursor sobre los textos para ver el efecto
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Variación 1: Título Principal */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-bold text-[#073995] mb-4">
              Título Principal
            </h3>
            <TextHoverEffect 
              text="Rendimiento que se mide"
              hoverColor="#11AEF4"
              defaultColor="#073995"
              className="text-3xl font-bold leading-tight"
            />
          </div>

          {/* Variación 2: Subtítulo */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-bold text-[#073995] mb-4">
              Subtítulo
            </h3>
            <TextHoverEffect 
              text="Nuestros Servicios"
              hoverColor="#11AEF4"
              defaultColor="#073995"
              className="text-2xl font-bold"
            />
          </div>

          {/* Variación 3: Texto con gradiente */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-bold text-[#073995] mb-4">
              Texto con Gradiente
            </h3>
            <TextHoverEffect 
              text="Nutrición Deportiva"
              hoverColor="#11AEF4"
              defaultColor="#073995"
              className="text-2xl font-bold"
            />
          </div>

          {/* Variación 4: Texto más largo */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-bold text-[#073995] mb-4">
              Texto Largo
            </h3>
            <TextHoverEffect 
              text="Evaluaciones científicas y planes personalizados"
              hoverColor="#11AEF4"
              defaultColor="#073995"
              className="text-lg font-medium"
            />
          </div>
        </div>

        {/* Instrucciones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-[#073995] text-white rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">
              Cómo funciona el efecto
            </h3>
            <p className="text-white/90">
              Cada palabra cambia de color individualmente con un delay progresivo, 
              creando un efecto fluido y elegante al pasar el cursor sobre el texto.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TextHoverDemo
