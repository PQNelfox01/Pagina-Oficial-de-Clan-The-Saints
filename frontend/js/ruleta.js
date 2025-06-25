export function renderRuleta(jugadores) {
  const contenedor = document.getElementById("ruleta-container");
  let index = 0;

  const crearCarta = (j) => `
    <div class="flip-card">
      <div class="flip-card-inner">
        <!-- Parte Frontal (Mínima) -->
        <div class="flip-card-front">
          <img src="${j.img}" alt="${j.nombre}">
          <h3>${j.nombre}</h3>
          <p>${j.desc}</p>
          ${j.horas ? `<div class="horas-front">${j.horas} horas</div>` : ''}
        </div>

        <!-- Parte Trasera (Barras de Stats) -->
        <div class="flip-card-back">
          <h4>ESTILO DE JUEGO</h4>
          
          <!-- Barras de progreso -->
          <div class="stat-bars">
            <div class="stat-bar">
              <label>Goles <span>${j.stats?.goals || '0'}%</span></label>
              <div class="bar-container">
                <div class="bar-fill" style="width: ${j.stats?.goals || '0'}%; background: #ef4444;"></div>
              </div>
            </div>
            
            <div class="stat-bar">
              <label>Asistencias <span>${j.stats?.assists || '0'}%</span></label>
              <div class="bar-container">
                <div class="bar-fill" style="width: ${j.stats?.assists || '0'}%; background: #3b82f6;"></div>
              </div>
            </div>
            
            <div class="stat-bar">
              <label>Atajadas <span>${j.stats?.saves || '0'}%</span></label>
              <div class="bar-container">
                <div class="bar-fill" style="width: ${j.stats?.saves || '0'}%; background: #10b981;"></div>
              </div>
            </div>
          </div>
          
          <a href="${j.tracker}" class="tracker-btn" target="_blank">Ver Tracker</a>
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
