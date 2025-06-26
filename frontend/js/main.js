// Importaciones de datos
import { jugadores } from './data/jugadores.js';
import { renderRuleta } from './modules/ruleta.js';

// Importaciones de módulos
import { renderGaleria } from './modules/galeria.js';
import { renderRuleta } from './modules/ruleta.js';
import { renderLogros } from './modules/logros.js';
import { 
  iniciarUIEvents, 
  iniciarFiltros,
  renderStats 
} from './modules/ui.js';

// Inicialización de la aplicación
document.addEventListener("DOMContentLoaded", () => {
  console.log('Jugadores cargados:', jugadores); // Debug
  renderRuleta(jugadores);
  
  // Renderizar estadísticas del jugador
  renderStats(estadisticasJugador);
  
  // Iniciar eventos de UI y filtros
  iniciarUIEvents();
  iniciarFiltros(jugadores, renderGaleria);
});

// Hot Module Replacement para desarrollo
if (import.meta.hot) {
  import.meta.hot.accept();
}

function renderStats(jugador) {
  const statsContainer = document.querySelector('.stats-container');
  
  if (!statsContainer || !jugador) return;
  
  statsContainer.querySelector('.player-name').textContent = jugador.nombre;
  statsContainer.querySelector('.player-subtitle').textContent = jugador.apodo;
  
  const stats = [
    { label: 'Goles', value: jugador.estadisticas.goles },
    { label: 'Asistencias', value: jugador.estadisticas.asistencias },
    { label: 'Atajadas', value: jugador.estadisticas.atajadas }
  ];
  
  const statsGrid = statsContainer.querySelector('.stats-grid');
  statsGrid.innerHTML = stats.map(stat => `
    <div class="stat-item">
      <span class="stat-label">${stat.label}</span>
      <span class="stat-value">${stat.value}%</span>
    </div>
  `).join('');
}