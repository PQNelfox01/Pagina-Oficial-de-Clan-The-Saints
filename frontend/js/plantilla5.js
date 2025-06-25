// === NAV LATERAL (Abrir / Cerrar) ===
document.getElementById("abrirMenu").addEventListener("click", () => {
  document.getElementById("navLateral").classList.add("abierto");
  document.body.classList.add("menu-abierto");
});

document.getElementById("cerrarMenu").addEventListener("click", () => {
  document.getElementById("navLateral").classList.remove("abierto");
  document.body.classList.remove("menu-abierto"); // CORREGIDO
});

// === DOM CARGADO ===
document.addEventListener("DOMContentLoaded", () => {
  const jugadores = [
    {
      nombre: "Ziir",
      desc: "Rey de la rotación.",
      img: "/frontend/img/Foto-Ziir.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/steam/76561198091825758/overview",
      streamer: false,
      enVivo: false,
      logrosDestacados: true,
      horas: 2900
    },
    {
      nombre: "Bksp",
      desc: '"El Lloressy"',
      img: "/frontend/img/Foto-Bksp.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/epic/Bksp/overview",
      streamer: true,
      enVivo: false,
      logrosDestacados: true,
      horas: 2945
    },
    {
      nombre: "R.K.X",
      desc: '"Turbo Roka"',
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
      img: "/frontend/img/Foto-Kenkyo.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/epic/kenkyomasu/overview",
      streamer: true,
      enVivo: false,
      logrosDestacados: false,
      horas: 2718
    },
    {
      nombre: "Alejjoh",
      desc: '"El Parce"',
      img: "/frontend/img/Foto-Alejjohorny.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/xbl/alejjoh/overview",
      streamer: false,
      enVivo: false,
      logrosDestacados: false,
      horas: false
    },
    {
      nombre: "Claudioxzt2",
      desc: '"Qué terrible chiquillos."',
      img: "/frontend/img/Foto-Claudioxzt2.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/steam/76561198145230003/overview",
      streamer: false,
      enVivo: false,
      logrosDestacados: false,
      horas: 1967
    },
    {
      nombre: "Palasutro",
      desc: '"Faker"',
      img: "/frontend/img/Foto-Palasutro.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/epic/Fernando_pala/overview",
      streamer: false,
      enVivo: false,
      logrosDestacados: false,
      horas: 1748
    },
    {
      nombre: "PQNelfox01",
      desc: '"El Mute"',
      img: "/frontend/img/Foto-PQNelfox01.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/epic/Tochka-U/overview",
      streamer: true,
      enVivo: false,
      logrosDestacados: false,
      horas: 1927
    }
  ];

  const contenedor = document.getElementById("galeria-jugadores");

  // === FUNCION PARA RENDERIZAR LAS CARDS ===
  function renderizar(jugadoresFiltrados) {
    contenedor.innerHTML = ""; // Limpia la galería

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

  // Render inicial
  renderizar(jugadores);

  // === FILTROS SUPERIORES ===
  document.querySelectorAll(".filtros button").forEach(btn => {
    btn.addEventListener("click", () => {
      const filtro = btn.getAttribute("data-filtro");

      let filtrados = jugadores;
      if (filtro === "streamers") {
        filtrados = jugadores.filter(j => j.streamer);
      } else if (filtro === "logros") {
        filtrados = jugadores.filter(j => j.logrosDestacados);
      } else if (filtro === "horas") {
        filtrados = jugadores.filter(j => j.horas >= 1000);
      }

      renderizar(filtrados);
    });
  });

  // === FILTROS DESDE NAV LATERAL ===
  document.querySelectorAll(".nav-lateral button[data-filtro]").forEach(btn => {
    btn.addEventListener("click", () => {
      const filtro = btn.getAttribute("data-filtro");

      let filtrados = jugadores;
      if (filtro === "streamers") {
        filtrados = jugadores.filter(j => j.streamer);
      } else if (filtro === "logros") {
        filtrados = jugadores.filter(j => j.logrosDestacados);
      } else if (filtro === "horas") {
        filtrados = jugadores.filter(j => j.horas >= 1000);
      }

      renderizar(filtrados);

      // Cierra el menú y remueve la clase
      document.getElementById("navLateral").classList.remove("abierto");
      document.body.classList.remove("menu-abierto");
    });
  });

  // === MODO OSCURO/CLARO ===
  document.getElementById("toggleModo").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });

  // === CAMBIO DE IDIOMA ===
  document.getElementById("idiomaBtn").addEventListener("click", () => {
    document.querySelectorAll("[data-en]").forEach(el => {
      const actual = el.textContent;
      el.textContent = el.getAttribute("data-en");
      el.setAttribute("data-en", actual); // Intercambia los valores
    });
  });

  // === MODO PRESENTACIÓN (SCROLL AL FINAL) ===
  document.getElementById("presentacionBtn").addEventListener("click", () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  });
});
