/* ==============================================================================
   EJERCICIO 03 · Cuenta atrás con barra de progreso

   OBJETIVO:
   Construir una cuenta atrás con setInterval que se detiene sola al llegar
   a cero, actualizar una barra de progreso con style.width y bloquear los
   controles que no tienen sentido mientras corre.

   PASOS A REALIZAR:
   1. Declarar el estado: idIntervalo = null, total = 0 y restante = 0.
   2. Declarar pintar(): escribe restante en la pantalla y pone la anchura
      del relleno al porcentaje transcurrido ((total - restante) / total ×
      100).
   3. Declarar terminar(mensaje): clearInterval, idIntervalo = null,
      reactiva Empezar y el campo, desactiva Parar y escribe el mensaje.
   4. Declarar tic(): resta 1 a restante y pinta; si llega a 0, pone la
      clase terminado a la pantalla y llama a terminar('🎉 ¡Tiempo!').
   5. Botón Empezar: lee los segundos (si no es un número entre 1 y 600,
      avisa y sale), prepara total y restante, quita la clase terminado,
      pinta, desactiva Empezar y el campo, activa Parar y arranca
      setInterval(tic, 1000).
   6. Botón Parar: terminar('Cuenta atrás detenida').
   ============================================================================== */

// estructura del programa principal
let idIntervalo = null;
let total = 0;
let restante = 0;

// funciones
// TAREA: pintar()


// TAREA: terminar(mensaje)


// TAREA: tic()


// constantes al DOM que queremos escuchar
const campoSegundos = document.querySelector('#segundos');
const btnEmpezar = document.querySelector('#btnEmpezar');
const btnParar = document.querySelector('#btnParar');
const pantalla = document.querySelector('#pantalla');
const relleno = document.querySelector('#relleno');
const mensaje = document.querySelector('#mensaje');

// colocar escuchadores de eventos
// TAREA: empezar


// TAREA: parar

