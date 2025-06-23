document.addEventListener("DOMContentLoaded", () => {
    const btnLogo = document.getElementById("btnLogoSNTS");

    btnLogo.addEventListener("click", () => {
        const opcion = prompt("¿Qué plantilla deseas ver?\nEscribe 1 para la plantilla clásica\nEscribe 2 para la nueva versión con tarjetas");

        if (opcion === "1") {
            window.location.href = "/frontend/html/plantilla.html";
        } else if (opcion === "2") {
            window.location.href = "/frontend/html/plantilla2.html";
        } else {
            alert("Opción no válida. Intenta de nuevo.");
        }
    });
});
