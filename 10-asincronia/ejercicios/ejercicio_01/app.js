/* ==============================================================================
   EJERCICIO 01 · Un aviso con retraso: setTimeout

   OBJETIVO:
   Ejecutar código más tarde con setTimeout, cancelarlo con clearTimeout
   usando su identificador, y comprobar que el programa no se detiene a
   esperar: el código posterior se ejecuta antes que el aviso.

   PASOS A REALIZAR:
   1. Declarar la variable idAviso = null (aquí guardaréis el identificador
      del temporizador) y const INICIO = Date.now().
   2. Declarar anotar(texto): añade al registro un li con [+1234 ms] texto,
      donde 1234 son los milisegundos transcurridos desde INICIO.
   3. Al pulsar Programar: si ya había un aviso, cancelarlo primero. Anotar
      1. Programo el aviso para dentro de 3 s. Guardar en idAviso lo que
      devuelve setTimeout(callback, segundos * 1000). Justo después, anotar
      2. El programa sigue: no espera.
   4. El callback del temporizador anota 3. ¡Aviso! Han pasado 3 s, cambia
      el estado y pone idAviso a null.
   5. Al pulsar Cancelar: si hay un aviso, clearTimeout(idAviso), anotar
      Aviso cancelado y poner idAviso a null.
   6. Observad el registro: ¿en qué orden aparecen las líneas 1, 2 y 3?
   ============================================================================== */

// estructura del programa principal
const INICIO = Date.now();
let idAviso = null;

// funciones
// TAREA: anotar(texto)


// constantes al DOM que queremos escuchar
const campoSegundos = document.querySelector('#segundos');
const btnProgramar = document.querySelector('#btnProgramar');
const btnCancelar = document.querySelector('#btnCancelar');
const estado = document.querySelector('#estado');
const registro = document.querySelector('#registro');

// colocar escuchadores de eventos
// TAREA: programar (con setTimeout)


// TAREA: cancelar (con clearTimeout)

