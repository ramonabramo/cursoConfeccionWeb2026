/* ==============================================================================
   EJERCICIO 07 · Fase 7 · Teclado y búsqueda (SOLUCIÓN)

   OBJETIVO:
   Hacer la aplicación cómoda con el teclado: un buscador con espera y
   atajos globales que no estorban cuando se está escribiendo.

   PASOS A REALIZAR:
   1. En tareasVisibles(), pasar también el texto: tablero.filtrar(filtro,
      texto).
   2. Escuchar input en #buscar con una espera de 300 ms (clearTimeout +
      setTimeout, bloque 10) antes de guardar el texto y actualizar.
   3. Escuchar keydown en document. Si se pulsa Ctrl, Cmd o Alt, no hacer
      nada.
   4. Escape: si se está en el buscador con texto, borrarlo y actualizar; en
      cualquier caso, ocultar la ayuda.
   5. Si el foco está en un input, textarea o select, no hacer nada más. Si
      no: n enfoca el título del formulario, / enfoca el buscador (las dos
      con preventDefault) y ? muestra u oculta la ayuda.
   6. Probad a escribir una «n» en el título y en el buscador: tiene que
      escribirse con normalidad.
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
let texto = '';
let idEspera = null;

// funciones
function tareasVisibles() {
    return tablero.filtrar(filtro, texto);
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
const buscar = document.querySelector('#buscar');
const ayuda = document.querySelector('#ayuda');

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

buscar.addEventListener('input', () => {
    clearTimeout(idEspera);
    idEspera = setTimeout(() => {
        texto = buscar.value;
        actualizar();
    }, 300);
});

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) {
        return;                          // Ctrl+F, Ctrl+R… son del navegador
    }
    if (e.key === 'Escape') {
        if (e.target === buscar && buscar.value !== '') {
            buscar.value = '';
            texto = '';
            actualizar();
        }
        ayuda.hidden = true;
        return;
    }
    if (e.target.closest('input, textarea, select')) {
        return;                          // si se está escribiendo, una «n» es una «n»
    }
    if (e.key === 'n') {
        e.preventDefault();              // que la «n» no se escriba en el campo
        formulario.titulo.focus();
    } else if (e.key === '/') {
        e.preventDefault();
        buscar.focus();
    } else if (e.key === '?') {
        ayuda.hidden = !ayuda.hidden;
    }
});

// arranque
formulario.fecha.min = fechaDeHoy();     // el selector de fechas ya no ofrece días pasados
marcarFiltro();                          // el filtro que se guardó la última vez
actualizar();
cargarUsuarios();
