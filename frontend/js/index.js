document.addEventListener("DOMContentLoaded", () => {
    const btnLogo = document.getElementById("btnLogoSNTS");

    btnLogo.addEventListener("click", () => {
        // Redirige automáticamente sin preguntar
        window.location.href = "html/plantilla.html";
    });
});
