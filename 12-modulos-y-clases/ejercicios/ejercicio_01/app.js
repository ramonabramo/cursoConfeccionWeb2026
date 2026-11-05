/* ==============================================================================
   EJERCICIO 01 · Mi primer módulo

   OBJETIVO:
   Repartir el código en dos ficheros: un módulo que exporta funciones y
   constantes, y un módulo principal que las importa. Comprobar que lo que
   no se exporta no es visible desde fuera.

   PASOS A REALIZAR:
   1. En utilidades.js, añadir export delante de PORCENTAJE_IVA, conIVA y
      formatearPrecio. IVA se queda sin exportar.
   2. En index.html, fijaos en que el script se carga con type="module".
   3. En app.js, importar las tres cosas con import { … } from
      './utilidades.js'. La ruta empieza por ./ y lleva la extensión .js.
   4. Al enviar el formulario: leer el precio, calcular el total con conIVA
      y escribir 100,00 € + IVA (21 %) = 121,00 €.
   5. En #experimento, escribir typeof IVA desde app.js → undefined usando
      typeof IVA. ¿Por qué no da error?
   6. Probad a abrir la página con doble clic, sin Live Server: ¿qué dice la
      consola?
   ============================================================================== */

// estructura del programa principal
// TAREA: import { … } from './utilidades.js';


// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#formPrecio');
const salida = document.querySelector('#salida');
const experimento = document.querySelector('#experimento');

// colocar escuchadores de eventos
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    // entradas
    // TAREA: lee el precio

    // procesamiento
    // TAREA: calcula el total con conIVA

    // salidas
    // TAREA: escribe el resultado con formatearPrecio
});

// TAREA: experimento con typeof IVA
