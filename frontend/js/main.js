import { jugadores } from './data.js';
import { renderGaleria } from './galeria.js';
import { renderRuleta } from './ruleta.js';
import { renderLogros } from './logros.js';
import { iniciarUIEvents, iniciarFiltros } from './ui.js';

document.addEventListener("DOMContentLoaded", () => {
  renderGaleria(jugadores);
  renderRuleta(jugadores);
  renderLogros();
  iniciarUIEvents();
  iniciarFiltros(jugadores, renderGaleria);
});
