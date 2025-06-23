document.getElementById("abrirMenu").addEventListener("click", () => {
  document.getElementById("navLateral").classList.add("abierto");
});

document.getElementById("cerrarMenu").addEventListener("click", () => {
  document.getElementById("navLateral").classList.remove("abierto");
});

document.addEventListener("DOMContentLoaded", () => {
  const jugadores = [
    {
      nombre: "Ziir",
      desc: "Rey de la rotación.",
      img: "img/ziir.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/steam/76561198091825758/overview",
      streamer: false,
      enVivo: false,
      logrosDestacados: true,
      horas: 2900
    },
    {
      nombre: "Bksp",
      desc: '""',
      img: "/frontend/img/Foto-Bksp.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/epic/Bksp/overview",
      streamer: true, // cambiar manualmente si esta en vivo.. por ahora no backend
      enVivo: false,
      logrosDestacados: true,
      horas: 2945

    },
    {
      nombre: "R.K.X",
      desc: '""',
      img: "/frontend/img/Foto-R.K.X.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/epic/R%20.%20K%20.%20X/overview",
      streamer: true,
      enVivo: false,
      logrosDestacados: true,
      horas: 2970
    },
    {
      nombre: "Kenkyomasu",
      desc: '"El ser incomprendido."',
      img: "img/kenkyo.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/epic/kenkyomasu/overview",
      streamer: true,
      enVivo: false,
      logrosDestacados: false,
      horas: false
    },
    {
      nombre: "Alejjoh",
      desc: '""',
      img: "/frontend/img/Foto-Alejjohorny.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/xbl/alejjoh/overview",
      streamer: false,
      enVivo: false,
      logrosDestacados: false,
      horas: false
    },
    {
      nombre: "Claudioxzt2",
      desc: '""',
      img: "/frontend/img/Foto-Claudioxzt2.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/steam/76561198145230003/overview",
      streamer: false,
      enVivo: false,
      logrosDestacados: false,
      horas: 1967
    },
    {
      nombre: "Palasutro",
      desc: '"El Sujeto"',
      img: "/frontend/img/Foto-Palasutro.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/epic/Palavecino./overview",
      streamer: false,
      enVivo: false,
      logrosDestacados: false,
      horas: false
    },
    {
      nombre: "PQNelfox01",
      desc: '""',
      img: "/frontend/img/Foto-PQNelfox01.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/epic/Tochka-U/overview",
      streamer: true,
      enVivo: false,
      logrosDestacados: false,
      horas: 1927
    },
    // Agrega más miembros aquí
  ];

  const contenedor = document.getElementById("galeria-jugadores");

function renderizar(jugadoresFiltrados) {
  contenedor.innerHTML = ""; // limpiar
  jugadoresFiltrados.forEach(j => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${j.img}" alt="${j.nombre}">
      <div class="info">
        <p><strong>${j.nombre}</strong> - ${j.desc}</p>
        <a href="${j.tracker}" target="_blank">Ver en RL Tracker</a>
        ${j.streamer ? `<span class="insignia">🎥 Streamer activo</span>` : ""}
        ${j.streamer ? `
          <span class="estado-stream ${j.enVivo ? 'online' : 'offline'}">
            ${j.enVivo ? '🎥 En directo ahora' : '❌ Streamer desconectado'}
          </span>` : ""}
      </div>
    `;
    contenedor.appendChild(card);
  });
}

renderizar(jugadores); // Mostrar todos al cargar

document.querySelectorAll(".filtros button").forEach(btn => {
  btn.addEventListener("click", () => {
    const filtro = btn.getAttribute("data-filtro");

    let filtrados = jugadores;
    if (filtro === "streamers") {
      filtrados = jugadores.filter(j => j.streamer);
    } else if (filtro === "logros") {
      filtrados = jugadores.filter(j => j.logrosDestacados);
    } else if (filtro === "horas") {
      filtrados = jugadores.filter(j => j.horas >= 2000);
    }

    renderizar(filtrados);
  });
});

  // NAV Lateral
  document.querySelectorAll(".nav-lateral button[data-filtro]").forEach(btn => {
    btn.addEventListener("click", () => {
      const filtro = btn.getAttribute("data-filtro");
      let filtrados = jugadores;

      if (filtro === "streamers") filtrados = jugadores.filter(j => j.streamer);
      else if (filtro === "logros") filtrados = jugadores.filter(j => j.logrosDestacados);
      else if (filtro === "horas") filtrados = jugadores.filter(j => j.horas >=1000);

      renderizar(filtrados);
      document.getElementById("navLateral").classList.remove("abierto");
    });
  });

  // 🌓 Modo oscuro / claro
  document.getElementById("toggleModo").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });

  // 🌐 Cambio de idioma
  document.getElementById("idiomaBtn").addEventListener("click", () => {
    document.querySelectorAll("[data-en]").forEach(el => {
      const actual = el.textContent;
      el.textContent = el.getAttribute("data-en");
      el.setAttribute("data-en", actual); // Swap para permitir volver
    });
  });

  // 🎥 Modo presentación automática (slideshow scroll)
  document.getElementById("presentacionBtn").addEventListener("click", () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  });
});