/* ==============================================================================
   EJERCICIO 02 · Buscador de alumnos

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
// TAREA: nombre con prompt y trim()


// procesamiento y salidas
// TAREA: ¿está? includes → indexOf → nota


// TAREA: find (primera nota < 5)


// TAREA: findIndex y nombre del alumno


// TAREA: includes(10)


// TAREA: every (todas entre 0 y 10)

