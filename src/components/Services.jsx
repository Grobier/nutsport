import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  // WhatsApp configuration
  const phone = "+56949651758"

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Nutrición Deportiva Personalizada",
      description: "Evaluación, prescripción y métricas objetivas para optimizar tu rendimiento deportivo.",
      features: [
        "Evaluación nutricional completa",
        "Planes personalizados",
        "Seguimiento de métricas",
        "Optimización del rendimiento"
      ],
      whatsappMessage: "Hola%20NutSport%2C%20me%20interesa%20agendar%20una%20evaluación%20de%20Nutrición%20Deportiva%20Personalizada%2E%20¿Podrían%20ayudarme%20con%20más%20información%3F"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Psicología del Deporte",
      description: "Foco, gestión del estrés competitivo y adherencia para alcanzar tu máximo potencial mental.",
      features: [
        "Gestión del estrés competitivo",
        "Desarrollo de concentración",
        "Mejora de adherencia",
        "Preparación mental"
      ],
      whatsappMessage: "Hola%20NutSport%2C%20me%20interesa%20agendar%20una%20evaluación%20de%20Psicología%20del%20Deporte%2E%20¿Podrían%20ayudarme%20con%20más%20información%3F"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Convenios para Instituciones",
      description: "Planes especializados para clubes y centros deportivos con reportes y beneficios corporativos.",
      features: [
        "Planes para clubes",
        "Reportes detallados",
        "Beneficios corporativos",
        "Seguimiento institucional"
      ],
      whatsappMessage: "Hola%20NutSport%2C%20me%20interesa%20información%20sobre%20Convenios%20para%20Instituciones%2E%20¿Podrían%20ayudarme%20con%20más%20detalles%3F"
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
    <section id="servicios" className="section-padding bg-neutral-50">
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#073995] mb-6"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-neutral-600 max-w-3xl mx-auto"
          >
            Soluciones integrales diseñadas para deportistas, equipos e instituciones 
            que buscan optimizar su rendimiento a través de la ciencia.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#073995]/10 rounded-2xl text-[#073995] mb-6 group-hover:bg-[#073995]/20 transition-colors">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-[#073995] mb-4">
                {service.title}
              </h3>

              <p className="text-neutral-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full flex-shrink-0"></div>
                    <span className="text-neutral-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={`https://wa.me/${phone}?text=${service.whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center text-[#11AEF4] font-semibold hover:text-[#073995] transition-colors group"
              >
                Agenda tu evaluación
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

