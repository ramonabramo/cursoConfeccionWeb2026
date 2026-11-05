/* ==============================================================================
   EJERCICIO 09 · Rellenar una tabla con prompt() (SOLUCIÓN)

   OBJETIVO:
   Pedir varios datos con prompt() y colocar cada uno en su celda de una
   tabla, comprobando qué ocurre cuando el usuario pulsa Cancelar.

   PASOS A REALIZAR:
   1. Declarar una constante por cada celda (#celdaNombre, #celdaEdad,
      #celdaPoblacion) y otra para #salida.
   2. Pedir con prompt() el nombre, la edad y la población, con un valor por
      defecto en cada pregunta.
   3. Escribir cada respuesta en su celda con textContent.
   4. En #salida, escribir una frase con los tres datos: Ana tiene 31 años y
      vive en Teruel.
   5. Probad a pulsar Cancelar en una de las preguntas: ¿qué aparece en su
      celda? ¿Y en la frase?
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const celdaNombre = document.querySelector('#celdaNombre');
const celdaEdad = document.querySelector('#celdaEdad');
const celdaPoblacion = document.querySelector('#celdaPoblacion');
const salida = document.querySelector('#salida');

// entradas: tres preguntas, una detrás de otra
const nombre = prompt('¿Cómo te llamas?', 'Ana');
const edad = prompt('¿Cuántos años tienes?', '31');
const poblacion = prompt('¿Dónde vives?', 'Teruel');

// salidas: cada respuesta en su celda
celdaNombre.textContent = nombre;
celdaEdad.textContent = edad;
celdaPoblacion.textContent = poblacion;

salida.textContent = `${nombre} tiene ${edad} años y vive en ${poblacion}.`;
