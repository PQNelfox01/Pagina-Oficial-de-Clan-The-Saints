document.addEventListener("DOMContentLoaded", () => {
    const btnLogo = document.getElementById("btnLogoSNTS");

    btnLogo.addEventListener("click", () => {
        const opcion = prompt("¿Qué plantilla deseas ver?\nEscribe 1 para la plantilla clásica\nEscribe 2 para la nueva versión con tarjetas\nEscribe 3 para la version escrita en JavaScript\nEscribe 4 para la version mejorada de JavaScript\nEscribe 5 para la version ultra mejorada papito");

        if (opcion === "1") {
            window.location.href = "/frontend/html/plantilla.html";
        } else if (opcion === "2") {
            window.location.href = "/frontend/html/plantilla2.html";
        } else if (opcion === "3") {
            window.location.href = "/frontend/html/plantilla3.html";
        } else if (opcion === "4") {
            window.location.href = "/frontend/html/plantilla4.html";
        } else if (opcion === "5") {
            window.location.href = "/frontend/html/plantilla5.html";
        } else {
            alert("Opción no válida. Intenta de nuevo.");
        }
    });
});
