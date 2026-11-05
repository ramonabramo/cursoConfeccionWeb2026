/* ==============================================================================
   EJERCICIO 06 · Fase 6 · Importar tareas de una API (SOLUCIÓN)

   OBJETIVO:
   Conectar la aplicación con JSONPlaceholder: cargar los usuarios al
   arrancar, importar las tareas del elegido traduciéndolas al formato
   propio, evitar duplicados y gestionar los estados de carga y error con
   Reintentar.

   PASOS A REALIZAR:
   1. En api.js, escribir pedirJSON(url) del bloque 11, obtenerUsuarios()
      (devuelve [{ id, nombre }]) y obtenerTareasDeUsuario(id), que pide
      /users/{id}/todos y traduce cada una a { titulo, completada,
      prioridad: 'media', fecha: '', origen: 'api', idApi } recortando los
      títulos de más de 60 caracteres.
   2. En app.js, importar las dos funciones y pintarUsuarios. Declarar let
      ultimaAccion = null.
   3. Declarar async cargarUsuarios(): ⏳ Conectando con la API…, pintar los
      usuarios en el select y activarlo junto con el botón; si falla,
      mensaje de error y botón Reintentar.
   4. Declarar async importarTareas(): desactiva el botón, pide las tareas,
      las añade con tablero.importar (que ya descarta las repetidas) y
      escribe ✔ 20 tareas importadas (o cuántas ya estaban). En el finally,
      reactivar el botón.
   5. Las dos funciones guardan en ultimaAccion cuál fue la última;
      Reintentar la repite. Llamar a cargarUsuarios() al arrancar.
   6. Probad a importar dos veces el mismo usuario.
   ============================================================================== */

// estructura del programa principal
import { Tablero, fechaDeHoy } from './modelo.js';
import {
    pintarTareas,
    pintarResumen,
    mostrarMensaje,
    activarEdicion,
    mostrarError,
    pintarUsuarios,
} from './vista.js';
import { cargarTareas, guardarTareas, cargarPreferencias, guardarPreferencias } from './almacen.js';
import { obtenerUsuarios, obtenerTareasDeUsuario } from './api.js';

const EJEMPLOS = [
    { id: 1, titulo: 'Repasar los apuntes del bloque 12', prioridad: 'alta', fecha: '2025-09-15', completada: false },
    { id: 2, titulo: 'Diseñar las pantallas del proyecto', prioridad: 'media', fecha: '', completada: true },
    { id: 3, titulo: 'Preparar la presentación final', prioridad: 'baja', fecha: '2027-06-30', completada: false },
];
const FILTROS = ['todas', 'pendientes', 'completadas', 'vencidas'];

// el estado de la aplicación
const guardadas = cargarTareas();
const preferencias = cargarPreferencias();
const tablero = new Tablero(guardadas === null ? EJEMPLOS : guardadas);
let filtro = FILTROS.includes(preferencias.filtro) ? preferencias.filtro : 'todas';
let ultimaAccion = null;      // lo que hay que repetir si se pulsa Reintentar

// funciones
function tareasVisibles() {
    return tablero.filtrar(filtro);
}

// el único sitio donde se guarda y se pinta: estado → renderizar
function actualizar() {
    guardarTareas(tablero);
    guardarPreferencias({ filtro });
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

async function cargarUsuarios() {
    ultimaAccion = cargarUsuarios;
    btnReintentarApi.hidden = true;
    estadoApi.textContent = '⏳ Conectando con la API…';
    try {
        const usuarios = await obtenerUsuarios();
        pintarUsuarios(selectUsuario, usuarios);
        selectUsuario.disabled = false;
        btnImportar.disabled = false;
        estadoApi.textContent = 'Elige un usuario e importa sus tareas.';
    } catch (error) {
        estadoApi.textContent = `✘ No se ha podido conectar con la API (${error.message}).`;
        btnReintentarApi.hidden = false;
    }
}

async function importarTareas() {
    ultimaAccion = importarTareas;
    btnReintentarApi.hidden = true;
    btnImportar.disabled = true;
    estadoApi.textContent = '⏳ Importando tareas…';
    try {
        const recibidas = await obtenerTareasDeUsuario(Number(selectUsuario.value));
        const nuevas = tablero.importar(recibidas);
        const repetidas = recibidas.length - nuevas;
        estadoApi.textContent = `✔ ${nuevas} tareas importadas${repetidas > 0 ? ` (${repetidas} ya estaban en el tablero)` : ''}.`;
        actualizar();
    } catch (error) {
        estadoApi.textContent = `✘ No se han podido importar (${error.message}).`;
        btnReintentarApi.hidden = false;
    } finally {
        btnImportar.disabled = false;
    }
}

// constantes al DOM que queremos escuchar
const lista = document.querySelector('#tareas');
const resumen = document.querySelector('#resumen');
const mensaje = document.querySelector('#mensaje');
const filtros = document.querySelector('#filtros');
const formulario = document.querySelector('#formTarea');
const grupoPrioridad = document.querySelector('#grupoPrioridad');
const selectUsuario = document.querySelector('#usuario');
const btnImportar = document.querySelector('#btnImportar');
const btnReintentarApi = document.querySelector('#btnReintentarApi');
const estadoApi = document.querySelector('#estadoApi');

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

btnImportar.addEventListener('click', importarTareas);
btnReintentarApi.addEventListener('click', () => ultimaAccion());

// arranque
formulario.fecha.min = fechaDeHoy();     // el selector de fechas ya no ofrece días pasados
marcarFiltro();                          // el filtro que se guardó la última vez
actualizar();
cargarUsuarios();
