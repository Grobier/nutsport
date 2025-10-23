import React from 'react'
import { motion } from 'framer-motion'
import TextHoverEffect from './TextHoverEffect'

const Pricing = () => {
  // WhatsApp configuration
  const phone = "+56949651758"
  
  const plans = [
    {
      id: 1,
      title: "Consulta Nutricional",
      price: "$40.000",
      duration: "30-45 MIN",
      description: "Evaluación nutricional completa",
      features: [
        "Pauta alimentaria personalizada",
        "Mediciones antropométricas",
        "Asesoría en suplementación",
        "Seguimiento WhatsApp 1 mes"
      ],
      headerColor: "bg-[#073995]",
      buttonText: "AGENDAR AHORA",
      whatsappMessage: "Hola%20NutSport%2C%20me%20interesa%20agendar%20una%20Consulta%20Nutricional%20Particular%20(%2440.000)%2E%20¿Podrían%20ayudarme%20con%20la%20disponibilidad%3F"
    },
    {
      id: 2,
      title: "Pack 3 Sesiones",
      price: "$80.000",
      duration: "6 MESES",
      description: "Plan de 3 consultas nutricionales",
      specialNote: "¡Tú eliges cuando agendarlas!",
      features: [
        "3 consultas nutricionales",
        "Vigencia 6 meses",
        "Todo incluido"
      ],
      headerColor: "bg-gradient-to-b from-[#11AEF4] to-[#073995]",
      buttonText: "AGENDAR AHORA",
      whatsappMessage: "Hola%20NutSport%2C%20me%20interesa%20el%20Pack%20de%203%20Sesiones%20Nutricionales%20(%2480.000)%2E%20¿Podrían%20ayudarme%20con%20más%20información%20y%20disponibilidad%3F",
      isPopular: true
    },
    {
      id: 3,
      title: "Consulta Psicológica",
      price: "$40.000",
      duration: "50 MIN",
      description: "Preparación mental deportiva",
      features: [
        "Manejo del estrés competitivo",
        "Mejora de concentración",
        "Motivación y resiliencia"
      ],
      headerColor: "bg-[#073995]",
      buttonText: "AGENDAR AHORA",
      whatsappMessage: "Hola%20NutSport%2C%20me%20interesa%20agendar%20una%20Consulta%20Psicológica%20Particular%20(%2440.000)%2E%20¿Podrían%20ayudarme%20con%20la%20disponibilidad%20para%20sesiones%20presenciales%3F"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="planes" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            <TextHoverEffect 
              text="Nuestros Planes"
              hoverColor="#11AEF4"
              defaultColor="#073995"
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
            />
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-neutral-600 max-w-3xl mx-auto"
          >
            Elige el plan que mejor se adapte a tus necesidades y objetivos deportivos
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              className="relative group"
            >
              {/* Popular Badge - Mejorado */}
              {plan.isPopular && (
                <motion.div 
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-[#073995] to-[#11AEF4] text-white text-xs font-bold px-4 py-2 rounded-full z-20 shadow-lg"
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    ⭐ MÁS ESCOGIDO
                  </motion.div>
                </motion.div>
              )}

              {/* Card con Efectos Avanzados */}
              <motion.div 
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  rotateY: 5
                }}
                whileTap={{ scale: 0.98 }}
                className="relative bg-white rounded-2xl border border-neutral-100 p-8 flex flex-col h-full overflow-hidden cursor-pointer"
                style={{
                  background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
              >
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#11AEF4]/5 to-[#073995]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Header con Icono Animado */}
                <div className="text-center mb-8 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#073995] to-[#11AEF4] rounded-full flex items-center justify-center"
                  >
                    <span className="text-2xl">
                      {index === 0 ? '🥗' : index === 1 ? '📦' : '🧠'}
                    </span>
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-[#073995] mb-3 group-hover:text-[#11AEF4] transition-colors duration-300">
                    {plan.title}
                  </h3>
                  
                  <p className="text-sm text-neutral-600 mb-3">
                    {plan.description}
                  </p>
                  
                  <div className="inline-block bg-gradient-to-r from-[#073995]/10 to-[#11AEF4]/10 px-4 py-1 rounded-full">
                    <span className="text-xs font-semibold text-[#073995]">
                      {plan.duration}
                    </span>
                  </div>
                </div>

                {/* Price con Efecto Especial */}
                <div className="text-center mb-8 relative z-10">
                  <motion.div 
                    className="text-4xl font-bold bg-gradient-to-r from-[#073995] to-[#11AEF4] bg-clip-text text-transparent mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {plan.price}
                  </motion.div>
                  
                  {plan.specialNote && (
                    <motion.p 
                      className="text-[#11AEF4] font-semibold text-sm"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {plan.specialNote}
                    </motion.p>
                  )}
                </div>

                {/* Features con Animaciones */}
                <div className="mb-8 flex-grow relative z-10">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.2 + featureIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-gradient-to-r from-[#073995] to-[#11AEF4] rounded-full flex-shrink-0 mt-2"
                          whileHover={{ scale: 1.5 }}
                        ></motion.div>
                        <span className="text-neutral-700 text-sm leading-relaxed group-hover:text-[#073995] transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Button con Efectos Avanzados */}
                <motion.a
                  href={`https://wa.me/${phone}?text=${plan.whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden group/btn"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-[#073995] to-[#11AEF4] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center block text-sm mt-auto relative z-10 shadow-lg hover:shadow-xl"
                  >
                    <motion.span
                      className="relative z-10"
                      whileHover={{ x: 5 }}
                    >
                      {plan.buttonText}
                    </motion.span>
                    
                    {/* Efecto de brillo en el botón */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    ></motion.div>
                  </motion.div>
                </motion.a>

                {/* Partículas decorativas */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#11AEF4]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#073995]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-1/2 right-2 w-1.5 h-1.5 bg-[#11AEF4]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
