/* ==============================================================================
   EJERCICIO 13 · Recursividad: factorial y cuenta atrás

   OBJETIVO:
   Escribir funciones recursivas con su caso base y su caso recursivo, y
   comprobar qué ocurre cuando falta el caso base.

   PASOS A REALIZAR:
   1. factorial(n): si n <= 1, devuelve 1; si no, n * factorial(n - 1).
   2. cuentaAtras(n): si n === 0, devuelve '¡Despegue! 🚀'; si no, devuelve
      `${n}… ` + cuentaAtras(n - 1).
   3. sumarDigitos(n): si n < 10, devuelve n; si no, (n % 10) +
      sumarDigitos(Math.floor(n / 10)).
   4. sinFin(n): devuelve sinFin(n + 1), sin caso base. Llamadla dentro de
      un try y, en el catch, escribid el nombre y el mensaje del error.
   5. Escribir los cuatro resultados en la tabla.
   ============================================================================== */

// estructura del programa principal
// funciones
// TAREA: factorial(n), cuentaAtras(n), sumarDigitos(n) y sinFin(n)


// constantes al DOM
const resFactorial = document.querySelector('#resFactorial');
const resCuenta = document.querySelector('#resCuenta');
const resDigitos = document.querySelector('#resDigitos');
const resSinFin = document.querySelector('#resSinFin');

// salidas
// TAREA (sinFin, dentro de un try…catch)

