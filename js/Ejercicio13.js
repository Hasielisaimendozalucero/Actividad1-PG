const inputEdad = document.getElementById('edad');
const botonVerificar = document.getElementById('btnVerificar');
const inputResultado = document.getElementById('resultado');


botonVerificar.addEventListener('click', function() {
    let edad = parseInt(inputEdad.value);

    if (isNaN(edad) || inputEdad.value.trim() === "") {
        alert("Por favor, ingresa una edad válida.");
        inputResultado.value = "";
    } else if (edad <= 0) {
        alert("Por favor, ingresa una edad mayor a cero.");
        inputResultado.value = "";
    } else {
        if (edad >= 18) {
            inputResultado.value = "Puedes votar";
        } else {
            inputResultado.value = "No puedes votar";
        }
    }
});