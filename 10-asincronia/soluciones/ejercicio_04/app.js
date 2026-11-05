/* ==============================================================================
   EJERCICIO 04 · ¿En qué orden? El bucle de eventos (SOLUCIÓN)

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
function anotar(texto) {
    const li = document.createElement('li');
    li.textContent = texto;
    registro.append(li);
}

// constantes al DOM que queremos escuchar
const btnA = document.querySelector('#btnA');
const btnB = document.querySelector('#btnB');
const btnC = document.querySelector('#btnC');
const btnLimpiar = document.querySelector('#btnLimpiar');
const reloj = document.querySelector('#reloj');
const registro = document.querySelector('#registro');

// colocar escuchadores de eventos
// el reloj vivo: si se para, es que el hilo principal está ocupado
setInterval(() => {
    reloj.textContent = `${((Date.now() - INICIO) / 1000).toFixed(1)} s`;
}, 100);

// A: el callback de 0 ms espera a que termine TODO el código síncrono
btnA.addEventListener('click', () => {
    anotar('A1 · síncrono');
    setTimeout(() => anotar('A2 · temporizador de 0 ms'), 0);
    anotar('A3 · síncrono');
});

// B: los temporizadores salen por orden de vencimiento, no de escritura
btnB.addEventListener('click', () => {
    setTimeout(() => anotar('B1 · temporizador de 300 ms (lento)'), 300);
    setTimeout(() => anotar('B2 · temporizador de 0 ms (rápido)'), 0);
    anotar('B3 · síncrono');
});

// C: un bucle largo ocupa la pila y nada más puede ejecutarse
btnC.addEventListener('click', () => {
    anotar('C1 · empieza el bloqueo');
    const fin = Date.now() + 2000;
    while (Date.now() < fin) {
        // dando vueltas sin hacer nada durante 2 segundos
    }
    anotar('C2 · fin del bloqueo');
});

btnLimpiar.addEventListener('click', () => {
    registro.replaceChildren();
});

// Lo observado:
// A → A1, A3, A2. El callback va a la cola y solo entra cuando la pila está vacía.
// B → B3, B2, B1. Primero lo síncrono; después, cada temporizador cuando vence.
// C → el reloj se congela 2 s y "Limpiar" no responde: con la pila ocupada,
//     ni los temporizadores ni los clics pueden ejecutarse. Por eso nunca hay que
//     bloquear el hilo principal con tareas largas.
