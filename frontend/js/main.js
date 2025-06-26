import { jugadores } from './data/jugadores.js';
import { renderGaleria } from './modules/galeria.js';
import { renderRuleta } from './modules/ruleta.js';
import { renderLogros } from './modules/logros.js';
import { iniciarUIEvents, iniciarFiltros } from './modules/ui.js';

document.addEventListener("DOMContentLoaded", () => {
  renderGaleria(jugadores);
  renderRuleta(jugadores);
  renderLogros();
  iniciarUIEvents();
  iniciarFiltros(jugadores, renderGaleria);
});
