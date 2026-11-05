/* ==============================================================================
   EJERCICIO 13 · Recursividad: factorial y cuenta atrás (SOLUCIÓN)

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
function factorial(n) {
    if (n <= 1) {
        return 1;                        // caso base
    }
    return n * factorial(n - 1);         // caso recursivo: un problema más pequeño
}

function cuentaAtras(n) {
    if (n === 0) {
        return '¡Despegue! 🚀';
    }
    return `${n}… ` + cuentaAtras(n - 1);
}

function sumarDigitos(n) {
    if (n < 10) {
        return n;                        // un solo dígito: no hay nada que sumar
    }
    return (n % 10) + sumarDigitos(Math.floor(n / 10));   // último dígito + el resto
}

function sinFin(n) {
    return sinFin(n + 1);                // ⚠️ no hay caso base: nunca para
}

// constantes al DOM
const resFactorial = document.querySelector('#resFactorial');
const resCuenta = document.querySelector('#resCuenta');
const resDigitos = document.querySelector('#resDigitos');
const resSinFin = document.querySelector('#resSinFin');

// salidas
resFactorial.textContent = factorial(5);
resCuenta.textContent = cuentaAtras(5);
resDigitos.textContent = sumarDigitos(2026);
try {
    sinFin(1);
} catch (error) {
    resSinFin.textContent = `${error.name}: ${error.message}`;
}
