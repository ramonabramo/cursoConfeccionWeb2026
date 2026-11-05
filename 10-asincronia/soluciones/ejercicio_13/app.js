/* ==============================================================================
   EJERCICIO 13 · La máquina de escribir (SOLUCIÓN)

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
function escribirLetra(frase, i) {
    letras = i;
    texto.textContent = frase.slice(0, i);
    if (i < frase.length) {
        // cada letra programa la siguiente: un setTimeout encadenado
        idEspera = setTimeout(() => escribirLetra(frase, i + 1), VELOCIDAD_MS);
    } else {
        idEspera = null;
        estado.textContent = '✔ Terminado';
    }
}

function empezar(n) {
    clearTimeout(idEspera);              // si había otra a medias, se cancela
    fraseActual = FRASES[n];
    estado.textContent = `Escribiendo la frase ${n + 1}…`;
    escribirLetra(fraseActual, 0);
}

// constantes al DOM que queremos escuchar
const botonera = document.querySelector('.botonera');
const texto = document.querySelector('#texto');
const estado = document.querySelector('#estado');
const btnParar = document.querySelector('#btnParar');

// colocar escuchadores de eventos
botonera.addEventListener('click', (e) => {
    const boton = e.target.closest('[data-frase]');
    if (boton) {
        empezar(Number(boton.dataset.frase));
    }
});

btnParar.addEventListener('click', () => {
    if (idEspera === null) {
        return;                          // no había nada en marcha
    }
    clearTimeout(idEspera);
    idEspera = null;
    estado.textContent = `⏹ Parado en ${letras} de ${fraseActual.length} letras`;
});
