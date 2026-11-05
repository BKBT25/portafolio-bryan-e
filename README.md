# Currículum y portafolio — Bryan Enríquez López

Sitio web estático de una sola página que funciona como currículum vitae y portafolio profesional. Pensado para postulaciones como **tallerista, instructor o colaborador** en actividades educativas y de divulgación científica en las **UTOPÍAS de la Ciudad de México**.

- **Estética:** editorial tecnológica y científica (azul institucional, grises, fondo claro).
- **Sin backend, sin base de datos y sin dependencias externas:** funciona abriendo `index.html` directamente o sirviéndolo en cualquier hosting estático.
- **Contenido separado de la presentación:** toda la información se edita en un único archivo (`data.js`).

---

## Estructura del proyecto

```
CV y portafolio/
├── index.html                        # Esqueleto semántico (HTML + SEO + accesibilidad)
├── README.md                         # Este archivo
├── assets/
│   ├── css/
│   │   └── styles.css                # Diseño, tokens, responsive e impresión
│   ├── js/
│   │   ├── data.js                   # ← TODO el contenido editable vive aquí
│   │   └── main.js                   # Renderizado e interacciones (no editar)
│   └── img/
│       ├── profile.svg               # Placeholder de foto de perfil
│       ├── proyecto-tsim.svg         # Placeholder de captura de T-Sim
│       ├── proyecto-tblocks.svg      # Placeholder de captura de T-Blocks
│       ├── proyecto-taula.svg        # Placeholder de captura de T-Aula
│       └── favicon.svg               # Favicon (monograma BE)
└── cv/
    └── cv-bryan-enriquez-lopez.pdf   # CV descargable generado
```

---

## Cómo actualizar el contenido

Todo el contenido se edita en **`assets/js/data.js`**. No necesitas tocar HTML ni CSS.

| Qué quieres cambiar | Dónde |
|---|---|
| Nombre, título, presentación, ubicación | `perfil` |
| Correo de contacto | `perfil.correo` |
| Foto de perfil | `perfil.foto` (y `fotoAlt`) |
| Enlaces (GitHub, LinkedIn…) | `perfil.enlaces` (descomenta y completa) |
| Experiencia / actividades | `experiencia` |
| Proyectos de liderazgo (Orbis, Tlanextli) | `liderazgo` |
| Proyectos tecnológicos (T-Sim, T-Blocks, T-Aula) | `proyectos` |
| Competencias técnicas | `competencias` |
| Formación académica | `formacion` |
| Idiomas | `idiomas` |
| Próximas participaciones | `proximas` |

### Campos marcados como *TODO* (pendientes de tus datos)

1. **Correo de contacto:** ya configurado (`bkbtmx@gmail.com`). Cámbialo en `data.js` → `perfil.correo` si lo necesitas.
2. **Foto de perfil:** sustituye `assets/img/profile.svg` por tu foto (`.jpg` o `.png`), o actualiza la ruta en `perfil.foto`.
3. **Capturas de proyectos:** reemplaza los SVG de `assets/img/` por capturas reales.
4. **Enlaces a proyectos:** en `proyectos[].enlace`, agrega la URL cuando exista (mientras esté vacío, el enlace no se muestra).
5. **Tecnologías de cada proyecto:** en `proyectos[].tecnologias` (lista vacía por defecto).
6. **Estado de los proyectos:** en `proyectos[].estado` (por defecto `"En desarrollo"`).
7. **Dominio para redes sociales (Open Graph):** en `index.html`, reemplaza `https://tudominio.com` por tu URL real (etiquetas `og:image`, `og:url`, etc.).

### Convenciones

- Deja vacío `""` un texto, o una lista `[]`, para ocultar ese elemento.
- El campo opcional `fecha` de cada experiencia solo se muestra si lo completas.
- **No se inventan fechas, cifras, resultados ni enlaces:** los campos opcionales quedan vacíos hasta que los completes.

---

## Cómo reemplazar la foto y las capturas

1. Coloca tu imagen en `assets/img/`.
2. Actualiza la ruta en `data.js`:
   - Perfil → `perfil.foto`
   - Proyectos → `proyectos[].imagen`
3. Ajusta el texto alternativo (accesibilidad) en `fotoAlt` / `imagenAlt`.

Las imágenes se recortan automáticamente (`object-fit: cover`); se recomienda una proporción 1:1 para la foto y 16:10 para los proyectos.

---

## Generar o actualizar el CV en PDF

El PDF incluido (`cv/cv-bryan-enriquez-lopez.pdf`) se genera a partir de la misma página, usando sus estilos de impresión.

**Método sencillo (recomendado):**
1. Abre `index.html` en Chrome o Edge.
2. Pulsa `Ctrl + P` (o menú → Imprimir).
3. En destino elige **"Guardar como PDF"**.
4. Guarda el archivo como `cv/cv-bryan-enriquez-lopez.pdf`.

**Método automático (Windows, sin interfaz):**
```powershell
"C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --no-sandbox --no-pdf-header-footer --print-to-pdf="cv\cv-bryan-enriquez-lopez.pdf" "file:///C:/ruta/al/proyecto/index.html"
```

> Nota: el botón **"Imprimir"** de la página abre el diálogo de impresión con un formato limpio (sin navegación ni botones). El botón **"Descargar CV (PDF)"** enlaza directamente al archivo generado.

---

## Probar localmente

Basta con abrir `index.html` en el navegador (doble clic). No requiere servidor.

Opcionalmente, para probar como lo haría un hosting:
```bash
npx serve .
# o con Python:
python -m http.server 8000
```

---

## Desplegar

El sitio es 100 % estático; se puede publicar en cualquier hosting estático:

- **GitHub Pages (este repositorio):** el sitio ya está en `BKBT25/portafolio-bryan-e`. Para publicarlo como web, en el repositorio entra a **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `/ (root)` → Save**. La URL pública será `https://bkbt25.github.io/portafolio-bryan-e/`.
- **Netlify / Vercel / Cloudflare Pages:** arrastra la carpeta o conecta el repositorio; no se requiere configuración.
- **Cualquier servidor web:** copia la carpeta a la raíz pública.

No hay paso de compilación ni variables de entorno.

---

## Notas de diseño y accesibilidad

- **Responsive:** se adapta a escritorio y móvil (menú hamburguesa bajo 720 px).
- **Impresión:** hoja de estilos `@media print` dedicada que oculta navegación, botones e imágenes decorativas.
- **Accesibilidad:** HTML semántico, enlace "saltar al contenido", textos alternativos, contraste AA y soporte de `prefers-reduced-motion`.
- **SEO:** título, descripción, Open Graph/Twitter y datos estructurados (`schema.org/Person`).
- **Rendimiento:** sin frameworks, sin fuentes externas ni peticiones a terceros.
