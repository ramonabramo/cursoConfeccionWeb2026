/* ==============================================================================
   EJERCICIO 02 · El script que llegó demasiado pronto

   OBJETIVO:
   Entender por qué un script colocado en el <head> no encuentra los
   elementos de la página y arreglarlo con el atributo defer.

   PASOS A REALIZAR:
   1. Abrid index.html en el navegador y comprobad que el título NO cambia.
   2. Abrid la consola y leed el error en rojo. Fijaos en qué línea de
      app.js os indica.
   3. Añadid un console.log(titulo) justo después de declarar la constante
      titulo y recargad. ¿Qué valor muestra?
   4. Explicad con vuestras palabras, en un comentario, por qué titulo vale
      null.
   5. Arreglad el problema SIN mover el <script> de sitio: añadid el
      atributo defer a la etiqueta <script> de index.html.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const titulo = document.querySelector('#titulo');
const salida = document.querySelector('#salida');

// TAREA: añade aquí un console.log(titulo) para ver qué ha encontrado querySelector


// entradas
// (en este ejercicio no hay entradas)

// procesamiento
const mensaje = '¡El script ya encuentra los elementos!';

// salidas
titulo.textContent = 'Título cambiado desde JavaScript';
salida.textContent = mensaje;

// TAREA: explica aquí, en un comentario, por qué titulo valía null

