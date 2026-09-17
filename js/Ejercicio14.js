const inputNumeros = document.getElementById('numerosInput');
const botonCalcular = document.getElementById('btnCalcular');
const inputMayor = document.getElementById('mayor');
const inputMenor = document.getElementById('menor');
const inputPromedio = document.getElementById('promedio');

botonCalcular.addEventListener('click', function() {
    let entrada = inputNumeros.value.trim();
    if (entrada === "") {
        alert("Por favor, ingresa una lista de números separados por comas.");
        limpiarCampos();
        return;
    }

    let arregloCadenas = entrada.split(',');
    
    let numeros = arregloCadenas.map(item => Number(item.trim()));

    let contieneInvalidos = numeros.some(num => isNaN(num) || num === null);

    if (contieneInvalidos || numeros.length === 0) {
        alert("Asegúrate de ingresar solo números válidos separados por comas.");
        limpiarCampos();
        return;
    }

    let maximo = Math.max(...numeros);
    let minimo = Math.min(...numeros);
    
    let suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    let promedio = suma / numeros.length;

    inputMayor.value = maximo;
    inputMenor.value = minimo;
    inputPromedio.value = promedio.toFixed(2); 
});

function limpiarCampos() {
    inputMayor.value = "";
    inputMenor.value = "";
    inputPromedio.value = "";
}