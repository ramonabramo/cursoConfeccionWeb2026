/* ==============================================================================
   EJERCICIO 08 · Caza de errores en la consola (SOLUCIÓN)

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
const salida = document.querySelector('#salida');
// ERROR 3 (corregido): ponía '#resultado', pero en el HTML el párrafo tiene id="salida".
// querySelector no encontraba nada y devolvía null. Al hacer null.textContent salía:
// TypeError: Cannot set properties of null (setting 'textContent')

// entradas
// (en este ejercicio no hay entradas)

// procesamiento
console.log('Empezando el programa…');
// ERROR 1 (corregido): ponía console.lg. Ese método no existe:
// TypeError: console.lg is not a function

const mensaje = `¡Enhorabuena! Habéis arreglado el curso de ${nombreCurso} y sus ${totalBloques} bloques`;
// ERROR 2 (corregido): ponía nombrecurso, con la c minúscula. Para JavaScript es otra
// variable distinta que nunca se ha declarado:
// ReferenceError: nombrecurso is not defined

// salidas
salida.textContent = mensaje;

console.log('Programa terminado sin errores');
