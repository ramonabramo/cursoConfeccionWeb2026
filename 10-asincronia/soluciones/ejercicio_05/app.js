/* ==============================================================================
   EJERCICIO 05 · Del callback hell a las promesas (SOLUCIÓN)

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
function anotar(texto) {
    const li = document.createElement('li');
    li.textContent = `[+${Date.now() - inicio} ms] ${texto}`;
    registro.append(li);
}

function bloquearBotones(bloquear) {
    btnCallbacks.disabled = bloquear;
    btnPromesas.disabled = bloquear;
}

// VERSIÓN 1 · callbacks: quien llama dice qué hacer después
function pasoConCallback(nombre, ms, alTerminar) {
    setTimeout(() => {
        anotar(nombre);
        alTerminar();
    }, ms);
}

// VERSIÓN 2 · promesas: la función DEVUELVE una promesa que se cumple al terminar
function paso(nombre, ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            anotar(nombre);
            resolve();           // ✔ la promesa se cumple
        }, ms);
    });
}

// constantes al DOM que queremos escuchar
const btnCallbacks = document.querySelector('#btnCallbacks');
const btnPromesas = document.querySelector('#btnPromesas');
const registro = document.querySelector('#registro');

// colocar escuchadores de eventos
btnCallbacks.addEventListener('click', () => {
    registro.replaceChildren();
    inicio = Date.now();
    bloquearBotones(true);

    // la pirámide: cada paso, DENTRO del callback del anterior
    pasoConCallback('Preparar la masa', 800, () => {
        pasoConCallback('Añadir ingredientes', 500, () => {
            pasoConCallback('Hornear', 1000, () => {
                pasoConCallback('Servir', 300, () => {
                    anotar('🍕 ¡Lista! (versión callbacks)');
                    bloquearBotones(false);
                });
            });
        });
    });
});

btnPromesas.addEventListener('click', () => {
    registro.replaceChildren();
    inicio = Date.now();
    bloquearBotones(true);

    // la cadena: plana, de arriba abajo
    paso('Preparar la masa', 800)
        .then(() => paso('Añadir ingredientes', 500))
        .then(() => paso('Hornear', 1000))
        .then(() => paso('Servir', 300))
        .then(() => anotar('🍕 ¡Lista! (versión promesas)'))
        .finally(() => bloquearBotones(false));
});
