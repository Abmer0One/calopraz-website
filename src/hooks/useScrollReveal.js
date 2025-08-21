import { useEffect, useRef, useState } from 'react'

export const useScrollReveal = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (options.once !== false) {
            observer.unobserve(entry.target)
          }
        } else if (options.once === false) {
          setIsVisible(false)
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options.threshold, options.rootMargin, options.once])

  return [ref, isVisible]
}

export const useScrollAnimation = (animationType = 'fadeIn', options = {}) => {
  const [ref, isVisible] = useScrollReveal(options)

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0'
    
    switch (animationType) {
      case 'fadeIn':
        return 'calopraz-animate-fade-in'
      case 'slideIn':
        return 'calopraz-animate-slide-in'
      case 'slideUp':
        return 'animate-slide-up'
      case 'slideDown':
        return 'animate-slide-down'
      default:
        return 'calopraz-animate-fade-in'
    }
  }

  return [ref, getAnimationClass()]
}

