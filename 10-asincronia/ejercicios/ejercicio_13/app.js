/* ==============================================================================
   EJERCICIO 13 · La máquina de escribir

   OBJETIVO:
   Escribir un texto letra a letra encadenando setTimeout (cada letra
   programa la siguiente) y cancelar la animación en curso con clearTimeout
   cuando se pide otra o se pulsa Parar.

   PASOS A REALIZAR:
   1. Declarar FRASES, VELOCIDAD_MS = 60 y let idEspera = null.
   2. Declarar escribirLetra(frase, i): pone en #texto los i primeros
      caracteres (slice). Si quedan letras, programa escribirLetra(frase, i
      + 1) con setTimeout y guarda el id; si no, escribe ✔ Terminado.
   3. Declarar empezar(n): cancela la animación anterior con clearTimeout,
      vacía el texto y llama a escribirLetra(FRASES[n], 0).
   4. Los botones (delegación con data-frase) llaman a empezar. Parar
      cancela y escribe ⏹ Parado en 23 de 48 letras.
   ============================================================================== */

// estructura del programa principal
const FRASES = [
    'Hola. Soy un texto que se escribe solo.',
    'Cada letra programa con setTimeout la siguiente.',
    'Si me interrumpís, clearTimeout cancela la que estaba esperando.',
];
const VELOCIDAD_MS = 60;
let idEspera = null;
let fraseActual = '';
let letras = 0;

// funciones
// TAREA: escribirLetra(frase, i) y empezar(n)


// constantes al DOM que queremos escuchar
const botonera = document.querySelector('.botonera');
const texto = document.querySelector('#texto');
const estado = document.querySelector('#estado');
const btnParar = document.querySelector('#btnParar');

// colocar escuchadores de eventos
// TAREA: botones de frase y Parar

