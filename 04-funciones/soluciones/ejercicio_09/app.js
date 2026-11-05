/* ==============================================================================
   EJERCICIO 09 · Calculadora de gastos con rest (SOLUCIÓN)

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
// ...gastos recoge TODOS los argumentos a partir del segundo en un array
function resumirGastos(concepto, ...gastos) {
    if (gastos.length === 0) {
        return `${concepto}: sin gastos`;
    }
    // es un array de verdad: tiene some, reduce, map…
    const hayInvalidos = gastos.some((g) => typeof g !== 'number' || !(g > 0));
    if (hayInvalidos) {
        return `${concepto}: hay importes no válidos`;
    }
    const total = gastos.reduce((suma, g) => suma + g, 0);
    const media = total / gastos.length;
    return `${concepto}: ${gastos.length} gastos · total ${total.toFixed(2)} € · media ${media.toFixed(2)} €`;
}

// constantes al DOM
const res1 = document.querySelector('#res1');
const res2 = document.querySelector('#res2');
const res3 = document.querySelector('#res3');
const res4 = document.querySelector('#res4');

// salidas
res1.textContent = resumirGastos('Viaje', 120, 45.5, 30);
res2.textContent = resumirGastos('Comida', 12.4);
res3.textContent = resumirGastos('Nada');
res4.textContent = resumirGastos('Error', 10, -5, 'abc');
