import React from 'react'
import { motion } from 'framer-motion'

const TextHoverEffect = ({ 
  text, 
  className = "", 
  hoverColor = "#073995",
  defaultColor = "#64748b"
}) => {
  return (
    <motion.div
      className={`inline-block ${className}`}
      whileHover="hover"
      initial="initial"
    >
      {text.split(' ').map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="inline-block mr-2"
          variants={{
            initial: { color: defaultColor },
            hover: { color: hoverColor }
          }}
          transition={{
            duration: 0.3,
            delay: wordIndex * 0.1
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default TextHoverEffect
