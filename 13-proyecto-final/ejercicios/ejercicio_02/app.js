/* ==============================================================================
   EJERCICIO 02 · Fase 2 · La vista: pintar el tablero

   OBJETIVO:
   Escribir vista.js, el módulo que convierte las tareas en elementos del
   DOM. La vista solo recibe datos y pinta: no modifica el tablero ni
   escucha eventos.

   PASOS A REALIZAR:
   1. Leed app.js: tareasVisibles() y actualizar() ya llaman a pintarTareas
      y pintarResumen. Vuestro trabajo está en vista.js.
   2. Declarar ETIQUETAS_PRIORIDAD y formatearFecha(fecha), que convierte
      '2027-06-30' en 30/06/2027 (o Sin fecha).
   3. Declarar crearTarea(tarea): un li con las clases tarea-item, hecha y
      vencida según corresponda y data-id; dentro, una casilla con data-
      accion="alternar", un span.texto-tarea con el título (span.titulo-
      tarea) y los detalles (span.detalles-tarea: prioridad · fecha · ⚠️
      Vencida · ☁️ API), y un botón Eliminar con data-accion="eliminar".
   4. Completar pintarTareas: vaciar el contenedor y pintar un li por tarea;
      si no hay ninguna, un li con la clase vacio.
   5. Completar pintarResumen: Tareas: 3 · pendientes: 2 · completadas: 1 ·
      vencidas: 1.
   6. Todavía no funcionan las casillas ni los botones: eso es la fase 3.
   ============================================================================== */

// estructura del programa principal
import { Tablero } from './modelo.js';
import {
    pintarTareas,
    pintarResumen,
    mostrarMensaje,
} from './vista.js';

const EJEMPLOS = [
    { id: 1, titulo: 'Repasar los apuntes del bloque 12', prioridad: 'alta', fecha: '2025-09-15', completada: false },
    { id: 2, titulo: 'Diseñar las pantallas del proyecto', prioridad: 'media', fecha: '', completada: true },
    { id: 3, titulo: 'Preparar la presentación final', prioridad: 'baja', fecha: '2027-06-30', completada: false },
];

// el estado de la aplicación
const tablero = new Tablero(EJEMPLOS);

// funciones
function tareasVisibles() {
    return tablero.tareas;
}

// el único sitio donde se guarda y se pinta: estado → renderizar
function actualizar() {
    pintarTareas(lista, tareasVisibles());
    pintarResumen(resumen, tablero.estadisticas);
}

// constantes al DOM que queremos escuchar
const lista = document.querySelector('#tareas');
const resumen = document.querySelector('#resumen');

// colocar escuchadores de eventos

// arranque
actualizar();
