import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TextHoverEffect from './TextHoverEffect'

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const teamMembers = [
    {
      name: "Bárbara Cruz Poblete",
      role: "Nutricionista Deportivo",
      credential: "Nutricionista con mención en Gestión y Calidad de Alimentos UNAB",
      specialty: "Especialista en nutrición deportiva con certificaciones internacionales en alimentación vegetariana y fútbol.",
      image: "/images/team/barbara-cruz-poblete.jpg", // Imagen real de Bárbara
      studies: [
        "Nutricionista con mención en Gestión y Calidad de Alimentos UNAB",
        "Diplomado en Nutrición Clínica PUC",
        "Antropometrista ISAK II",
        "Certificación Internacional en Alimentación y Nutrición en Vegetarianismo, IVSB",
        "Certificación Internacional en Nutrición Deportiva Aplicada al Fitness, IVSB",
        "Certificación en Nutrición y Fútbol, ASOCHINUF"
      ]
    },
    {
      name: "Nicolás Matus Bravo",
      role: "Nutricionista Deportivo",
      credential: "Nutricionista con mención en Gestión y Calidad de Alimentos UNAB",
      specialty: "Magíster en Nutrición Deportiva y Actividad Física. Ex futbolista profesional y nutricionista de planteles profesionales.",
      image: "/images/team/nicolas-matus-bravo.jpg", // Imagen real de Nicolás
      studies: [
        "Nutricionista con mención en Gestión y Calidad de Alimentos UNAB",
        "Magíster en Nutrición Deportiva y Actividad Física Universidad Mayor",
        "Antropometrista ISAK II",
        "Certificación Internacional en Nutrición y Fútbol, IVSB",
        "Certificación en Nutrición y Fútbol, ASOCHINUF",
        "Ex Nutricionista plantel profesional Magallanes y Audax Italiano",
        "Ex Futbolista Profesional"
      ]
    },
    {
      name: "Carol Peñaloza Arriagada",
      role: "Nutricionista Deportivo",
      credential: "Nutricionista con mención en Gestión y Calidad de Alimentos UNAB",
      specialty: "Especialista en nutrición deportiva con experiencia en actividad física para embarazo y post parto. Ex deportista seleccionada en patinaje artístico.",
      image: "/images/team/carol-penaloza-arriagada.jpg", // Imagen real de Carol
      studies: [
        "Nutricionista con mención en Gestión y Calidad de Alimentos UNAB",
        "Diplomado en Actividad Física para el Embarazo y el Post Parto UFT",
        "Antropometrista ISAK II",
        "Certificación Internacional en Nutrición Deportiva Aplicada al Fitness, IVSB",
        "Certificación Internacional en Nutrición y Fútbol, IVSB",
        "Certificación en Nutrición y Fútbol, ASOCHINUF",
        "Ex Deportista Seleccionada en Patinaje Artístico"
      ]
            }
  ]

  const openModal = (member) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedMember(null)
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
    <>
    <section id="equipo" className="section-padding bg-neutral-50">
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            <TextHoverEffect 
              text="Nuestro Equipo Experto"
              hoverColor="#11AEF4"
              defaultColor="#073995"
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
            />
          </motion.div>
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
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group relative overflow-hidden"
            >
              {/* Photo */}
                <div className="relative p-8 pb-4">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-neutral-100 flex items-center justify-center">
                    {/* Imagen real del equipo */}
                    <img 
                      src={member.image} 
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        // Fallback si la imagen no existe
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    {/* Placeholder fallback */}
                    <div className="w-full h-full bg-gradient-to-br from-[#073995]/10 to-[#11AEF4]/10 flex items-center justify-center" style={{display: 'none'}}>
                      <span className="text-[#073995] font-bold text-xl">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                    </div>
                  </div>
                </div>
                
                {/* Info Minimalista */}
                <div className="px-6 pb-6">
                  <h3 className="text-lg font-bold text-[#073995] mb-1">
                {member.name}
              </h3>
              
                  <p className="text-[#11AEF4] font-medium text-sm mb-4">
                {member.role}
              </p>
              
                  {/* Botón Minimalista */}
                  <motion.button
                    onClick={() => openModal(member)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#073995] to-[#11AEF4] text-white font-medium py-2.5 px-4 rounded-lg hover:from-[#073995]/90 hover:to-[#11AEF4]/90 transition-all duration-200"
                  >
                    Ver perfil
                  </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>

      {/* Team Member Modal */}
      <AnimatePresence>
        {isModalOpen && selectedMember && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#073995] to-[#11AEF4] p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-white/20 flex items-center justify-center">
                      <img 
                        src={selectedMember.image} 
                        alt={`${selectedMember.name} - ${selectedMember.role}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                      <div className="w-full h-full bg-white/30 flex items-center justify-center" style={{display: 'none'}}>
                        <span className="text-white font-bold text-xl">
                          {selectedMember.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{selectedMember.name}</h2>
                      <p className="text-lg opacity-90">{selectedMember.role}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <div className="space-y-6">
                  {/* Credential */}
                  <div>
                    <h3 className="text-lg font-bold text-[#073995] mb-2">Credencial Principal</h3>
                    <p className="text-neutral-700">{selectedMember.credential}</p>
                  </div>

                  {/* Specialty */}
                  <div>
                    <h3 className="text-lg font-bold text-[#073995] mb-2">Especialidad</h3>
                    <p className="text-neutral-700">{selectedMember.specialty}</p>
                  </div>

                  {/* Studies */}
                  <div>
                    <h3 className="text-lg font-bold text-[#073995] mb-4">Estudios y Certificaciones</h3>
                    <div className="space-y-3">
                      {selectedMember.studies.map((study, index) => (
                        <div key={index} className="flex items-start space-x-3 bg-neutral-50 rounded-lg p-3">
                          <div className="w-2 h-2 bg-[#073995] rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-neutral-700 text-sm leading-relaxed">{study}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-neutral-50 p-6 border-t">
                <div className="text-center">
                  <motion.a
                    href={`https://wa.me/56949651758?text=Hola%20NutSport%2C%20me%20interesa%20agendar%20una%20consulta%20con%20${encodeURIComponent(selectedMember.name)}%2E%20¿Podrían%20ayudarme%3F`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center bg-gradient-to-r from-[#073995] to-[#11AEF4] text-white font-semibold px-6 py-3 rounded-xl hover:from-[#073995]/90 hover:to-[#11AEF4]/90 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Agenda consulta con {selectedMember.name.split(' ')[0]}
                  </motion.a>
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

