/* ==============================================================================
   EJERCICIO 05 · El almacén solo guarda texto: JSON al rescate

   OBJETIVO:
   Comprobar que localStorage convierte en texto todo lo que se guarda
   (números, booleanos, objetos y arrays), con los errores que eso provoca,
   y resolverlo guardando con JSON.stringify y leyendo con JSON.parse.

   PASOS A REALIZAR:
   1. Declarar la constante PREFIJO = 'curso-js:b09e05:' y usarla delante de
      todas las claves.
   2. Experimento 1: guardar el número 5, leerlo y sumarle 1. Mostrar el
      resultado y su typeof.
   3. Experimento 2: guardar false, leerlo y comprobar con if (leido) si
      entra. Mostrar si ha entrado y por qué.
   4. Experimento 3: guardar el objeto { nombre: 'Aria', nivel: 3 } sin
      convertir y mostrar lo que se lee.
   5. Experimento 4: guardar el array ['espada', 'escudo'] sin convertir y
      mostrar lo que se lee.
   6. Experimento 5: guardar el mismo objeto con JSON.stringify, leerlo con
      JSON.parse y mostrar su nombre y su nivel.
   7. Experimento 6: mostrar el texto tal cual está guardado en el caso 5
      (getItem sin parse).
   8. Experimento 7: hacer JSON.parse(getItem('clave-que-no-existe')) y
      mostrar el resultado.
   ============================================================================== */

// estructura del programa principal
const PREFIJO = 'curso-js:b09e05:';
const jugador = { nombre: 'Aria', nivel: 3 };
const inventario = ['espada', 'escudo'];

// constantes al DOM
const exp1 = document.querySelector('#exp1');
const exp2 = document.querySelector('#exp2');
const exp3 = document.querySelector('#exp3');
const exp4 = document.querySelector('#exp4');
const exp5 = document.querySelector('#exp5');
const exp6 = document.querySelector('#exp6');
const exp7 = document.querySelector('#exp7');

// procesamiento y salidas
// TAREA: experimento 1 · número


// TAREA: experimento 2 · booleano


// TAREA: experimento 3 · objeto sin convertir


// TAREA: experimento 4 · array sin convertir


// TAREA: experimentos 5 y 6 · con JSON


// TAREA: experimento 7 · clave inexistente

