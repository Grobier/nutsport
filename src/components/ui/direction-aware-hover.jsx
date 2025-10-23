import React, { useState, useRef } from 'react'

export const DirectionAwareHover = ({ children, imageUrl, className = "" }) => {
  const [direction, setDirection] = useState('top')
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

  return (
    <div
      ref={ref}
      className={`group relative h-[400px] w-full overflow-hidden rounded-lg bg-neutral-100 ${className}`}
      onMouseMove={handleMouseEnter}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      
      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out ${
          direction === 'top' ? 'translate-y-[-100%] group-hover:translate-y-0' :
          direction === 'bottom' ? 'translate-y-[100%] group-hover:translate-y-0' :
          direction === 'left' ? 'translate-x-[-100%] group-hover:translate-x-0' :
          'translate-x-[100%] group-hover:translate-x-0'
        }`}
      >
        <div className="text-center text-white p-6 bg-black/20 backdrop-blur-sm rounded-lg">
          {children}
        </div>
      </div>
    </div>
  )
}
