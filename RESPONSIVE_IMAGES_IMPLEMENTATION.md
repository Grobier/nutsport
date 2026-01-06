# Responsive Images Implementation - NutSport

**Fecha de implementación:** 2026-01-05
**Estado:** ✅ HERRAMIENTAS Y COMPONENTE LISTOS

---

## 📋 Objetivo

Implementar responsive images con formatos modernos (AVIF, WebP) y múltiples tamaños para reducir el peso de las imágenes en **30-80%** y mejorar LCP.

### Problema Actual

```jsx
// ❌ ANTES: Imagen grande para todos los dispositivos
<img src="/images/hero.jpg" alt="Hero" />

// Problemas:
// - Desktop descarga imagen de 2MB cuando solo necesita 500KB
// - Mobile descarga imagen de 2MB cuando solo necesita 100KB
// - Formato JPG ineficiente (30-80% más pesado que AVIF/WebP)
// - Sin lazy loading
// - Sin width/height → CLS (Layout Shift)
```

### Solución Implementada

```jsx
// ✅ DESPUÉS: Responsive con formatos modernos
<OptimizedImage
  src="/images/hero"
  alt="Hero image"
  width={1200}
  height={800}
  sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
  loading="lazy"
/>

// Beneficios:
// ✅ Mobile descarga 100KB AVIF (vs 2MB JPG) → -95%
// ✅ Desktop descarga 300KB AVIF (vs 2MB JPG) → -85%
// ✅ Fallback progresivo: AVIF → WebP → JPG
// ✅ Lazy loading automático
// ✅ Width/height previene CLS
// ✅ srcset + sizes = responsive perfecto
```

---

## 🎯 Formatos Soportados

### AVIF (AV1 Image Format)

**Ventajas:**
- ✅ 50-80% más pequeño que JPG
- ✅ Mejor calidad visual que WebP
- ✅ Soporte en Chrome 85+, Firefox 93+, Safari 16+

**Desventajas:**
- ⚠️ Encode lento (pero vale la pena)
- ⚠️ No soportado en IE, Safari <16

**Cuando usar:** Siempre como primera opción con fallback

---

### WebP

**Ventajas:**
- ✅ 25-35% más pequeño que JPG
- ✅ Amplio soporte (96% browsers)
- ✅ Encode rápido

**Desventajas:**
- ⚠️ Menos eficiente que AVIF
- ⚠️ No soportado en IE

**Cuando usar:** Como fallback de AVIF

---

### JPG/PNG (Fallback)

**Ventajas:**
- ✅ Soporte universal 100%

**Desventajas:**
- ❌ Formato más pesado
- ❌ Sin transparencia (JPG)

**Cuando usar:** Como último fallback

---

## 🛠️ Herramientas Implementadas

### 1. Componente OptimizedImage

**Archivo:** `src/components/OptimizedImage.jsx`

```jsx
import OptimizedImage from './components/OptimizedImage'

// Uso básico
<OptimizedImage
  src="/images/team/barbara"
  alt="Barbara Cruz - Nutricionista"
  width={400}
  height={400}
  loading="lazy"
/>

// Above-the-fold (sin lazy, alta prioridad)
<OptimizedImage
  src="/images/hero/main"
  alt="Hero"
  width={1200}
  height={800}
  priority={true}
  sizes="100vw"
/>

// Custom sizes para responsive
<OptimizedImage
  src="/images/services/nutricion"
  alt="Nutrición Deportiva"
  width={800}
  height={600}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  loading="lazy"
/>
```

**Props:**

| Prop | Type | Default | Descripción |
|------|------|---------|-------------|
| `src` | string | required | Ruta base sin extensión |
| `alt` | string | required | Texto alternativo |
| `width` | number | required | Ancho intrínseco (previene CLS) |
| `height` | number | required | Alto intrínseco (previene CLS) |
| `sizes` | string | '100vw' | Media queries para srcset |
| `loading` | 'lazy'/'eager' | 'lazy' | Lazy loading |
| `priority` | boolean | false | Above-the-fold (eager + fetchpriority) |
| `className` | string | '' | Clases CSS |
| `style` | object | {} | Estilos inline |
| `objectFit` | string | 'cover' | object-fit CSS |
| `objectPosition` | string | 'center' | object-position CSS |

---

### 2. Script de Optimización

**Archivo:** `scripts/optimize-images.js`

```bash
# Optimizar todas las imágenes
npm run optimize:images

# Optimizar carpeta específica
npm run optimize:images:team        # public/images/team
npm run optimize:images:services    # public/images/services

# Optimizar archivo específico
node scripts/optimize-images.js public/images/hero.jpg
```

**Qué hace:**
1. Lee imagen original (JPG/PNG)
2. Genera 3 tamaños: 400w, 800w, 1200w
3. Convierte a 3 formatos: AVIF, WebP, JPG
4. Total: 9 archivos por imagen original
5. Reporta ahorros de peso

**Ejemplo de output:**
```
📸 Processing: hero.jpg
   Original: 2400x1600 (2.1 MB)
   ✅ 400w:
      AVIF: 45 KB (-78%)
      WebP: 85 KB (-59%)
      JPG:  205 KB
   ✅ 800w:
      AVIF: 120 KB (-72%)
      WebP: 230 KB (-47%)
      JPG:  435 KB
   ✅ 1200w:
      AVIF: 250 KB (-65%)
      WebP: 450 KB (-37%)
      JPG:  715 KB
   💾 Total saved: 5.8 MB
```

---

## 📊 Estructura de Archivos

### Convención de Nombres

```
public/images/
├── team/
│   ├── barbara-400w.avif    ← 400px ancho, formato AVIF
│   ├── barbara-400w.webp    ← 400px ancho, formato WebP
│   ├── barbara-400w.jpg     ← 400px ancho, formato JPG
│   ├── barbara-800w.avif
│   ├── barbara-800w.webp
│   ├── barbara-800w.jpg
│   ├── barbara-1200w.avif
│   ├── barbara-1200w.webp
│   ├── barbara-1200w.jpg
│   └── barbara.jpg          ← Original (conservar para referencia)
```

### Breakpoints Estándar

```javascript
const BREAKPOINTS = [400, 800, 1200]

// 400w:  Mobile portrait (320-600px)
// 800w:  Tablet / Mobile landscape (601-1024px)
// 1200w: Desktop (1025px+)
```

---

## 🔧 Guía de Migración

### Paso 1: Optimizar Imágenes Existentes

```bash
# Optimizar todas las imágenes del equipo
npm run optimize:images:team

# Output esperado:
# public/images/team/barbara-400w.{avif,webp,jpg}
# public/images/team/barbara-800w.{avif,webp,jpg}
# public/images/team/barbara-1200w.{avif,webp,jpg}
```

---

### Paso 2: Migrar Componentes

#### ANTES (sin optimización):

```jsx
// src/components/Team.jsx
<img
  src={member.image}  // "/images/team/barbara.png"
  alt={member.name}
  className="w-full h-full object-cover"
  loading="lazy"
/>
```

#### DESPUÉS (optimizado):

```jsx
// src/components/Team.jsx
import OptimizedImage from './OptimizedImage'

<OptimizedImage
  src="/images/team/barbara"  // Sin extensión
  alt={`${member.name} - ${member.role}`}
  width={400}
  height={400}
  sizes="(max-width: 768px) 200px, 400px"
  loading="lazy"
  className="w-full h-full"
  objectFit="cover"
/>
```

---

### Paso 3: Configurar Sizes Attribute

El atributo `sizes` indica al browser qué tamaño de imagen descargar según el viewport.

**Sintaxis:**
```
sizes="(media-query) tamaño, (media-query) tamaño, tamaño-default"
```

**Ejemplos:**

```jsx
// Full width en mobile, 50% en desktop
sizes="(max-width: 768px) 100vw, 50vw"

// Full width en mobile, 800px max en desktop
sizes="(max-width: 768px) 100vw, 800px"

// 3 columnas responsive
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"

// Fixed 400px en todos los tamaños
sizes="400px"
```

**Cómo calcular:**

1. **Mobile (< 768px):** ¿Qué % del viewport ocupa la imagen?
   - Full width → `100vw`
   - Mitad → `50vw`
   - Con padding 16px → `calc(100vw - 32px)`

2. **Desktop (>= 768px):** ¿Qué tamaño fijo tiene?
   - Container 1200px, 3 columnas → `400px`
   - Container 1200px, 2 columnas → `600px`

---

## 📈 Impacto Esperado

### Ahorro de Bandwidth

| Tipo de Imagen | Original JPG | AVIF | WebP | JPG Optimizado |
|----------------|--------------|------|------|----------------|
| **Hero (1200w)** | 2.1 MB | 250 KB (-88%) | 450 KB (-79%) | 715 KB (-66%) |
| **Team Member (400w)** | 300 KB | 35 KB (-88%) | 65 KB (-78%) | 120 KB (-60%) |
| **Service (800w)** | 800 KB | 95 KB (-88%) | 180 KB (-77%) | 350 KB (-56%) |
| **Logo Partner (400w)** | 150 KB | 18 KB (-88%) | 35 KB (-77%) | 70 KB (-53%) |

**Promedio de ahorro:**
- AVIF: **-85-88%** 🏆
- WebP: **-75-80%** ✅
- JPG optimizado: **-50-65%** ✅

---

### Mejora en Core Web Vitals

**LCP (Largest Contentful Paint):**
```
ANTES: Hero 2.1 MB JPG → LCP ~3.5-4.5s
DESPUÉS: Hero 250 KB AVIF → LCP ~0.9s (-74%)
```

**Mobile Performance:**
```
ANTES: Descarga 2.1 MB en 4G (~8-10s)
DESPUÉS: Descarga 250 KB en 4G (~1s) → -90%
```

**Repeat Visits:**
```
Con cache headers (1 año immutable):
- First visit: Descarga AVIF optimizado
- Repeat visit: Sirve desde cache (0 KB)
```

---

## 🎨 Ejemplos de Uso Real

### Hero Image (Above-the-Fold)

```jsx
// src/components/Hero.jsx
<OptimizedImage
  src="/images/hero/main"
  alt="NutSport - Nutrición Deportiva"
  width={1920}
  height={1080}
  priority={true}  // ← No lazy, alta prioridad
  sizes="100vw"
  className="absolute inset-0 w-full h-full"
  objectFit="cover"
/>
```

---

### Team Members Grid

```jsx
// src/components/Team.jsx
<div className="grid md:grid-cols-3 gap-8">
  {teamMembers.map((member) => (
    <OptimizedImage
      key={member.id}
      src={`/images/team/${member.slug}`}
      alt={`${member.name} - ${member.role}`}
      width={400}
      height={400}
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      loading="lazy"
      className="rounded-full"
      objectFit="cover"
    />
  ))}
</div>
```

---

### Services Cards

```jsx
// src/components/Services.jsx
<div className="grid md:grid-cols-3 gap-8">
  {services.map((service) => (
    <div className="card">
      <OptimizedImage
        src={`/images/services/${service.slug}`}
        alt={service.title}
        width={800}
        height={600}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
        loading="lazy"
        className="aspect-video"
        objectFit="cover"
        objectPosition="center 15%"
      />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  ))}
</div>
```

---

### Partners Logos

```jsx
// src/components/PartnersCarousel.jsx
{partners.map((partner) => (
  <OptimizedImage
    key={partner.id}
    src={`/images/logos/partners/${partner.slug}`}
    alt={`Logo de ${partner.name}`}
    width={220}
    height={110}
    sizes="(max-width: 768px) 150px, 220px"
    loading="lazy"
    className="h-20 w-auto"
    objectFit="contain"
  />
))}
```

---

## 🔍 Verificación Post-Implementación

### 1. Chrome DevTools - Network Tab

**Verificar formatos:**
```
1. Abrir DevTools → Network
2. Filtrar: Img
3. Refresh página
4. Verificar columna "Type":
   ✅ Chrome/Firefox/Safari 16+: avif
   ✅ Safari 14-15: webp
   ✅ IE/Safari <14: jpeg
```

**Verificar tamaños:**
```
1. Resize viewport a móvil (375px)
2. Refresh
3. Verificar que descarga imagen 400w (~35-45 KB AVIF)

4. Resize a desktop (1920px)
5. Refresh
6. Verificar que descarga imagen 1200w (~250 KB AVIF)
```

---

### 2. Lighthouse - Opportunities

```
Antes:
❌ Properly size images: 2.1 MB → 250 KB potential savings
❌ Serve images in next-gen formats: 1.8 MB savings

Después:
✅ Properly size images: PASSED
✅ Serve images in next-gen formats: PASSED
✅ Efficiently encode images: PASSED
```

---

### 3. PageSpeed Insights

**Metrics esperadas:**

```
Diagnostics:
✅ Uses AVIF for images: 85-88% savings
✅ Properly sized images: All images appropriately sized
✅ Lazy loads off-screen images: 26 images deferred

LCP Element:
Image: /images/hero/main-1200w.avif
Size: 250 KB (vs 2.1 MB before) → -88%
Load time: ~0.9s (vs ~3.5s before) → -74%
```

---

## 🚨 Troubleshooting

### Problema: Imágenes no se ven

**Causas:**
1. Archivos optimizados no generados
2. Ruta incorrecta en `src` prop

**Solución:**
```bash
# 1. Generar archivos optimizados
npm run optimize:images

# 2. Verificar que existan
ls public/images/team/barbara-*.{avif,webp,jpg}

# 3. Verificar ruta en componente (sin extensión)
<OptimizedImage src="/images/team/barbara" ... />
```

---

### Problema: Browser no carga AVIF

**Causa:** Browser viejo sin soporte AVIF

**Verificación:**
```javascript
// Console
const img = new Image()
img.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAG1pZjEAAADqbWV0YQAAAAAAAAAOcGl0bQAAAAAAAA=='
img.onload = () => console.log('✅ AVIF supported')
img.onerror = () => console.log('❌ AVIF not supported, will fallback to WebP/JPG')
```

**Solución:** Automática, fallback a WebP/JPG

---

### Problema: Optimize script falla

**Error:** `sharp` module not found

**Solución:**
```bash
npm install -D sharp
```

**Error:** Out of memory

**Solución:** Optimizar imágenes por carpeta
```bash
npm run optimize:images:team
npm run optimize:images:services
```

---

## 📚 Referencias

### Especificaciones

- **AVIF Format:** https://jakearchibald.com/2020/avif-has-landed/
- **WebP Format:** https://developers.google.com/speed/webp
- **Responsive Images:** https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images

### Herramientas

- **Sharp (Node.js):** https://sharp.pixelplumbing.com/
- **Squoosh (Web UI):** https://squoosh.app/
- **Can I Use AVIF:** https://caniuse.com/avif
- **Can I Use WebP:** https://caniuse.com/webp

### Testing

- **Image Analysis:** https://webspeedtest.cloudinary.com/
- **Format Support:** https://caniuse.com/

---

## ✅ Checklist de Implementación

### Preparación
- [x] Sharp instalado como dev dependency
- [x] Script optimize-images.js creado
- [x] Componente OptimizedImage creado
- [x] Scripts npm configurados

### Optimización de Imágenes
- [ ] Optimizar imágenes del Hero
- [ ] Optimizar imágenes del Team
- [ ] Optimizar imágenes de Services
- [ ] Optimizar logos de Partners
- [ ] Verificar que se generaron 9 archivos por imagen

### Migración de Componentes
- [ ] Migrar Hero.jsx
- [ ] Migrar Team.jsx
- [ ] Migrar Services.jsx
- [ ] Migrar PartnersCarousel.jsx
- [ ] Migrar Footer.jsx

### Verificación
- [ ] Build sin errores
- [ ] Imágenes se ven correctamente en dev
- [ ] Chrome carga AVIF
- [ ] Safari carga WebP
- [ ] Tamaños responsive funcionan
- [ ] Lazy loading funciona
- [ ] Lighthouse score >90
- [ ] PageSpeed Insights: "Serve next-gen formats" PASSED

---

**Última actualización:** 2026-01-05
**Estado:** ✅ HERRAMIENTAS LISTAS - PENDIENTE MIGRACIÓN
**Próximo paso:** Optimizar imágenes con `npm run optimize:images`
