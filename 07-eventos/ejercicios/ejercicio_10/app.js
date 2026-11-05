/* ==============================================================================
   EJERCICIO 10 · Seleccionar con Ctrl y Mayús

   OBJETIVO:
   Usar las propiedades ctrlKey, metaKey y shiftKey del evento de clic para
   programar la selección simple, la selección múltiple y la selección por
   rango de una lista.

   PASOS A REALIZAR:
   1. Declarar el estado: let seleccionados = [] (índices) y let ultimo =
      null (el último índice pulsado sin Mayús).
   2. Escuchar click en la lista (delegación) y averiguar el índice del li
      pulsado con dataset.indice.
   3. Con Mayús (e.shiftKey) y un último índice: seleccionar todos los
      índices entre ultimo y el pulsado.
   4. Con Ctrl o ⌘ (e.ctrlKey || e.metaKey): añadir el índice si no estaba o
      quitarlo si estaba.
   5. Sin teclas: seleccionar solo ese. Después, renderizar: clase
      seleccionado en los li elegidos y en #resumen: 3 archivos
      seleccionados: …
   ============================================================================== */

// estructura del programa principal
let seleccionados = [];
let ultimo = null;

// funciones
function renderizar() {
    // TAREA: clase seleccionado y resumen
}

// constantes al DOM que queremos escuchar
const lista = document.querySelector('#archivos');
const elementos = lista.querySelectorAll('li');
const resumen = document.querySelector('#resumen');

// colocar escuchadores de eventos
// TAREA: click en la lista → Mayús, Ctrl/⌘ o clic normal

