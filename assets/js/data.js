/* =============================================================================
 *  CONTENIDO DEL SITIO — separado de la presentación
 * =============================================================================
 *  Este archivo concentra TODA la información del currículum y portafolio.
 *  Para actualizar el sitio, edita únicamente este archivo: los textos,
 *  proyectos, habilidades, formación, etc. se regeneran automáticamente.
 *
 *  La presentación visual vive en `assets/css/styles.css` y la lógica de
 *  renderizado en `assets/js/main.js`. No necesitas tocar esos archivos para
 *  cambiar el contenido.
 *
 *  Convenciones:
 *   - Los campos marcados con "TODO" requieren tus datos reales.
 *   - Deja vacío ("") un texto o lista para ocultar ese elemento.
 *   - No se inventan fechas, cifras ni enlaces: los campos opcionales quedan
 *     vacíos hasta que tú los completes.
 * ============================================================================= */

window.CV_DATA = {
  /* ------------------------------------------------------------------ *
   *  ENCABEZADO PRINCIPAL
   * ------------------------------------------------------------------ */
  perfil: {
    nombre: "Bryan Enríquez López",
    titulo:
      "Educación científica, divulgación tecnológica y desarrollo de herramientas educativas",
    presentacion:
      "Estudiante de Ingeniería en Comunicaciones y Electrónica del Instituto Politécnico Nacional, con experiencia en divulgación científica, enseñanza de electrónica y desarrollo de herramientas digitales educativas. Fundador de proyectos orientados a acercar la ciencia y la tecnología a públicos de distintas edades.",
    ubicacion: "Ciudad de México",

    // TODO: reemplaza con tu correo real. El botón «Contactar» y el pie
    // de página usarán esta dirección (enlace mailto:).
    correo: "bkbtmx@gmail.com",

    // Imagen de perfil (reemplazable por una foto .jpg/.png).
    foto: "assets/img/profile.png",
    fotoAlt: "Fotografía de Bryan Enríquez López",

    // Ruta del CV en PDF para el botón «Descargar CV».
    cvPdf: "cv/cv-bryan-enriquez-lopez.pdf",

    // Enlaces opcionales (GitHub, LinkedIn, etc.). Déjalos vacíos para
    // ocultarlos en la interfaz.
    enlaces: [
      // { etiqueta: "GitHub",  url: "https://github.com/tu-usuario" },
      // { etiqueta: "LinkedIn", url: "https://linkedin.com/in/tu-usuario" }
    ]
  },

  /* ------------------------------------------------------------------ *
   *  EXPERIENCIA EN DOCENCIA Y DIVULGACIÓN CIENTÍFICA
   *  Campo opcional `fecha` (ej. "2026"): solo se muestra si lo completas.
   * ------------------------------------------------------------------ */
  experiencia: [
    {
      rol: "Instructor del curso «Electrónica Básica I»",
      organizacion: "Orbis Scientiarum × Orbis Academy",
      fecha: ""
    },
    {
      rol: "Tallerista de «Enciende tu primer LED»",
      organizacion: "Evento Legacy · Orbis Scientiarum",
      fecha: ""
    },
    {
      rol: "Participante en mesa de diálogo en «Ciencia x la Sociedad»",
      organizacion: "Orbis Scientiarum",
      fecha: ""
    },
    {
      rol: "Tallerista en «Orbis ElectroLab»",
      organizacion: "Talent Land 2026 × Orbis Scientiarum",
      fecha: ""
    },
    {
      rol: "Tallerista en el stand de Orbis Scientiarum en «Horizontes: Del Caneguín al Cosmos»",
      organizacion: "Orbis Scientiarum",
      fecha: ""
    },
    {
      rol: "Tallerista en el stand de Orbis Scientiarum en el «Día Internacional de la Cultura Científica 2026»",
      organizacion: "UTOPÍA Meyehualco · Orbis Scientiarum",
      fecha: ""
    },
    {
      rol: "Tallerista en el stand de Orbis Scientiarum en la «Semana Mundial del Espacio 2026»",
      organizacion: "Universum · Orbis Scientiarum",
      fecha: ""
    }
  ],

  /* ------------------------------------------------------------------ *
   *  LIDERAZGO Y PROYECTOS
   * ------------------------------------------------------------------ */
  liderazgo: [
    {
      nombre: "Orbis Scientiarum",
      cargo: "Fundador y Coordinador General",
      descripcion:
        "Proyecto de divulgación científica orientado a promover el acceso libre, incluyente y accesible al conocimiento científico.",
      actividades: [
        "Dirección y coordinación de proyectos de divulgación.",
        "Organización de talleres, ponencias y stands científicos.",
        "Coordinación de colaboradores.",
        "Diseño de actividades educativas y demostraciones experimentales."
      ]
    },
    {
      nombre: "Tlanextli Labs",
      cargo: "Fundador",
      descripcion:
        "Proyecto enfocado en el desarrollo de herramientas tecnológicas, kits y recursos educativos para la enseñanza de ciencias, electrónica y programación.",
      actividades: [
        "Desarrollo de aplicaciones educativas.",
        "Diseño de recursos didácticos.",
        "Desarrollo de cursos de formación tecnológica.",
        "Diseño de soluciones para laboratorios educativos."
      ]
    }
  ],

  /* ------------------------------------------------------------------ *
   *  PROYECTOS TECNOLÓGICOS
   *  `tecnologias` y `enlace` quedan vacíos a propósito: complétalos
   *  cuando exista información real. `estado` es editable.
   * ------------------------------------------------------------------ */
  proyectos: [
    {
      nombre: "T-Sim",
      descripcion:
        "Simulador de circuitos electrónicos que permite construir y analizar circuitos mediante herramientas de simulación.",
      imagen: "assets/img/proyecto-tsim.png",
      imagenAlt: "Vista previa del proyecto T-Sim",
      tecnologias: [],
      enlace: "https://t-sim.tlanextlilabs.com/",
      enlaceTexto: "Ver proyecto",
      estado: "En desarrollo"
    },
    {
      nombre: "T-Blocks",
      descripcion:
        "Entorno de programación visual por bloques orientado al aprendizaje de programación y electrónica.",
      imagen: "assets/img/proyecto-tblocks.png",
      imagenAlt: "Vista previa del proyecto T-Blocks",
      tecnologias: [],
      enlace: "https://t-blocks.tlanextlilabs.com/",
      enlaceTexto: "Ver proyecto",
      estado: "En desarrollo"
    },
    {
      nombre: "T-Aula",
      descripcion:
        "Plataforma educativa para facilitar la interacción entre docentes, estudiantes y herramientas de laboratorio.",
      imagen: "assets/img/proyecto-taula.png",
      imagenAlt: "Vista previa del proyecto T-Aula",
      tecnologias: [],
      enlace: "",
      enlaceTexto: "Ver proyecto",
      estado: "En desarrollo"
    }
  ],

  /* ------------------------------------------------------------------ *
   *  COMPETENCIAS TÉCNICAS (sin porcentajes ni niveles inventados)
   * ------------------------------------------------------------------ */
  competencias: [
    {
      categoria: "Electrónica",
      items: [
        "Electrónica analógica y digital",
        "Diseño y simulación de circuitos",
        "Instrumentación electrónica",
        "Microcontroladores",
        "Arduino",
        "ESP32",
        "Soldadura electrónica"
      ]
    },
    {
      categoria: "Programación",
      items: ["C", "C++", "Python", "Java", "Ensamblador", "HTML"]
    },
    {
      categoria: "Herramientas",
      items: [
        "Git",
        "GitHub",
        "Visual Studio Code",
        "DaVinci Resolve",
        "Reaper",
        "Manim",
        "Inkscape"
      ]
    }
  ],

  /* ------------------------------------------------------------------ *
   *  FORMACIÓN ACADÉMICA
   * ------------------------------------------------------------------ */
  formacion: [
    {
      institucion: "Instituto Politécnico Nacional",
      detalle: "ESIME Zacatenco",
      titulo: "Ingeniería en Comunicaciones y Electrónica",
      estado: "Estudios en curso"
    },
    {
      institucion: "CBTIS 091",
      detalle: "Bachillerato tecnológico",
      titulo: "Técnico en Mantenimiento Eléctrico",
      estado: ""
    }
  ],

  /* ------------------------------------------------------------------ *
   *  IDIOMAS
   * ------------------------------------------------------------------ */
  idiomas: [
    { idioma: "Español", nivel: "Nativo" },
    { idioma: "Inglés", nivel: "Nivel por determinar, sin certificación" }
  ],

  /* ------------------------------------------------------------------ *
   *  PRÓXIMAS PARTICIPACIONES (actividades futuras, no concluidas)
   * ------------------------------------------------------------------ */
  proximas: [
    {
      actividad:
        "Instructor del curso «Introducción a la simulación de circuitos electrónicos en T-Sim»",
      organizacion: "Tlanextli Labs"
    },
    {
      actividad:
        "Tallerista en el stand de Orbis Scientiarum en «Noche de las Estrellas»",
      organizacion: "Sede Mixhuca · Orbis Scientiarum"
    }
  ]
};
