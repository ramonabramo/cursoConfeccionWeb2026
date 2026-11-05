/* ==============================================================================
   EJERCICIO 02 · Recuerda mi nombre

   OBJETIVO:
   Aplicar el patrón básico de persistencia: al cargar, comprobar si hay un
   dato guardado con getItem y adaptar la página; al cambiarlo, guardarlo
   con setItem; y borrarlo con removeItem.

   PASOS A REALIZAR:
   1. Declarar la constante CLAVE = 'curso-js:b09e02:nombre'.
   2. Declarar renderizar(): lee el nombre guardado; si es null, muestra la
      zona de pregunta y oculta la de saludo (propiedad hidden); si no, al
      revés, y escribe ¡Hola de nuevo, Lucía!.
   3. Escuchar submit del formulario: evitar la recarga; si el nombre (sin
      espacios a los lados) no está vacío, guardarlo y renderizar.
   4. Escuchar click en Olvidarme: borrar la clave y renderizar.
   5. Llamar a renderizar() al cargar.
   ============================================================================== */

// estructura del programa principal
const CLAVE = 'curso-js:b09e02:nombre';

// funciones
// TAREA: renderizar()


// constantes al DOM que queremos escuchar
const zonaPregunta = document.querySelector('#zonaPregunta');
const zonaSaludo = document.querySelector('#zonaSaludo');
const formNombre = document.querySelector('#formNombre');
const campoNombre = document.querySelector('#nombre');
const saludo = document.querySelector('#saludo');
const btnOlvidar = document.querySelector('#btnOlvidar');

// colocar escuchadores de eventos
// TAREA: submit → guardar y renderizar


// TAREA: olvidar → removeItem y renderizar


// TAREA: renderizar al cargar

