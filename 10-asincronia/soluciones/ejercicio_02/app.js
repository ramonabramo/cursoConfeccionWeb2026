/* ==============================================================================
   EJERCICIO 02 · Cronómetro con setInterval (SOLUCIÓN)

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
let idIntervalo = null;   // null = parado
let acumulado = 0;        // ms de los tramos anteriores (antes de cada pausa)
let inicio = 0;           // Date.now() del momento en que arrancó el tramo actual

// funciones
const dosCifras = (n) => String(n).padStart(2, '0');

// 65432 ms → "01:05.4"
function formatear(ms) {
    const minutos = Math.floor(ms / 60000);
    const segundos = Math.floor((ms % 60000) / 1000);
    const decimas = Math.floor((ms % 1000) / 100);
    return `${dosCifras(minutos)}:${dosCifras(segundos)}.${decimas}`;
}

// el tiempo se MIDE con el reloj, no se cuenta con los ticks del intervalo
function tiempoActual() {
    const enMarcha = idIntervalo !== null;
    return acumulado + (enMarcha ? Date.now() - inicio : 0);
}

function pintar() {
    pantalla.textContent = formatear(tiempoActual());
}

function pausar() {
    acumulado += Date.now() - inicio;
    clearInterval(idIntervalo);
    idIntervalo = null;
    btnIniciar.textContent = 'Iniciar';
}

// constantes al DOM que queremos escuchar
const pantalla = document.querySelector('#pantalla');
const btnIniciar = document.querySelector('#btnIniciar');
const btnVuelta = document.querySelector('#btnVuelta');
const btnReiniciar = document.querySelector('#btnReiniciar');
const vueltas = document.querySelector('#vueltas');

// colocar escuchadores de eventos
btnIniciar.addEventListener('click', () => {
    if (idIntervalo === null) {
        inicio = Date.now();
        idIntervalo = setInterval(pintar, 100);   // repetir cada 100 ms
        btnIniciar.textContent = 'Pausar';
    } else {
        pausar();
    }
    pintar();
});

btnVuelta.addEventListener('click', () => {
    if (idIntervalo === null) {
        return;
    }
    const li = document.createElement('li');
    li.textContent = formatear(tiempoActual());
    vueltas.prepend(li);
});

btnReiniciar.addEventListener('click', () => {
    if (idIntervalo !== null) {
        pausar();
    }
    acumulado = 0;
    vueltas.replaceChildren();
    pintar();
});
