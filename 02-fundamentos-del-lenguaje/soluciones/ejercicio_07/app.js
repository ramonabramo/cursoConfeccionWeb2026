/* ==============================================================================
   EJERCICIO 07 · == frente a === (SOLUCIÓN)

   OBJETIVO:
   Comparar la igualdad débil (==) con la igualdad estricta (===) y entender
   por qué en el curso usamos siempre ===.

   PASOS A REALIZAR:
   1. Crear las constantes al DOM de las doce celdas (debil1 … debil6 y
      estricta1 … estricta6).
   2. Para cada pareja de la tabla, escribir en la celda debil el resultado
      de comparar con == y en la celda estricta el resultado con ===.
   3. Escribid las comparaciones directamente en el código, por ejemplo:
      debil1.textContent = 5 == '5';
   4. Responded en comentarios: ¿por qué 0 == '' da true? ¿Y por qué NaN no
      es igual ni a sí mismo?
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const debil1 = document.querySelector('#debil1');
const debil2 = document.querySelector('#debil2');
const debil3 = document.querySelector('#debil3');
const debil4 = document.querySelector('#debil4');
const debil5 = document.querySelector('#debil5');
const debil6 = document.querySelector('#debil6');
const estricta1 = document.querySelector('#estricta1');
const estricta2 = document.querySelector('#estricta2');
const estricta3 = document.querySelector('#estricta3');
const estricta4 = document.querySelector('#estricta4');
const estricta5 = document.querySelector('#estricta5');
const estricta6 = document.querySelector('#estricta6');

// entradas
// (en este ejercicio no hay entradas)

// procesamiento y salidas
// pareja 1 · número y texto con el mismo dígito
debil1.textContent = 5 == '5';              // true: convierte '5' en 5
estricta1.textContent = 5 === '5';          // false: number frente a string

// pareja 2 · cero y texto vacío
debil2.textContent = 0 == '';               // true: '' se convierte en 0
estricta2.textContent = 0 === '';           // false

// pareja 3 · cero y false
debil3.textContent = 0 == false;            // true: false se convierte en 0
estricta3.textContent = 0 === false;        // false

// pareja 4 · los dos "vacíos"
debil4.textContent = null == undefined;     // true: regla especial de ==
estricta4.textContent = null === undefined; // false: son tipos distintos

// pareja 5 · texto y booleano
debil5.textContent = '1' == true;           // true: los dos acaban siendo 1
estricta5.textContent = '1' === true;       // false

// pareja 6 · NaN consigo mismo
debil6.textContent = NaN == NaN;            // false
estricta6.textContent = NaN === NaN;        // false

// ¿Por qué 0 == '' da true?
// Al comparar un número con un texto, == convierte el texto en número.
// Number('') es 0, así que acaba comparando 0 con 0.
//
// ¿Por qué NaN no es igual a sí mismo?
// Porque así lo define el lenguaje: NaN no es igual a ningún valor, ni a NaN.
// Para saber si algo es NaN se usa Number.isNaN(valor).
