document.addEventListener("DOMContentLoaded", () => {
    const btnLogo = document.getElementById("btnLogoSNTS");

    btnLogo.addEventListener("click", () => {
        const opcion = prompt("¿Qué plantilla deseas ver?\nEscribe 1 para la plantilla definitiva.");

        if (opcion === "1") {
            window.location.href = "/frontend/html/plantilla.html";
        } else {
            alert("Opción no válida. Intenta de nuevo.");
        }
    });
});
