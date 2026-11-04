/* ==============================================================================
   EJERCICIO 07 · prompt() siempre devuelve texto (SOLUCIÓN)

   OBJETIVO:
   Comprobar que prompt() devuelve siempre un texto aunque el usuario
   escriba números, y convertirlo con Number() para poder sumar.

   PASOS A REALIZAR:
   1. Crear las constantes al DOM salidaMal y salidaBien.
   2. Pedir dos números con prompt() y guardarlos en las constantes numero1
      y numero2.
   3. Mostrar en la consola typeof numero1 para ver de qué tipo es el dato.
   4. Calcular sumaMal como numero1 + numero2, sin convertir nada.
   5. Calcular sumaBien como Number(numero1) + Number(numero2).
   6. Escribir en cada párrafo la operación y su resultado, por ejemplo: 2 +
      2 = 22.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const salidaMal = document.querySelector('#salidaMal');
const salidaBien = document.querySelector('#salidaBien');

// entradas
const numero1 = prompt('Escribe el primer número:', '2');
const numero2 = prompt('Escribe el segundo número:', '2');

// typeof nos dice el tipo del dato: aunque escribamos 2, es "string"
console.log(typeof numero1);

// procesamiento
// dos textos con + → se unen: "2" + "2" = "22"
const sumaMal = numero1 + numero2;

// Number() convierte el texto en número → ahora + suma: 2 + 2 = 4
const sumaBien = Number(numero1) + Number(numero2);

// salidas
salidaMal.textContent = `${numero1} + ${numero2} = ${sumaMal}`;
salidaBien.textContent = `${numero1} + ${numero2} = ${sumaBien}`;
