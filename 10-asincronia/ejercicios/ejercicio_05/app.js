/* ==============================================================================
   EJERCICIO 05 · Del callback hell a las promesas

   OBJETIVO:
   Encadenar tareas asíncronas una detrás de otra, primero anidando
   callbacks (y viendo por qué se vuelve ilegible) y después con funciones
   que devuelven promesas encadenadas con then.

   PASOS A REALIZAR:
   1. Declarar anotar(texto) que añada un li al registro con los
      milisegundos desde que se pulsó el botón.
   2. Versión callbacks: declarar pasoConCallback(nombre, ms, alTerminar)
      que, pasados ms milisegundos, anote el nombre y llame a alTerminar().
      Encadenad los cuatro pasos (Preparar la masa 800 ms, Añadir
      ingredientes 500 ms, Hornear 1000 ms, Servir 300 ms) anidando cada
      llamada dentro del callback de la anterior.
   3. Versión promesas: declarar paso(nombre, ms) que DEVUELVA new
      Promise((resolve) => { … }) y llame a resolve() cuando termine el
      temporizador.
   4. Encadenar los cuatro pasos con paso(…).then(() => paso(…)).then(…) y
      terminar con un then que anote 🍕 ¡Lista!.
   5. Mientras se cocina, los dos botones deben estar desactivados. En la
      versión con promesas, reactivadlos con finally.
   ============================================================================== */

// estructura del programa principal
let inicio = 0;

// funciones
// TAREA: anotar(texto)


// TAREA: pasoConCallback(nombre, ms, alTerminar)


// TAREA: paso(nombre, ms) → devuelve una promesa


// constantes al DOM que queremos escuchar
const btnCallbacks = document.querySelector('#btnCallbacks');
const btnPromesas = document.querySelector('#btnPromesas');
const registro = document.querySelector('#registro');

// colocar escuchadores de eventos
// TAREA: versión con callbacks (la pirámide)


// TAREA: versión con promesas (la cadena)

