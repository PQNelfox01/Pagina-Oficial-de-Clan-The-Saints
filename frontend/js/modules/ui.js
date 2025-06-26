/**
 * Módulo UI - Maneja interacciones de interfaz de usuario
 */

export function iniciarUIEvents() {
  // Menú lateral
  document.getElementById("abrirMenu").onclick = () => {
    document.getElementById("navLateral").classList.add("abierto");
    document.body.classList.add("menu-abierto");
  };
  
  document.getElementById("cerrarMenu").onclick = () => {
    document.getElementById("navLateral").classList.remove("abierto");
    document.body.classList.remove("menu-abierto");
  };

  // Toggle modo claro/oscuro
  document.getElementById("toggleModo").onclick = () => {
    document.body.classList.toggle("light-mode");
    // Guardar preferencia
    localStorage.setItem('modoClaro', document.body.classList.contains("light-mode"));
  };

  // Cambio de idioma
  document.getElementById("idiomaBtn").onclick = () => {
    document.querySelectorAll("[data-en]").forEach(el => {
      const actual = el.textContent;
      el.textContent = el.getAttribute("data-en");
      el.setAttribute("data-en", actual);
    });
  };

  // Scroll a presentación
  document.getElementById("presentacionBtn").onclick = () => {
    const seccion = document.getElementById("presentacion-section");
    if (seccion) {
      seccion.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Iniciar animaciones de estadísticas
  iniciarStatsAnimation();
}

export function iniciarFiltros(jugadores, renderGaleria) {
  document.querySelectorAll("[data-filtro]").forEach(btn => {
    btn.onclick = () => {
      const filtro = btn.getAttribute("data-filtro");
      let filtrados = jugadores;
      
      if (filtro === "streamers") filtrados = jugadores.filter(j => j.streamer);
      else if (filtro === "logros") filtrados = jugadores.filter(j => j.logrosDestacados);
      else if (filtro === "horas") filtrados = jugadores.filter(j => j.horas >= 1000);
      
      renderGaleria(filtrados);
      document.getElementById("navLateral").classList.remove("abierto");
      document.body.classList.remove("menu-abierto");
      
      // Reiniciar animaciones después de filtrar
      setTimeout(iniciarStatsAnimation, 300);
    };
  });
}

/**
 * Animaciones para las estadísticas de juego
 */
function iniciarStatsAnimation() {
  const progressFills = document.querySelectorAll('.progress-fill');
  
  if (progressFills.length > 0) {
    progressFills.forEach(fill => {
      // Resetear animación
      fill.style.transition = 'none';
      fill.style.width = '0';
      
      // Forzar repintado
      void fill.offsetWidth;
      
      // Animar
      fill.style.transition = 'width 1.5s ease-out';
      fill.style.width = fill.dataset.percent || '0%';
    });
  }
  
  // Efectos hover
  document.querySelectorAll('.stat-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      const fill = item.querySelector('.progress-fill');
      if (fill) {
        fill.style.transition = 'width 0.3s ease-out, background-color 0.3s';
      }
    });
  });
}