/* ==============================================================================
   EJERCICIO 02 · Detective de tipos (SOLUCIÓN)

   OBJETIVO:
   Conocer los tipos primitivos de JavaScript y usar el operador typeof para
   averiguar el tipo de cualquier valor.

   PASOS A REALIZAR:
   1. Declarar las ocho variables de la tabla con los valores indicados.
      sinValor se declara con let y sin asignarle nada.
   2. Crear una constante al DOM para cada celda de resultados (tipoTexto,
      tipoNumero, tipoDecimal, tipoNumeroEnTexto, tipoVerdadero,
      tipoSinValor, tipoVacio, tipoNoEsNumero).
   3. Escribir en cada celda el resultado de typeof sobre su variable.
   4. Mostrad también en la consola los ocho tipos, con un console.log por
      variable.
   5. Responded en un comentario: ¿qué dos resultados os han sorprendido y
      por qué?
   ============================================================================== */

// estructura del programa principal
const texto = 'Hola';
const numero = 42;
const decimal = 3.14;
const numeroEnTexto = '42';
const verdadero = true;
let sinValor;            // declarada pero sin valor → undefined
const vacio = null;      // vacía a propósito
const noEsNumero = NaN;  // "Not a Number"

// constantes al DOM
const tipoTexto = document.querySelector('#tipoTexto');
const tipoNumero = document.querySelector('#tipoNumero');
const tipoDecimal = document.querySelector('#tipoDecimal');
const tipoNumeroEnTexto = document.querySelector('#tipoNumeroEnTexto');
const tipoVerdadero = document.querySelector('#tipoVerdadero');
const tipoSinValor = document.querySelector('#tipoSinValor');
const tipoVacio = document.querySelector('#tipoVacio');
const tipoNoEsNumero = document.querySelector('#tipoNoEsNumero');

// entradas
// (en este ejercicio no hay entradas)

// procesamiento y salidas
tipoTexto.textContent = typeof texto;                 // "string"
tipoNumero.textContent = typeof numero;               // "number"
tipoDecimal.textContent = typeof decimal;             // "number": enteros y decimales son el mismo tipo
tipoNumeroEnTexto.textContent = typeof numeroEnTexto; // "string": las comillas mandan
tipoVerdadero.textContent = typeof verdadero;         // "boolean"
tipoSinValor.textContent = typeof sinValor;           // "undefined"
tipoVacio.textContent = typeof vacio;                 // "object" ⚠ rareza histórica
tipoNoEsNumero.textContent = typeof noEsNumero;       // "number" ⚠ aunque se llame "no es un número"

console.log(typeof texto, typeof numero, typeof decimal, typeof numeroEnTexto);
console.log(typeof verdadero, typeof sinValor, typeof vacio, typeof noEsNumero);

// Sorpresas:
// 1. typeof null devuelve "object". Es un fallo antiguo del lenguaje que se mantiene
//    por compatibilidad. null NO es un objeto: es un valor primitivo.
// 2. typeof NaN devuelve "number". NaN es un valor especial del tipo number que
//    indica el resultado de una operación numérica que no tiene sentido.
