document.addEventListener("DOMContentLoaded", () => {
  const jugadores = [
    {
      nombre: "Ziir",
      desc: "Rey de la rotación.",
      img: "img/ziir.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/steam/76561198091825758/overview"
    },
    {
      nombre: "Bksp",
      desc: '""',
      img: "/frontend/img/Foto-Bksp.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/epic/Bksp/overview"
    },
    {
      nombre: "R.K.X",
      desc: '""',
      img: "/frontend/img/Foto-R.K.X.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/epic/R%20.%20K%20.%20X/overview"
    },
    {
      nombre: "Kenkyomasu",
      desc: '"El ser incomprendido."',
      img: "img/kenkyo.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/epic/kenkyomasu/overview"
    },
    {
      nombre: "Alejjoh",
      desc: '""',
      img: "/frontend/img/Foto-Alejjohorny.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/xbl/alejjoh/overview"
    },
    {
      nombre: "Claudioxzt2",
      desc: '""',
      img: "/frontend/img/Foto-Claudioxzt2.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/steam/76561198145230003/overview"
    },
    {
      nombre: "Palasutro",
      desc: '"El Sujeto"',
      img: "/frontend/img/Foto-Palasutro.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/epic/Palavecino./overview"
    },
    {
      nombre: "PQNelfox01",
      desc: '""',
      img: "/frontend/img/Foto-PQNelfox01.png",
      tracker: "https://rocketleague.tracker.network/rocket-league/profile/epic/Tochka-U/overview"
    },
    // Agrega más miembros aquí
  ];

  const contenedor = document.getElementById("galeria-jugadores");

  jugadores.forEach(j => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${j.img}" alt="${j.nombre}">
      <div class="info">
        <p><strong>${j.nombre}</strong> - ${j.desc}</p>
        <a href="${j.tracker}" target="_blank">Ver en RL Tracker</a>
      </div>
    `;
    contenedor.appendChild(card);
  });
});
