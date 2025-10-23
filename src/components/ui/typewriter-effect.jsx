import React, { useState, useEffect } from 'react'

export const TypewriterEffect = ({ words, className = "" }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const currentText = currentWord.text

    const timeout = setTimeout(() => {
      if (isWaiting) {
        setIsWaiting(false)
        setIsDeleting(true)
        return
      }

      if (isDeleting) {
        setDisplayedText(currentText.substring(0, currentCharIndex - 1))
        setCurrentCharIndex(currentCharIndex - 1)

        if (currentCharIndex === 0) {
          setIsDeleting(false)
          setCurrentWordIndex((currentWordIndex + 1) % words.length)
        }
      } else {
        setDisplayedText(currentText.substring(0, currentCharIndex + 1))
        setCurrentCharIndex(currentCharIndex + 1)

        if (currentCharIndex === currentText.length) {
          setIsWaiting(true)
        }
      }
    }, isDeleting ? 50 : 150) // Más lento para frases más largas

    return () => clearTimeout(timeout)
  }, [currentCharIndex, isDeleting, isWaiting, currentWordIndex, words])

  return (
    <span className={`${className} inline`}>
      {displayedText}
      <span className="animate-pulse text-[#11AEF4]">|</span>
    </span>
  )
}
