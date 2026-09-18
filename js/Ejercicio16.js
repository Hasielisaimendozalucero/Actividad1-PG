<<<<<<< HEAD
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : null;

const inputNum1 = document.getElementById('numero1');
const inputNum2 = document.getElementById('numero2');
const inputResultado = document.getElementById('resultado');
const btnSuma = document.getElementById('btnSuma');
const btnResta = document.getElementById('btnResta');
const btnMultiplicacion = document.getElementById('btnMultiplicacion');
const btnDivision = document.getElementById('btnDivision');


const calcularOperacion = (operacion) => {
    let val1 = inputNum1.value.trim();
    let val2 = inputNum2.value.trim();

    if (val1 === "" || val2 === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campos Vacíos',
            text: 'Por favor, llena ambos campos numéricos antes de continuar.'
        });
        inputResultado.value = "";
        return;
    }

    let num1 = parseFloat(val1);
    let num2 = parseFloat(val2);

    if (isNaN(num1) || isNaN(num2)) {
        Swal.fire({
            icon: 'error',
            title: 'Entrada Inválida',
            text: 'Asegúrate de ingresar números válidos.'
        });
        inputResultado.value = "";
        return;
    }

    let res;

    switch (operacion) {
        case 'suma':
            res = sumar(num1, num2);
            break;
        case 'resta':
            res = restar(num1, num2);
            break;
        case 'multiplicacion':
            res = multiplicar(num1, num2);
            break;
        case 'division':
            res = dividir(num1, num2);
            if (res === null) {
                Swal.fire({
              icon: 'warning',
              title: 'Error Matemático',
              text: 'No es posible dividir entre cero.'
                });
                inputResultado.value = "";
                return;
            }
            break;
        default:
            return;
    }

    inputResultado.value = Number.isInteger(res) ? res : res.toFixed(4);
};


btnSuma.addEventListener('click', () => calcularOperacion('suma'));
btnResta.addEventListener('click', () => calcularOperacion('resta'));
btnMultiplicacion.addEventListener('click', () => calcularOperacion('multiplicacion'));
=======
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : null;

const inputNum1 = document.getElementById('numero1');
const inputNum2 = document.getElementById('numero2');
const inputResultado = document.getElementById('resultado');
const btnSuma = document.getElementById('btnSuma');
const btnResta = document.getElementById('btnResta');
const btnMultiplicacion = document.getElementById('btnMultiplicacion');
const btnDivision = document.getElementById('btnDivision');


const calcularOperacion = (operacion) => {
    let val1 = inputNum1.value.trim();
    let val2 = inputNum2.value.trim();

    if (val1 === "" || val2 === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campos Vacíos',
            text: 'Por favor, llena ambos campos numéricos antes de continuar.'
        });
        inputResultado.value = "";
        return;
    }

    let num1 = parseFloat(val1);
    let num2 = parseFloat(val2);

    if (isNaN(num1) || isNaN(num2)) {
        Swal.fire({
            icon: 'error',
            title: 'Entrada Inválida',
            text: 'Asegúrate de ingresar números válidos.'
        });
        inputResultado.value = "";
        return;
    }

    let res;

    switch (operacion) {
        case 'suma':
            res = sumar(num1, num2);
            break;
        case 'resta':
            res = restar(num1, num2);
            break;
        case 'multiplicacion':
            res = multiplicar(num1, num2);
            break;
        case 'division':
            res = dividir(num1, num2);
            if (res === null) {
                Swal.fire({
              icon: 'warning',
              title: 'Error Matemático',
              text: 'No es posible dividir entre cero.'
                });
                inputResultado.value = "";
                return;
            }
            break;
        default:
            return;
    }

    inputResultado.value = Number.isInteger(res) ? res : res.toFixed(4);
};


btnSuma.addEventListener('click', () => calcularOperacion('suma'));
btnResta.addEventListener('click', () => calcularOperacion('resta'));
btnMultiplicacion.addEventListener('click', () => calcularOperacion('multiplicacion'));
>>>>>>> 183a9dcbfe5ed22cb20bb8e7acfd30f17f2866b9
btnDivision.addEventListener('click', () => calcularOperacion('division'));