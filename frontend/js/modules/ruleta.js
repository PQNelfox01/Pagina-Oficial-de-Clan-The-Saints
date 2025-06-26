export function renderRuleta(jugadores) {
  const contenedor = document.getElementById("ruleta-container");
  let index = 0;

  const crearCarta = (jugador) => `
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="${jugador.img}" alt="${jugador.nombre}">
          <h3>${jugador.nombre}</h3>
          <p>${jugador.desc}</p>
          ${jugador.horas ? `<div class="horas">${jugador.horas} horas</div>` : ''}
        </div>
        <div class="flip-card-back">
          <h4>Estadísticas</h4>
          <div class="stats">
            <p><strong>Goles:</strong> ${jugador.stats?.goals || '0'}%</p>
            <p><strong>Asistencias:</strong> ${jugador.stats?.assists || '0'}%</p>
            <p><strong>Atajadas:</strong> ${jugador.stats?.saves || '0'}%</p>
          </div>
          <a href="${jugador.tracker}" class="tracker-btn" target="_blank">Ver Tracker</a>
        </div>
      </div>
    </div>
  `;

  const actualizarRuleta = () => {
    contenedor.innerHTML = `
      <div class="ruleta-wrapper">
        <button class="ruleta-btn" id="ruleta-prev">◀</button>
        ${crearCarta(jugadores[index])}
        <button class="ruleta-btn" id="ruleta-next">▶</button>
      </div>
    `;

    // Event listeners para navegación
    document.getElementById("ruleta-prev").addEventListener("click", () => {
      index = (index - 1 + jugadores.length) % jugadores.length;
      actualizarRuleta();
    });

    document.getElementById("ruleta-next").addEventListener("click", () => {
      index = (index + 1) % jugadores.length;
      actualizarRuleta();
    });
  };

  actualizarRuleta();
}
