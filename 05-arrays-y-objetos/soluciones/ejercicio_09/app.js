/* ==============================================================================
   EJERCICIO 09 · La cola de la consulta (SOLUCIÓN)

   OBJETIVO:
   Simular una cola de espera con un array: push para llegar al final,
   unshift para colarse al principio y shift para atender al primero,
   controlando la cola vacía.

   PASOS A REALIZAR:
   1. Declarar const cola = [] y una función apuntar(texto) que añade un li
      a #registro y escribe en #cola el estado actual: En espera (2): Ana,
      Luis.
   2. Declarar llegar(nombre) con push, urgencia(nombre) con unshift, y
      atender() con shift. Si la cola está vacía, atender devuelve No hay
      nadie esperando.
   3. Simular: llegan Ana, Luis y Eva; se atiende a uno; llega una urgencia
      (Teo); se atiende a dos; se atiende a dos más (la cola se vacía).
   4. Cada operación apunta lo que ha pasado: Llega Ana, ⚠️ Urgencia: Teo,
      Atendido: Ana…
   ============================================================================== */

// estructura del programa principal
const cola = [];

// constantes al DOM
const registro = document.querySelector('#registro');
const salidaCola = document.querySelector('#cola');

// funciones
function apuntar(texto) {
    const li = document.createElement('li');
    li.textContent = texto;
    registro.append(li);
    salidaCola.textContent = cola.length === 0
        ? 'Nadie en espera'
        : `En espera (${cola.length}): ${cola.join(', ')}`;
}

function llegar(nombre) {
    cola.push(nombre);                 // al FINAL
    apuntar(`Llega ${nombre}`);
}

function urgencia(nombre) {
    cola.unshift(nombre);              // al PRINCIPIO: se cuela
    apuntar(`⚠️ Urgencia: ${nombre}`);
}

function atender() {
    if (cola.length === 0) {
        apuntar('No hay nadie esperando');
        return;
    }
    const paciente = cola.shift();     // saca el PRIMERO y lo devuelve
    apuntar(`Atendido: ${paciente}`);
}

// procesamiento: la mañana en la consulta
llegar('Ana');
llegar('Luis');
llegar('Eva');
atender();
urgencia('Teo');
atender();
atender();
atender();
atender();
