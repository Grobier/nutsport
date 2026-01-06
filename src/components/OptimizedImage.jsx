import React from 'react'
import PropTypes from 'prop-types'

/**
 * OptimizedImage Component
 *
 * Componente optimizado para imágenes con soporte de:
 * - Formatos modernos (AVIF, WebP)
 * - Responsive images (srcset, sizes)
 * - Lazy loading
 * - Width/Height explícitos (previene CLS)
 * - Fallback progresivo
 *
 * @example
 * <OptimizedImage
 *   src="/images/hero"
 *   alt="Hero image"
 *   width={1200}
 *   height={800}
 *   sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
 *   loading="lazy"
 * />
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  sizes = '100vw',
  loading = 'lazy',
  className = '',
  style = {},
  priority = false,
  objectFit = 'cover',
  objectPosition = 'center',
}) => {
  // Generar nombres de archivos para diferentes formatos
  const basePath = src.replace(/\.(jpg|jpeg|png)$/i, '')

  // Breakpoints estándar para responsive images
  const breakpoints = [400, 800, 1200]

  // Generar srcset para cada formato
  const generateSrcSet = (format) => {
    return breakpoints
      .map(width => `${basePath}-${width}w.${format} ${width}w`)
      .join(', ')
  }

  // Si es priority (above-the-fold), no usar lazy loading
  const loadingAttr = priority ? 'eager' : loading
  const fetchPriorityAttr = priority ? 'high' : undefined

  return (
    <picture>
      {/* AVIF - formato más eficiente (50-80% más pequeño que JPG) */}
      <source
        srcSet={generateSrcSet('avif')}
        sizes={sizes}
        type="image/avif"
      />

      {/* WebP - fallback moderno (25-35% más pequeño que JPG) */}
      <source
        srcSet={generateSrcSet('webp')}
        sizes={sizes}
        type="image/webp"
      />

      {/* JPG/PNG - fallback tradicional */}
      <img
        src={`${basePath}-800w.jpg`}
        srcSet={generateSrcSet('jpg')}
        sizes={sizes}
        width={width}
        height={height}
        loading={loadingAttr}
        fetchpriority={fetchPriorityAttr}
        alt={alt}
        className={className}
        style={{
          ...style,
          objectFit,
          objectPosition,
        }}
        decoding="async"
      />
    </picture>
  )
}

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  sizes: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  className: PropTypes.string,
  style: PropTypes.object,
  priority: PropTypes.bool,
  objectFit: PropTypes.oneOf(['cover', 'contain', 'fill', 'none', 'scale-down']),
  objectPosition: PropTypes.string,
}

export default OptimizedImage
