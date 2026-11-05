/* ==============================================================================
   EJERCICIO 12 · Un índice automático

   OBJETIVO:
   Leer los títulos de una página, darles un identificador si no lo tienen y
   generar con createElement una lista de enlaces que lleve a cada uno.

   PASOS A REALIZAR:
   1. Seleccionar todos los h2 de la página.
   2. Crear una lista ol y, por cada título, un li con un enlace a.
   3. Si el h2 no tiene id, darle uno: seccion-1, seccion-2…
   4. El enlace lleva href = `#${h2.id}` y como texto el del título.
   5. Añadir la lista al nav #indice y comprobad que al pulsar un enlace la
      página salta a su sección.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const indice = document.querySelector('#indice');
const titulos = document.querySelectorAll('h2');

// procesamiento y salidas
// TAREA: una ol con un li y un enlace por cada título

