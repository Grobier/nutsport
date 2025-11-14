import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TextHoverEffect from './TextHoverEffect'

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const teamMembers = [
    {
      name: 'Barbara Cruz Poblete',
      role: 'Nutricionista Deportiva',
      image: '/images/team/barbara.png',
      credential: 'Nutricionista con mencion en Gestion y Calidad de Alimentos (UNAB). Diplomado en Nutricion Clinica (PUC).',
      details: [
        'Antropometrista ISAK II',
        'Certificacion Internacional en Alimentacion y Nutricion en Vegetarianismo (IVSB)',
        'Certificacion Internacional en Nutricion Deportiva Aplicada al Fitness (IVSB)',
        'Certificacion en Nutricion y Futbol (ASOCHINUF)'
      ]
    },
    {
      name: 'Nicolas Matus Bravo',
      role: 'Nutricionista Deportivo',
      image: '/images/team/nico.png',
      credential:
        'Nutricionista con mencion en Gestion y Calidad de Alimentos (UNAB). Magister en Nutricion Deportiva y Actividad Fisica (Universidad Mayor).',
      details: [
        'Antropometrista ISAK II',
        'Certificacion Internacional en Nutricion y Futbol (IVSB)',
        'Certificacion en Nutricion y Futbol (ASOCHINUF)',
        'Ex Nutricionista plantel profesional Magallanes y Audax Italiano',
        'Ex Futbolista Profesional'
      ]
    },
    {
      name: 'Carol Penaloza Arriagada',
      role: 'Nutricionista Deportiva',
      image: '/images/team/carol.png',
      credential:
        'Nutricionista con mencion en Gestion y Calidad de Alimentos (UNAB). Especialista en actividad fisica para embarazo y post parto.',
      details: [
        'Diplomado en Actividad Fisica para el Embarazo y el Post Parto (UFT)',
        'Antropometrista ISAK II',
        'Certificacion Internacional en Nutricion Deportiva Aplicada al Fitness (IVSB)',
        'Certificacion Internacional en Nutricion y Futbol (IVSB)',
        'Certificacion en Nutricion y Futbol (ASOCHINUF)',
        'Ex Deportista Seleccionada en Patinaje Artistico'
      ]
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <>
      <section id="equipo" className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 font-grift uppercase tracking-wide">
              <TextHoverEffect text="Nuestro Equipo Experto" hoverColor="#11AEF4" defaultColor="#073995" className="text-3xl md:text-4xl lg:text-5xl font-black" />
            </motion.div>
            <motion.p variants={itemVariants} className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Profesionales altamente calificados con amplia experiencia en nutricion deportiva
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl border border-neutral-100 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center cursor-pointer"
                onClick={() => { setSelectedMember(member); setIsModalOpen(true) }}
              >
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: 0.1, duration: 0.4 }} className="flex items-center justify-center mb-5">
                  <div className="relative w-48 h-48 md:w-56 md:h-56">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1674D1] ring-2 ring-white/60 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:ring-4 group-hover:ring-[#11AEF4]/80" />
                    <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-neutral-200 shadow transition-shadow duration-300 group-hover:shadow-2xl">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover bg-transparent object-center transition-transform duration-300 ease-out group-hover:scale-[1.06] group-hover:-translate-y-1"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          const fallback = e.currentTarget.parentElement?.nextElementSibling
                          if (fallback && fallback.style) fallback.style.display = 'flex'
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 hidden items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {member.name.split(' ').map((n) => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </motion.div>
                <motion.h3 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: 0.2, duration: 0.4 }} className="text-lg md:text-xl font-bold text-[#073995] mb-1">{member.name}</motion.h3>
                <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: 0.3, duration: 0.4 }} className="text-[#11AEF4] font-medium text-sm">{member.role}</motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <AnimatePresence>
        {isModalOpen && selectedMember && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)}>
            <motion.div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl" initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} onClick={(e) => e.stopPropagation()}>
              <div className="bg-gradient-to-r from-[#073995] to-[#11AEF4] p-6 text-white">
                <h3 className="text-2xl font-black font-grift uppercase leading-tight">{selectedMember.name}</h3>
                <p className="text-white/90">{selectedMember.role}</p>
              </div>
              <div className="p-6 grid gap-6 md:grid-cols-3">
                <div className="md:col-span-1">
                  <div className="w-full aspect-square rounded-xl overflow-hidden bg-neutral-100">
                    <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  {selectedMember.credential && (
                    <p className="text-neutral-700 mb-3">{selectedMember.credential}</p>
                  )}
                  {Array.isArray(selectedMember.details) && selectedMember.details.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                      {selectedMember.details.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Team
