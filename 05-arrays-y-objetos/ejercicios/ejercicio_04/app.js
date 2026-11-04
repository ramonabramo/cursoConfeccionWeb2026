/* ==============================================================================
   EJERCICIO 04 · map, filter, reduce y sort

   OBJETIVO:
   Usar los métodos que devuelven un resultado nuevo a partir de un array:
   map para transformar, filter para seleccionar, reduce para resumir,
   encadenarlos, y ordenar números correctamente con sort sin modificar el
   original.

   PASOS A REALIZAR:
   1. Crear el array precios con 12.5, 30, 8, 45, 19.99 y 5, y la constante
      IVA = 0.21.
   2. Declarar la función formatear(lista) que devuelva los números con dos
      decimales separados por ' · '. Pista: lista.map(…).join(' · ').
   3. Con map, crear conIva: cada precio multiplicado por 1 + IVA.
   4. Con filter, crear baratos: los precios menores de 20.
   5. Con reduce, calcular total: la suma de todos los precios, empezando en
      0.
   6. Encadenar filter, map y reduce en una sola expresión para obtener el
      total con IVA de los precios menores de 20.
   7. Ordenar una COPIA de precios con sort() sin argumentos y otra copia
      con sort((a, b) => a - b). Para copiar, usad [...precios].
   8. Rellenar la tabla y comprobar en la última fila que precios no ha
      cambiado.
   ============================================================================== */

// estructura del programa principal
const precios = [12.5, 30, 8, 45, 19.99, 5];
const IVA = 0.21;

// funciones
// TAREA: formatear(lista)


// constantes al DOM
const original = document.querySelector('#original');
const celdaConIva = document.querySelector('#conIva');
const celdaBaratos = document.querySelector('#baratos');
const celdaTotal = document.querySelector('#total');
const celdaEncadenado = document.querySelector('#encadenado');
const ordenMal = document.querySelector('#ordenMal');
const ordenBien = document.querySelector('#ordenBien');
const originalFinal = document.querySelector('#originalFinal');

// procesamiento
// TAREA: map → conIva


// TAREA: filter → baratos


// TAREA: reduce → total


// TAREA: encadenado (filter → map → reduce)


// TAREA: sort sin comparador y con comparador (sobre copias)


// salidas
// TAREA: rellena la tabla

