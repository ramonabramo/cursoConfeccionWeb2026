/* ==============================================================================
   EJERCICIO 09 · Búsquedas recientes

   OBJETIVO:
   Mantener en localStorage un historial limitado y ordenado: sin duplicados
   (sin distinguir mayúsculas), el más reciente primero y como máximo cinco
   elementos, con carga segura y opción de borrarlo.

   PASOS A REALIZAR:
   1. Declarar CLAVE = 'curso-js:b09e09:busquedas', MAXIMO = 5 y
      cargarHistorial() con carga segura (si no hay nada o no es un array de
      textos, []).
   2. Al enviar el formulario: limpiar el texto (trim); si está vacío, no
      hacer nada.
   3. Quitar del historial cualquier búsqueda igual sin distinguir
      mayúsculas (filter), añadir la nueva al principio (unshift) y recortar
      a MAXIMO (slice).
   4. Guardar y renderizar: un li por búsqueda; al pulsar uno (delegación),
      ponerlo en el campo. En #estado: 3 búsquedas guardadas.
   5. El botón Borrar historial elimina la clave con removeItem y vacía la
      lista.
   ============================================================================== */

// estructura del programa principal
const CLAVE = 'curso-js:b09e09:busquedas';
const MAXIMO = 5;

// funciones
function cargarHistorial() {
    // TAREA: carga segura
    return [];
}

function guardarHistorial() {
    // TAREA
}

function renderizar() {
    // TAREA
}

let historial = cargarHistorial();

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#formBusqueda');
const campo = document.querySelector('#busqueda');
const lista = document.querySelector('#recientes');
const btnBorrar = document.querySelector('#btnBorrar');
const estado = document.querySelector('#estado');

// colocar escuchadores de eventos
// TAREA: submit, click en la lista y click en Borrar historial

renderizar();
