export function renderGaleria(jugadores) {
  const contenedor = document.getElementById("galeria-jugadores");
  contenedor.innerHTML = "";

  jugadores.forEach(jugador => {
    const cardHTML = `
      <div class="card">
        <img src="${jugador.img}" alt="${jugador.nombre}" loading="lazy">
        <div class="info">
          <h3>${jugador.nombre} ${jugador.streamer ? '<span class="streamer-icon">🎥</span>' : ''}</h3>
          <p>${jugador.desc}</p>
          
          ${jugador.stats ? `
          <div class="play-style">
            <h4>Overall Play Style</h4>
            <div class="stats-grid">
              <div class="stat">
                <span class="stat-value">${jugador.stats.goals}%</span>
                <span class="stat-label">Goals</span>
              </div>
              <div class="stat">
                <span class="stat-value">${jugador.stats.saves}%</span>
                <span class="stat-label">Saves</span>
              </div>
              <div class="stat">
                <span class="stat-value">${jugador.stats.assists}%</span>
                <span class="stat-label">Assists</span>
              </div>
            </div>
          </div>
          ` : ''}
          
          <a href="${jugador.tracker}" class="tracker-btn" target="_blank">Ver Tracker</a>
          ${jugador.horas ? `<div class="horas">Horas jugadas: ${jugador.horas}</div>` : ''}
        </div>
      </div>
    `;
    contenedor.insertAdjacentHTML("beforeend", cardHTML);
  });
}