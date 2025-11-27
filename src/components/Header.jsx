import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // WhatsApp configuration
  const phone = "+56949651758"
  const whatsappHref = `https://wa.me/${phone}?text=Hola%20NutSport%2C%20quiero%20agendar%20mi%20evaluación`

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  const menuItems = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gradient-to-r from-[#073995]/95 via-[#0d7ed9]/90 to-[#11AEF4]/90 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img 
              src="/images/logos/Nutsport-logo-h.png" 
              alt="NutSport Logo - Nutrición Deportiva y Psicología del Deporte" 
              className="h-8 lg:h-10 w-auto"
              loading="eager"
              decoding="async"
              onError={(e) => {
                // Fallback si la imagen no existe
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            {/* Fallback text logo */}
            <div className="hidden items-center">
              <span className="text-xl font-bold text-white">NutSport</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="font-medium text-white hover:text-white/80 transition-colors duration-300"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <motion.a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden lg:block font-semibold py-3 px-6 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-white text-[#073995] hover:bg-white/90 shadow-md hover:shadow-lg' 
                : 'btn-primary'
            }`}
          >
            Agenda tu evaluación
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-t transition-colors duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-r from-[#073995]/95 via-[#0d7ed9]/90 to-[#11AEF4]/90 backdrop-blur-md border-white/15' 
                : 'bg-white border-neutral-200'
            }`}
          >
            <nav className="py-4 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    isScrolled 
                      ? 'text-white hover:text-white/80 hover:bg-white/10' 
                      : 'text-neutral-700 hover:text-[#073995] hover:bg-neutral-50'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block mx-4 mt-4 font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-white text-[#073995] hover:bg-white/90 shadow-md hover:shadow-lg' 
                    : 'btn-primary'
                }`}
              >
                Agenda tu evaluación
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header
