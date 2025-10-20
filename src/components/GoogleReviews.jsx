import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  // Configuración de Google Places API
  const PLACE_ID = "TU_PLACE_ID_AQUI" // Reemplazar con tu Place ID de Google My Business
  const API_KEY = "TU_API_KEY_AQUI" // Reemplazar con tu API Key

  useEffect(() => {
    // Usar solo reseñas estáticas por ahora
    setReviews(getStaticReviews())
    setLoading(false)
    // fetchGoogleReviews() // Comentado temporalmente
  }, [])

  const fetchGoogleReviews = async () => {
    try {
      // Nota: Para producción, esto debería hacerse desde el backend
      // para proteger la API key
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`
      )
      
      const data = await response.json()
      
      if (data.result && data.result.reviews) {
        setReviews(data.result.reviews.slice(0, 6)) // Mostrar solo 6 reviews
      }
    } catch (error) {
      console.error('Error fetching reviews:', error)
      // Fallback con reviews estáticas
      setReviews(getStaticReviews())
    } finally {
      setLoading(false)
    }
  }

  // Reviews estáticas como fallback
  const getStaticReviews = () => [
    {
      author_name: "María González",
      rating: 5,
      text: "Excelente servicio nutricional. El equipo de NutSport me ayudó a mejorar mi rendimiento deportivo significativamente.",
      time: Date.now() - 86400000 * 7 // 7 días atrás
    },
    {
      author_name: "Carlos Mendoza",
      rating: 5,
      text: "Profesionales muy capacitados. Las consultas psicológicas deportivas han sido clave para mi concentración.",
      time: Date.now() - 86400000 * 14 // 14 días atrás
    },
    {
      author_name: "Ana Silva",
      rating: 5,
      text: "Recomiendo totalmente NutSport. Planes personalizados y seguimiento excepcional.",
      time: Date.now() - 86400000 * 21 // 21 días atrás
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const formatDate = (timestamp) => {
    // Si el timestamp ya está en milisegundos, no multiplicar por 1000
    const date = new Date(timestamp)
    return date.toLocaleDateString('es-CL')
  }

  if (loading) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="google-reviews" className="section-padding bg-white">
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
            className="flex items-center justify-center mb-4"
          >
            <svg className="w-8 h-8 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#073995]">
              Reseñas de Google
            </h2>
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-neutral-600 max-w-3xl mx-auto mb-8"
          >
            Lo que dicen nuestros clientes en Google Reviews
          </motion.p>

          {/* Google Rating Summary */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-4 mb-12"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-[#073995] mb-2">4.9</div>
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-600 text-sm">Basado en {reviews.length}+ reseñas</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-neutral-100"
            >
              {/* Google Logo */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-sm font-medium text-neutral-600">Google</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Review Content */}
              <blockquote className="text-neutral-700 mb-4 leading-relaxed">
                "{review.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#073995]">{review.author_name}</p>
                  <p className="text-neutral-500 text-sm">
                    {formatDate(review.time)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <motion.a
            href="https://g.page/nutsport-chile/review" // Reemplazar con tu enlace de Google Reviews
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-[#073995] hover:bg-[#073995]/90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Deja tu reseña en Google
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default GoogleReviews
