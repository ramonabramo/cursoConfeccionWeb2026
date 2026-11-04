/* ==============================================================================
   EJERCICIO 07 · Clasificación: mover y eliminar

   OBJETIVO:
   Modificar elementos que ya existen en la página: leer sus datos con
   dataset, eliminarlos con remove() y reordenarlos aprovechando que
   append() mueve un elemento cuando ya está en el documento.

   PASOS A REALIZAR:
   1. Seleccionar todos los li de la clasificación y convertirlos en un
      array con Array.from.
   2. Recorrerlos y eliminar con remove() los que tengan 0 puntos
      (dataset.puntos, convertido a número). Apuntad sus nombres en el
      informe.
   3. Con filter, quedaros en un array con los equipos que siguen.
   4. Ordenar ese array de mayor a menor por puntos.
   5. Recorrer el array ordenado y hacer append de cada li en la propia
      lista. Observad qué pasa: ¿se duplican?
   6. Añadir la clase primero al primer equipo y escribir en cada li su
      nombre con los puntos: Tiburones · 21 pts.
   7. Completar el informe con cuántos li quedan en la lista.
   ============================================================================== */

// estructura del programa principal
let informe = '';

// constantes al DOM
const clasificacion = document.querySelector('#clasificacion');
const salidaInforme = document.querySelector('#informe');
// TAREA: todos los li como array (Array.from + querySelectorAll)


// procesamiento
// TAREA: eliminar los de 0 puntos con remove()


// TAREA: los que siguen, ordenados de mayor a menor


// TAREA: reordenar con append (¡mueve, no duplica!)


// TAREA: clase primero y texto con los puntos


// salidas
// TAREA: informe

