import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  // WhatsApp configuration
  const phone = "+56949651758"

  const services = [
    {
      title: "Nutrición Deportiva Personalizada",
      description: "Evaluación, prescripción y métricas objetivas para optimizar tu rendimiento deportivo.",
      features: [
        "Evaluación nutricional completa",
        "Planes personalizados",
        "Seguimiento de métricas",
        "Optimización del rendimiento"
      ],
      whatsappMessage:
        "Hola%20NutSport%2C%20me%20interesa%20agendar%20una%20evaluaci%C3%B3n%20de%20Nutrici%C3%B3n%20Deportiva%20Personalizada.%20%C2%BFPodr%C3%ADan%20ayudarme%20con%20m%C3%A1s%20informaci%C3%B3n%3F",
      imageUrl: "/images/services/nutricion-deportiva.jpg"
    },
    {
      title: "Psicología del Deporte",
      description: "Foco, gestión del estrés competitivo y adherencia para alcanzar tu máximo potencial mental.",
      features: [
        "Gestión del estrés competitivo",
        "Desarrollo de concentración",
        "Mejora de adherencia",
        "Preparación mental"
      ],
      whatsappMessage:
        "Hola%20NutSport%2C%20me%20interesa%20agendar%20una%20evaluaci%C3%B3n%20de%20Psicolog%C3%ADa%20del%20Deporte.%20%C2%BFPodr%C3%ADan%20ayudarme%20con%20m%C3%A1s%20informaci%C3%B3n%3F",
      imageUrl: "/images/services/psicologia-deporte.jpg"
    },
    {
      title: "Convenios para Instituciones",
      description: "Planes especializados para clubes y centros deportivos con reportes y beneficios corporativos.",
      features: [
        "Planes para clubes",
        "Reportes detallados",
        "Beneficios corporativos",
        "Seguimiento institucional"
      ],
      whatsappMessage:
        "Hola%20NutSport%2C%20me%20interesa%20informaci%C3%B3n%20sobre%20Convenios%20para%20Instituciones.%20%C2%BFPodr%C3%ADan%20ayudarme%20con%20m%C3%A1s%20detalles%3F",
      imageUrl: "/images/services/convenios-instituciones.jpg"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section
      id="servicios"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-white"
    >

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8 z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#073995] mb-4 font-grift uppercase"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-2xl text-lg text-neutral-600 font-light"
          >
            Soluciones integrales para optimizar tu rendimiento
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="h-full flex flex-col bg-white/95 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Imagen */}
                <div className="aspect-video w-full overflow-hidden rounded-2xl mb-6 bg-gray-100">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Contenido */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-[#11AEF4] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón */}
                <motion.a
                  href={`https://wa.me/${phone}?text=${service.whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#073995] to-[#11AEF4] text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Agenda tu evaluación
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

