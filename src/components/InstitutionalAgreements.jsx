import React from 'react'
import { motion } from 'framer-motion'

const InstitutionalAgreements = () => {
  // WhatsApp configuration
  const phone = "+56949651758"
  
      const agreements = [
        {
          id: 1,
          title: "Plan Básico",
          description: "Capacidad de atención de 1 a 15 personas",
          price: "$150.000",
          whatsappMessage: "Hola%20NutSport%2C%20me%20interesa%20el%20Plan%20Básico%20para%20instituciones%20(%24150.000)%2E%20¿Podrían%20ayudarme%20con%20más%20información%3F"
        },
        {
          id: 2,
          title: "Plan Plus",
          description: "Capacidad de atención de 16 a 30 personas.",
          price: "$255.000",
          whatsappMessage: "Hola%20NutSport%2C%20me%20interesa%20el%20Plan%20Plus%20para%20instituciones%20(%24255.000)%2E%20¿Podrían%20ayudarme%20con%20más%20información%3F"
        },
        {
          id: 3,
          title: "Plan Premium",
          description: "Capacidad de atención de 30 a 50 personas",
          price: "$325.000",
          whatsappMessage: "Hola%20NutSport%2C%20me%20interesa%20el%20Plan%20Premium%20para%20instituciones%20(%24325.000)%2E%20¿Podrían%20ayudarme%20con%20más%20información%3F"
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
    <section id="convenios" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#073995] mb-8"
          >
            Convenios Nutricionales para Instituciones
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg text-neutral-700">
              Ofrecemos convenios nutricionales para instituciones con sesiones de 30 minutos, pago mensual, duración mínima de 3 meses y reportes de seguimiento.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {agreements.map((agreement, index) => (
            <motion.div
              key={agreement.id}
              variants={itemVariants}
              className="relative group"
            >
              {/* Popular Badge - Mejorado */}
              {index === 1 && (
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
                      🏢
                    </span>
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-[#073995] mb-3 group-hover:text-[#11AEF4] transition-colors duration-300">
                    {agreement.title}
                  </h3>
                  
                  <p className="text-sm text-neutral-600 mb-3">
                    {agreement.description}
                  </p>
                  
                  <div className="inline-block bg-gradient-to-r from-[#073995]/10 to-[#11AEF4]/10 px-4 py-1 rounded-full">
                    <span className="text-xs font-semibold text-[#073995]">
                      PAGO MENSUAL
                    </span>
                  </div>
                </div>

                {/* Price con Efecto Especial */}
                <div className="text-center mb-8 relative z-10">
                  <motion.div 
                    className="text-4xl font-bold bg-gradient-to-r from-[#073995] to-[#11AEF4] bg-clip-text text-transparent mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {agreement.price}
                  </motion.div>
                </div>

                {/* Features con Animaciones */}
                <div className="mb-8 flex-grow relative z-10">
                  <ul className="space-y-3">
                    <motion.li 
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.2 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-gradient-to-r from-[#073995] to-[#11AEF4] rounded-full flex-shrink-0 mt-2"
                        whileHover={{ scale: 1.5 }}
                      ></motion.div>
                      <span className="text-neutral-700 text-sm leading-relaxed group-hover:text-[#073995] transition-colors duration-300">
                        Sesiones de 30 minutos por persona
                      </span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.2 + 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-gradient-to-r from-[#073995] to-[#11AEF4] rounded-full flex-shrink-0 mt-2"
                        whileHover={{ scale: 1.5 }}
                      ></motion.div>
                      <span className="text-neutral-700 text-sm leading-relaxed group-hover:text-[#073995] transition-colors duration-300">
                        Reportes mensuales de seguimiento
                      </span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.2 + 0.2 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-gradient-to-r from-[#073995] to-[#11AEF4] rounded-full flex-shrink-0 mt-2"
                        whileHover={{ scale: 1.5 }}
                      ></motion.div>
                      <span className="text-neutral-700 text-sm leading-relaxed group-hover:text-[#073995] transition-colors duration-300">
                        Duración mínima de 3 meses
                      </span>
                    </motion.li>
                  </ul>
                </div>

                {/* Button con Efectos Avanzados */}
                <motion.a
                  href={`https://wa.me/${phone}?text=${agreement.whatsappMessage}`}
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
                      AGENDAR CONVENIO
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

export default InstitutionalAgreements
