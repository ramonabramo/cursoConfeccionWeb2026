/* ==============================================================================
   EJERCICIO 02 · Muchos elementos a la vez: NodeList

   OBJETIVO:
   Seleccionar varios elementos a la vez con querySelectorAll, recorrer la
   NodeList resultante con forEach y convertirla en un array con Array.from
   para poder usar map.

   PASOS A REALIZAR:
   1. Seleccionar todas las tareas con querySelectorAll('.tarea').
   2. Seleccionar las hechas con '.tarea.hecha' y las pendientes con
      '.tarea:not(.hecha)'.
   3. Mostrar en resumen: 3 de 6 tareas hechas (50 %). Usad length.
   4. Recorrer TODAS las tareas con forEach y numerarlas: cambiad su texto
      por 1. Comprar el pan, 2. Llamar al taller…
   5. Intentad hacer pendientes.map(…) y leed el error. Dejad la línea
      comentada con el mensaje.
   6. Convertir pendientes en un array con Array.from, obtener sus textos
      con map y mostrarlos en #pendientes separados por ' · '.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
// TAREA: todas, hechas y pendientes con querySelectorAll
const salidaResumen = document.querySelector('#resumen');
const salidaPendientes = document.querySelector('#pendientes');

// procesamiento y salidas
// TAREA: resumen con length


// TAREA: numerar todas las tareas con forEach


// TAREA: prueba pendientes.map y comenta el error


// TAREA: Array.from + map + join

