const crearGestorDeTareas = () => {
    const CLAVE_STORAGE = 'mis_tareas_app';

    const obtenerTareas = () => {
        let datosJSON = localStorage.getItem(CLAVE_STORAGE);
        return datosJSON ? JSON.parse(datosJSON) : [];
    };

    const guardarTareas = (tareas) => {
        localStorage.setItem(CLAVE_STORAGE, JSON.stringify(tareas));
    };

    return {
        obtener: () => obtenerTareas(),

        agregar: (textoTarea) => {
            let tareas = obtenerTareas();
            tareas.push(textoTarea);
            guardarTareas(tareas);
        },

        eliminar: (indice) => {
            let tareas = obtenerTareas();
            tareas.splice(indice, 1);
            guardarTareas(tareas);
        }
    };
};

const gestor = crearGestorDeTareas();

const inputTarea = document.getElementById('inputTarea');
const btnAgregar = document.getElementById('btnAgregar');
const listaTareasUI = document.getElementById('listaTareas');

const renderizarTareas = () => {
    listaTareasUI.innerHTML = "";

    let tareas = gestor.obtener();

    if (tareas.length === 0) {
        listaTareasUI.innerHTML = "<li><em>No hay tareas pendientes.</em></li>";
        return;
    }

    tareas.forEach((tarea, index) => {
        let li = document.createElement('li');
        li.textContent = tarea + " ";

        let btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.style.marginLeft = '10px';

        btnEliminar.addEventListener('click', () => {
            Swal.fire({
                title: '¿Confirmar eliminación?',
                text: `¿Deseas eliminar la tarea: "${tarea}"?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    gestor.eliminar(index);
                    renderizarTareas(); 
                    Swal.fire(
                        '¡Eliminada!',
                        'La tarea ha sido removida con éxito.',
                        'success'
                    );
                }
            });
        });

        li.appendChild(btnEliminar);
        listaTareasUI.appendChild(li);
    });
};

btnAgregar.addEventListener('click', () => {
    let texto = inputTarea.value.trim();

    if (texto === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campo Vacío',
            text: 'Por favor, escribe el nombre de una tarea.'
        });
        return;
    }

    gestor.agregar(texto);
    inputTarea.value = "";
    inputTarea.focus();
    renderizarTareas();
});

document.addEventListener('DOMContentLoaded', renderizarTareas);