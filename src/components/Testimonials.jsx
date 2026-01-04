import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TextHoverEffect from './TextHoverEffect'

const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?sca_esv=65d22011d5166a01&rlz=1C1MMCH_esCL1154CL1154&sxsrf=AE3TifNNFMkGnZt7xSAgVmWFeGiLOWnimw:1764689015876&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E3P59AK65xmDDIyxqfC5oYFMS-B5I66v9K_NXtulZXEn2R2xKsB00070Bkpkn6YpCB89HVGfgv2p6O0X3sTMskL-h7sQ-1uPd7XL9RV1X5sg6sKNuJYrcQbM3tra3HJ-b4nU2fOKKiNh6pAoaUOsJuiUZ4EO&q=Nutsport+-+Nutrición+y+deporte+/+Nutrición+deportiva+Opiniones&sa=X&ved=2ahUKEwins7jvmp-RAxWSopUCHSeIADIQ0bkNegQIHxAE&biw=1440&bih=765&dpr=2#lrd=0x9662c52622c2c645:0xda14468a3c6edcc1,1,,,,'

const Testimonials = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const carouselRef = useRef(null)

  const googleReviews = [
    {
      name: 'Matias Valenzuela',
      quote:
        'Excelente equipo de profesionales, preocupados y con gran conocimiento. En lo personal, puedo comentar que Barbara es una persona muy agradable y confiable. Ayuda a resolver todas tus dudas.',
      rating: 5,
      source: 'google',
    },
    {
      name: 'Evelyn Salvo',
      quote:
        'Excelente servicio, muy profesionales, con un lugar de atención cómodo y agradable. Me he sentido guiada en todo momento y los resultados hasta ahora han sido muy buenos. Totalmente recomendados 🤩🤩',
      rating: 5,
      source: 'google',
    },
    {
      name: 'Cristobal Sepulveda Urbina',
      quote:
        'Excelente servicio nutricional, en lo personal, he recibido una atención y asesoría increíble por parte de Barbara, quien mes a mes me guía en base a mis objetivos y es quien me alinea en mi nutrición. Muy agradecido de su profesionalismo y dedicación :)',
      rating: 5,
      source: 'google',
    },
  ]

  const videoTestimonials = [
    {
      id: 'catalina-barros',
      title: 'Caso exito Catalina Barros',
      src: 'https://www.youtube.com/embed/dJn77OKnj-Y?rel=0&modestbranding=1&playsinline=1',
    },
    {
      id: 'paulina-pinto',
      title: 'Caso exito Paulina Pinto',
      src: 'https://www.youtube.com/embed/bW8rmxEQZjE?rel=0&modestbranding=1&playsinline=1',
    },
    {
      id: 'camilo-vargas',
      title: 'Caso exito Camilo Vargas',
      src: 'https://www.youtube.com/embed/4lR5P3e_xXI?rel=0&modestbranding=1&playsinline=1',
    },
    {
      id: 'testimonio-shorts',
      title: 'Testimonio NutSport',
      src: 'https://www.youtube.com/embed/VQU_gMW2e4s?rel=0&modestbranding=1&playsinline=1',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const scrollToVideo = (index) => {
    if (carouselRef.current) {
      const videoElement = carouselRef.current.children[index]
      if (videoElement) {
        videoElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
        setCurrentVideoIndex(index)
      }
    }
  }

  const nextVideo = () => {
    const nextIndex = (currentVideoIndex + 1) % videoTestimonials.length
    scrollToVideo(nextIndex)
  }

  const prevVideo = () => {
    const prevIndex = (currentVideoIndex - 1 + videoTestimonials.length) % videoTestimonials.length
    scrollToVideo(prevIndex)
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const container = carouselRef.current
      const scrollLeft = container.scrollLeft
      const itemWidth = container.children[0]?.offsetWidth || 0
      const gap = 24 // gap-6 = 1.5rem = 24px
      const newIndex = Math.round(scrollLeft / (itemWidth + gap))
      if (newIndex !== currentVideoIndex && newIndex >= 0 && newIndex < videoTestimonials.length) {
        setCurrentVideoIndex(newIndex)
      }
    }
  }

  const CountUp = ({ value, duration = 1.4, suffix = '', decimals = 0 }) => {
    const [display, setDisplay] = useState(0)

    useEffect(() => {
      let frame
      const start = performance.now()
      const endValue = Number(value) || 0
      const step = (now) => {
        const progress = Math.min((now - start) / (duration * 1000), 1)
        const current = endValue * progress
        setDisplay(current)
        if (progress < 1) frame = requestAnimationFrame(step)
      }
      frame = requestAnimationFrame(step)
      return () => cancelAnimationFrame(frame)
    }, [value, duration])

    const formatted =
      Number.isInteger(value) && decimals === 0 ? Math.round(display).toLocaleString('es-CL') : display.toFixed(decimals)

    return <span>{formatted}{suffix}</span>
  }

  return (
    <section id="testimonios" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4"
        >
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#073995] mb-2 uppercase tracking-wide font-grift">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-neutral-600 text-sm">Reseñas verificadas y testimonios reales</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-3 bg-gradient-to-r from-[#073995] to-[#11AEF4] px-5 py-3 rounded-full shadow-lg"
          >
            <div className="text-2xl font-bold text-white">5.0</div>
            <div>
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white text-xs opacity-90">500+ clientes</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mb-12 relative"
        >
          <div className="relative">
            <div
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide scroll-smooth"
            >
              {videoTestimonials.map((video) => (
                <motion.div
                  key={video.id}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 230, damping: 18 }}
                  className="flex-shrink-0 w-[260px] md:w-[300px] lg:w-[320px] snap-center bg-neutral-900 rounded-xl overflow-hidden relative shadow-lg hover:shadow-2xl"
                >
                  <div className="aspect-[9/16] w-full bg-black">
                    <iframe
                      className="w-full h-full"
                      src={video.src}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Botones de navegación para desktop */}
            <button
              onClick={prevVideo}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-[#073995] hover:text-white transition-all duration-300 group"
              aria-label="Video anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextVideo}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-[#073995] hover:text-white transition-all duration-300 group"
              aria-label="Siguiente video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Indicadores de posición */}
          <div className="hidden md:flex justify-center gap-2 mt-6">
            {videoTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToVideo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentVideoIndex
                    ? 'bg-[#073995] w-8'
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Ir al video ${index + 1}`}
              />
            ))}
          </div>

          <motion.div variants={itemVariants} className="bg-neutral-50 rounded-xl p-8 border border-neutral-100 relative overflow-hidden mt-8 md:mt-10">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-neutral-700">Reseñas Google</span>
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-xs text-neutral-500">{googleReviews.length} reseñas destacadas</div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {googleReviews.map((review, idx) => (
                <a
                  key={idx}
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl border border-neutral-200 p-5 shadow-sm hover:shadow-md transition-shadow block"
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-semibold text-neutral-900">{review.name}</p>
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating || 5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-neutral-700 text-sm leading-relaxed">"{review.quote}"</blockquote>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mt-10 rounded-2xl bg-gradient-to-r from-[#073995] via-[#0d4fb8] to-[#11AEF4] p-8 md:p-10 shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: 4000, suffix: '+', label: 'Deportistas' },
              { number: 5.0, decimals: 1, label: 'Estrellas' },
              { number: 50, suffix: '+', label: 'Instituciones' },
              { number: 6, suffix: '+', label: 'Años de experiencia' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center text-white"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              >
                <div className="text-2xl md:text-3xl font-black mb-1">
                  <CountUp value={stat.number} suffix={stat.suffix || ''} decimals={stat.decimals || 0} />
                </div>
                <div className="text-sm md:text-base text-white/85">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
