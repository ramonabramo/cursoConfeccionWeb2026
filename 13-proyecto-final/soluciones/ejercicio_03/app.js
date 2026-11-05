/* ==============================================================================
   EJERCICIO 03 · Fase 3 · Eventos de ratón: completar, eliminar, editar y filtrar (SOLUCIÓN)

   OBJETIVO:
   Dar vida al tablero con eventos de ratón y delegación: marcar tareas con
   la casilla, eliminarlas, editarlas con doble clic y filtrarlas. El modelo
   ya trae renombrar y filtrar, y la vista, activarEdicion.

   PASOS A REALIZAR:
   1. Importar activarEdicion de vista.js. En tareasVisibles(), devolver
      tablero.filtrar(filtro).
   2. Escuchar change en la lista (delegación): si viene de una casilla,
      alternar la tarea de su li (dataset.id) y actualizar.
   3. Escuchar click en la lista: si es un botón Eliminar, eliminar la tarea
      y escribir 🗑️ Tarea eliminada. en #mensaje.
   4. Declarar editarTarea(li): activarEdicion(li) devuelve un campo de
      texto; Enter o salir del campo (blur) guarda con tablero.renombrar
      dentro de un try, Escape cancela. En los dos casos, actualizar.
      Cuidado: que no se guarde dos veces.
   5. Escuchar dblclick en la lista: si es en un .titulo-tarea, editarTarea
      de su li.
   6. Declarar marcarFiltro() (clase activo y aria-pressed) y escuchar click
      en #filtros para cambiar el filtro.
   ============================================================================== */

// estructura del programa principal
import { Tablero } from './modelo.js';
import {
    pintarTareas,
    pintarResumen,
    mostrarMensaje,
    activarEdicion,
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

// constantes al DOM que queremos escuchar
const lista = document.querySelector('#tareas');
const resumen = document.querySelector('#resumen');
const mensaje = document.querySelector('#mensaje');
const filtros = document.querySelector('#filtros');

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

// arranque
actualizar();
