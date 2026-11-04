/* ==============================================================================
   EJERCICIO 02 · Muchos elementos a la vez: NodeList (SOLUCIÓN)

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
// querySelectorAll devuelve una NodeList con TODOS los que encajan
const todas = document.querySelectorAll('.tarea');
const hechas = document.querySelectorAll('.tarea.hecha');        // las dos clases a la vez
const pendientes = document.querySelectorAll('.tarea:not(.hecha)');
const salidaResumen = document.querySelector('#resumen');
const salidaPendientes = document.querySelector('#pendientes');

// procesamiento y salidas
// length funciona igual que en un array
const porcentaje = Math.round(hechas.length / todas.length * 100);
salidaResumen.textContent = `${hechas.length} de ${todas.length} tareas hechas (${porcentaje} %)`;

// forEach también existe en NodeList
todas.forEach((li, indice) => {
    li.textContent = `${indice + 1}. ${li.textContent}`;
});

// pero map y filter NO:
// pendientes.map((li) => li.textContent);
// TypeError: pendientes.map is not a function

// Array.from convierte la NodeList en un array de verdad
const textosPendientes = Array.from(pendientes).map((li) => li.textContent);
salidaPendientes.textContent = `Pendientes: ${textosPendientes.join(' · ')}`;
