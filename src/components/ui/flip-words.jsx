import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export const FlipWords = ({ words, duration = 3000, className = "" }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    return () => clearInterval(interval)
  }, [words.length, duration])

  return (
    <span className={`${className} inline-block relative`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
