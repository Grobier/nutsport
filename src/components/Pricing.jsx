import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Pricing = () => {
  const phone = "+56949651758"

  const plans = useMemo(() => ([
    {
      id: 1,
      title: 'Consulta Nutricional',
      price: '$40.000',
      duration: '30-45 MIN',
      description: 'Evaluación nutricional completa',
      features: [
        'Pauta alimentaria personalizada',
        'Mediciones antropométricas',
        'Asesoría en suplementación',
        'Seguimiento WhatsApp 1 mes',
      ],
      headerColor: 'bg-[#073995]',
      buttonText: 'AGENDAR AHORA',
      whatsappMessage:
        'Hola%20NutSport%2C%20me%20interesa%20agendar%20una%20Consulta%20Nutricional%20Particular%20(%2440.000).%20%C2%BFPodr%C3%ADan%20ayudarme%20con%20la%20disponibilidad%3F',
      icon: '🥗',
    },
    {
      id: 2,
      title: 'Pack 3 Sesiones',
      price: '$80.000',
      duration: '6 MESES',
      description: 'Plan de 3 consultas nutricionales',
      specialNote: '¡Tú eliges cuando agendarlas!',
      features: ['3 consultas nutricionales', 'Vigencia 6 meses', 'Todo incluido'],
      headerColor: 'bg-gradient-to-b from-[#11AEF4] to-[#073995]',
      buttonText: 'AGENDAR AHORA',
      whatsappMessage:
        'Hola%20NutSport%2C%20me%20interesa%20el%20Pack%20de%203%20Sesiones%20Nutricionales%20(%2480.000).%20%C2%BFPodr%C3%ADan%20ayudarme%20con%20m%C3%A1s%20informaci%C3%B3n%20y%20disponibilidad%3F',
      isPopular: true,
      icon: '📦',
    },
    {
      id: 3,
      title: 'Consulta Psicológica',
      price: '$40.000',
      duration: '50 MIN',
      description: 'Preparación mental deportiva',
      features: ['Manejo del estrés competitivo', 'Mejora de concentración', 'Motivación y resiliencia'],
      headerColor: 'bg-[#073995]',
      buttonText: 'AGENDAR AHORA',
      whatsappMessage:
        'Hola%20NutSport%2C%20me%20interesa%20agendar%20una%20Consulta%20Psicol%C3%B3gica%20Particular%20(%2440.000).%20%C2%BFPodr%C3%ADan%20ayudarme%20con%20la%20disponibilidad%20para%20sesiones%20presenciales%3F',
      icon: '🧠',
    },
  ]), [])

  const agreements = useMemo(() => ([
    {
      id: 101,
      title: 'Plan Básico',
      price: '$150.000',
      duration: 'PAGO MENSUAL',
      description: 'Capacidad de atención de 1 a 15 personas',
      features: ['Sesiones de 30 minutos por persona', 'Reportes mensuales de seguimiento', 'Duración mínima de 3 meses'],
      buttonText: 'AGENDAR CONVENIO',
      whatsappMessage:
        'Hola%20NutSport%2C%20me%20interesa%20el%20Plan%20B%C3%A1sico%20para%20instituciones%20(%24150.000).%20%C2%BFPodr%C3%ADan%20ayudarme%20con%20m%C3%A1s%20informaci%C3%B3n%3F',
      icon: '🏫',
    },
    {
      id: 102,
      title: 'Plan Plus',
      price: '$255.000',
      duration: 'PAGO MENSUAL',
      description: 'Capacidad de atención de 16 a 30 personas',
      features: ['Sesiones de 30 minutos por persona', 'Reportes mensuales de seguimiento', 'Duración mínima de 3 meses'],
      buttonText: 'AGENDAR CONVENIO',
      whatsappMessage:
        'Hola%20NutSport%2C%20me%20interesa%20el%20Plan%20Plus%20para%20instituciones%20(%24255.000).%20%C2%BFPodr%C3%ADan%20ayudarme%20con%20m%C3%A1s%20informaci%C3%B3n%3F',
      isPopular: true,
      icon: '🏢',
    },
    {
      id: 103,
      title: 'Plan Premium',
      price: '$325.000',
      duration: 'PAGO MENSUAL',
      description: 'Capacidad de atención de 30 a 50 personas',
      features: ['Sesiones de 30 minutos por persona', 'Reportes mensuales de seguimiento', 'Duración mínima de 3 meses'],
      buttonText: 'AGENDAR CONVENIO',
      whatsappMessage:
        'Hola%20NutSport%2C%20me%20interesa%20el%20Plan%20Premium%20para%20instituciones%20(%24325.000).%20%C2%BFPodr%C3%ADan%20ayudarme%20con%20m%C3%A1s%20informaci%C3%B3n%3F',
      icon: '🏛️',
    },
  ]), [])

  // Tabs synced with URL
  const getTabFromUrl = () => {
    const p = new URLSearchParams(window.location.search)
    const t = (p.get('tab') || 'planes').toLowerCase()
    return t === 'convenios' ? 'convenios' : 'planes'
  }
  const [activeTab, setActiveTab] = useState(getTabFromUrl())
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const onPop = () => setActiveTab(getTabFromUrl())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const switchTab = (tab) => {
    if (tab === activeTab) return
    setDirection(tab === 'convenios' ? 1 : -1)
    setActiveTab(tab)
    const url = new URL(window.location.href)
    url.searchParams.set('tab', tab)
    window.history.pushState({}, '', url)
  }

  const current = activeTab === 'planes' ? plans : agreements

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="planes" className="section-padding bg-gradient-to-br from-[#073995] via-[#0d4fb8] to-[#11AEF4]">
      <div className="container-custom">
        <span id="planes-y-convenios" className="block -mt-24 pt-24" />
        <span id="convenios" className="block -mt-24 pt-24" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-8"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-black font-grift uppercase text-white mb-2">
            Planes y Convenios
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-white/80 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades y objetivos deportivos
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <div role="tablist" aria-label="Planes y Convenios" className="mx-auto mb-10 flex w-full max-w-xl rounded-2xl bg-white/10 backdrop-blur-sm p-1 shadow-sm border border-white/20">
          <button
            id="tab-planes"
            role="tab"
            aria-selected={activeTab === 'planes'}
            aria-controls="tabpanel-planes"
            onClick={() => switchTab('planes')}
            className={`flex-1 py-3 rounded-lg text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${activeTab === 'planes' ? 'bg-white text-[#073995] shadow-lg' : 'text-white/90 hover:text-white bg-transparent hover:bg-white/10'}`}
          >
            Nuestros Planes
          </button>
          <button
            id="tab-convenios"
            role="tab"
            aria-selected={activeTab === 'convenios'}
            aria-controls="tabpanel-convenios"
            onClick={() => switchTab('convenios')}
            className={`flex-1 py-3 rounded-lg text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${activeTab === 'convenios' ? 'bg-white text-[#073995] shadow-lg' : 'text-white/90 hover:text-white bg-transparent hover:bg-white/10'}`}
          >
            Convenios
          </button>
        </div>

        {/* Animated panel */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            initial={(dir) => ({ x: dir > 0 ? 120 : -120, opacity: 0, scale: 0.98 })}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={(dir) => ({ x: dir > 0 ? -120 : 120, opacity: 0, scale: 0.98 })}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="tabpanel"
            id={activeTab === 'planes' ? 'tabpanel-planes' : 'tabpanel-convenios'}
            aria-labelledby={activeTab === 'planes' ? 'tab-planes' : 'tab-convenios'}
          >
            {current.map((plan, index) => (
              <motion.div key={plan.id} variants={itemVariants} className="relative group">
                {plan.isPopular && (
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 200 }}
                    className="absolute -top-3 -right-3 bg-white/20 border border-white/30 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full z-20 shadow"
                  >
                    MÁS ESCOGIDO
                  </motion.div>
                )}

                <motion.div
                  whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative rounded-3xl p-8 flex flex-col h-full overflow-hidden cursor-pointer bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl"
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  {/* Header minimalista con ícono a la izquierda */}
                  <div className="mb-8 relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg border border-white/30 bg-white/10 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/80"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white">{plan.title}</h3>
                    </div>
                    <p className="text-sm text-white/80 mb-3">{plan.description}</p>
                    <div className="inline-block bg-white/10 px-4 py-1 rounded-full">
                      <span className="text-xs font-semibold text-white">{plan.duration}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8 relative z-10">
                    <motion.div className="text-4xl font-extrabold text-white mb-2" whileHover={{ scale: 1.1 }}>
                      {plan.price}
                    </motion.div>
                    {plan.specialNote && (
                      <motion.p className="text-white font-semibold text-sm" animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }}>
                        {plan.specialNote}
                      </motion.p>
                    )}
                  </div>

                  {/* Features */}
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
                          <motion.div className="w-2 h-2 bg-white rounded-full flex-shrink-0 mt-2" whileHover={{ scale: 1.5 }}></motion.div>
                          <span className="text-white/90 text-sm leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <motion.a href={`https://wa.me/${phone}?text=${plan.whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden group/btn">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-white text-neutral-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center block text-sm mt-auto relative z-10 shadow-lg hover:shadow-xl"
                    >
                      <motion.span className="relative z-10" whileHover={{ x: 5 }}>
                        {plan.buttonText}
                      </motion.span>
                      <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" initial={{ x: '-100%' }} whileHover={{ x: '100%' }} transition={{ duration: 0.6 }}></motion.div>
                    </motion.div>
                  </motion.a>

                  {/* subtle particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute top-1/2 right-2 w-1.5 h-1.5 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Pricing
