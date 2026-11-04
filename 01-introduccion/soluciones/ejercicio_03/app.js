/* ==============================================================================
   EJERCICIO 03 · Del script interno al fichero externo (SOLUCIÓN)

   OBJETIVO:
   Separar el comportamiento de la estructura: llevar el código JavaScript
   que está dentro de index.html a un fichero externo app.js y enlazarlo
   correctamente.

   PASOS A REALIZAR:
   1. Abrid index.html y localizad el bloque <script> … </script> del final
      del <body>.
   2. Cortad las instrucciones que hay dentro (no las etiquetas) y pegadlas
      en este app.js, cada una en su sección de la plantilla.
   3. Borrad el bloque <script> … </script> de index.html.
   4. Enlazad app.js desde el <head> de index.html con el atributo defer.
   5. Cambiad el mensaje de la consola para que diga "Código ejecutado desde
      app.js" y comprobad que la página sigue funcionando igual.
   ============================================================================== */

// estructura del programa principal
const curso = 'JavaScript en el cliente';

// constantes al DOM
const salida = document.querySelector('#salida');

// entradas
// (en este ejercicio no hay entradas)

// procesamiento
console.log('Código ejecutado desde app.js');

// salidas
salida.textContent = 'Bienvenidos al curso de ' + curso;
