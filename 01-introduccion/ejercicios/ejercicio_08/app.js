/* ==============================================================================
   EJERCICIO 08 · Caza de errores en la consola

   OBJETIVO:
   Aprender a leer los mensajes de error de la consola: qué dicen, en qué
   línea están y cómo corregirlos uno a uno.

   PASOS A REALIZAR:
   1. Abrid la página con la consola abierta. Leed el primer error: el tipo
      (TypeError, ReferenceError…), el mensaje y la línea.
   2. Corregid ese error, guardad y recargad.
   3. Repetid el proceso hasta que no quede ningún error en rojo.
   4. Al final, el párrafo debe mostrar el mensaje de éxito y la consola el
      texto "Programa terminado sin errores".
   5. Debajo de cada línea corregida, escribid un comentario con el mensaje
      de error que daba y qué significaba.
   ============================================================================== */

// estructura del programa principal
const nombreCurso = 'JavaScript en el cliente';
const totalBloques = 13;

// constantes al DOM
const salida = document.querySelector('#resultado');

// entradas
// (en este ejercicio no hay entradas)

// procesamiento
console.lg('Empezando el programa…');

const mensaje = `¡Enhorabuena! Habéis arreglado el curso de ${nombrecurso} y sus ${totalBloques} bloques`;

// salidas
salida.textContent = mensaje;

console.log('Programa terminado sin errores');
