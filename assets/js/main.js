/* =============================================================================
 *  LÓGICA DE RENDERIZADO E INTERACCIONES
 * =============================================================================
 *  Lee `window.CV_DATA` (definido en data.js) y construye la interfaz.
 *  No contiene datos: todo el contenido vive en data.js.
 * ============================================================================= */
(function () {
  "use strict";

  var data = window.CV_DATA;

  if (!data) {
    console.error("No se encontró `window.CV_DATA`. Verifica que data.js se cargue antes que main.js.");
    return;
  }

  /* ------------------------------ Utilidades ------------------------------ */
  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function $(selector) {
    return document.querySelector(selector);
  }

  /* ------------------------------- Héroe ---------------------------------- */
  function renderHero() {
    var p = data.perfil || {};

    setText(".hero-title", p.titulo);
    setText(".hero-intro", p.presentacion);
    setText(".hero-location", p.ubicacion);

    var photo = $(".hero-photo");
    if (photo) {
      if (p.foto) photo.src = p.foto;
      if (p.fotoAlt) photo.alt = p.fotoAlt;
    }

    var download = $('a[download]');
    if (download && p.cvPdf) download.href = p.cvPdf;

    // Enlaces opcionales (GitHub, LinkedIn, etc.)
    var linksEl = $(".hero-links");
    var enlaces = (p.enlaces || []).filter(function (e) {
      return e && e.etiqueta && e.url;
    });
    if (linksEl && enlaces.length) {
      linksEl.innerHTML = enlaces
        .map(function (e) {
          return (
            '<a href="' + esc(e.url) + '" target="_blank" rel="noopener noreferrer">' +
            esc(e.etiqueta) + "</a>"
          );
        })
        .join("");
    } else if (linksEl) {
      linksEl.remove();
    }

    // Botón de contacto por correo
    var mailBtn = $(".contact-mail-btn");
    if (mailBtn && p.correo) {
      mailBtn.href = "mailto:" + p.correo;
    }
    var mailLabel = $(".contact-mail-label");
    if (mailLabel) setText(".contact-mail-label", p.correo);
  }

  function setText(selector, value) {
    var el = $(selector);
    if (el) el.textContent = value == null ? "" : value;
  }

  /* ------------------------- Experiencia (timeline) ----------------------- */
  function renderExperience() {
    var wrap = $("#timeline");
    if (!wrap) return;
    var items = data.experiencia || [];
    wrap.innerHTML = items
      .map(function (item) {
        var fecha = item.fecha
          ? '<span class="timeline-date">' + esc(item.fecha) + "</span>"
          : "";
        return (
          '<li class="timeline-item">' +
          '<p class="timeline-rol">' + esc(item.rol) + "</p>" +
          '<div class="timeline-meta">' +
          '<span class="timeline-org">' + esc(item.organizacion) + "</span>" +
          fecha +
          "</div>" +
          "</li>"
        );
      })
      .join("");
  }

  /* ------------------------------ Liderazgo ------------------------------- */
  function renderLeadership() {
    var wrap = $("#leadership-grid");
    if (!wrap) return;
    var items = data.liderazgo || [];
    wrap.innerHTML = items
      .map(function (item) {
        var actividades = (item.actividades || [])
          .map(function (a) {
            return "<li>" + esc(a) + "</li>";
          })
          .join("");
        return (
          '<article class="leadership-card">' +
          '<h3 class="leadership-name">' + esc(item.nombre) + "</h3>" +
          '<span class="leadership-role">' + esc(item.cargo) + "</span>" +
          '<p class="leadership-desc">' + esc(item.descripcion) + "</p>" +
          '<p class="leadership-activities-title">Actividades</p>' +
          '<ul class="leadership-activities">' + actividades + "</ul>" +
          "</article>"
        );
      })
      .join("");
  }

  /* --------------------------- Proyectos tecnológicos --------------------- */
  function renderProjects() {
    var wrap = $("#projects-grid");
    if (!wrap) return;
    var items = data.proyectos || [];
    wrap.innerHTML = items
      .map(function (item) {
        var estado = item.estado
          ? '<span class="project-status"><span class="project-status-dot" aria-hidden="true"></span>' +
            esc(item.estado) +
            "</span>"
          : "";

        var tech = (item.tecnologias && item.tecnologias.length)
          ? '<div class="project-tech">' +
            item.tecnologias.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") +
            "</div>"
          : "";

        var enlace = item.enlace
          ? '<a class="project-link" href="' + esc(item.enlace) + '" target="_blank" rel="noopener noreferrer">' +
            esc(item.enlaceTexto || "Ver proyecto") +
            ' <span aria-hidden="true">→</span></a>'
          : "";

        return (
          '<article class="project-card">' +
          '<div class="project-media">' +
          '<img src="' + esc(item.imagen) + '" alt="' + esc(item.imagenAlt || item.nombre) + '" loading="lazy" width="640" height="400" />' +
          estado +
          "</div>" +
          '<div class="project-body">' +
          '<h3 class="project-name">' + esc(item.nombre) + "</h3>" +
          '<p class="project-desc">' + esc(item.descripcion) + "</p>" +
          tech +
          enlace +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  /* ------------------------------ Competencias ---------------------------- */
  function renderSkills() {
    var wrap = $("#skills-grid");
    if (!wrap) return;
    var items = data.competencias || [];
    wrap.innerHTML = items
      .map(function (cat) {
        var chips = (cat.items || [])
          .map(function (i) {
            return "<li>" + esc(i) + "</li>";
          })
          .join("");
        return (
          '<div class="skills-card">' +
          '<h3 class="skills-category">' + esc(cat.categoria) + "</h3>" +
          '<ul class="skills-items">' + chips + "</ul>" +
          "</div>"
        );
      })
      .join("");
  }

  /* ------------------------------ Formación ------------------------------- */
  function renderEducation() {
    var wrap = $("#education-list");
    if (!wrap) return;
    var items = data.formacion || [];
    wrap.innerHTML = items
      .map(function (item) {
        var detalle = item.detalle
          ? '<p class="education-detail">' + esc(item.detalle) + "</p>"
          : "";
        var estado = item.estado
          ? '<span class="education-status">' + esc(item.estado) + "</span>"
          : "";
        return (
          '<article class="education-card">' +
          '<h3 class="education-institution">' + esc(item.institucion) + "</h3>" +
          detalle +
          '<p class="education-title">' + esc(item.titulo) + "</p>" +
          estado +
          "</article>"
        );
      })
      .join("");
  }

  /* ------------------------------- Idiomas --------------------------------- */
  function renderLanguages() {
    var wrap = $("#languages-list");
    if (!wrap) return;
    var items = data.idiomas || [];
    wrap.innerHTML = items
      .map(function (item) {
        return (
          '<div class="language-item">' +
          '<span class="language-name">' + esc(item.idioma) + "</span>" +
          '<span class="language-level">' + esc(item.nivel) + "</span>" +
          "</div>"
        );
      })
      .join("");
  }

  /* -------------------------- Próximas participaciones -------------------- */
  function renderUpcoming() {
    var wrap = $("#upcoming-list");
    if (!wrap) return;
    var items = data.proximas || [];
    wrap.innerHTML = items
      .map(function (item) {
        return (
          '<div class="upcoming-item">' +
          '<span class="upcoming-badge">Próximamente</span>' +
          '<p class="upcoming-activity">' + esc(item.actividad) + "</p>" +
          '<p class="upcoming-org">' + esc(item.organizacion) + "</p>" +
          "</div>"
        );
      })
      .join("");
  }

  /* ------------------------------- Pie y año ------------------------------ */
  function renderFooter() {
    var year = $("#anio");
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ---------------------------- Navegación móvil --------------------------- */
  function initNav() {
    var toggle = $(".nav-toggle");
    var nav = $("#nav-lista");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Cerrar menú de navegación" : "Abrir menú de navegación");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ------------------- Resaltado de sección activa en nav ------------------ */
  function initScrollSpy() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll('.site-nav a[href^="#"]')
    );
    if (!links.length || !("IntersectionObserver" in window)) return;

    var map = {};
    links.forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      map[id] = link;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var link = map[entry.target.id];
            if (link) {
              links.forEach(function (l) {
                l.classList.remove("is-active");
              });
              link.classList.add("is-active");
            }
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    Object.keys(map).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  /* --------------------- Animación de entrada al cargar -------------------- */
  function initEntrance() {
    // Marca el fin del renderizado para activar la animación CSS de entrada.
    // La animación es solo cosmética: el contenido queda visible aunque falle.
    document.body.classList.add("is-loaded");
  }

  /* -------------------------------- Impresión ------------------------------ */
  function initPrint() {
    var btn = $(".btn-print");
    if (btn) {
      btn.addEventListener("click", function () {
        window.print();
      });
    }
  }

  /* ------------------------------ Arranque -------------------------------- */
  function init() {
    renderHero();
    renderExperience();
    renderLeadership();
    renderProjects();
    renderSkills();
    renderEducation();
    renderLanguages();
    renderUpcoming();
    renderFooter();
    initNav();
    initScrollSpy();
    initEntrance();
    initPrint();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
