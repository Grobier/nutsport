import React from 'react'
import { motion } from 'framer-motion'

const CTA = () => {
  const phone = "+56949651758"
  const whatsappHref = `https://wa.me/${phone}?text=Hola%20NutSport%2C%20quiero%20agendar%20mi%20evaluacion`

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contacto" className="section-padding bg-[#073995] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16" />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#073995] font-bold py-4 px-8 rounded-lg hover:bg-neutral-100 transition-all duration-300 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              <span>Agenda por WhatsApp</span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-8 text-center"
            >
              ¿Listo para comenzar tu transformacion?
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Telefono</h4>
                  <p className="text-white/80 text-sm mb-3">Llamanos directamente</p>
                  <a
                    href="tel:+56949651758"
                    className="text-white font-bold text-lg hover:text-yellow-300 transition-colors"
                  >
                    +56 949 651 758
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                  <p className="text-white/80 text-sm mb-3">Escribenos un mensaje</p>
                  <a
                    href="mailto:contacto@nutsport.cl"
                    className="text-white font-bold text-sm hover:text-yellow-300 transition-colors break-all"
                  >
                    contacto@nutsport.cl
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Ubicacion</h4>
                  <p className="text-white/80 text-sm mb-3">Visitanos en nuestras oficinas</p>
                  <p className="text-white font-bold text-sm">
                    Perez Valenzuela 1098<br />
                    Oficina 97-98, Providencia
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-8 text-center"
            >
              <p className="text-white/70 text-sm">
                Horarios de atencion: Lunes a Viernes 9:00 - 18:00 | Sabados 9:00 - 14:00
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10"
            >
              <h4 className="text-lg font-semibold text-white mb-3 text-center">¿Donde estamos?</h4>
              <div className="w-full overflow-hidden rounded-2xl shadow-lg border border-white/20 bg-white/5 aspect-[4/3]">
                <iframe
                  title="Mapa NutSport"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.777639870811!2d-70.62538272346238!3d-33.42904109641764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c52622c2c645%3A0xda14468a3c6edcc1!2sNutsport%20-%20Nutricion%20y%20deporte%20%2F%20Nutricion%20deportiva!5e0!3m2!1ses!2scl!4v1764250656052!5m2!1ses!2scl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
