import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Testimonials = () => {
  const [currentReview, setCurrentReview] = useState(0)

  const googleReviews = [
    { name: 'Maria Gonzalez', quote: 'Excelente servicio nutricional.', source: 'google' },
    { name: 'Carlos Mendoza', quote: 'Muy buen apoyo psicologico deportivo.', source: 'google' },
    { name: 'Ana Silva', quote: 'Planes personalizados y seguimiento.', source: 'google' },
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
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % googleReviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [googleReviews.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#073995] mb-2">Lo que dicen nuestros clientes</h2>
            <p className="text-neutral-600 text-sm">Resenas verificadas y testimonios reales</p>
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
          className="mb-12"
        >
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:snap-none">
            {videoTestimonials.map((video) => (
              <motion.div
                key={video.id}
                variants={itemVariants}
                className="flex-shrink-0 w-[260px] snap-center bg-neutral-900 rounded-xl overflow-hidden relative md:flex-shrink md:w-full md:snap-start"
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

          <motion.div variants={itemVariants} className="bg-neutral-50 rounded-xl p-8 border border-neutral-100 relative overflow-hidden mt-8 md:mt-10">
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm font-semibold text-neutral-600">Resenas Google</div>
              <div className="text-xs text-neutral-500">{currentReview + 1} / {googleReviews.length}</div>
            </div>
            <div className="relative min-h-[140px]">
              <AnimatePresence mode="wait">
                <motion.div key={currentReview} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                  <blockquote className="text-neutral-700 mb-4 text-base">"{googleReviews[currentReview].quote}"</blockquote>
                  <p className="font-semibold text-[#073995]">{googleReviews[currentReview].name}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-neutral-100"
        >
          {[
            { number: '500+', label: 'Deportistas' },
            { number: '5.0', label: 'Rating' },
            { number: '50+', label: 'Instituciones' },
            { number: '3+', label: 'Anos' },
          ].map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#073995] mb-1">{stat.number}</div>
              <div className="text-neutral-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
