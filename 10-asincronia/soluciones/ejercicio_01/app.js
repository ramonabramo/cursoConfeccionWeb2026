/* ==============================================================================
   EJERCICIO 01 · Un aviso con retraso: setTimeout (SOLUCIÓN)

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
const INICIO = Date.now();   // milisegundos desde el 1 de enero de 1970
let idAviso = null;          // el "número de ticket" del temporizador

// funciones
function anotar(texto) {
    const li = document.createElement('li');
    li.textContent = `[+${Date.now() - INICIO} ms] ${texto}`;
    registro.append(li);
}

// constantes al DOM que queremos escuchar
const campoSegundos = document.querySelector('#segundos');
const btnProgramar = document.querySelector('#btnProgramar');
const btnCancelar = document.querySelector('#btnCancelar');
const estado = document.querySelector('#estado');
const registro = document.querySelector('#registro');

// colocar escuchadores de eventos
btnProgramar.addEventListener('click', () => {
    // entradas
    const segundos = Number(campoSegundos.value) || 3;

    // si ya había uno en marcha, lo cancelo: así nunca hay dos a la vez
    if (idAviso !== null) {
        clearTimeout(idAviso);
    }

    anotar(`1. Programo el aviso para dentro de ${segundos} s`);

    // setTimeout NO espera: entrega el callback al navegador y devuelve un id al momento
    idAviso = setTimeout(() => {
        anotar(`3. ¡Aviso! Han pasado ${segundos} s`);
        estado.textContent = '🔔 ¡Tiempo!';
        idAviso = null;
    }, segundos * 1000);

    anotar('2. El programa sigue: no espera');
    estado.textContent = `Aviso programado (id ${idAviso}). Puedes cancelarlo.`;
});

btnCancelar.addEventListener('click', () => {
    if (idAviso === null) {
        estado.textContent = 'No hay nada que cancelar.';
        return;
    }
    clearTimeout(idAviso);
    anotar('Aviso cancelado');
    estado.textContent = 'Aviso cancelado.';
    idAviso = null;
});
