/* ==============================================================================
   EJERCICIO 02 · Buscador de alumnos (SOLUCIÓN)

   OBJETIVO:
   Buscar dentro de un array: saber si un valor está (includes), en qué
   posición (indexOf), encontrar el primer elemento que cumple una condición
   (find) y su posición (findIndex), y comprobar si todos la cumplen
   (every).

   PASOS A REALIZAR:
   1. Crear los arrays alumnos (Ana, Luis, Marta, Pablo, Lucía, Hugo) y
      notas (7.5, 4, 9, 3.5, 6, 8).
   2. Pedir un nombre con prompt (por defecto "Marta") y limpiarlo con
      trim().
   3. Si el nombre NO está en alumnos (includes), mostrar: No hay ningún
      alumno llamado X.
   4. Si está, obtener su posición con indexOf, leer su nota en
      notas[posicion] y mostrar: Marta está en la posición 2 y tiene un 9.
   5. Con find, encontrar la primera nota menor que 5.
   6. Con findIndex, encontrar su posición y, con ella, el nombre del
      alumno.
   7. Con includes, comprobar si alguien tiene un 10.
   8. Con every, comprobar si todas las notas están entre 0 y 10.
   ============================================================================== */

// estructura del programa principal
const alumnos = ['Ana', 'Luis', 'Marta', 'Pablo', 'Lucía', 'Hugo'];
const notas = [7.5, 4, 9, 3.5, 6, 8];

// constantes al DOM
const salida = document.querySelector('#salida');
const primerSuspenso = document.querySelector('#primerSuspenso');
const quienSuspende = document.querySelector('#quienSuspende');
const hayDiez = document.querySelector('#hayDiez');
const todasValidas = document.querySelector('#todasValidas');

// entradas
const nombre = (prompt('¿A quién buscamos?', 'Marta') || '').trim();

// procesamiento y salidas
// 1. buscar un valor concreto
if (!alumnos.includes(nombre)) {
    salida.textContent = `No hay ningún alumno llamado "${nombre}".`;
} else {
    const posicion = alumnos.indexOf(nombre);
    const nota = notas[posicion];   // misma posición en el array paralelo
    salida.textContent = `${nombre} está en la posición ${posicion} y tiene un ${nota}.`;
}

// 2. buscar por condición: el callback devuelve true/false para cada elemento
const suspenso = notas.find((n) => n < 5);              // 4: el PRIMERO que cumple
const posSuspenso = notas.findIndex((n) => n < 5);      // 1: su posición

primerSuspenso.textContent = suspenso;
quienSuspende.textContent = posSuspenso !== -1 ? alumnos[posSuspenso] : 'nadie';

// 3. preguntas de sí o no sobre todo el array
hayDiez.textContent = notas.includes(10) ? 'sí' : 'no';
todasValidas.textContent = notas.every((n) => n >= 0 && n <= 10) ? 'sí' : 'no';
