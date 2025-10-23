import React from 'react'
import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
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
            Política de Privacidad
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
            <h2 className="text-2xl font-bold text-[#073995] mb-4">1. Información que recopilamos</h2>
            <p className="text-neutral-700 mb-6">
              Recopilamos información personal que nos proporcionas directamente, incluyendo:
            </p>
            <ul className="list-disc pl-6 mb-6 text-neutral-700">
              <li>Nombre completo y datos de contacto</li>
              <li>Información médica y deportiva relevante</li>
              <li>Historial nutricional y de entrenamiento</li>
              <li>Objetivos deportivos y de salud</li>
              <li>Información de pago para servicios</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#073995] mb-4">2. Uso de la información</h2>
            <p className="text-neutral-700 mb-6">
              Utilizamos tu información personal para:
            </p>
            <ul className="list-disc pl-6 mb-6 text-neutral-700">
              <li>Proporcionar servicios de nutrición deportiva y psicología del deporte</li>
              <li>Desarrollar planes personalizados de nutrición y entrenamiento</li>
              <li>Realizar seguimiento y monitoreo de tu progreso</li>
              <li>Comunicarnos contigo sobre citas y servicios</li>
              <li>Mejorar nuestros servicios y experiencia del cliente</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#073995] mb-4">3. Compartir información</h2>
            <p className="text-neutral-700 mb-6">
              No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto:
            </p>
            <ul className="list-disc pl-6 mb-6 text-neutral-700">
              <li>Con tu consentimiento explícito</li>
              <li>Para cumplir con obligaciones legales</li>
              <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
              <li>En caso de emergencia médica</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#073995] mb-4">4. Seguridad de datos</h2>
            <p className="text-neutral-700 mb-6">
              Implementamos medidas de seguridad técnicas y organizacionales apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>

            <h2 className="text-2xl font-bold text-[#073995] mb-4">5. Tus derechos</h2>
            <p className="text-neutral-700 mb-6">
              Tienes derecho a:
            </p>
            <ul className="list-disc pl-6 mb-6 text-neutral-700">
              <li>Acceder a tu información personal</li>
              <li>Corregir información inexacta</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Retirar tu consentimiento en cualquier momento</li>
              <li>Recibir una copia de tus datos en formato portable</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#073995] mb-4">6. Contacto</h2>
            <p className="text-neutral-700 mb-6">
              Si tienes preguntas sobre esta política de privacidad, puedes contactarnos:
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

export default PrivacyPolicy
