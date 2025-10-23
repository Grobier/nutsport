import React, { useState, useRef } from 'react'

export const DirectionAwareHover = ({ children, imageUrl, className = "" }) => {
  const [direction, setDirection] = useState('top')
  const [isActive, setIsActive] = useState(false)
  const ref = useRef(null)

  const handleMouseEnter = (e) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const deltaX = x - centerX
    const deltaY = y - centerY
    
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      setDirection(deltaX > 0 ? 'right' : 'left')
    } else {
      setDirection(deltaY > 0 ? 'bottom' : 'top')
    }
  }

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div
      ref={ref}
      className={`group relative h-[400px] w-full overflow-hidden rounded-lg bg-neutral-100 cursor-pointer ${className}`}
      onMouseMove={handleMouseEnter}
      onClick={handleClick}
    >
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out group-hover:scale-105 ${
          isActive ? 'scale-105' : ''
        }`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      
      {/* Content - Hidden by default, shown on hover (desktop) or click (mobile) */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out ${
          isActive 
            ? 'translate-y-0 translate-x-0' 
            : direction === 'top' 
              ? 'translate-y-[-100%] group-hover:translate-y-0' 
              : direction === 'bottom' 
                ? 'translate-y-[100%] group-hover:translate-y-0' 
                : direction === 'left' 
                  ? 'translate-x-[-100%] group-hover:translate-x-0' 
                  : 'translate-x-[100%] group-hover:translate-x-0'
        }`}
      >
        <div className="text-center text-white p-6 bg-black/20 backdrop-blur-sm rounded-lg max-w-full overflow-y-auto max-h-full">
          {children}
        </div>
      </div>

      {/* Tap indicator for mobile - Only show when not active */}
      <div className={`absolute bottom-4 right-4 md:hidden transition-opacity duration-300 ${
        isActive ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-pulse">
          <svg className="w-6 h-6 text-[#073995]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
        </div>
      </div>
    </div>
  )
}
