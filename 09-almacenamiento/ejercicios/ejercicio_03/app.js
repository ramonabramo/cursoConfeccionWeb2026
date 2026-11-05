/* ==============================================================================
   EJERCICIO 03 · Preferencias de tema y tamaño de letra

   OBJETIVO:
   Guardar las preferencias del usuario en localStorage, aplicarlas a la
   página mediante atributos data-* en el body y recuperarlas al cargar,
   usando un valor por defecto cuando no hay nada guardado.

   PASOS A REALIZAR:
   1. Declarar las claves CLAVE_TEMA = 'curso-js:b09e03:tema' y CLAVE_TAMANO
      = 'curso-js:b09e03:tamano'.
   2. Declarar aplicar(tema, tamano): pone document.body.dataset.tema y
      dataset.tamano (el CSS ya tiene las reglas), coloca los dos select en
      esos valores y escribe en #estado Preferencias aplicadas: oscuro ·
      grande.
   3. Al cargar, leer las dos claves. Si alguna es null, usar 'claro' y
      'normal' por defecto (podéis usar ?? o ||). Llamar a aplicar.
   4. Escuchar change en cada select: guardar el valor nuevo en su clave y
      volver a aplicar.
   ============================================================================== */

// estructura del programa principal
const CLAVE_TEMA = 'curso-js:b09e03:tema';
const CLAVE_TAMANO = 'curso-js:b09e03:tamano';

// funciones
// TAREA: aplicar(tema, tamano)


// constantes al DOM que queremos escuchar
const selectTema = document.querySelector('#tema');
const selectTamano = document.querySelector('#tamano');
const estado = document.querySelector('#estado');

// colocar escuchadores de eventos
// TAREA: change en los dos select → guardar y aplicar


// TAREA: al cargar, leer (con valor por defecto) y aplicar

