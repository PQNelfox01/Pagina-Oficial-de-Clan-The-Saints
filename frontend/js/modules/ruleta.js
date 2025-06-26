export function renderRuleta(jugadores) {
  const container = document.getElementById('ruleta-container');
  if (!container) return;

  const carousel = container.querySelector('.ruleta-carousel');
  const indicators = container.querySelector('.ruleta-indicators');
  
  // Limpiar ruleta existente
  carousel.innerHTML = '';
  indicators.innerHTML = '';

  // Generar items
  jugadores.forEach((jugador, index) => {
    const item = document.createElement('div');
    item.className = 'ruleta-item';
    item.innerHTML = `
      <img src="${jugador.avatar}" alt="${jugador.nombre}">
      <p>${jugador.nombre}</p>
    `;
    carousel.appendChild(item);

    // Generar indicadores
    const indicator = document.createElement('div');
    indicator.className = 'ruleta-indicator';
    indicator.dataset.index = index;
    indicators.appendChild(indicator);
  });

  // Activar primer indicador
  if (indicators.firstChild) {
    indicators.firstChild.classList.add('active');
  }

  // Navegación
  const prevBtn = container.querySelector('#ruleta-prev');
  const nextBtn = container.querySelector('#ruleta-next');

  prevBtn?.addEventListener('click', () => {
    carousel.scrollBy({ left: -200, behavior: 'smooth' });
  });

  nextBtn?.addEventListener('click', () => {
    carousel.scrollBy({ left: 200, behavior: 'smooth' });
  });

  // Actualizar indicadores al hacer scroll
  carousel.addEventListener('scroll', () => {
    const scrollPosition = carousel.scrollLeft;
    const itemWidth = carousel.firstChild?.offsetWidth || 0;
    const activeIndex = Math.round(scrollPosition / (itemWidth + 30)); // 30 es el gap
    
    container.querySelectorAll('.ruleta-indicator').forEach((ind, index) => {
      ind.classList.toggle('active', index === activeIndex);
    });
  });
}