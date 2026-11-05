/* ==============================================================================
   EJERCICIO 09 · Constructor de URLs

   OBJETIVO:
   Construir la URL de una petición con URL y searchParams para que los
   valores se codifiquen correctamente, compararla con una construida a
   mano, y leer los parámetros de una dirección escrita por el usuario.

   PASOS A REALIZAR:
   1. Declarar construir(): crea new URL('https://api.ejemplo.com/recetas'),
      añade q con el texto y pagina con searchParams.set, y categoria solo
      si no está vacía.
   2. Escribir url.toString() en #urlBien y, en #urlMal, la misma dirección
      hecha con una plantilla de texto sin codificar. Llamar a construir en
      cada input del formulario.
   3. Declarar leer(): dentro de un try, crear new URL con el valor de
      #direccion y, con for...of sobre searchParams, pintar un li por
      parámetro: categoria → audio.
   4. Si la dirección no es válida (TypeError), pintar un li: ✘ No es una
      URL válida. Llamar a leer en cada input del campo.
   ============================================================================== */

// estructura del programa principal
const BASE = 'https://api.ejemplo.com/recetas';

// funciones
function construir() {
    // TAREA: URL + searchParams, y la versión a mano
}

function leer() {
    // TAREA: new URL dentro de un try y for...of sobre searchParams
}

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#formUrl');
const urlBien = document.querySelector('#urlBien');
const urlMal = document.querySelector('#urlMal');
const direccion = document.querySelector('#direccion');
const parametros = document.querySelector('#parametros');

// colocar escuchadores de eventos
// TAREA: input en el formulario y en la dirección

construir();
leer();
