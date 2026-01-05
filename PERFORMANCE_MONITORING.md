# Performance Monitoring & Optimization Guide

## 📊 Bundle Size Monitoring

### Current Baselines (Fecha: 2026-01-04 - Optimizado)
```
Bundle Principal:     254 KB (82 KB gzip) ✅ MEJORADO -5%
CSS:                   46 KB (7.26 KB gzip)
Lazy Chunks:
  - Pricing:          10 KB (3.27 KB gzip)
  - Testimonials:     9.6 KB (3.70 KB gzip)
  - Team:             6.2 KB (2.24 KB gzip)
  - FAQ:             6.3 KB (2.52 KB gzip)
  - Footer:          5.6 KB (1.94 KB gzip)
  - PartnersCarousel: 5.6 KB (2.24 KB gzip) 🆕
  - Services:        4.7 KB (1.90 KB gzip) 🆕
  - WhatsAppButton:  2.9 KB (1.53 KB gzip) 🆕

Total inicial:       300 KB (89 KB gzip)
Total con lazy:      355 KB (105 KB gzip)
```

**Optimización reciente (2026-01-04):**
- ✅ Lazy loaded PartnersCarousel, Services y WhatsAppButton
- ✅ Removidos hooks de Framer Motion del bundle principal (useReducedMotion, useInView, AnimatePresence)
- ✅ Reducción de 13 KB en bundle principal (5% mejora)

### Performance Budgets
```
⚠️ ALERTAS SI SE EXCEDE:
- Bundle principal:   < 300 KB (< 100 KB gzip) ✅ PASS
- CSS principal:      < 50 KB (< 10 KB gzip)   ✅ PASS
- Cualquier chunk:    < 500 KB                 ✅ PASS
- HTML:               < 15 KB (< 5 KB gzip)    ✅ PASS
```

## 🔍 Cómo Analizar el Bundle

### Método 1: Visualizador de Bundle
```bash
npm run build:analyze
```
Este comando:
1. Construye el proyecto
2. Genera `dist/stats.html` con visualización interactiva
3. Muestra tamaños gzip y brotli
4. Identifica módulos pesados

**Qué buscar:**
- ❌ Librerías duplicadas (ej: dos versiones de React)
- ❌ Módulos enormes (>100 KB)
- ❌ Código no usado (librerías completas importadas)

### Método 2: Chrome DevTools Coverage
```
1. Abrir DevTools (F12)
2. Cmd+Shift+P → "Show Coverage"
3. Refresh página
4. Ver % de código usado

OBJETIVO: >80% de código usado
ACTUAL: ~65-70% (aceptable para SPA)
```

### Método 3: Bundle Size en Terminal
```bash
npm run size
```

## 📦 Librerías Pesadas Actuales

### Framer Motion (~105 KB)
**Uso:** Animaciones en toda la app
**Optimizaciones aplicadas:**
- ✅ Tree shaking habilitado
- ✅ Solo se importan funciones usadas (`motion`, `AnimatePresence`)
- ⚠️ Considerar lazy load para animaciones complejas

**Cómo reducir más:**
```jsx
// ❌ MALO: Importar toda la librería
import * as FramerMotion from 'framer-motion'

// ✅ BUENO: Solo lo que usas
import { motion, AnimatePresence } from 'framer-motion'

// 🚀 MEJOR: Lazy load animaciones pesadas
const HeavyAnimation = lazy(() => import('./HeavyAnimation'))
```

### React + React-DOM (~130 KB)
**Uso:** Framework base
**Optimizaciones aplicadas:**
- ✅ Producción build (sin warnings)
- ✅ Separate chunk para caching

**No se puede reducir más** (es el core)

## 🎯 Reglas de Mantenimiento

### 1. Antes de Agregar Librerías
```bash
# Verificar tamaño ANTES de instalar
npm info [package-name] dist.unpackedSize

# Buscar alternativas más ligeras
# Ejemplo: date-fns vs moment.js (60 KB vs 232 KB)
```

### 2. Código a Eliminar
```javascript
// ❌ NO HACER: Imports no usados
import { motion, useSpring, useTransform } from 'framer-motion'
// Solo usas motion → elimina useSpring, useTransform

// ❌ NO HACER: Funciones no usadas
function helperNuncaUsado() { /* ... */ }

// ❌ NO HACER: console.logs (ya se eliminan automáticamente)
console.log('debug info') // Terser los elimina en build
```

### 3. Monitoreo Semanal
```bash
# Cada semana, ejecutar:
npm run build:analyze

# Revisar:
1. ¿Bundle principal creció? ¿Por qué?
2. ¿Nuevos chunks grandes aparecieron?
3. ¿Code coverage bajó de 70%?
```

## 📈 Scripts de Análisis

### `npm run build`
Build de producción con todas las optimizaciones

### `npm run build:analyze`
Build + visualización de bundle

### `npm run size`
Muestra tamaños de archivos generados

## 🚨 Alertas Automáticas

El build **fallará** si:
- ❌ Bundle principal > 500 KB (warning en 500 KB)
- ❌ Errores de ESLint

El build **advertirá** si:
- ⚠️ Chunks > 500 KB
- ⚠️ Assets > 500 KB

## 📊 Core Web Vitals Target

```
Métrica          | Target  | Actual | Status
-----------------|---------|--------|--------
LCP              | < 2.5s  | ~0.9s  | ✅ EXCELENTE
FID/INP          | < 200ms | ~80ms  | ✅ EXCELENTE
CLS              | < 0.1   | ~0.01  | ✅ EXCELENTE
TBT              | < 300ms | ~800ms | ⚠️ MEJORABLE
FCP              | < 1.8s  | ~0.4s  | ✅ EXCELENTE
TTFB             | < 600ms | ~100ms | ✅ EXCELENTE
```

## 🔧 Troubleshooting

### Bundle creció inesperadamente
```bash
# 1. Generar análisis
npm run build:analyze

# 2. Comparar con baseline
# Ver PERFORMANCE_MONITORING.md (este archivo)

# 3. Identificar culpable
# - ¿Nueva librería? Buscar alternativa ligera
# - ¿Código duplicado? Refactorizar
# - ¿Import mal hecho? Optimizar

# 4. Revertir cambio o optimizar
```

### Code Coverage bajo (<60%)
```
1. Abrir Chrome DevTools → Coverage
2. Identificar archivos con <50% uso
3. Opciones:
   - Lazy load el componente
   - Eliminar código no usado
   - Split en chunks más pequeños
```

## 🔍 Análisis de Código Muerto (Dead Code)

### Chrome DevTools Coverage
La herramienta Coverage te muestra qué porcentaje del código JavaScript y CSS se está usando realmente:

**Cómo usar:**
```
1. Abrir la página en Chrome
2. Abrir DevTools (F12)
3. Cmd+Shift+P (Ctrl+Shift+P en Windows)
4. Escribir "Show Coverage" y presionar Enter
5. Click en el botón de refresh (⟳)
6. Interactuar con la página (scroll, click en modales, etc.)
7. Revisar resultados
```

**Interpretar resultados:**
```
✅ EXCELENTE: >80% de código usado
✅ BUENO:      70-80% de código usado
⚠️  ACEPTABLE: 60-70% de código usado (normal para SPA)
❌ MALO:       <60% de código usado
```

**Qué buscar:**
1. **Archivos grandes con bajo uso (<50%)**
   - Candidatos para lazy loading
   - Posible código no usado para eliminar

2. **Código de terceros no usado**
   - Librerías importadas completamente cuando solo se usa una parte
   - Ejemplo: `import * as lib` vs `import { funcUsada }`

3. **CSS no usado**
   - Tailwind CSS genera muchas clases, pero el tree shaking debería eliminarlas
   - Si ves mucho CSS rojo, revisar configuración de PurgeCSS/Tailwind

**Ejemplo de optimización:**
```javascript
// ❌ ANTES: 100% del paquete cargado, solo 20% usado
import * as FramerMotion from 'framer-motion'

// ✅ DESPUÉS: Solo lo necesario
import { motion, AnimatePresence } from 'framer-motion'
```

### Automatizar análisis de código muerto

**Opción 1: webpack-bundle-analyzer (ya configurado)**
```bash
npm run build:analyze
# Abre dist/stats.html
# Buscar módulos grandes con poco impacto en la app
```

**Opción 2: source-map-explorer**
```bash
# Instalar
npm install -D source-map-explorer

# Agregar a package.json scripts:
"analyze:sourcemap": "source-map-explorer dist/assets/*.js"

# Ejecutar
npm run analyze:sourcemap
```

**Opción 3: Bundle Buddy**
```bash
# Generar stats
npm run build -- --stats

# Subir a https://bundle-buddy.com
```

### Checklist mensual de código muerto
- [ ] Ejecutar Coverage en Chrome DevTools
- [ ] Revisar archivos con <50% uso
- [ ] Ejecutar `npm run build:analyze`
- [ ] Identificar librerías pesadas poco usadas
- [ ] Considerar alternativas más ligeras
- [ ] Revisar imports innecesarios

## 📝 Checklist Pre-Deploy

Antes de cada deploy:
- [ ] `npm run build` sin warnings
- [ ] Bundle principal < 300 KB (actualmente 254 KB ✅)
- [ ] CSS < 50 KB (actualmente 46 KB ✅)
- [ ] Ningún chunk > 500 KB (todos <10 KB ✅)
- [ ] `npm run build:analyze` revisado
- [ ] Chrome DevTools Coverage >60%
- [ ] PageSpeed score > 90

## 🎓 Recursos

- **Webpack Bundle Analyzer:** https://github.com/webpack-contrib/webpack-bundle-analyzer
- **Bundle Phobia:** https://bundlephobia.com (verificar tamaño de paquetes)
- **Can I Use:** https://caniuse.com (verificar features necesarias)
- **Chrome DevTools Coverage:** DevTools → More Tools → Coverage

---

**Última actualización:** 2026-01-04
**Próxima revisión:** 2026-01-11 (semanal)
