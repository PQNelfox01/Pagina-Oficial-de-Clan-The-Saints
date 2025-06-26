// Importaciones de datos
import { jugadores, estadisticasJugador } from './data/jugadores.js';

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
  // Renderizar componentes principales
  renderGaleria(jugadores);
  renderRuleta(jugadores);
  renderLogros();
  
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