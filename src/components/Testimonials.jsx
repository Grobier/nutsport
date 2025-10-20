import React from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      discipline: "Triatleta",
      quote: "Gracias a NutSport logré optimizar mi alimentación y mejorar mis tiempos en un 15%. El seguimiento científico es impresionante.",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      discipline: "Futbolista Profesional",
      quote: "El equipo me ayudó a superar el estrés pre-competitivo. Ahora mi concentración y rendimiento han mejorado significativamente.",
      rating: 5
    },
    {
      name: "Club Deportivo Los Andes",
      discipline: "Institución",
      quote: "Excelente servicio para nuestros deportistas. Los reportes detallados nos permiten tomar decisiones informadas.",
      rating: 5
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

  return (
    <section id="testimonios" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Video Testimonial */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#073995] mb-6">
              Resultados que se notan
            </h2>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-100">
              {/* Placeholder para video testimonio - REEMPLAZAR con video real */}
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#073995]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-[#073995]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-[#073995] font-medium">Video Testimonio</p>
                  <p className="text-neutral-500 text-sm">Reemplazar con video real (MP4/WebM)</p>
                </div>
              </div>
              
              {/* Video controls overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#073995] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <p className="text-neutral-600 text-sm">
              Escucha directamente a nuestros deportistas sobre su experiencia 
              y los resultados obtenidos con nuestros servicios.
            </p>
          </motion.div>

          {/* Written Testimonials */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-neutral-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-neutral-700 mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#073995]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#073995] font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#073995]">{testimonial.name}</p>
                    <p className="text-neutral-500 text-sm">{testimonial.discipline}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "500+", label: "Deportistas Atendidos" },
            { number: "95%", label: "Satisfacción" },
            { number: "50+", label: "Instituciones" },
            { number: "3+", label: "Años de Experiencia" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#073995] mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-600 font-medium">
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

