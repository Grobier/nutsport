import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Testimonials = () => {
  const [currentReview, setCurrentReview] = useState(0)

  // Google Reviews - Carrusel
  const googleReviews = [
    {
      name: "María González",
      quote: "Excelente servicio nutricional. El equipo de NutSport me ayudó a mejorar mi rendimiento deportivo significativamente.",
      source: "google"
    },
    {
      name: "Carlos Mendoza",
      quote: "Profesionales muy capacitados. Las consultas psicológicas deportivas han sido clave para mi concentración.",
      source: "google"
    },
    {
      name: "Ana Silva",
      quote: "Recomiendo totalmente NutSport. Planes personalizados y seguimiento excepcional.",
      source: "google"
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % googleReviews.length)
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(timer)
  }, [googleReviews.length])

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % googleReviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + googleReviews.length) % googleReviews.length)
  }

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="testimonios" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header with Rating Badge */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4"
        >
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#073995] mb-2">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-neutral-600 text-sm">
              Reseñas verificadas y testimonios reales
            </p>
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

        {/* Grid: Carrusel Google + Video Grande */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Google Reviews Carousel */}
          <motion.div
            variants={itemVariants}
            className="bg-neutral-50 rounded-xl p-8 border border-neutral-100 relative overflow-hidden"
          >
            {/* Google Badge Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm font-semibold text-neutral-600">Reseñas Google</span>
              </div>
              <div className="text-xs text-neutral-500">
                {currentReview + 1} / {googleReviews.length}
              </div>
            </div>

            {/* Carousel Content */}
            <div className="relative min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <blockquote className="text-neutral-700 mb-6 text-base leading-relaxed">
                    "{googleReviews[currentReview].quote}"
                  </blockquote>

                  <p className="font-semibold text-[#073995]">
                    {googleReviews[currentReview].name}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevReview}
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#073995] hover:text-white transition-colors"
                aria-label="Anterior"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {googleReviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentReview ? 'bg-[#073995] w-6' : 'bg-neutral-300'
                    }`}
                    aria-label={`Ir a reseña ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#073995] hover:text-white transition-colors"
                aria-label="Siguiente"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Video Testimonial - Más grande */}
          <motion.div
            variants={itemVariants}
            className="bg-neutral-900 rounded-xl overflow-hidden relative group cursor-pointer"
          >
            {/* Placeholder para video */}
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white font-bold text-xl mb-3">Video Testimonio</p>
                <p className="text-white/60 text-sm">
                  Reemplaza con tu video de cliente<br />
                  (MP4, YouTube o Vimeo)
                </p>
              </div>
            </div>

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-[#073995]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <svg className="w-12 h-12 text-[#073995] ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-neutral-100"
        >
          {[
            { number: "500+", label: "Deportistas" },
            { number: "5.0", label: "Rating" },
            { number: "50+", label: "Instituciones" },
            { number: "3+", label: "Años" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#073995] mb-1">
                {stat.number}
              </div>
              <div className="text-neutral-600 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

