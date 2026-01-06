#!/usr/bin/env node
/**
 * Image Optimization Script
 *
 * Convierte imágenes JPG/PNG a formatos modernos (AVIF, WebP) y genera
 * múltiples tamaños para responsive images.
 *
 * Requisitos:
 *   npm install -D sharp
 *
 * Uso:
 *   node scripts/optimize-images.js
 *   node scripts/optimize-images.js public/images/team
 *   node scripts/optimize-images.js public/images/hero.jpg
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')

// Configuración
const BREAKPOINTS = [400, 800, 1200]
const QUALITY = {
  avif: 60,  // AVIF es muy eficiente, quality 60 ≈ JPG 85
  webp: 80,  // WebP quality 80 ≈ JPG 85
  jpg: 85,   // JPG quality estándar
}

const COLORS = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
}

function log(message, color = 'reset') {
  console.log(`${COLORS[color]}${message}${COLORS.reset}`)
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
}

async function optimizeImage(inputPath, outputDir) {
  const filename = path.basename(inputPath, path.extname(inputPath))
  const ext = path.extname(inputPath).toLowerCase()

  // Validar que sea imagen
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    log(`⏭️  Skipping ${path.basename(inputPath)} (not an image)`, 'yellow')
    return
  }

  log(`\n📸 Processing: ${path.basename(inputPath)}`, 'cyan')

  try {
    const image = sharp(inputPath)
    const metadata = await image.metadata()
    const originalSize = fs.statSync(inputPath).size

    log(`   Original: ${metadata.width}x${metadata.height} (${formatBytes(originalSize)})`)

    let totalSaved = 0

    // Generar versiones responsive para cada breakpoint
    for (const width of BREAKPOINTS) {
      // Si la imagen original es más pequeña que el breakpoint, skip
      if (metadata.width < width) {
        log(`   ⏭️  Skipping ${width}w (original is smaller)`, 'yellow')
        continue
      }

      const resized = image.clone().resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside',
      })

      // AVIF
      const avifPath = path.join(outputDir, `${filename}-${width}w.avif`)
      await resized
        .avif({ quality: QUALITY.avif, effort: 6 })
        .toFile(avifPath)
      const avifSize = fs.statSync(avifPath).size

      // WebP
      const webpPath = path.join(outputDir, `${filename}-${width}w.webp`)
      await resized
        .webp({ quality: QUALITY.webp, effort: 6 })
        .toFile(webpPath)
      const webpSize = fs.statSync(webpPath).size

      // JPG
      const jpgPath = path.join(outputDir, `${filename}-${width}w.jpg`)
      await resized
        .jpeg({ quality: QUALITY.jpg, progressive: true })
        .toFile(jpgPath)
      const jpgSize = fs.statSync(jpgPath).size

      // Calcular ahorros
      const estimatedOriginalSize = (originalSize * width) / metadata.width
      const avifSavings = estimatedOriginalSize - avifSize
      const webpSavings = estimatedOriginalSize - webpSize

      totalSaved += avifSavings + webpSavings

      log(`   ✅ ${width}w:`, 'green')
      log(`      AVIF: ${formatBytes(avifSize)} (-${Math.round((avifSavings / estimatedOriginalSize) * 100)}%)`)
      log(`      WebP: ${formatBytes(webpSize)} (-${Math.round((webpSavings / estimatedOriginalSize) * 100)}%)`)
      log(`      JPG:  ${formatBytes(jpgSize)}`)
    }

    log(`   💾 Total saved: ${formatBytes(totalSaved)}`, 'green')
  } catch (error) {
    log(`   ❌ Error: ${error.message}`, 'red')
  }
}

async function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath)

  for (const file of files) {
    const fullPath = path.join(dirPath, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      await processDirectory(fullPath)
    } else if (stat.isFile()) {
      await optimizeImage(fullPath, dirPath)
    }
  }
}

async function main() {
  log('\n🖼️  Image Optimization Tool\n', 'cyan')

  const inputPath = process.argv[2] || path.join(projectRoot, 'public/images')
  const resolvedPath = path.resolve(projectRoot, inputPath)

  if (!fs.existsSync(resolvedPath)) {
    log(`❌ Path not found: ${inputPath}`, 'red')
    process.exit(1)
  }

  const stat = fs.statSync(resolvedPath)

  if (stat.isDirectory()) {
    log(`📁 Processing directory: ${inputPath}\n`, 'cyan')
    await processDirectory(resolvedPath)
  } else if (stat.isFile()) {
    log(`📄 Processing file: ${inputPath}\n`, 'cyan')
    const outputDir = path.dirname(resolvedPath)
    await optimizeImage(resolvedPath, outputDir)
  }

  log('\n✨ Done!\n', 'green')
}

main().catch(err => {
  log(`❌ Fatal error: ${err.message}`, 'red')
  process.exit(1)
})
