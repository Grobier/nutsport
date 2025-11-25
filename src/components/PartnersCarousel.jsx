import React, { useRef, useEffect, useState } from 'react'
import { motion, useReducedMotion, useInView } from 'framer-motion'
import TextHoverEffect from './TextHoverEffect'

// Datos estáticos fuera del componente para evitar recrearlos en cada render
const PARTNERS = [
  { id: 1, name: 'Orcamp', logo: '/images/logos/partners/orcamp.png', category: 'Institución' },
  { id: 2, name: 'Amici', logo: '/images/logos/partners/amici.png', category: 'Club Deportivo' },
  { id: 3, name: 'Coach Pérez', logo: '/images/logos/partners/coach-perez.png', category: 'Entrenamiento' },
  { id: 4, name: 'Gorila', logo: '/images/logos/partners/gorila.png', category: 'Club Deportivo' },
  { id: 5, name: 'Kutral', logo: '/images/logos/partners/kutral.png', category: 'Club Deportivo' },
  { id: 6, name: 'Liceo', logo: '/images/logos/partners/liceo.png', category: 'Institución' },
  { id: 7, name: 'Lo Manchester', logo: '/images/logos/partners/lomanchester.png', category: 'Club Deportivo' },
  { id: 8, name: 'NeuroSport Chile', logo: '/images/logos/partners/neuro.png', category: 'Institución' },
  { id: 9, name: 'Alma', logo: '/images/logos/partners/alma.png', category: 'Institución' },
  { id: 10, name: 'Ates', logo: '/images/logos/partners/ates.png', category: 'Club Deportivo' },
  { id: 11, name: 'Caribes', logo: '/images/logos/partners/caribes.png', category: 'Club Deportivo' },
  { id: 12, name: 'Dmoov', logo: '/images/logos/partners/dmoov.png', category: 'Centro Deportivo' },
  { id: 13, name: 'Espacio Social', logo: '/images/logos/partners/espacio-social-1.png', category: 'Institución' },
  { id: 14, name: 'FAM', logo: '/images/logos/partners/fam.png', category: 'Club Deportivo' },
  { id: 15, name: 'Fuerza Mov', logo: '/images/logos/partners/fuerza-mov.png', category: 'Centro Deportivo' },
  { id: 16, name: 'Global', logo: '/images/logos/partners/global.png', category: 'Institución' },
  { id: 17, name: 'Greco', logo: '/images/logos/partners/greco.png', category: 'Club Deportivo' },
  { id: 18, name: 'JRP Kinesiología', logo: '/images/logos/partners/jrp-kine.png', category: 'Centro de Salud' },
  { id: 19, name: 'Maga', logo: '/images/logos/partners/maga.png', category: 'Club Deportivo' },
  { id: 20, name: 'Men Pilates', logo: '/images/logos/partners/men-pilates.png', category: 'Centro de Entrenamiento' },
  { id: 21, name: 'Newen', logo: '/images/logos/partners/newen.png', category: 'Club Deportivo' },
  { id: 22, name: 'Ñuñoa', logo: '/images/logos/partners/nunoa.png', category: 'Club Deportivo' },
  { id: 23, name: 'Orinoco', logo: '/images/logos/partners/orinoco.png', category: 'Club Deportivo' },
  { id: 24, name: 'Palestino', logo: '/images/logos/partners/palestino.png', category: 'Club Deportivo' },
  { id: 25, name: 'Rama', logo: '/images/logos/partners/rama.png', category: 'Club Deportivo' },
  { id: 26, name: 'Unity', logo: '/images/logos/partners/unity.png', category: 'Club Deportivo' },
  { id: 27, name: 'Vikimgos', logo: '/images/logos/partners/vikimgos.png', category: 'Club Deportivo' }
]

const PartnersCarousel = () => {
  const partners = PARTNERS

  // Refs
  const carouselRef = useRef(null)
  const wrapperRef = useRef(null)
  const rightGradientRef = useRef(null)

  // Estado
  const [maxScroll, setMaxScroll] = useState(0)
  const reduceMotion = useReducedMotion()
  const inView = useInView(wrapperRef, { amount: 0.2, margin: '0px' })

  useEffect(() => {
    const calculateMaxScroll = () => {
      if (!carouselRef.current) return
      const scrollWidth = carouselRef.current.scrollWidth
      const container = carouselRef.current.parentElement
      const clientWidth = container?.clientWidth || window.innerWidth
      const gradientWidth = rightGradientRef.current?.offsetWidth || 96 // fallback al valor de w-24
      const max = -(scrollWidth - clientWidth - gradientWidth)
      setMaxScroll(Number.isFinite(max) ? max : 0)
    }

    // Esperar a que carguen las imágenes del carrusel
    const waitForImages = () => {
      if (!carouselRef.current) return calculateMaxScroll()
      const imgs = Array.from(
        carouselRef.current.querySelectorAll('img[data-partner="true"]')
      )
      const pending = imgs.filter(img => !img.complete)
      if (pending.length === 0) return calculateMaxScroll()
      let settled = 0
      const done = () => {
        settled += 1
        if (settled >= pending.length) calculateMaxScroll()
      }
      pending.forEach(img => {
        img.addEventListener('load', done, { once: true })
        img.addEventListener('error', done, { once: true })
      })
      // Fallback de seguridad
      setTimeout(calculateMaxScroll, 1000)
    }

    waitForImages()

    // Recalcular en resize del contenedor
    const ro = new ResizeObserver(() => calculateMaxScroll())
    if (wrapperRef.current) ro.observe(wrapperRef.current)

    // Recalcular en resize de ventana
    window.addEventListener('resize', calculateMaxScroll)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', calculateMaxScroll)
    }
  }, [partners])

  const animated = !reduceMotion && inView && maxScroll < 0
  const animateValue = animated ? { x: [0, maxScroll] } : { x: 0 }
  const transitionValue = animated
    ? { repeat: Infinity, repeatType: 'reverse', duration: 30, ease: 'linear' }
    : { duration: 0 }

  return (
    <section
      aria-label="Partners que confían en nosotros"
      className="py-12 bg-white border-t border-b border-neutral-100"
    >
      <div ref={wrapperRef} className="container mx-auto px-4">
        {/* Header - Más grande y prominente */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            <TextHoverEffect
              text="CONFÍAN EN NOSOTROS"
              defaultColor="#073995"
              hoverColor="#11AEF4"
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            />
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Más de 50 instituciones deportivas confían en nuestro equipo
          </p>
        </motion.div>

        {/* Carrusel - Logos más grandes */}
        <div className="relative overflow-hidden py-4">
          <motion.div
            ref={carouselRef}
            className="flex space-x-6 md:space-x-8"
            style={{ willChange: 'transform' }}
            animate={animateValue}
            transition={transitionValue}
          >
            {partners.map((partner) => (
              <motion.div
                key={partner.id}
                className="flex-shrink-0 flex items-center justify-center px-2 md:px-4"
              >
                {/* Logos más compactos */}
                <img
                  src={partner.logo}
                  alt={`Logo de ${partner.name}`}
                  data-partner="true"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  className="h-20 md:h-[7rem] w-auto object-contain opacity-100 max-w-[170px] md:max-w-[220px]"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Gradientes laterales más pronunciados */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
          <div
            ref={rightGradientRef}
            className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/60 to-transparent pointer-events-none z-10"
          ></div>
        </div>
      </div>
    </section>
  )
}

export default PartnersCarousel

