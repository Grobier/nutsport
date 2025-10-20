# 📝 Configuración de Google Reviews para NutSport

## 🚀 Implementación Completada

He creado un componente `GoogleReviews.jsx` que muestra las reseñas de Google de forma elegante y profesional.

## ⚙️ Configuración Necesaria

### 1. **Google My Business**
- Asegúrate de tener un perfil de Google My Business activo
- Obtén tu **Place ID** desde Google My Business

### 2. **Google Places API**
- Ve a [Google Cloud Console](https://console.cloud.google.com/)
- Habilita la **Places API**
- Crea una **API Key**
- Restringe la API Key a tu dominio

### 3. **Actualizar el Componente**
En `src/components/GoogleReviews.jsx`, reemplaza:

```javascript
const PLACE_ID = "TU_PLACE_ID_AQUI" // Tu Place ID de Google My Business
const API_KEY = "TU_API_KEY_AQUI"   // Tu API Key de Google Places
```

### 4. **Enlace de Reseñas**
Actualiza el enlace en el botón "Deja tu reseña en Google":
```javascript
href="https://g.page/nutsport-chile/review" // Tu enlace de Google Reviews
```

## 🎨 Características del Componente

### **Diseño:**
- ✅ Tarjetas con estilo minimalista
- ✅ Logo de Google oficial
- ✅ Estrellas de calificación
- ✅ Animaciones suaves
- ✅ Responsive design
- ✅ Colores de marca (#073995, #11AEF4)

### **Funcionalidades:**
- ✅ Muestra hasta 6 reseñas
- ✅ Fallback con reseñas estáticas
- ✅ Loading state
- ✅ Botón para dejar reseñas
- ✅ Resumen de calificación promedio

## 🔧 Alternativas de Implementación

### **Opción 2: Widget de Google (Más Simple)**
```html
<!-- Agregar en tu HTML -->
<script src="https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&libraries=places"></script>
<div id="google-reviews-widget"></div>
```

### **Opción 3: Servicios de Terceros**
- **Trustpilot**
- **Yelp**
- **Facebook Reviews**

## 📱 Integración en el Sitio

El componente se ha integrado entre "Convenios Institucionales" y "Testimonios" para crear un flujo natural:

1. Servicios
2. Planes Individuales
3. Convenios Institucionales
4. **Google Reviews** ← Nuevo
5. Testimonios
6. Equipo
7. Contacto

## 🚨 Consideraciones de Seguridad

**IMPORTANTE:** Para producción, mueve la llamada a la API al backend para proteger tu API Key:

```javascript
// En tu backend (Node.js/Express)
app.get('/api/reviews', async (req, res) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`
  )
  const data = await response.json()
  res.json(data)
})

// En el frontend
const response = await fetch('/api/reviews')
const reviews = await response.json()
```

## ✅ Próximos Pasos

1. **Configurar Google My Business**
2. **Obtener Place ID y API Key**
3. **Actualizar las variables en el componente**
4. **Probar la integración**
5. **Mover API calls al backend (recomendado)**

¡El componente está listo para usar! Solo necesitas configurar las credenciales de Google.
