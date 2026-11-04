/* ==============================================================================
   EJERCICIO 08 · Tabla de notas dinámica

   OBJETIVO:
   Generar las filas de una tabla a partir de un array de objetos, aplicando
   una clase CSS a cada celda según su valor, añadir una fila de resumen en
   el pie y mostrar un mensaje cuando no hay datos.

   PASOS A REALIZAR:
   1. Usar el array alumnos que ya está creado.
   2. Declarar calificar(nota) que devuelva un objeto { texto, clase }:
      Suspenso/suspenso por debajo de 5, Aprobado/aprobado hasta 8.9 y
      Sobresaliente/sobresaliente desde 9.
   3. Declarar crearFila(alumno) que devuelva un tr con tres td: nombre,
      nota con un decimal y calificación. La celda de la calificación lleva
      la clase que devuelve calificar.
   4. Pedir con prompt la nota mínima para mostrar (por defecto 0). Si no es
      válida, usar 0.
   5. Filtrar los alumnos, ordenarlos de mayor a menor nota y pintar sus
      filas en el tbody (vaciándolo antes).
   6. En el tfoot, crear una fila con la media de los mostrados. Si no hay
      ninguno, en su lugar mostrar una única celda con colspan 3 y el texto
      Ningún alumno con esa nota mínima.
   7. Escribir en #filtro: Mostrando 5 de 8 alumnos con nota ≥ 5.
   ============================================================================== */

// estructura del programa principal
const alumnos = [
    { nombre: 'Ana', nota: 7.5 },
    { nombre: 'Luis', nota: 4 },
    { nombre: 'Marta', nota: 9.2 },
    { nombre: 'Pablo', nota: 3.5 },
    { nombre: 'Lucía', nota: 6 },
    { nombre: 'Hugo', nota: 8.8 },
    { nombre: 'Sara', nota: 10 },
    { nombre: 'Iván', nota: 4.9 },
];

// funciones
// TAREA: calificar(nota) → { texto, clase }


// TAREA: crearFila(alumno) → <tr>


// constantes al DOM
const filtro = document.querySelector('#filtro');
const cuerpo = document.querySelector('#cuerpo');
const pie = document.querySelector('#pie');

// entradas
// TAREA: nota mínima


// procesamiento y salidas
// TAREA: filtrar, ordenar y pintar el tbody


// TAREA: pie con la media (o el mensaje con colspan)


// TAREA: texto del filtro

