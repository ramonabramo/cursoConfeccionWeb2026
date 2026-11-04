/* ==============================================================================
   EJERCICIO 06 · Calculadora con callbacks (SOLUCIÓN)

   OBJETIVO:
   Pasar una función como argumento de otra (callback), tanto una función
   guardada en una constante como una función flecha anónima escrita en la
   propia llamada.

   PASOS A REALIZAR:
   1. Crear cuatro funciones flecha de retorno implícito: sumar, restar,
      multiplicar y dividir. Cada una recibe (a, b).
   2. Declarar la función operar(a, b, operacion) que devuelva el resultado
      de llamar a operacion(a, b).
   3. Crear las constantes al DOM.
   4. Pedir dos números con prompt (por defecto 8 y 2).
   5. Rellenar las cuatro primeras filas llamando a operar con cada una de
      las cuatro funciones. Pasad la función SIN paréntesis.
   6. Rellenar la fila de la potencia pasando una flecha anónima escrita en
      la propia llamada: operar(a, b, (x, y) => x ** y).
   7. Rellenar la fila de la media con otra flecha anónima.
   ============================================================================== */

// estructura del programa principal
// funciones
// cuatro operaciones como funciones flecha de retorno implícito
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

// operar no sabe QUÉ operación hará: la recibe como parámetro
function operar(a, b, operacion) {
    return operacion(a, b);   // llama al callback
}

// constantes al DOM
const datos = document.querySelector('#datos');
const resSumar = document.querySelector('#resSumar');
const resRestar = document.querySelector('#resRestar');
const resMultiplicar = document.querySelector('#resMultiplicar');
const resDividir = document.querySelector('#resDividir');
const resPotencia = document.querySelector('#resPotencia');
const resMedia = document.querySelector('#resMedia');

// entradas
const a = Number(prompt('Primer número:', '8'));
const b = Number(prompt('Segundo número:', '2'));

// procesamiento y salidas
datos.textContent = `Operando con a = ${a} y b = ${b}`;

// paso la función SIN paréntesis: no la ejecuto, la entrego
resSumar.textContent = operar(a, b, sumar);
resRestar.textContent = operar(a, b, restar);
resMultiplicar.textContent = operar(a, b, multiplicar);
resDividir.textContent = operar(a, b, dividir);

// callbacks anónimos: escritos directamente en la llamada
resPotencia.textContent = operar(a, b, (x, y) => x ** y);
resMedia.textContent = operar(a, b, (x, y) => (x + y) / 2);
