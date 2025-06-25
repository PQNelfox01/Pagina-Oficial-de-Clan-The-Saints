export function renderRuleta(jugadores) {
  const contenedor = document.getElementById("ruleta-container");
  let index = 0;

  const crearCarta = (j) => `
    <div class="flip-card">
      <div class="flip-card-inner">
        <!-- PARTE FRONTAL (Minimalista) -->
        <div class="flip-card-front">
          <img src="${j.img}" alt="${j.nombre}">
          <h3>${j.nombre}</h3>
          <p>${j.desc}</p>
          ${j.horas ? `<div class="horas-front">${j.horas} horas</div>` : ''}
        </div>

        <!-- PARTE TRASERA (Estadísticas) -->
        <div class="flip-card-back">
          <div class="stats-back">
            <h4>OVERALL PLAY STYLE</h4>
            <div class="stats-grid">
              <div class="stat">
                <span class="stat-value">${j.stats?.goals || '0'}%</span>
                <span class="stat-label">Goals</span>
              </div>
              <div class="stat">
                <span class="stat-value">${j.stats?.saves || '0'}%</span>
                <span class="stat-label">Saves</span>
              </div>
              <div class="stat">
                <span class="stat-value">${j.stats?.assists || '0'}%</span>
                <span class="stat-label">Assists</span>
              </div>
            </div>
          </div>
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