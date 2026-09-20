
const entrada = document.getElementById('celsius');
entrada.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        realizarConversion();
    }
});

function realizarConversion() {
    const inputCelsius = document.getElementById('celsius').value;
    const inputFahrenheit = document.getElementById('fahrenheit');
    const mensajeError = document.getElementById('mensaje-error');

    if (inputCelsius.trim() === '' || isNaN(inputCelsius)) {
        mensajeError.style.display = 'block';
        inputFahrenheit.value = '';
        return;
    }

    mensajeError.style.display = 'none';

    const c = parseFloat(inputCelsius);
    const f = (c * 9 / 5) + 32;

    inputFahrenheit.value = f.toFixed(2) + ' °F';
    actualizarColor(f);
}

function actualizarColor(temperatura) {
    const root = document.documentElement;

    if (temperatura < 32) {
        
        root.style.setProperty('--accent-color', '#000080');
    } else if (temperatura >= 32 && temperatura < 59) {
       
        root.style.setProperty('--accent-color', '#4682B4');
    } else if (temperatura >= 59 && temperatura < 77) {
        
        root.style.setProperty('--accent-color', '#4CAF50');
    } else if (temperatura >= 77 && temperatura < 86) {
        
        root.style.setProperty('--accent-color', '#FFC107');
    } else if (temperatura >= 86 && temperatura < 104) {
        
        root.style.setProperty('--accent-color', '#FF9800');
    } else {
        
        root.style.setProperty('--accent-color', '#F44336');
    }

}