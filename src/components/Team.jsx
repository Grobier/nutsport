import React from 'react'
import { motion } from 'framer-motion'

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Ana Martínez",
      role: "Nutricionista Deportivo",
      credential: "MSc. Nutrición Deportiva",
      specialty: "Especialista en optimización del rendimiento deportivo con más de 8 años de experiencia.",
      image: "/team/ana-martinez.jpg" // Placeholder - REEMPLAZAR con imagen real
    },
    {
      name: "Psic. Roberto Silva",
      role: "Psicólogo del Deporte",
      credential: "PhD. Psicología del Deporte",
      specialty: "Experto en preparación mental y gestión del estrés competitivo en deportistas de élite.",
      image: "/team/roberto-silva.jpg" // Placeholder - REEMPLAZAR con imagen real
    },
    {
      name: "Lic. Carmen Vargas",
      role: "Nutricionista Deportivo",
      credential: "Lic. Nutrición y Dietética",
      specialty: "Especialista en nutrición para deportes de resistencia y seguimiento de métricas.",
      image: "/team/carmen-vargas.jpg" // Placeholder - REEMPLAZAR con imagen real
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="equipo" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#073995] mb-6"
          >
            Nuestro Equipo Experto
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-neutral-600 max-w-3xl mx-auto"
          >
            Profesionales altamente calificados con amplia experiencia en 
            nutrición deportiva y psicología del deporte.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
            >
              {/* Photo */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-neutral-200 flex items-center justify-center">
                  {/* Placeholder para imagen real - REEMPLAZAR con imagen del equipo */}
                  <div className="w-full h-full bg-gradient-to-br from-[#073995]/20 to-[#11AEF4]/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#073995]/30 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-[#073995] font-bold text-2xl">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <p className="text-[#073995] text-xs font-medium">Foto del equipo</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-[#073995] to-[#11AEF4] p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-full rounded-full bg-white"></div>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-[#073995] mb-2">
                {member.name}
              </h3>
              
              <p className="text-[#11AEF4] font-semibold mb-2">
                {member.role}
              </p>
              
              <p className="text-neutral-600 text-sm mb-4">
                {member.credential}
              </p>
              
              <p className="text-neutral-700 text-sm leading-relaxed">
                {member.specialty}
              </p>

              {/* Social Links Placeholder */}
              <div className="flex justify-center space-x-4 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="w-8 h-8 bg-[#073995]/10 rounded-full flex items-center justify-center hover:bg-[#073995]/20 transition-colors">
                  <svg className="w-4 h-4 text-[#073995]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-[#073995]/10 rounded-full flex items-center justify-center hover:bg-[#073995]/20 transition-colors">
                  <svg className="w-4 h-4 text-[#073995]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              ),
              title: "Formación Especializada",
              description: "Másters y doctorados en nutrición deportiva y psicología del deporte"
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Experiencia Comprobada",
              description: "Más de 15 años combinados trabajando con deportistas de todos los niveles"
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: "Enfoque Científico",
              description: "Metodología basada en evidencia científica y últimas investigaciones"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#073995]/10 rounded-2xl flex items-center justify-center text-[#073995] mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[#073995] mb-2">{feature.title}</h3>
              <p className="text-neutral-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Team

