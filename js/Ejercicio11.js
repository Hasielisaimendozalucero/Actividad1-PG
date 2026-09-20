
const inputKm = document.getElementById('kilometros');
const boton = document.getElementById('buttonkm');
const resultado = document.getElementById('resultado');

// 1. Escuchamos el clic primero
boton.addEventListener('click', function() {
    // 2. Leemos el valor en el momento del clic
    let km = inputKm.value; 

    // 3. Evaluamos si el valor es correcto
    if (km === "" || isNaN(km)) {
        alert("Por favor, ingresa un número válido de kilómetros.");
        resultado.value = ""; 
    } else {
       
        let millas = km * 0.621371; 
        resultado.value = millas; 
    }

});