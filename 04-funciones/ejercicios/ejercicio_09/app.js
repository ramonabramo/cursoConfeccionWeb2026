/* ==============================================================================
   EJERCICIO 09 · Calculadora de gastos con rest

   OBJETIVO:
   Escribir una función con un parámetro rest que recibe un número variable
   de importes, los valida y devuelve un resumen con el número de gastos, el
   total y la media.

   PASOS A REALIZAR:
   1. Declarar resumirGastos(concepto, ...gastos): el primer parámetro con
      nombre y el resto recogidos en el array gastos.
   2. Si gastos está vacío, devolver: Nada: sin gastos.
   3. Si algún gasto no es un número positivo (usad some), devolver: Error:
      hay importes no válidos.
   4. Si todo va bien, calcular total con reduce y media, y devolver: Viaje:
      3 gastos · total 195.50 € · media 65.17 €.
   5. Escribir el resultado de las cuatro llamadas de la tabla.
   ============================================================================== */

// estructura del programa principal
// funciones
// TAREA: function resumirGastos(concepto, ...gastos)


// constantes al DOM
const res1 = document.querySelector('#res1');
const res2 = document.querySelector('#res2');
const res3 = document.querySelector('#res3');
const res4 = document.querySelector('#res4');

// salidas
// TAREA: las cuatro llamadas

