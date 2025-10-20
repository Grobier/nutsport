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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
              {agreements.map((agreement, index) => (
                <motion.div
                  key={agreement.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  {/* Card Background */}
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                    
                    {/* Popular Badge */}
                    {agreement.isPopular && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20 transform rotate-12">
                        <div className="flex items-center space-x-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span>MÁS ESCOGIDO</span>
                        </div>
                      </div>
                    )}

                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#073995] to-[#11AEF4] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">
                        {agreement.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4">
                        {agreement.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-[#073995] mb-1">
                        {agreement.price}
                      </div>
                      <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                        Pago mensual
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6 flex-grow">
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-slate-700 text-sm leading-relaxed">
                            Sesiones de 30 minutos por persona
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-slate-700 text-sm leading-relaxed">
                            Reportes mensuales de seguimiento
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-slate-700 text-sm leading-relaxed">
                            Duración mínima de 3 meses
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Button */}
                    <motion.a
                      href={`https://wa.me/${phone}?text=${agreement.whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-[#073995] to-[#11AEF4] hover:from-[#073995]/90 hover:to-[#11AEF4]/90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-center block text-sm shadow-md hover:shadow-lg mt-auto"
                    >
                      AGENDAR CONVENIO
                    </motion.a>
                  </div>
                </motion.div>
              ))}
        </motion.div>
      </div>
    </section>
  )
}

export default InstitutionalAgreements
