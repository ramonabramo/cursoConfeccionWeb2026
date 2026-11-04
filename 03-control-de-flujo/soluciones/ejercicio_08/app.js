/* ==============================================================================
   EJERCICIO 08 · Fizz Buzz (SOLUCIÓN)

   OBJETIVO:
   Combinar todo lo del bloque: un bucle for, el operador resto para
   detectar múltiplos, una escalera de if en el orden correcto, cuatro
   contadores y un acumulador de texto con separadores.

   PASOS A REALIZAR:
   1. Crear las constantes al DOM salida y las cuatro celdas.
   2. Pedir el límite con prompt (por defecto "30") y convertirlo.
   3. Si no es un número entre 1 y 100, mostrar un aviso y no hacer nada
      más.
   4. Declarar el acumulador resultado (texto vacío) y los contadores fizz,
      buzz, fizzBuzz y numeros a 0.
   5. Con un for de 1 al límite, decidir qué se dice en cada número usando
      el operador %. Pensad bien en qué orden van las condiciones.
   6. Añadir la palabra (o el número) a resultado y, si no es el último,
      añadir también ', '.
   7. Actualizar el contador correspondiente en cada caso.
   8. Mostrar el resultado y los contadores.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const salida = document.querySelector('#salida');
const resFizz = document.querySelector('#resFizz');
const resBuzz = document.querySelector('#resBuzz');
const resFizzBuzz = document.querySelector('#resFizzBuzz');
const resNumeros = document.querySelector('#resNumeros');

// entradas
const limite = Number(prompt('¿Hasta qué número contamos? (1-100)', '30'));

// procesamiento y salidas
if (Number.isNaN(limite) || limite < 1 || limite > 100) {
    salida.textContent = 'El límite debe ser un número entre 1 y 100.';
} else {
    let resultado = '';
    let fizz = 0;
    let buzz = 0;
    let fizzBuzz = 0;
    let numeros = 0;

    for (let i = 1; i <= limite; i++) {
        // el caso más específico va PRIMERO: múltiplo de 3 y de 5 a la vez
        if (i % 3 === 0 && i % 5 === 0) {
            resultado += 'FizzBuzz';
            fizzBuzz++;
        } else if (i % 3 === 0) {
            resultado += 'Fizz';
            fizz++;
        } else if (i % 5 === 0) {
            resultado += 'Buzz';
            buzz++;
        } else {
            resultado += i;
            numeros++;
        }

        // separador entre elementos, pero no después del último
        if (i < limite) {
            resultado += ', ';
        }
    }

    salida.textContent = resultado;
    resFizz.textContent = fizz;
    resBuzz.textContent = buzz;
    resFizzBuzz.textContent = fizzBuzz;
    resNumeros.textContent = numeros;
}
