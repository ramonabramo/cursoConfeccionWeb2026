/* ==============================================================================
   EJERCICIO 10 · La pila de llamadas, paso a paso

   OBJETIVO:
   Ver en orden cómo entran y salen las funciones de la pila de llamadas
   cuando unas llaman a otras, registrando cada entrada y cada salida con su
   nivel de profundidad.

   PASOS A REALIZAR:
   1. Declarar let nivel = 0 y una función registrar(texto) que añade un li
      a #traza con el texto sangrado según el nivel (por ejemplo, con '
      '.repeat(nivel)).
   2. Declarar calcularIVA(base): registra ⬇ entra calcularIVA, calcula base
      × 0.21, registra ⬆ sale calcularIVA y devuelve el resultado.
   3. Declarar calcularTotal(base): registra la entrada, sube el nivel,
      llama a calcularIVA, baja el nivel, registra la salida y devuelve base
      + IVA.
   4. Declarar generarFactura(base) igual, llamando a calcularTotal, y que
      devuelva el texto Total: 121.00 €.
   5. Llamar a generarFactura(100) y escribir el resultado. Comprobad que el
      orden de salida es el inverso al de entrada.
   ============================================================================== */

// estructura del programa principal
let nivel = 0;

// constantes al DOM
const traza = document.querySelector('#traza');
const resultado = document.querySelector('#resultado');

// funciones
// TAREA: registrar(texto)


// TAREA: calcularIVA(base), calcularTotal(base) y generarFactura(base)


// salidas
// TAREA: resultado.textContent = generarFactura(100);

