# Videos Folder

Esta carpeta contiene videos para el sitio web NutSport.

## 📁 Archivos Requeridos

### Hero Background Video

**Archivo principal:**
- `hero-background.mp4` - Video de fondo para el Hero

**Archivo opcional (poster):**
- `hero-background-poster.jpg` - Imagen que se muestra antes de que cargue el video

---

## 🎬 Especificaciones del Video

### Requisitos Técnicos

| Propiedad | Valor Recomendado |
|-----------|-------------------|
| **Formato** | MP4 (H.264 codec) |
| **Resolución** | 1920x1080 (Full HD) |
| **Bitrate** | 2-3 Mbps |
| **Duración** | 10-30 segundos (se reproduce en loop) |
| **Tamaño** | 3-5 MB máximo |
| **FPS** | 30 fps |
| **Audio** | No necesario (muted) o codec AAC |

---

## 📥 Cómo Obtener el Video

### Opción 1: Descargar de YouTube

1. **Descargar:**
   - Visita: https://www.y2mate.com/
   - Pega la URL: https://www.youtube.com/watch?v=XrumYaarR5E
   - Selecciona calidad: 1080p
   - Descarga el MP4

2. **Optimizar con HandBrake** (recomendado):
   - Descarga HandBrake: https://handbrake.fr/
   - Abre el video descargado
   - Preset: "Fast 1080p30"
   - Video Codec: H.264
   - Framerate: 30 FPS
   - Quality: RF 22-24
   - Audio: AAC 128kbps (o eliminar audio)
   - Guardar como: `hero-background.mp4`

3. **Optimizar con FFmpeg** (avanzado):
   ```bash
   ffmpeg -i original.mp4 \
     -vcodec h264 \
     -acodec aac \
     -b:v 2M \
     -s 1920x1080 \
     -r 30 \
     hero-background.mp4
   ```

### Opción 2: Online

1. **Descargar de YouTube:**
   - https://www.y2mate.com/
   - https://savefrom.net/

2. **Comprimir online:**
   - https://www.freeconvert.com/video-compressor
   - Target size: 3-5 MB
   - Format: MP4

---

## 🖼️ Cómo Crear el Poster

El poster es una imagen estática que se muestra mientras el video carga:

```bash
# Con FFmpeg (extrae frame del video)
ffmpeg -i hero-background.mp4 -ss 00:00:02 -vframes 1 hero-background-poster.jpg

# O usa el thumbnail actual de YouTube:
# https://img.youtube.com/vi/XrumYaarR5E/maxresdefault.jpg
```

---

## 📂 Estructura Final

```
public/videos/
├── README.md (este archivo)
├── hero-background.mp4 (REQUERIDO - 3-5 MB)
└── hero-background-poster.jpg (OPCIONAL - ~100 KB)
```

---

## ✅ Verificación

Después de colocar los archivos, verifica:

```bash
# Ver tamaño del video
ls -lh public/videos/hero-background.mp4

# Debería mostrar: ~3-5 MB

# Verificar que esté en dist después del build
npm run build
ls -lh dist/videos/
```

---

## 🚀 Implementación

Una vez que el video esté en la carpeta, el código en `Hero.jsx` lo cargará automáticamente.

**Estado actual:**
- ❌ Video NO subido aún
- ⏳ Esperando que agregues `hero-background.mp4`

**Después de agregar el video:**
- ✅ Build copiará el video a `dist/videos/`
- ✅ Hero usará video local en lugar de YouTube
- ✅ Sin errores 500 en consola
- ✅ Mejor performance

---

## 📊 Comparación de Tamaño

| Origen | Requests | Tamaño | Errores |
|--------|----------|--------|---------|
| YouTube (actual) | ~10-15 | Variable | Sí (500) |
| Video Local | 1 | 3-5 MB | No |

**Nota:** Con cache headers (1 año), el video se descarga solo la primera vez. Visitas posteriores lo cargan desde cache del navegador.
