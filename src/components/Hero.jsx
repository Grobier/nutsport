import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FlipWords } from './ui/flip-words'

const Hero = () => {
  const phone = '+56949651758'
  const whatsappHref = `https://wa.me/${phone}?text=${encodeURIComponent('Hola NutSport, quiero agendar mi evaluación')}`

  const changingTexts = [
    'una buena alimentación',
    'el equilibrio mental',
    'una guía profesional',
    'decisiones conscientes',
  ]

  // Video de fondo local
  const backgroundVideoSrc = '/videos/hero-background.mp4'

  // Thumbnail del video para placeholder (primera carga)
  const thumbnailUrl = `https://img.youtube.com/vi/XrumYaarR5E/maxresdefault.jpg`

  const [videoLoaded, setVideoLoaded] = useState(false)
  const [loadVideo, setLoadVideo] = useState(false)
  const videoContainerRef = useRef(null)

  // Lazy load del video cuando esté en viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Esperar 500ms antes de cargar el video para dar prioridad al contenido
            setTimeout(() => {
              setLoadVideo(true)
            }, 500)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative bg-neutral-950 text-white overflow-hidden">
      {/* Video de fondo */}
      <div ref={videoContainerRef} className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Thumbnail placeholder - optimizado para LCP */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: `url(${thumbnailUrl})`,
            willChange: videoLoaded ? 'auto' : 'opacity'
          }}
        />

        {/* Video HTML5 - carga lazy con IntersectionObserver */}
        {loadVideo && (
          <video
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover pointer-events-none"
            src={backgroundVideoSrc}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            style={{
              opacity: videoLoaded ? 1 : 0,
              transition: 'opacity 1s ease-in',
              willChange: videoLoaded ? 'auto' : 'opacity'
            }}
          />
        )}
      </div>

      {/* Overlay opaco para legibilidad */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="container-custom max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="space-y-8 text-center max-w-3xl"
          >
            <p className="text-[11px] md:text-sm uppercase tracking-[0.35em] text-white/60 font-semibold">
              Nutrición & Rendimiento
            </p>

            <div className="space-y-4">
              <h1 className="text-[26px] sm:text-5xl md:text-[52px] lg:text-[60px] font-black leading-tight font-grift uppercase tracking-tight">
                <span className="block text-white drop-shadow-lg font-extrabold md:font-black">Tu progreso</span>
                <span className="block text-white drop-shadow-lg font-extrabold md:font-black">comienza con</span>
                <span className="block text-[#11AEF4] leading-none font-black">
                  <FlipWords
                    words={changingTexts}
                    duration={2500}
                    className="text-[26px] sm:text-5xl md:text-[52px] lg:text-[60px] text-[#11AEF4] font-black leading-tight tracking-tight drop-shadow-lg font-grift uppercase whitespace-nowrap"
                  />
                </span>
              </h1>

              <p className="text-sm md:text-base text-white/80">
                Planes de nutrición deportiva personalizados, con acompañamiento experto y seguimiento continuo para que
                alcances tu mejor versión.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full"
              >
                <div className="absolute inset-0 bg-white blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300 rounded-full" />
                <div className="relative bg-white hover:bg-white/95 text-neutral-900 font-semibold py-3 px-8 sm:py-4 sm:px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl !border-none outline-none text-sm sm:text-base">
                  Agenda tu evaluación
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
