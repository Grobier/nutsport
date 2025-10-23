# 📸 INSTRUCCIONES PARA AGREGAR IMÁGENES DE SERVICIOS

## 📁 **UBICACIÓN DE LAS IMÁGENES**

Las imágenes deben ir en la carpeta:
```
public/images/services/
```

## 🖼️ **IMÁGENES NECESARIAS**

### **1. Nutrición Deportiva Personalizada**
- **Archivo**: `nutricion-deportiva.jpg`
- **Ruta completa**: `public/images/services/nutricion-deportiva.jpg`
- **Tema**: Nutrición deportiva, alimentos saludables, deportistas
- **Dimensiones recomendadas**: 800x600px o superior
- **Formato**: JPG, PNG o WebP

### **2. Psicología del Deporte**
- **Archivo**: `psicologia-deporte.jpg`
- **Ruta completa**: `public/images/services/psicologia-deporte.jpg`
- **Tema**: Meditación, concentración, mentalidad deportiva
- **Dimensiones recomendadas**: 800x600px o superior
- **Formato**: JPG, PNG o WebP

### **3. Convenios para Instituciones**
- **Archivo**: `convenios-instituciones.jpg`
- **Ruta completa**: `public/images/services/convenios-instituciones.jpg`
- **Tema**: Equipos deportivos, clubes, instituciones
- **Dimensiones recomendadas**: 800x600px o superior
- **Formato**: JPG, PNG o WebP

## 📋 **PASOS PARA AGREGAR LAS IMÁGENES**

### **Paso 1: Preparar las imágenes**
1. Busca o crea imágenes relacionadas con cada servicio
2. Redimensiona a 800x600px (o mantén proporción 4:3)
3. Optimiza el peso (máximo 500KB por imagen)
4. Guarda con los nombres exactos indicados arriba

### **Paso 2: Colocar en la carpeta**
1. Ve a la carpeta `public/images/services/`
2. Copia las 3 imágenes con los nombres exactos:
   - `nutricion-deportiva.jpg`
   - `psicologia-deporte.jpg`
   - `convenios-instituciones.jpg`

### **Paso 3: Verificar**
1. Las imágenes deben estar accesibles en:
   - `http://localhost:3000/images/services/nutricion-deportiva.jpg`
   - `http://localhost:3000/images/services/psicologia-deporte.jpg`
   - `http://localhost:3000/images/services/convenios-instituciones.jpg`

## 🎨 **SUGERENCIAS DE IMÁGENES**

### **Nutrición Deportiva:**
- Deportistas comiendo alimentos saludables
- Frutas, verduras, proteínas
- Consultas nutricionales
- Planes de alimentación

### **Psicología del Deporte:**
- Deportistas meditando
- Concentración y enfoque
- Equipos trabajando en equipo
- Visualización deportiva

### **Convenios Instituciones:**
- Equipos deportivos
- Clubes deportivos
- Reuniones profesionales
- Deportistas en grupo

## ⚠️ **IMPORTANTE**

- **Nombres exactos**: Usa los nombres exactos de archivo
- **Formato**: JPG es recomendado para fotos
- **Peso**: Máximo 500KB por imagen
- **Calidad**: Imágenes de alta calidad y profesionales
- **Derechos**: Asegúrate de tener derechos de uso

## 🔄 **ALTERNATIVA: Usar URLs externas**

Si prefieres usar imágenes de internet, puedes cambiar las URLs en el archivo `src/components/Services.jsx`:

```jsx
// En lugar de:
imageUrl: "/images/services/nutricion-deportiva.jpg"

// Usar:
imageUrl: "https://ejemplo.com/imagen.jpg"
```

## ✅ **RESULTADO ESPERADO**

Una vez agregadas las imágenes, verás:
- **Efecto DirectionAwareHover** funcionando
- **Imágenes de fondo** en cada tarjeta de servicio
- **Hover direccional** con el contenido apareciendo desde diferentes direcciones
- **Experiencia visual** profesional y atractiva

¡Las imágenes harán que la sección de servicios se vea mucho más profesional y atractiva! 🎉
