import React from 'react'
import { motion } from 'framer-motion'
import TextHoverEffect from './TextHoverEffect'
import { DirectionAwareHover } from './ui/direction-aware-hover'

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
      whatsappMessage: "Hola%20NutSport%2C%20me%20interesa%20agendar%20una%20evaluación%20de%20Nutrición%20Deportiva%20Personalizada%2E%20¿Podrían%20ayudarme%20con%20más%20información%3F",
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
      whatsappMessage: "Hola%20NutSport%2C%20me%20interesa%20agendar%20una%20evaluación%20de%20Psicología%20del%20Deporte%2E%20¿Podrían%20ayudarme%20con%20más%20información%3F",
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
      whatsappMessage: "Hola%20NutSport%2C%20me%20interesa%20información%20sobre%20Convenios%20para%20Instituciones%2E%20¿Podrían%20ayudarme%20con%20más%20detalles%3F",
      imageUrl: "/images/services/convenios-instituciones.jpg"
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
          <motion.div
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            <TextHoverEffect 
              text="Nuestros Servicios"
              hoverColor="#11AEF4"
              defaultColor="#073995"
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
            />
          </motion.div>
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
              className="h-[500px]"
            >
              <DirectionAwareHover 
                imageUrl={service.imageUrl}
                className="h-full"
              >
                <div className="space-y-4">
                  <h3 className="font-bold text-2xl text-white drop-shadow-lg">
                    {service.title}
                  </h3>
                  
                  <p className="text-white text-sm leading-relaxed drop-shadow-md">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#11AEF4] rounded-full flex-shrink-0 shadow-sm"></div>
                        <span className="text-white text-sm drop-shadow-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.a
                    href={`https://wa.me/${phone}?text=${service.whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-[#073995] font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors mt-6 shadow-lg"
                  >
                    Agenda tu evaluación
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                </div>
              </DirectionAwareHover>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services