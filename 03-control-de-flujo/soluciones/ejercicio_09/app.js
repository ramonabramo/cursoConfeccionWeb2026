/* ==============================================================================
   EJERCICIO 09 · El mayor de tres números (SOLUCIÓN)

   OBJETIVO:
   Resolver el mismo problema con if anidados y con condiciones combinadas
   con &&, y tratar correctamente los empates.

   PASOS A REALIZAR:
   1. Pedir tres números con prompt() y convertirlos con Number() (por
      defecto 3, 9 y 5).
   2. Versión 1 (#salidaAnidada): encontrar el mayor solo con if…else
      anidados, sin &&.
   3. Versión 2 (#salidaCombinada): con if…else if y condiciones con && (a
      >= b && a >= c…).
   4. Si los tres son iguales, las dos versiones deben decirlo: Los tres son
      iguales (4).
   5. Comprobad que con 9, 9, 2 las dos versiones dicen 9.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const datos = document.querySelector('#datos');
const salidaAnidada = document.querySelector('#salidaAnidada');
const salidaCombinada = document.querySelector('#salidaCombinada');

// entradas
const a = Number(prompt('Primer número', '3'));
const b = Number(prompt('Segundo número', '9'));
const c = Number(prompt('Tercer número', '5'));

// procesamiento: versión 1, if anidados (comparo de dos en dos)
let mayorAnidado;
if (a >= b) {
    if (a >= c) {
        mayorAnidado = a;
    } else {
        mayorAnidado = c;
    }
} else {
    if (b >= c) {
        mayorAnidado = b;
    } else {
        mayorAnidado = c;
    }
}

// procesamiento: versión 2, condiciones combinadas
let mayorCombinado;
if (a >= b && a >= c) {
    mayorCombinado = a;
} else if (b >= c) {          // a no es el mayor: solo queda comparar b con c
    mayorCombinado = b;
} else {
    mayorCombinado = c;
}

const iguales = a === b && b === c;

// salidas
datos.textContent = `Números: ${a}, ${b} y ${c}`;
if (iguales) {
    salidaAnidada.textContent = `Los tres son iguales (${a})`;
    salidaCombinada.textContent = `Los tres son iguales (${a})`;
} else {
    salidaAnidada.textContent = `Con if anidados, el mayor es ${mayorAnidado}`;
    salidaCombinada.textContent = `Con &&, el mayor es ${mayorCombinado}`;
}
