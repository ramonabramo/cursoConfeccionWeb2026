/* ==============================================================================
   EJERCICIO 08 · Juego de reflejos (SOLUCIÓN)

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
// una pausa que se puede esperar con await
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// número entero aleatorio entre min y max (bloque 02)
const aleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// el estado
let fase = 'inactivo';             // 'inactivo' | 'cuenta' | 'preparado' | 'ya'
let idTemporizador = null;
let momentoVerde = 0;
let record = Number(localStorage.getItem(CLAVE_RECORD)) || null;

function ponerZona(clase, texto) {
    zona.classList.remove('preparado', 'ya');
    if (clase) {
        zona.classList.add(clase);
    }
    zona.textContent = texto;
}

function mostrarRecord() {
    salidaRecord.textContent = record ? `Mejor marca: ${record} ms` : 'Mejor marca: —';
}

function terminarRonda() {
    fase = 'inactivo';
    btnEmpezar.disabled = false;
}

async function empezar() {
    btnEmpezar.disabled = true;
    resultado.textContent = '…';

    // cuenta atrás de arriba abajo, sin pirámide, gracias a await
    fase = 'cuenta';
    for (const numero of [3, 2, 1]) {
        ponerZona('', numero);
        await esperar(700);
    }

    // fase de espera: rojo hasta un momento al azar
    fase = 'preparado';
    ponerZona('preparado', 'Espera al verde…');
    idTemporizador = setTimeout(() => {
        fase = 'ya';
        momentoVerde = Date.now();
        ponerZona('ya', '¡YA!');
    }, aleatorio(1000, 3000));
}

function pulsar() {
    if (fase === 'preparado') {
        // ha pulsado en rojo: cancelo el verde que estaba programado
        clearTimeout(idTemporizador);
        ponerZona('', '🙈 ¡Demasiado pronto!');
        resultado.textContent = 'Falta: has pulsado antes del verde.';
        terminarRonda();
    } else if (fase === 'ya') {
        const tiempo = Date.now() - momentoVerde;
        ponerZona('', `${tiempo} ms`);
        if (record === null || tiempo < record) {
            record = tiempo;
            localStorage.setItem(CLAVE_RECORD, record);
            resultado.textContent = `🏆 ¡Nuevo récord! ${tiempo} ms`;
        } else {
            resultado.textContent = `Tu tiempo: ${tiempo} ms`;
        }
        mostrarRecord();
        terminarRonda();
    }
    // en 'inactivo' o 'cuenta', los clics se ignoran
}

// constantes al DOM que queremos escuchar
const zona = document.querySelector('#zona');
const btnEmpezar = document.querySelector('#btnEmpezar');
const resultado = document.querySelector('#resultado');
const salidaRecord = document.querySelector('#record');

// colocar escuchadores de eventos
btnEmpezar.addEventListener('click', empezar);
zona.addEventListener('click', pulsar);
zona.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();   // que el espacio no haga scroll
        pulsar();
    }
});

mostrarRecord();
