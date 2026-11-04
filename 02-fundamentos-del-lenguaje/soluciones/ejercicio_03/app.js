/* ==============================================================================
   EJERCICIO 03 · Calculadora de operadores (SOLUCIÓN)

   OBJETIVO:
   Usar los seis operadores aritméticos de JavaScript (+, -, *, /, % y **)
   con dos números introducidos por el usuario.

   PASOS A REALIZAR:
   1. Crear las constantes al DOM: datos y las seis celdas (suma, resta,
      multiplicacion, division, resto, potencia).
   2. Pedir dos números con prompt (por defecto 17 y 5) y convertirlos con
      Number() al guardarlos en las constantes a y b.
   3. Calcular las seis operaciones y guardar cada resultado en su propia
      constante.
   4. Escribir en el párrafo datos el texto: Operando con a = 17 y b = 5.
   5. Escribir cada resultado en su celda.
   6. Probad a dividir entre 0 y anotad en un comentario qué resultado da.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const datos = document.querySelector('#datos');
const celdaSuma = document.querySelector('#suma');
const celdaResta = document.querySelector('#resta');
const celdaMultiplicacion = document.querySelector('#multiplicacion');
const celdaDivision = document.querySelector('#division');
const celdaResto = document.querySelector('#resto');
const celdaPotencia = document.querySelector('#potencia');

// entradas
// convierto en el mismo momento de leer: a partir de aquí a y b son números
const a = Number(prompt('Primer número (a):', '17'));
const b = Number(prompt('Segundo número (b):', '5'));

// procesamiento
const suma = a + b;
const resta = a - b;
const multiplicacion = a * b;
const division = a / b;
const resto = a % b;       // lo que sobra de la división entera: 17 % 5 = 2
const potencia = a ** b;   // a elevado a b: 17 ** 5 = 1419857

// salidas
datos.textContent = `Operando con a = ${a} y b = ${b}`;
celdaSuma.textContent = suma;
celdaResta.textContent = resta;
celdaMultiplicacion.textContent = multiplicacion;
celdaDivision.textContent = division;
celdaResto.textContent = resto;
celdaPotencia.textContent = potencia;

// ¿Dividir entre 0?
// 10 / 0 da Infinity (no da error). Y 10 % 0 da NaN.
