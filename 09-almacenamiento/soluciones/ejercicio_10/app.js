/* ==============================================================================
   EJERCICIO 10 · Guardar sin romperse (SOLUCIÓN)

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
// devuelve true si ha guardado, o el nombre del error si no
function guardar(clave, valor) {
    try {
        localStorage.setItem(clave, JSON.stringify(valor));
        return true;
    } catch (error) {
        return error.name;            // 'QuotaExceededError', 'SecurityError'…
    }
}

function cargarNota() {
    try {
        const texto = JSON.parse(localStorage.getItem(CLAVE_NOTA));
        return typeof texto === 'string' ? texto : '';
    } catch (error) {
        return '';
    }
}

// constantes al DOM que queremos escuchar
const nota = document.querySelector('#nota');
const estado = document.querySelector('#estado');
const btnLlenar = document.querySelector('#btnLlenar');
const prueba = document.querySelector('#prueba');

// colocar escuchadores de eventos
nota.addEventListener('input', () => {
    const resultado = guardar(CLAVE_NOTA, nota.value);
    estado.textContent = resultado === true
        ? `✔ Guardado a las ${new Date().toLocaleTimeString('es-ES')}`
        : `✘ No se ha podido guardar (${resultado}). Copiad el texto antes de cerrar.`;
});

btnLlenar.addEventListener('click', () => {
    const enorme = 'x'.repeat(6 * 1024 * 1024);          // 6 millones de caracteres
    const resultado = guardar(CLAVE_PRUEBA, enorme);
    if (resultado === true) {
        prueba.textContent = 'Se ha guardado: este navegador tiene más espacio del habitual. Lo borro.';
        localStorage.removeItem(CLAVE_PRUEBA);
    } else {
        prueba.textContent = `✘ ${resultado}: el almacén no tiene sitio. El programa sigue funcionando; probad a escribir en la nota.`;
    }
});

nota.value = cargarNota();
