export function renderGaleria(jugadores) {
  const contenedor = document.getElementById("galeria-jugadores");
  contenedor.innerHTML = "";

  jugadores.forEach(j => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${j.img}" alt="${j.nombre}">
      <div class="info">
        <p><strong>${j.nombre}</strong><br>${j.desc}</p>
        ${j.streamer ? `<span class="insignia">🎥 Streamer del Clan</span>` : ""}
        ${j.streamer ? `<span class="estado-stream ${j.enVivo ? 'online' : 'offline'}">${j.enVivo ? '🔴 En vivo ahora' : '⚫ Fuera de línea'}</span>` : ""}
        <a href="${j.tracker}" target="_blank">Ver estadísticas</a>
      </div>
    `;
    contenedor.appendChild(card);
  });
}