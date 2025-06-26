export function renderLogros() {
  const logros = [
    { es: "Top 8 en Sudamerican Open (Mayo 2024)", en: "Top 8 in Sudamerican Open (May 2024)" },
    { es: "Campeones del Torneo Nocturno (Febrero 2024)", en: "Champions of Night Tournament (Feb 2024)" },
    { es: "Mejor asistencia media por jugador", en: "Best average assist per player" },
    { es: "Rotaciones más limpias según análisis interno", en: "Cleanest rotations based on internal analysis" }
  ];
  const lista = document.getElementById("logros-lista");
  lista.innerHTML = logros.map(l => `<li data-en="${l.en}">${l.es}</li>`).join("");
}
