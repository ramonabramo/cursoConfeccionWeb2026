/* ==============================================================================
   EJERCICIO 11 · Escaparate con presupuesto

   OBJETIVO:
   Leer datos guardados en atributos data-* de varios elementos, convertir
   la NodeList en array para filtrarla y ocultar o mostrar elementos con la
   propiedad hidden.

   PASOS A REALIZAR:
   1. Pedir un presupuesto con prompt() (por defecto 50) y convertirlo con
      Number().
   2. Seleccionar todas las tarjetas. Con forEach, ocultar (hidden = true)
      las que tengan dataset.precio mayor que el presupuesto y mostrar las
      demás.
   3. Con Array.from y filter, obtener las tarjetas que caben en el
      presupuesto.
   4. Con map, sacar sus nombres (el h3) y escribir: Con 50 € podéis comprar
      3 productos: Ratón inalámbrico, Auriculares, Alfombrilla.
   5. Si no cabe ninguno, escribir un mensaje distinto.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const tarjetas = document.querySelectorAll('.tarjeta-producto');
const resumen = document.querySelector('#resumen');

// entradas
// TAREA: el presupuesto


// procesamiento y salidas
// TAREA: ocultar con hidden, filtrar con Array.from y escribir el resumen

