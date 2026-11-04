/* ==============================================================================
   EJERCICIO 01 · Conversor de temperaturas (SOLUCIÓN)

   OBJETIVO:
   Declarar funciones con parámetros que devuelven un valor con return,
   llamarlas varias veces con argumentos distintos y comprobar qué devuelve
   una función que no tiene return.

   PASOS A REALIZAR:
   1. Declarar la función celsiusAFahrenheit(celsius) que devuelva la
      temperatura en Fahrenheit.
   2. Declarar la función fahrenheitACelsius(fahrenheit) que haga la
      conversión contraria.
   3. Crear las constantes al DOM de salida y de las seis celdas de la
      tabla.
   4. Pedir una temperatura en Celsius con prompt (por defecto "25"). Si no
      es un número, mostrar un aviso; si lo es, mostrar: 25 °C son 77 °F.
   5. Rellenar la tabla llamando a las funciones con 0, 100 y -40. En la
      última columna, convertid el resultado de vuelta a Celsius:
      fahrenheitACelsius(celsiusAFahrenheit(0)).
   6. Declarar una tercera función, mostrarEnConsola(texto), que haga
      console.log(texto) pero SIN return. Guardad en una constante lo que
      devuelve y mostradlo en la consola. Anotad en un comentario qué valor
      sale.
   ============================================================================== */

// estructura del programa principal
// funciones
// recibe grados Celsius y DEVUELVE grados Fahrenheit
function celsiusAFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

// recibe grados Fahrenheit y DEVUELVE grados Celsius
function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// hace algo (escribir en consola) pero no devuelve nada
function mostrarEnConsola(texto) {
    console.log(texto);
}

// constantes al DOM
const salida = document.querySelector('#salida');
const f0 = document.querySelector('#f0');
const c0 = document.querySelector('#c0');
const f100 = document.querySelector('#f100');
const c100 = document.querySelector('#c100');
const fMenos40 = document.querySelector('#fMenos40');
const cMenos40 = document.querySelector('#cMenos40');

// entradas
const celsius = Number(prompt('Temperatura en grados Celsius:', '25'));

// procesamiento y salidas
if (Number.isNaN(celsius)) {
    salida.textContent = 'Eso no es una temperatura.';
} else {
    const fahrenheit = celsiusAFahrenheit(celsius);
    salida.textContent = `${celsius} °C son ${fahrenheit} °F`;
}

// la misma función, llamada con argumentos distintos
f0.textContent = celsiusAFahrenheit(0);                        // 32
c0.textContent = fahrenheitACelsius(celsiusAFahrenheit(0));    // 0
f100.textContent = celsiusAFahrenheit(100);                    // 212
c100.textContent = fahrenheitACelsius(celsiusAFahrenheit(100));
fMenos40.textContent = celsiusAFahrenheit(-40);                // -40: ¡coinciden!
cMenos40.textContent = fahrenheitACelsius(celsiusAFahrenheit(-40));

// una función sin return devuelve undefined
const devuelto = mostrarEnConsola('Hola desde una función sin return');
console.log(devuelto);   // undefined
