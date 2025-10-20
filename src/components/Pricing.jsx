import React from 'react'
import { motion } from 'framer-motion'

const Pricing = () => {
  // WhatsApp configuration
  const phone = "+56949651758"
  
  const plans = [
    {
      id: 1,
      title: "Consulta Nutricional Particular",
      price: "$40.000",
      duration: "30-45 MIN | 1 SESIÓN",
      description: "Staff de 3 nutricionistas a elección.",
      features: [
        "Pauta de alimentación personalizada",
        "Minutas adaptadas a tu entrenamiento",
        "Mediciones antropométricas + informe",
        "Asesoría en suplementación deportiva",
        "Seguimiento/ resolución de dudas vía WhatsApp por 1 mes con tu nutricionista",
        "Orden de exámenes (si se requiere)",
        "Boleta para reembolso en Isapre o seguros"
      ],
      headerColor: "bg-[#073995]",
      buttonText: "AGENDAR AHORA",
      whatsappMessage: "Hola%20NutSport%2C%20me%20interesa%20agendar%20una%20Consulta%20Nutricional%20Particular%20(%2440.000)%2E%20¿Podrían%20ayudarme%20con%20la%20disponibilidad%3F"
    },
    {
      id: 2,
      title: "Pack 3 Sesiones Nutricionales",
      price: "$80.000",
      duration: "VIGENCIA: 6 MESES | 3 SESIONES",
      description: "Plan de 3 consultas nutricionales (3x2), con un plazo de hasta 6 meses para usarlas desde la fecha de pago.",
      specialNote: "¡Tú eliges cuando agendarlas!",
      features: [
        "Incluye todo lo indicado en la consulta particular para cada sesión."
      ],
      headerColor: "bg-gradient-to-b from-[#11AEF4] to-[#073995]",
      buttonText: "AGENDAR AHORA",
      whatsappMessage: "Hola%20NutSport%2C%20me%20interesa%20el%20Pack%20de%203%20Sesiones%20Nutricionales%20(%2480.000)%2E%20¿Podrían%20ayudarme%20con%20más%20información%20y%20disponibilidad%3F",
      isPopular: true
    },
    {
      id: 3,
      title: "Consulta Psicológica Particular",
      price: "$40.000",
      duration: "50 MIN | PRESENCIAL EN NUTSPORT",
      description: "Fortalece tu mentalidad deportiva con sesiones individuales enfocadas en manejar el estrés, aumentar la concentración y potenciar tu motivación.",
      features: [
        "Manejo del estrés y ansiedad pre-competitiva",
        "Aumento del enfoque y la concentración",
        "Rutinas mentales positivas y resiliencia",
        "Mejora de autoestima deportiva y motivación",
        "Preparación mental post-lesión",
        "Gestión del fracaso y la presión en el deporte"
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
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6"
          >
            Nuestros Planes
          </motion.h2>
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  {/* Card Background */}
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                    
                    {/* Popular Badge */}
                    {plan.isPopular && (
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">
                        {plan.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4">
                        {plan.description}
                      </p>
                      <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                        {plan.duration}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-[#073995] mb-1">
                        {plan.price}
                      </div>
                      {plan.specialNote && (
                        <p className="text-[#11AEF4] font-semibold text-sm">
                          {plan.specialNote}
                        </p>
                      )}
                    </div>

                    {/* Features */}
                    <div className="mb-6 flex-grow">
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <div className="w-5 h-5 bg-green-100 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-slate-700 text-sm leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Button */}
                    <motion.a
                      href={`https://wa.me/${phone}?text=${plan.whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-[#073995] to-[#11AEF4] hover:from-[#073995]/90 hover:to-[#11AEF4]/90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-center block text-sm shadow-md hover:shadow-lg mt-auto"
                    >
                      {plan.buttonText}
                    </motion.a>
                  </div>
                </motion.div>
              ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
