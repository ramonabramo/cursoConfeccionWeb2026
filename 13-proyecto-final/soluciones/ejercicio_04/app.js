/* ==============================================================================
   EJERCICIO 04 · Fase 4 · El formulario con validación (SOLUCIÓN)

   OBJETIVO:
   Añadir tareas nuevas con un formulario accesible: validación propia con
   mensajes junto a cada campo, aria-invalid, foco en el primer error, y una
   segunda barrera en el modelo.

   PASOS A REALIZAR:
   1. Importar fechaDeHoy de modelo.js y mostrarError de vista.js. Al
      arrancar, poner formulario.fecha.min = fechaDeHoy().
   2. Declarar validarFormulario(): título obligatorio de 3 a 60 caracteres
      (el mensaje dice cuántos tiene), prioridad obligatoria
      (formulario.prioridad.value), y fecha opcional que no esté incompleta
      (validity.badInput) ni sea anterior a hoy.
   3. Mostrar cada error con mostrarError(control, idError, texto), enfocar
      el primer campo con error y devolver true o false.
   4. Escuchar submit: si no es válido, escribir ✘ Revisa los campos
      marcados.; si lo es, tablero.agregar(datos) dentro de un try, mensaje
      ✔ Tarea «…» añadida., reset del formulario y foco en el título.
      Actualizar.
   5. Escuchar input en el formulario para borrar el error del campo que se
      está corrigiendo.
   6. Probad el formulario solo con el teclado (Tab, flechas, Espacio,
      Enter).
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

const EJEMPLOS = [
    { id: 1, titulo: 'Repasar los apuntes del bloque 12', prioridad: 'alta', fecha: '2025-09-15', completada: false },
    { id: 2, titulo: 'Diseñar las pantallas del proyecto', prioridad: 'media', fecha: '', completada: true },
    { id: 3, titulo: 'Preparar la presentación final', prioridad: 'baja', fecha: '2027-06-30', completada: false },
];
const FILTROS = ['todas', 'pendientes', 'completadas', 'vencidas'];

// el estado de la aplicación
const tablero = new Tablero(EJEMPLOS);
let filtro = 'todas';

// funciones
function tareasVisibles() {
    return tablero.filtrar(filtro);
}

// el único sitio donde se guarda y se pinta: estado → renderizar
function actualizar() {
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
