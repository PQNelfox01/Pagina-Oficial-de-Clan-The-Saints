export function iniciarUIEvents() {
  document.getElementById("abrirMenu").onclick = () => {
    document.getElementById("navLateral").classList.add("abierto");
    document.body.classList.add("menu-abierto");
  };
  document.getElementById("cerrarMenu").onclick = () => {
    document.getElementById("navLateral").classList.remove("abierto");
    document.body.classList.remove("menu-abierto");
  };
  document.getElementById("toggleModo").onclick = () => {
    document.body.classList.toggle("light-mode");
  };
  document.getElementById("idiomaBtn").onclick = () => {
    document.querySelectorAll("[data-en]").forEach(el => {
      const actual = el.textContent;
      el.textContent = el.getAttribute("data-en");
      el.setAttribute("data-en", actual);
    });
  };
  document.getElementById("presentacionBtn").onclick = () => {
    const seccion = document.getElementById("presentacion-section");
    if (seccion) {
      seccion.scrollIntoView({ behavior: "smooth" });
    }
  };
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
    };
  });
}
