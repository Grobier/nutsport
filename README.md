# NutSport Landing Page

Landing page profesional y minimalista para NutSport, enfocada 100% en agendar consultas.

## 🚀 Stack Tecnológico

- **React 18** - Framework frontend
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS
- **Framer Motion** - Animaciones
- **Firebase Hosting** - Hosting y deployment

## 🎨 Diseño

- **Estilo**: Minimalista y premium
- **Paleta de colores**:
  - Primario: #0A2E5C (azul profundo)
  - Acento: #1674D1 (botones/links)
  - Neutros: #0F172A, #475569, #F8FAFC, #FFFFFF
  - Éxito: #10B981

## 📱 Características

- ✅ Totalmente responsiva (móvil primero)
- ✅ Animaciones suaves con Framer Motion
- ✅ Botón flotante de WhatsApp
- ✅ SEO optimizado con Open Graph
- ✅ JSON-LD structured data
- ✅ Scroll suave entre secciones
- ✅ Accesibilidad mejorada

## 🛠️ Instalación y Desarrollo

### Prerrequisitos

- Node.js 16+ 
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:3000`

### Build para Producción

```bash
# Crear build de producción
npm run build

# Preview del build
npm run preview
```

## 🔧 Configuración

### 1. Número de WhatsApp

**IMPORTANTE**: Cambiar el número de WhatsApp en los siguientes archivos:

- `src/components/Header.jsx` (línea ~12)
- `src/components/Hero.jsx` (línea ~7)
- `src/components/Services.jsx` (línea ~7)
- `src/components/CTA.jsx` (línea ~7)
- `src/components/WhatsAppButton.jsx` (línea ~12)

```javascript
const phone = "+569XXXXXXXX" // CAMBIAR POR TU NÚMERO REAL
```

### 2. Imágenes y Assets

Reemplazar los siguientes placeholders con imágenes reales:

#### Imágenes del Hero
- `src/components/Hero.jsx` - Imagen principal (línea ~95)

#### Video Testimonial
- `src/components/Testimonials.jsx` - Video testimonio (línea ~40)

#### Imágenes del Equipo
- `src/components/Team.jsx` - Fotos del equipo (línea ~15)
- Crear carpeta `public/team/` con:
  - `ana-martinez.jpg`
  - `roberto-silva.jpg`
  - `carmen-vargas.jpg`

#### Logo y Branding
- `public/logo.svg` - Logo actualizado
- `public/og-image.jpg` - Imagen para Open Graph

### 3. Información de Contacto

Actualizar información en `src/components/Footer.jsx` y `src/components/CTA.jsx`:

- Teléfono
- Email
- Dirección
- Redes sociales

## 🚀 Deployment con Firebase

### Configuración Inicial

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login a Firebase
firebase login

# Inicializar proyecto (si no existe)
firebase init hosting

# Seleccionar proyecto Firebase existente o crear uno nuevo
```

### Deploy

```bash
# Build del proyecto
npm run build

# Deploy a Firebase
firebase deploy
```

### Configuración de Dominio

1. En Firebase Console → Hosting
2. Agregar dominio personalizado (ej: nutsport.cl)
3. Configurar SSL automático

## 📊 SEO y Analytics

### Meta Tags Configurados

- ✅ Title y description optimizados
- ✅ Open Graph completo
- ✅ Twitter Cards
- ✅ Canonical URL
- ✅ Hreflang para Chile

### JSON-LD Structured Data

- ✅ LocalBusiness schema
- ✅ Servicios definidos
- ✅ Información de contacto

### Analytics (Opcional)

Para agregar Google Analytics, añadir en `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📁 Estructura del Proyecto

```
nutsport-landing/
├── public/
│   ├── logo.svg
│   ├── og-image.jpg (crear)
│   └── team/ (crear)
│       ├── ana-martinez.jpg
│       ├── roberto-silva.jpg
│       └── carmen-vargas.jpg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Team.jsx
│   │   ├── CTA.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── firebase.json
├── .firebaserc
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎯 Próximos Pasos

1. **Reemplazar placeholders** con contenido real
2. **Configurar número de WhatsApp**
3. **Añadir imágenes del equipo y testimonios**
4. **Configurar Firebase Hosting**
5. **Agregar dominio personalizado**
6. **Implementar analytics**
7. **Optimizar performance**

## 📞 Soporte

Para dudas sobre implementación o personalización, contactar al equipo de desarrollo.

---

**NutSport** - Rendimiento que se mide.




