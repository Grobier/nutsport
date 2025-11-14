import React from 'react'
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

  const heroSideVideoId = 'mWHwArh6M1Q'
  const heroSideVideoSrc =
    `https://www.youtube.com/embed/${heroSideVideoId}` +
    '?rel=0&modestbranding=1&playsinline=1&autoplay=1&mute=1&loop=1&controls=0&playlist=' +
    heroSideVideoId

  return (
    <section className="relative bg-neutral-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black opacity-80" />

      <div className="container-custom max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid gap-10 lg:gap-16 xl:gap-24 md:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr] xl:grid-cols-[1.6fr_0.7fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="space-y-8 text-center md:text-left max-w-xl mx-auto md:mx-0"
          >
            <p className="text-[11px] md:text-sm uppercase tracking-[0.35em] text-white/60 font-semibold">
              Nutrición & Rendimiento
            </p>

            <div className="space-y-4">
              <div className="text-[26px] sm:text-5xl md:text-[52px] lg:text-[60px] font-black leading-tight font-grift uppercase tracking-tight">
                <span className="block text-white drop-shadow-lg font-extrabold md:font-black">Tu progreso</span>
                <span className="block text-white drop-shadow-lg font-extrabold md:font-black">comienza con</span>
                <span className="block text-[#11AEF4] leading-none font-black">
                  <FlipWords
                    words={changingTexts}
                    duration={2500}
                    className="text-[26px] sm:text-5xl md:text-[52px] lg:text-[60px] text-[#11AEF4] font-black leading-tight tracking-tight drop-shadow-lg font-grift uppercase whitespace-nowrap"
                  />
                </span>
              </div>

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
                className="group relative inline-flex items-center gap-3"
              >
                <div className="absolute inset-0 bg-white blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 rounded-full" />
                <div className="relative bg-white hover:bg-white/95 text-neutral-900 font-semibold py-3 px-8 sm:py-4 sm:px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl !border-none outline-none text-sm sm:text-base">
                  Agenda tu evaluación
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-xs sm:max-w-sm xl:max-w-md mx-auto md:mx-0"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#073995]/40 to-[#11AEF4]/50 blur-3xl opacity-70" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <div className="aspect-[9/16] w-full bg-black relative">
                <iframe
                  className="w-full h-full"
                  src={heroSideVideoSrc}
                  title="Testimonio destacado"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
