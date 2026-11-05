/* ==============================================================================
   EJERCICIO 09 · Eliminar con «Deshacer»

   OBJETIVO:
   Programar un borrado con opción de deshacer: la tarea desaparece al
   momento, un aviso ofrece deshacer durante cuatro segundos con un
   setTimeout, y deshacer la restaura cancelando ese temporizador con
   clearTimeout.

   PASOS A REALIZAR:
   1. Declarar el array tareas y el estado: let pendiente = null (la tarea
      recién borrada y su posición) y let idEspera = null.
   2. Renderizar las tareas, cada una con un botón Eliminar con data-indice
      (delegación).
   3. Al eliminar: si ya había un borrado pendiente, confirmarlo antes
      (clearTimeout). Quitar la tarea con splice, guardar { tarea, indice }
      en pendiente, mostrar el aviso Eliminada «Pagar la luz» y programar
      con setTimeout(confirmar, 4000).
   4. confirmar(): pendiente = null y ocultar el aviso.
   5. Deshacer: clearTimeout(idEspera), volver a meter la tarea en su
      posición con splice, ocultar el aviso y renderizar.
   ============================================================================== */

// estructura del programa principal
const SEGUNDOS = 4;
const tareas = ['Comprar el pan', 'Pagar la luz', 'Llamar al taller', 'Estudiar el bloque 10'];
let pendiente = null;
let idEspera = null;

// funciones
function renderizar() {
    // TAREA
}

function confirmar() {
    // TAREA
}

// constantes al DOM que queremos escuchar
const lista = document.querySelector('#tareas');
const aviso = document.querySelector('#aviso');
const avisoTexto = document.querySelector('#avisoTexto');
const btnDeshacer = document.querySelector('#btnDeshacer');

// colocar escuchadores de eventos
// TAREA: eliminar (delegación) y deshacer

renderizar();
