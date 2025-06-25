export function renderRuleta(jugadores) {
  const contenedor = document.getElementById("ruleta-container");
  let index = 0;

  const crearCarta = (j) => `
    <div class="flip-card"><div class="flip-card-inner">
      <div class="flip-card-front">
        <img src="${j.img}" alt="${j.nombre}"><h3>${j.nombre}</h3><p>${j.desc}</p>
      </div>
      <div class="flip-card-back">
        <h4>Estadísticas</h4>
        <p>Horas jugadas: ${j.horas || 'N/A'}</p>
        <p>Streamer: ${j.streamer ? "✅" : "❌"}</p>
        <a href="${j.tracker}" target="_blank">Ver Tracker</a>
      </div>
    </div></div>`;

  const actualizar = () => {
    contenedor.innerHTML = `
      <div class="ruleta-wrapper">
        <button class="ruleta-btn" id="ruleta-prev">◀</button>
        ${crearCarta(jugadores[index])}
        <button class="ruleta-btn" id="ruleta-next">▶</button>
      </div>`;
    document.getElementById("ruleta-prev").onclick = () => { index = (index - 1 + jugadores.length) % jugadores.length; actualizar(); };
    document.getElementById("ruleta-next").onclick = () => { index = (index + 1) % jugadores.length; actualizar(); };
  };

  actualizar();
}
