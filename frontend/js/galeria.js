export function renderGaleria(jugadores) {
  const contenedor = document.getElementById("galeria-jugadores");
  contenedor.innerHTML = "";

  jugadores.forEach(jugador => {
    const cardHTML = `
      <div class="card">
        <img src="${jugador.img}" alt="${jugador.nombre}" loading="lazy">
        <div class="info">
          <h3>${jugador.nombre}</h3>
          <p>${jugador.desc}</p>
        </div>
      </div>
    `;
    contenedor.appendChild(cardHTML);
  });
}