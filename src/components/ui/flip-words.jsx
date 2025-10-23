import React, { useState, useEffect } from 'react'

export const FlipWords = ({ words, duration = 3000, className = "" }) => {
  const [currentWord, setCurrentWord] = useState(words[0])
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        index = (index + 1) % words.length
        setCurrentWord(words[index])
        setIsAnimating(false)
      }, 150)
    }, duration)

    return () => clearInterval(interval)
  }, [words, duration])

  return (
    <span className={`${className} inline-block relative overflow-hidden`}>
      <span
        className={`inline-block transition-transform duration-150 ease-in-out ${
          isAnimating ? 'transform -translate-y-full opacity-0' : 'transform translate-y-0 opacity-100'
        }`}
      >
        {currentWord}
      </span>
    </span>
  )
}
