import React from 'react'
import { motion } from 'framer-motion'

const TermsOfService = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container-custom py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[#073995] mb-8"
          >
            Términos de Servicio
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-neutral-600 mb-8"
          >
            Última actualización: 15 de enero de 2024
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-2xl font-bold text-[#073995] mb-4">1. Aceptación de términos</h2>
            <p className="text-neutral-700 mb-6">
              Al utilizar los servicios de NutSport, aceptas estos términos de servicio. Si no estás de acuerdo con alguno de estos términos, no debes utilizar nuestros servicios.
            </p>

            <h2 className="text-2xl font-bold text-[#073995] mb-4">2. Servicios ofrecidos</h2>
            <p className="text-neutral-700 mb-4">
              NutSport ofrece los siguientes servicios:
            </p>
            <ul className="list-disc pl-6 mb-6 text-neutral-700">
              <li>Evaluaciones nutricionales deportivas personalizadas</li>
              <li>Planes nutricionales individualizados</li>
              <li>Servicios de psicología del deporte</li>
              <li>Seguimiento y monitoreo de progreso</li>
              <li>Convenios para instituciones deportivas</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#073995] mb-4">3. Responsabilidades del cliente</h2>
            <p className="text-neutral-700 mb-4">
              Como cliente, te comprometes a:
            </p>
            <ul className="list-disc pl-6 mb-6 text-neutral-700">
              <li>Proporcionar información médica y deportiva precisa y completa</li>
              <li>Seguir las recomendaciones nutricionales y de entrenamiento</li>
              <li>Asistir puntualmente a las citas programadas</li>
              <li>Comunicar cualquier cambio en tu estado de salud</li>
              <li>Realizar los pagos correspondientes en tiempo y forma</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#073995] mb-4">4. Política de cancelaciones</h2>
            <p className="text-neutral-700 mb-6">
              Las citas deben cancelarse con al menos 24 horas de anticipación. Las cancelaciones con menos de 24 horas pueden estar sujetas a una tarifa de cancelación del 50% del valor de la consulta.
            </p>

            <h2 className="text-2xl font-bold text-[#073995] mb-4">5. Limitación de responsabilidad</h2>
            <p className="text-neutral-700 mb-6">
              NutSport proporciona servicios de asesoramiento nutricional y psicológico deportivo. Los resultados pueden variar según la adherencia del cliente a las recomendaciones. No garantizamos resultados específicos y no somos responsables por decisiones médicas tomadas sin consulta médica profesional.
            </p>

            <h2 className="text-2xl font-bold text-[#073995] mb-4">6. Confidencialidad</h2>
            <p className="text-neutral-700 mb-6">
              Toda la información médica y personal compartida durante las consultas es estrictamente confidencial y solo será utilizada para proporcionar los servicios acordados.
            </p>

            <h2 className="text-2xl font-bold text-[#073995] mb-4">7. Modificaciones</h2>
            <p className="text-neutral-700 mb-6">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán notificados a través de nuestro sitio web y entrarán en vigor inmediatamente.
            </p>

            <h2 className="text-2xl font-bold text-[#073995] mb-4">8. Contacto</h2>
            <p className="text-neutral-700 mb-6">
              Para consultas sobre estos términos de servicio:
            </p>
            <div className="bg-neutral-50 p-6 rounded-xl">
              <p className="text-neutral-700 mb-2"><strong>Email:</strong> contacto@nutsport.cl</p>
              <p className="text-neutral-700 mb-2"><strong>Teléfono:</strong> +56 9 XXXX XXXX</p>
              <p className="text-neutral-700"><strong>Dirección:</strong> Santiago, Chile</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsOfService
