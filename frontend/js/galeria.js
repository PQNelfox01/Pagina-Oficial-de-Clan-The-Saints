export function renderGaleria(jugadores) {
  const contenedor = document.getElementById("galeria-jugadores");
  contenedor.innerHTML = "";

  jugadores.forEach(j => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${j.img}" alt="${j.nombre}">
      <div class="info">
        <p><strong>${j.nombre}</strong> - ${j.desc}</p>
        <a href="${j.tracker}" target="_blank">Ver en RL Tracker</a>
        ${j.streamer ? `<span class="insignia">🎥 Streamer activo</span>` : ""}
        ${j.streamer ? `<span class="estado-stream ${j.enVivo ? 'online' : 'offline'}">${j.enVivo ? '🎥 En directo ahora' : '❌ Streamer desconectado'}</span>` : ""}
      </div>
    `;
    contenedor.appendChild(card);
  });
}
