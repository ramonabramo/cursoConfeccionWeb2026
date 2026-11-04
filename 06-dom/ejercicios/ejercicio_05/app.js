/* ==============================================================================
   EJERCICIO 05 · La lista de la compra, ahora en HTML

   OBJETIVO:
   Crear elementos HTML desde JavaScript a partir de un array con
   createElement, configurarlos con textContent y classList, y añadirlos a
   la página con append y prepend.

   PASOS A REALIZAR:
   1. Usar el array compra que ya está creado: cada producto tiene nombre y
      urgente.
   2. Pedir con prompt un producto más (por defecto "tomates"). Si no está
      vacío, añadirlo al array como no urgente.
   3. Recorrer el array con forEach y, para cada producto: crear un li con
      createElement, escribir su nombre con textContent, añadirle la clase
      urgente si lo es, y colgarlo en la lista con append.
   4. Crear un li de cabecera con el texto 📝 6 productos (2 urgentes), darle
      la clase cabecera y colocarlo el PRIMERO con prepend.
   5. Mostrar en salida cuántos elementos li hay ahora en la lista
      (contadlos con querySelectorAll).
   ============================================================================== */

// estructura del programa principal
const compra = [
    { nombre: 'pan', urgente: false },
    { nombre: 'leche', urgente: true },
    { nombre: 'huevos', urgente: false },
    { nombre: 'café', urgente: true },
    { nombre: 'fruta', urgente: false },
];

// constantes al DOM
const lista = document.querySelector('#lista');
const salida = document.querySelector('#salida');

// entradas
// TAREA: un producto más con prompt


// procesamiento y salidas
// TAREA: un li por producto (crear → configurar → colgar)


// TAREA: li de cabecera con prepend


// TAREA: cuántos li hay ahora

