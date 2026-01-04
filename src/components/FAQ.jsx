import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)

  // Efecto para detectar si la URL tiene el hash #faq y abrir el modal automáticamente
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#faq') {
        // Pequeño delay para asegurar que la página se haya desplazado
        setTimeout(() => {
          setIsModalOpen(true)
        }, 300)
      }
    }

    // Verificar al cargar el componente
    handleHashChange()

    // Escuchar cambios en el hash
    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  // Función para cerrar el modal y limpiar el hash
  const closeModal = () => {
    setIsModalOpen(false)
    setOpenIndex(null)
    // Limpiar el hash de la URL
    if (window.location.hash === '#faq') {
      window.history.replaceState('', document.title, window.location.pathname)
    }
  }

  const faqs = [
    {
      question: "¿Qué incluye una evaluación nutricional deportiva?",
      answer: "Nuestra evaluación incluye análisis de composición corporal, evaluación de hábitos alimentarios, identificación de deficiencias nutricionales y desarrollo de un plan personalizado con objetivos específicos y métricas de seguimiento."
    },
    {
      question: "¿Cuánto tiempo toma ver resultados en mi rendimiento?",
      answer: "Los primeros cambios se pueden observar entre 2-4 semanas, pero los resultados significativos en rendimiento deportivo suelen manifestarse entre 6-12 semanas con adherencia constante al plan nutricional y de entrenamiento."
    },
    {
      question: "¿Trabajan con deportistas amateur o solo profesionales?",
      answer: "No, trabajamos con personas f\u00edsicamente activas y deportistas de todos los niveles: amateur, semiprofesional y profesional, desde los 8 a\u00f1os. Adaptamos nuestros servicios seg\u00fan las necesidades espec\u00edficas y objetivos de cada persona."
    },
    {
      question: "¿Ofrecen servicios para equipos y clubes deportivos?",
      answer: "Sí, tenemos convenios especiales para clubes, equipos e instituciones deportivas. Incluyen evaluaciones grupales, planes nutricionales colectivos, charlas educativas y reportes de seguimiento para entrenadores."
    },
    {
      question: "¿Qué diferencia tiene la psicología del deporte?",
      answer: "Nuestros servicios de psicología del deporte se enfocan en gestión del estrés competitivo, desarrollo de concentración, mejora de adherencia a planes nutricionales y preparación mental para competencias."
    },
    {
      question: "¿Cómo funciona el seguimiento y monitoreo?",
      answer: "Realizamos seguimiento continuo mediante consultas regulares, ajustes del plan seg\u00fan resultados y resoluci\u00f3n de dudas v\u00eda WhatsApp."
    },
    {
      question: "¿Los planes nutricionales son compatibles con restricciones alimentarias?",
      answer: "Absolutamente. Todos nuestros planes se adaptan a alergias, intolerancias, preferencias alimentarias (vegetariano, vegano, etc.) y cualquier restricci\u00f3n m\u00e9dica espec\u00edfica. Tambi\u00e9n trabajamos con pacientes bari\u00e1tricos."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos transferencia bancaria, tarjeta d\u00e9bito/cr\u00e9dito y pagos corporativos para convenios institucionales. Tambi\u00e9n ofrecemos planes de pago para servicios de largo plazo."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <>
      {/* FAQ Trigger Button */}
      <section id="faq" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-[#073995] to-[#11AEF4] rounded-2xl p-8 text-white"
            >
              <h2 className="text-2xl font-bold mb-4">
                ¿Tienes preguntas?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Resolvemos las dudas más comunes sobre nuestros servicios de nutrición deportiva y psicología del deporte.
              </p>
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white text-[#073995] font-semibold px-8 py-4 rounded-xl hover:bg-neutral-100 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ver Preguntas Frecuentes
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#073995] to-[#11AEF4] p-6 text-white">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Preguntas Frecuentes
                  </h2>
                          <button
                            onClick={closeModal}
                            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
                          >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-lg opacity-90 mt-2">
                  Resolvemos las dudas más comunes sobre nuestros servicios
                </p>
              </div>

              {/* Modal Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  className="space-y-4"
                >
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-neutral-50 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-neutral-100 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-[#073995] pr-4">
                          {faq.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: openIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg className="w-6 h-6 text-[#073995]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4">
                              <p className="text-neutral-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default FAQ
