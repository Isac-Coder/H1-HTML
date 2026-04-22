Document.eventListener("DOMContentLoaded", function() {
    const botonEnviar = document.getElementById("butt-enviar");
    botonEnviar.addEventListener("click", function(event) {
        event.preventDefault();
        alert("¡Mensaje enviado!");
    });
});