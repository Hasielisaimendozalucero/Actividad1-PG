
const inputPesos = document.getElementById('pesos');
const botonConvertir = document.getElementById('btnConvertir');
const inputDolares = document.getElementById('dolares');


const TASA_DE_CAMBIO = 0.055;

botonConvertir.addEventListener('click', function() {
    
    let mxn = parseFloat(inputPesos.value);

    if (isNaN(mxn) || inputPesos.value.trim() === "") {
        alert("Por favor, ingresa una cantidad válida en pesos.");
        inputDolares.value = "";
    } else if (mxn <= 0) {
        alert("Por favor, ingresa una cantidad mayor a cero.");
        inputDolares.value = "";
    } else {
        
        let usd = mxn * TASA_DE_CAMBIO;

        inputDolares.value = usd.toFixed(2);
    }

});