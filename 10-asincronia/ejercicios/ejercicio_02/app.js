/* ==============================================================================
   EJERCICIO 02 · Cronómetro con setInterval

   OBJETIVO:
   Repetir una tarea cada cierto tiempo con setInterval y detenerla con
   clearInterval, evitando arrancar dos intervalos a la vez y midiendo el
   tiempo real con Date.now() en lugar de contar ticks.

   PASOS A REALIZAR:
   1. Declarar el estado: idIntervalo = null, acumulado = 0 (ms de tramos
      anteriores) e inicio = 0 (momento en que se arrancó el tramo actual).
   2. Declarar formatear(ms) que devuelva mm:ss.d (minutos y segundos con
      dos cifras, y una décima). Pista: String(n).padStart(2, '0').
   3. Declarar tiempoActual(): acumulado más, si está en marcha, Date.now()
      - inicio.
   4. Declarar pintar(): escribe formatear(tiempoActual()) en la pantalla.
   5. Botón Iniciar/Pausar: si no está en marcha, guarda inicio =
      Date.now(), arranca setInterval(pintar, 100) y cambia el texto a
      Pausar; si está en marcha, suma el tramo al acumulado, clearInterval,
      idIntervalo = null y el texto vuelve a Iniciar.
   6. Botón Vuelta: si está en marcha, añade un li con el tiempo actual al
      principio de la lista.
   7. Botón Reiniciar: detiene, pone todo a cero, vacía las vueltas y pinta.
   ============================================================================== */

// estructura del programa principal
let idIntervalo = null;
let acumulado = 0;
let inicio = 0;

// funciones
// TAREA: formatear(ms)


// TAREA: tiempoActual()


// TAREA: pintar()


// constantes al DOM que queremos escuchar
const pantalla = document.querySelector('#pantalla');
const btnIniciar = document.querySelector('#btnIniciar');
const btnVuelta = document.querySelector('#btnVuelta');
const btnReiniciar = document.querySelector('#btnReiniciar');
const vueltas = document.querySelector('#vueltas');

// colocar escuchadores de eventos
// TAREA: iniciar / pausar


// TAREA: vuelta


// TAREA: reiniciar

