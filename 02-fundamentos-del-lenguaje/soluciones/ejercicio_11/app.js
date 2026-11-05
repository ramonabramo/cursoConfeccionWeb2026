/* ==============================================================================
   EJERCICIO 11 · Intercambiar dos vasos (SOLUCIÓN)

   OBJETIVO:
   Intercambiar el valor de dos variables usando una variable auxiliar, y
   entender por qué hace falta y por qué esas variables se declaran con let.

   PASOS A REALIZAR:
   1. Pedir dos bebidas con prompt() (por defecto café y té) y guardarlas en
      a y b. ¿let o const?
   2. Mostrar los valores en la fila Antes.
   3. Intercambiarlos con una constante auxiliar: auxiliar = a; a = b; b =
      auxiliar.
   4. Mostrar los valores en la fila Después.
   ============================================================================== */

// estructura del programa principal

// funciones
function escribir(id, valor) {
    document.querySelector(`#${id}`).textContent = valor;
}

// entradas: let, porque sus valores van a cambiar
let a = prompt('Bebida del vaso A', 'café');
let b = prompt('Bebida del vaso B', 'té');

// salidas (antes)
escribir('antesA', a);
escribir('antesB', b);

// procesamiento: el tercer vaso
const auxiliar = a;   // 1. guardo lo que hay en A
a = b;                // 2. ya puedo llenar A con lo de B
b = auxiliar;         // 3. y B recibe lo que tenía A

// salidas (después)
escribir('despuesA', a);
escribir('despuesB', b);
