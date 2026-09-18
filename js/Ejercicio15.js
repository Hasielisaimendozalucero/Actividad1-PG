let listaEstudiantes = [];

const inputNombre = document.getElementById('nombre');
const inputCalificacion = document.getElementById('calificacion');
const btnAgregar = document.getElementById('btnAgregar');
const btnCalcular = document.getElementById('btnCalcular');
const textoContador = document.getElementById('contador');
const inputPromedio = document.getElementById('promedio');
const inputMejor = document.getElementById('mejorEstudiante');
const inputPeor = document.getElementById('peorEstudiante');

btnAgregar.addEventListener('click', function() {
    let nombreVal = inputNombre.value.trim();
    let calificacionVal = parseFloat(inputCalificacion.value);

    if (nombreVal === "" || isNaN(calificacionVal)) {
        alert("Por favor, ingresa un nombre y una calificación válida.");
        return;
    }

    if (calificacionVal < 0 || calificacionVal > 100) {
        alert("La calificación debe estar entre 0 y 100.");
        return;
    }

    let nuevoEstudiante = {
        nombre: nombreVal,
        calificacion: calificacionVal
    };

    listaEstudiantes.push(nuevoEstudiante);

    textoContador.textContent = listaEstudiantes.length;
    inputNombre.value = "";
    inputCalificacion.value = "";
    inputNombre.focus();
});


btnCalcular.addEventListener('click', function() {
    
    if (listaEstudiantes.length === 0) {
        alert("Primero debes agregar al menos un estudiante.");
        return;
    }
    let sumaTotal = listaEstudiantes.reduce((acumulador, est) => acumulador + est.calificacion, 0);
    let promedio = sumaTotal / listaEstudiantes.length;

    let calificaciones = listaEstudiantes.map(est => est.calificacion);
    let califMax = Math.max(...calificaciones);
    let califMin = Math.min(...calificaciones);

    let mejorEstudiante = listaEstudiantes.find(est => est.calificacion === califMax);
    let peorEstudiante = listaEstudiantes.find(est => est.calificacion === califMin);

    inputPromedio.value = promedio.toFixed(2);
    inputMejor.value = mejorEstudiante ? mejorEstudiante.nombre : "";
    inputPeor.value = peorEstudiante ? peorEstudiante.nombre : "";
});