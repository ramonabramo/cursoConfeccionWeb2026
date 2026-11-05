/* ==============================================================================
   EJERCICIO 08 · Juego de reflejos

   OBJETIVO:
   Combinar todo el bloque en un juego: una pausa reutilizable con una
   promesa, una cuenta atrás con async/await, un temporizador aleatorio que
   se cancela con clearTimeout, medición precisa con Date.now() y un récord
   guardado en localStorage.

   PASOS A REALIZAR:
   1. Declarar la función esperar(ms), que devuelve una promesa que se
      cumple pasados ms milisegundos. Una línea: new Promise((resolve) =>
      setTimeout(resolve, ms)).
   2. Declarar el estado: fase ('inactivo', 'cuenta', 'preparado' o 'ya'),
      idTemporizador, momentoVerde y el récord leído de localStorage (clave
      curso-js:b10e08:record).
   3. Declarar la función async empezar(): desactiva el botón; pone fase
      'cuenta' y muestra 3, 2, 1 esperando 700 ms entre cada número con
      await esperar(700); después pone fase 'preparado', la zona en rojo y
      programa con setTimeout, para un momento aleatorio entre 1000 y 3000
      ms, el paso a fase 'ya' (zona verde, texto ¡YA!) guardando
      momentoVerde = Date.now().
   4. Declarar pulsar(): según la fase: 'preparado' → clearTimeout,
      ¡Demasiado pronto! Falta.; 'ya' → tiempo = Date.now() - momentoVerde,
      mostrarlo y, si mejora el récord, guardarlo; 'inactivo' o 'cuenta' →
      no hacer nada. En los dos primeros casos, terminar la ronda (fase
      'inactivo', zona azul, botón activo).
   5. Escuchar click en Empezar → empezar(); y en la zona, click y keydown
      de Enter o espacio → pulsar().
   6. Mostrar el récord guardado al cargar.
   ============================================================================== */

// estructura del programa principal
const CLAVE_RECORD = 'curso-js:b10e08:record';

// funciones
// TAREA: esperar(ms) → promesa


// TAREA: el estado (fase, idTemporizador, momentoVerde, record)


// TAREA: async function empezar()


// TAREA: pulsar()


// constantes al DOM que queremos escuchar
const zona = document.querySelector('#zona');
const btnEmpezar = document.querySelector('#btnEmpezar');
const resultado = document.querySelector('#resultado');
const salidaRecord = document.querySelector('#record');

// colocar escuchadores de eventos
// TAREA: empezar, y pulsar con clic y con teclado


// TAREA: mostrar el récord al cargar

