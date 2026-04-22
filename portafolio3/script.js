Document.eventListener("DOMContentLoaded", function() {
    const botonEnviar = document.getElementById("butt-enviar");
    botonEnviar.addEventListener("click", function(alert) {
        alert("¡Mensaje enviado!");
    });
});