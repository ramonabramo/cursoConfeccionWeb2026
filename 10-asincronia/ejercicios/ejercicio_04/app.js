/* ==============================================================================
   EJERCICIO 04 · ¿En qué orden? El bucle de eventos

   OBJETIVO:
   Comprobar experimentalmente cómo funciona el bucle de eventos: el código
   síncrono termina siempre antes que cualquier callback de temporizador,
   los temporizadores salen por orden de vencimiento, y un bucle largo
   bloquea toda la página.

   PASOS A REALIZAR:
   1. Declarar anotar(texto) para añadir un li al registro.
   2. Arrancar un setInterval que actualice el reloj vivo cada 100 ms con
      los segundos transcurridos desde la carga.
   3. Experimento A: anotar A1 (síncrono), programar con setTimeout de 0 ms
      anotar A2 (temporizador), y anotar A3 (síncrono).
   4. Experimento B: programar setTimeout de 300 ms para B1 (lento),
      setTimeout de 0 ms para B2 (rápido), y anotar B3 (síncrono).
   5. Experimento C: anotar C1 Empieza el bloqueo, ejecutar un bucle while
      que no termine hasta que pasen 2000 ms (comparando con Date.now()), y
      anotar C2 Fin del bloqueo.
   6. Botón Limpiar: vaciar el registro.
   7. Escribid en un comentario qué orden habéis visto en cada experimento y
      por qué.
   ============================================================================== */

// estructura del programa principal
const INICIO = Date.now();

// funciones
// TAREA: anotar(texto)


// constantes al DOM que queremos escuchar
const btnA = document.querySelector('#btnA');
const btnB = document.querySelector('#btnB');
const btnC = document.querySelector('#btnC');
const btnLimpiar = document.querySelector('#btnLimpiar');
const reloj = document.querySelector('#reloj');
const registro = document.querySelector('#registro');

// colocar escuchadores de eventos
// TAREA: reloj vivo con setInterval


// TAREA: experimentos A, B y C


// TAREA: limpiar


// TAREA: ¿qué orden habéis visto y por qué?

