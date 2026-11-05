/* ==============================================================================
   EJERCICIO 10 · Guardar sin romperse

   OBJETIVO:
   Guardar en localStorage dentro de un try…catch para que un fallo al
   guardar no rompa el programa, informar al usuario y provocar a propósito
   un QuotaExceededError para comprobarlo.

   PASOS A REALIZAR:
   1. Declarar guardar(clave, valor): dentro de un try, setItem con
      JSON.stringify y devolver true; en el catch, devolver el nombre del
      error.
   2. Cargar la nota al abrir (carga segura) y guardarla en cada input. En
      #estado: ✔ Guardado a las 18:42:05, o ✘ No se ha podido guardar
      (QuotaExceededError).
   3. El botón intenta guardar un texto enorme ('x'.repeat(6 * 1024 * 1024),
      unos 12 MB en memoria) con la clave curso-js:b09e10:prueba y escribe
      en #prueba lo que pasa.
   4. Comprobad que, después del fallo, la nota se sigue guardando con
      normalidad.
   ============================================================================== */

// estructura del programa principal
const CLAVE_NOTA = 'curso-js:b09e10:nota';
const CLAVE_PRUEBA = 'curso-js:b09e10:prueba';

// funciones
function guardar(clave, valor) {
    // TAREA: try / catch
}

function cargarNota() {
    // TAREA: carga segura
    return '';
}

// constantes al DOM que queremos escuchar
const nota = document.querySelector('#nota');
const estado = document.querySelector('#estado');
const btnLlenar = document.querySelector('#btnLlenar');
const prueba = document.querySelector('#prueba');

// colocar escuchadores de eventos
// TAREA: input en la nota y click en el botón

nota.value = cargarNota();
