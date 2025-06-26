export function renderGaleria(jugadores) {
  const contenedor = document.getElementById("galeria-jugadores");
  
  if (!contenedor) {
    console.error("Elemento #galeria-jugadores no encontrado");
    return;
  }

  contenedor.innerHTML = jugadores.map(jugador => `
    <div class="card">
      <img src="${jugador.img}" alt="${jugador.nombre}" loading="lazy">
      <div class="info">
        <h3>${jugador.nombre}</h3>
        <p>${jugador.desc}</p>
      </div>
    </div>
  `).join('');
}
