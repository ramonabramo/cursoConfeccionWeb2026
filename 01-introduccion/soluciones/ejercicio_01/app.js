/* ==============================================================================
   EJERCICIO 01 · ¡Hola, consola! (SOLUCIÓN)

   OBJETIVO:
   Comprobar que el fichero app.js está bien enlazado y conocer los dos
   primeros canales de salida: la consola del navegador (console.log) y la
   propia página (textContent).

   PASOS A REALIZAR:
   1. Enviar a la consola el mensaje "¡Hola desde app.js!" con
      console.log().
   2. Mostrar en la consola el resultado de la operación 10 + 5.
   3. Mostrar en la consola el resultado de "10" + "5" (con comillas).
      Comparad los dos resultados: ¿qué ha pasado?
   4. Crear una constante al DOM llamada salida que apunte al párrafo
      #salida con document.querySelector().
   5. Escribir en ese párrafo el texto "JavaScript está funcionando ✔"
      usando su propiedad textContent.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
// guardo una referencia al párrafo donde voy a escribir
const salida = document.querySelector('#salida');

// entradas
// (en este ejercicio no hay entradas)

// procesamiento
// mensaje de prueba: si lo veis en la consola, app.js está bien enlazado
console.log('¡Hola desde app.js!');

// dos números: JavaScript los suma → 15
console.log(10 + 5);

// dos textos: JavaScript los une (concatena) → "105"
console.log('10' + '5');

// salidas
// escribo el mensaje dentro del párrafo, a la vista del usuario
salida.textContent = 'JavaScript está funcionando ✔';
