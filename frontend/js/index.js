document.addEventListener("DOMContentLoaded", () => {
    const btnLogo = document.getElementById("btnLogoSNTS");

    btnLogo.addEventListener("click", () => {
        // Redirige al archivo plantilla.html
        window.location.href = "/frontend/html/plantilla.html";
    });
});