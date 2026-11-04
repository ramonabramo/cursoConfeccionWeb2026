/* ==============================================================================
   EJERCICIO 03 · Mini-tuit con atajos de teclado

   OBJETIVO:
   Reaccionar al teclado con keydown, distinguir teclas con e.key y
   combinaciones con e.ctrlKey, y combinarlo con el evento input para
   mantener un contador de caracteres que cambia de color.

   PASOS A REALIZAR:
   1. Declarar la constante MAXIMO = 140.
   2. Declarar actualizarContador(): escribe 23 / 140, pone la clase cerca a
      partir de 120 caracteres, la clase pasado si supera 140, y desactiva
      el botón si el texto está vacío o se pasa.
   3. Declarar publicar(): si el texto (sin espacios a los lados) está vacío
      o se pasa del máximo, no hace nada. Si no, crea un li con el texto, lo
      coloca el primero de la lista con prepend, vacía el textarea,
      actualiza el contador y le devuelve el foco con focus().
   4. Escuchar input en el textarea → actualizarContador.
   5. Escuchar click en el botón → publicar.
   6. Escuchar keydown en el textarea: si e.key es 'Enter' y e.ctrlKey es
      true, publicar; si e.key es 'Escape', vaciar y actualizar.
   ============================================================================== */

// estructura del programa principal
const MAXIMO = 140;

// funciones
// TAREA: actualizarContador()


// TAREA: publicar()


// constantes al DOM que queremos escuchar
const texto = document.querySelector('#texto');
const caracteres = document.querySelector('#caracteres');
const btnPublicar = document.querySelector('#btnPublicar');
const tuits = document.querySelector('#tuits');

// colocar escuchadores de eventos
// TAREA: input → actualizarContador


// TAREA: click → publicar


// TAREA: keydown → Ctrl + Enter publica, Escape borra

