export function renderRuleta(jugadores) {
  // 1. Verificar elementos del DOM
  const container = document.getElementById('ruleta-container');
  if (!container) {
    console.error('Error: No se encontró el contenedor #ruleta-container');
    return;
  }

  const carousel = container.querySelector('.ruleta-carousel');
  const indicators = container.querySelector('.ruleta-indicators');
  const prevBtn = container.querySelector('#ruleta-prev');
  const nextBtn = container.querySelector('#ruleta-next');

  if (!carousel || !indicators || !prevBtn || !nextBtn) {
    console.error('Error: Faltan elementos requeridos en la ruleta');
    return;
  }

  // 2. Limpiar ruleta existente
  carousel.innerHTML = '';
  indicators.innerHTML = '';

  // 3. Validar datos de entrada
  if (!Array.isArray(jugadores) || jugadores.length === 0) {
    console.warn('Advertencia: No se proporcionaron jugadores válidos');
    carousel.innerHTML = '<div class="ruleta-empty">No hay jugadores disponibles</div>';
    return;
  }

  // 4. Generar items de la ruleta con manejo de errores
  jugadores.forEach((jugador, index) => {
    try {
      // Validar datos del jugador
      if (!jugador.nombre || !jugador.avatar) {
        console.warn(`Jugador en índice ${index} no tiene nombre o avatar`);
        return;
      }

      const item = document.createElement('div');
      item.className = 'ruleta-item';
      
      // Usar imagen por defecto si falla la carga
      item.innerHTML = `
        <img src="${jugador.avatar}" 
             alt="${jugador.nombre}" 
             onerror="this.onerror=null;this.src='img/avatar-default.jpg'">
        <p>${jugador.nombre}</p>
        ${jugador.goles !== undefined ? `<span class="ruleta-stat">Goles: ${jugador.goles}</span>` : ''}
      `;
      
      carousel.appendChild(item);

      // Generar indicadores
      const indicator = document.createElement('div');
      indicator.className = 'ruleta-indicator';
      indicator.dataset.index = index;
      indicators.appendChild(indicator);

    } catch (error) {
      console.error(`Error al procesar jugador ${index}:`, error);
    }
  });

  // 5. Configurar navegación
  const setupNavigation = () => {
    const scrollAmount = carousel.firstChild?.offsetWidth + 30 || 230; // 30 es el gap
    
    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // Touch support para móviles
    let touchStartX = 0;
    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      
      if (diff > 50) { // Deslizamiento a la izquierda
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      } else if (diff < -50) { // Deslizamiento a la derecha
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }, { passive: true });
  };

  // 6. Actualizar indicadores
  const updateIndicators = () => {
    const scrollPosition = carousel.scrollLeft;
    const itemWidth = carousel.firstChild?.offsetWidth || 0;
    const activeIndex = Math.round(scrollPosition / (itemWidth + 30));
    
    container.querySelectorAll('.ruleta-indicator').forEach((ind, index) => {
      ind.classList.toggle('active', index === activeIndex);
    });
  };

  // 7. Inicializar eventos
  setupNavigation();
  carousel.addEventListener('scroll', updateIndicators);

  // Activar primer indicador
  if (indicators.firstChild) {
    indicators.firstChild.classList.add('active');
  }

  // 8. Debug final
  console.log(`Ruleta cargada con ${jugadores.length} jugadores`);
  console.log('Elementos de la ruleta:', {
    container,
    carousel,
    items: carousel.children,
    indicators: indicators.children
  });
}