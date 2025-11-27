import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    servicios: [
      { name: 'Nutricion Deportiva', href: '#servicios' },
      { name: 'Psicologia del Deporte', href: '#servicios' },
      { name: 'Convenios Institucionales', href: '#servicios' }
    ],
    empresa: [
      { name: 'Nuestro Equipo', href: '#equipo' },
      { name: 'Testimonios', href: '#testimonios' },
      { name: 'FAQ', href: '#faq' },
    ]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
            {/* Brand */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <a href="/" className="inline-flex items-center space-x-3 mb-4">
                <div className="h-10">
                  <img src="/images/logos/Nutsport-logo-h.png" alt="NutSport" className="h-full w-auto" loading="lazy" decoding="async" />
                </div>
              </a>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Evaluaciones cientificas, planes personalizados y seguimiento profesional para deportistas y equipos.
              </p>
            </motion.div>

            {/* Servicios */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold text-white mb-4">Servicios</h3>
              <ul className="space-y-3">
                {footerLinks.servicios.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-neutral-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Empresa */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold text-white mb-4">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-neutral-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Datos */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h3 className="text-lg font-bold text-white mb-4">Datos</h3>
              <div className="space-y-3 text-neutral-400">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+56 949 651 758</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contacto@nutsport.cl</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Perez Valenzuela 1098, oficina 97-98, Providencia</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l2.5 2.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  </svg>
                  <div className="space-y-1">
                    <p>Lunes a jueves 08:00 a 20:00 horas</p>
                    <p>Viernes 08:00 a 16:00 horas</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mapa */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h3 className="text-lg font-bold text-white mb-4">Mapa</h3>
              <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-800/40 aspect-[4/3]">
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
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div variants={itemVariants} className="border-t border-neutral-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © {currentYear} NutSport. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-neutral-400 hover:text-white transition-colors">
                Politica de Privacidad
              </a>
              <a href="/terms-of-service" className="text-neutral-400 hover:text-white transition-colors">
                Terminos de Servicio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
