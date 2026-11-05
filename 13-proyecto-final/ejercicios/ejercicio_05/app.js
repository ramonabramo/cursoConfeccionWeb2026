/* ==============================================================================
   EJERCICIO 05 · Fase 5 · Persistencia con localStorage

   OBJETIVO:
   Conseguir que las tareas y el filtro elegido sobrevivan a una recarga: un
   módulo almacen.js con carga segura, y toJSON en el modelo para decidir
   qué se guarda.

   PASOS A REALIZAR:
   1. En almacen.js, completar cargarTareas (null si no hay nada, el array
      guardado o [] si lo guardado no sirve) y guardarTareas(tablero) con
      JSON.stringify.
   2. Completar cargarPreferencias, que mezcla PREFERENCIAS_INICIALES con lo
      guardado (si algo falla, las iniciales), y guardarPreferencias.
   3. Fijaos en los toJSON que ya trae modelo.js: Tablero devuelve su array
      privado y cada Tarea, sus datos.
   4. En app.js, importar las cuatro funciones. Crear el tablero con las
      tareas guardadas o, si es la primera vez, con EJEMPLOS. Iniciar filtro
      con la preferencia guardada (si es uno de FILTROS).
   5. En actualizar(), guardar las tareas y { filtro } antes de pintar. Al
      arrancar, llamar a marcarFiltro().
   6. Probad: añadid una tarea, elegid un filtro y recargad. Mirad la
      pestaña Aplicación → Local Storage.
   ============================================================================== */

// estructura del programa principal
import { Tablero, fechaDeHoy } from './modelo.js';
import {
    pintarTareas,
    pintarResumen,
    mostrarMensaje,
    activarEdicion,
    mostrarError,
} from './vista.js';
// TAREA: import { cargarTareas, guardarTareas, cargarPreferencias, guardarPreferencias } from './almacen.js';

const EJEMPLOS = [
    { id: 1, titulo: 'Repasar los apuntes del bloque 12', prioridad: 'alta', fecha: '2025-09-15', completada: false },
    { id: 2, titulo: 'Diseñar las pantallas del proyecto', prioridad: 'media', fecha: '', completada: true },
    { id: 3, titulo: 'Preparar la presentación final', prioridad: 'baja', fecha: '2027-06-30', completada: false },
];
const FILTROS = ['todas', 'pendientes', 'completadas', 'vencidas'];

// el estado de la aplicación
const tablero = new Tablero(EJEMPLOS);
// TAREA: carga las tareas guardadas (si no hay, EJEMPLOS) y las preferencias
let filtro = 'todas';

// funciones
function tareasVisibles() {
    return tablero.filtrar(filtro);
}

// el único sitio donde se guarda y se pinta: estado → renderizar
function actualizar() {
    // TAREA: guarda las tareas y las preferencias
    pintarTareas(lista, tareasVisibles());
    pintarResumen(resumen, tablero.estadisticas);
}

function marcarFiltro() {
    filtros.querySelectorAll('[data-filtro]').forEach((boton) => {
        const activo = boton.dataset.filtro === filtro;
        boton.classList.toggle('activo', activo);
        boton.setAttribute('aria-pressed', activo);
    });
}

// edición en línea: Enter o salir del campo guarda; Escape cancela
function editarTarea(li) {
    const id = Number(li.dataset.id);
    const campo = activarEdicion(li);
    let terminada = false;

    function terminar(guardar) {
        if (terminada) {
            return;              // Enter y blur podrían llegar los dos
        }
        terminada = true;
        if (guardar) {
            try {
                tablero.renombrar(id, campo.value);
                mostrarMensaje(mensaje, '');
            } catch (error) {
                mostrarMensaje(mensaje, `✘ ${error.message}`);
            }
        }
        actualizar();
    }

    campo.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            terminar(true);
        } else if (e.key === 'Escape') {
            terminar(false);
        }
    });
    campo.addEventListener('blur', () => terminar(true));
}

// devuelve true si el formulario es válido; si no, muestra los errores y enfoca el primero
function validarFormulario() {
    const campoTitulo = formulario.titulo;
    const campoFecha = formulario.fecha;
    const largo = campoTitulo.value.trim().length;

    let errorTitulo = '';
    if (largo === 0) {
        errorTitulo = 'Escribe un título.';
    } else if (largo < 3 || largo > 60) {
        errorTitulo = `El título debe tener entre 3 y 60 caracteres (ahora tiene ${largo}).`;
    }

    const errorPrioridad = formulario.prioridad.value === '' ? 'Elige una prioridad.' : '';

    let errorFecha = '';
    if (campoFecha.validity.badInput) {
        errorFecha = 'La fecha está incompleta.';
    } else if (campoFecha.value !== '' && campoFecha.value < fechaDeHoy()) {
        errorFecha = 'La fecha límite no puede ser anterior a hoy.';
    }

    mostrarError(campoTitulo, 'error-titulo', errorTitulo);
    mostrarError(grupoPrioridad, 'error-prioridad', errorPrioridad);
    mostrarError(campoFecha, 'error-fecha', errorFecha);

    const errores = [
        [errorTitulo, campoTitulo],
        [errorPrioridad, formulario.querySelector('[name="prioridad"]')],
        [errorFecha, campoFecha],
    ].filter(([texto]) => texto !== '');

    if (errores.length > 0) {
        errores[0][1].focus();
        return false;
    }
    return true;
}

// constantes al DOM que queremos escuchar
const lista = document.querySelector('#tareas');
const resumen = document.querySelector('#resumen');
const mensaje = document.querySelector('#mensaje');
const filtros = document.querySelector('#filtros');
const formulario = document.querySelector('#formTarea');
const grupoPrioridad = document.querySelector('#grupoPrioridad');

// colocar escuchadores de eventos
lista.addEventListener('change', (e) => {
    const casilla = e.target.closest('[data-accion="alternar"]');
    if (!casilla) {
        return;
    }
    tablero.alternar(Number(casilla.closest('li').dataset.id));
    actualizar();
});

lista.addEventListener('click', (e) => {
    const boton = e.target.closest('[data-accion="eliminar"]');
    if (!boton) {
        return;
    }
    tablero.eliminar(Number(boton.closest('li').dataset.id));
    mostrarMensaje(mensaje, '🗑️ Tarea eliminada.');
    actualizar();
});

lista.addEventListener('dblclick', (e) => {
    const titulo = e.target.closest('.titulo-tarea');
    if (titulo) {
        editarTarea(titulo.closest('li'));
    }
});

filtros.addEventListener('click', (e) => {
    const boton = e.target.closest('[data-filtro]');
    if (!boton) {
        return;
    }
    filtro = boton.dataset.filtro;
    marcarFiltro();
    actualizar();
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    // entradas
    const datos = {
        titulo: formulario.titulo.value,
        prioridad: formulario.prioridad.value,
        fecha: formulario.fecha.value,
    };
    // procesamiento: primero la validación del formulario, después la del modelo
    if (!validarFormulario()) {
        mostrarMensaje(mensaje, '✘ Revisa los campos marcados.');
        return;
    }
    try {
        tablero.agregar(datos);
        mostrarMensaje(mensaje, `✔ Tarea «${datos.titulo.trim()}» añadida.`);
        formulario.reset();
        formulario.titulo.focus();
    } catch (error) {
        mostrarMensaje(mensaje, `✘ ${error.message}`);
    }
    // salidas
    actualizar();
});

// mientras se corrige un campo, su error desaparece
formulario.addEventListener('input', (e) => {
    if (e.target.name === 'prioridad') {
        mostrarError(grupoPrioridad, 'error-prioridad', '');
    } else if (e.target.id === 'titulo' || e.target.id === 'fecha') {
        mostrarError(e.target, `error-${e.target.id}`, '');
    }
});

// arranque
formulario.fecha.min = fechaDeHoy();     // el selector de fechas ya no ofrece días pasados
actualizar();
