const formulario = document.getElementById('miFormulario');
const boton = document.getElementById('botonEnviar');


formulario.addEventListener('input', () => {
    document.getElementById("botonEnviar").onclick = function() {
        alert('¡Datos enviados!');
    };
    if (formulario.checkValidity()) {
        boton.disabled = false;
        boton.style.opacity = "1";
    } else {
        boton.disabled = true;
        boton.style.opacity = "0.5";
    }
    });


