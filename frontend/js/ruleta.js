export function renderRuleta(jugadores) {
  const contenedor = document.getElementById("ruleta-container");
  let index = 0;

  const crearCarta = (j) => `
    <div class="flip-card">
      <div class="flip-card-inner">
        <!-- Parte Frontal (Nueva Estructura) -->
        <div class="flip-card-front">
          <img src="${j.img}" alt="${j.nombre}">
          <h3>${j.nombre} ${j.streamer ? '<span class="streamer-icon">🎥</span>' : ''}</h3>
          <p>${j.desc}</p>
          
          <!-- Sección de Estadísticas -->
          <div class="stats-container">
            <div class="stats-title">Overall Play Style</div>
            <div class="stats-grid">
              <div class="stat stat-goals">
                <span class="stat-value">${j.stats?.goals || '0'}%</span>
                <span class="stat-label">Goals</span>
              </div>
              <div class="stat stat-saves">
                <span class="stat-value">${j.stats?.saves || '0'}%</span>
                <span class="stat-label">Saves</span>
              </div>
              <div class="stat stat-assists">
                <span class="stat-value">${j.stats?.assists || '0'}%</span>
                <span class="stat-label">Assists</span>
              </div>
            </div>
          </div>
          
          <!-- Footer -->
          <div class="flip-card-footer">
            <a href="${j.tracker}" class="tracker-btn" target="_blank">Ver Tracker</a>
            ${j.horas ? `<div class="horas-jugadas">Horas: ${j.horas}</div>` : ''}
          </div>
        </div>
        
        <!-- Parte Trasera (Manteniendo tu estructura) -->
        <div class="flip-card-back">
          <h4>Estadísticas Detalladas</h4>
          ${j.horas ? `<p><strong>Horas totales:</strong> ${j.horas}</p>` : ''}
          ${j.logrosDestacados ? '<p>⭐ Jugador destacado</p>' : ''}
          <a href="${j.tracker}" class="tracker-btn" target="_blank">Ver Tracker Completo</a>
        </div>
      </div>
    </div>`;

  const actualizarRuleta = () => {
    contenedor.innerHTML = `
      <div class="ruleta-wrapper">
        <button class="ruleta-btn" id="ruleta-prev">◀</button>
        ${crearCarta(jugadores[index])}
        <button class="ruleta-btn" id="ruleta-next">▶</button>
      </div>`;
    
    // Event Listeners preservados
    document.getElementById("ruleta-prev").onclick = () => {
      index = (index - 1 + jugadores.length) % jugadores.length;
      actualizarRuleta();
    };
    
    document.getElementById("ruleta-next").onclick = () => {
      index = (index + 1) % jugadores.length;
      actualizarRuleta();
    };
  };

  actualizarRuleta();
}