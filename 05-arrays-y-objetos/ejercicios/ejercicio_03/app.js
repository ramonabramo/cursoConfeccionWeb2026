/* ==============================================================================
   EJERCICIO 03 · Una semana de temperaturas

   OBJETIVO:
   Recorrer un array con las tres formas habituales (for clásico, for...of y
   forEach) y entender cuándo conviene cada una según necesitemos el índice
   o solo el valor.

   PASOS A REALIZAR:
   1. Crear los arrays dias (lunes a domingo) y temperaturas (18, 21, 25,
      23, 19, 16, 20).
   2. Con un for clásico (let i = 0; i < temperaturas.length; i++),
      construir el parte: Lunes: 18 °C, una línea por día. Usad i para leer
      el día y la temperatura.
   3. Con un for...of, sumar todas las temperaturas y calcular la media con
      un decimal.
   4. Con forEach((temperatura, indice) => { … }), encontrar el día más
      caluroso y contar cuántos días han superado los 22 °C.
   5. Mostrar los tres resultados.
   ============================================================================== */

// estructura del programa principal
const dias = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
const temperaturas = [18, 21, 25, 23, 19, 16, 20];

// constantes al DOM
const salidaParte = document.querySelector('#parte');
const salidaMedia = document.querySelector('#media');
const salidaCalor = document.querySelector('#calor');

// procesamiento
// TAREA: 1. for clásico → parte (necesitas el índice)


// TAREA: 2. for...of → suma y media (solo necesitas el valor)


// TAREA: 3. forEach → día más caluroso y días de más de 22 °C


// salidas
// TAREA: muestra los tres resultados

