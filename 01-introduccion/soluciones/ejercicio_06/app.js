/* ==============================================================================
   EJERCICIO 06 · Mi primera entrada con prompt() (SOLUCIÓN)

   OBJETIVO:
   Recoger el primer dato del usuario con prompt(), guardarlo en una
   constante y usarlo para construir un saludo que se muestra en la página y
   en el título de la pestaña.

   PASOS A REALIZAR:
   1. Crear la constante al DOM salida apuntando a #salida.
   2. Pedir el nombre con prompt("¿Cómo te llamas?", "invitado") y guardarlo
      en la constante nombre.
   3. Mostrar en la consola el valor de nombre.
   4. Construir en la constante saludo el texto: ¡Hola, NOMBRE! Bienvenido
      al curso. Usad una plantilla de texto con comillas invertidas y
      ${nombre}.
   5. Escribir el saludo en el párrafo #salida.
   6. Cambiar el título de la pestaña del navegador asignando a
      document.title el texto Hola, NOMBRE.
   7. Recargad y pulsad Cancelar. Anotad en un comentario qué aparece y por
      qué.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const salida = document.querySelector('#salida');

// entradas
// prompt(pregunta, valorPorDefecto) → devuelve lo que escribe el usuario
const nombre = prompt('¿Cómo te llamas?', 'invitado');

console.log(nombre);

// procesamiento
// plantilla de texto: comillas invertidas y ${} para insertar el valor
const saludo = `¡Hola, ${nombre}! Bienvenido al curso`;

// salidas
salida.textContent = saludo;

// document.title es el texto que aparece en la pestaña del navegador
document.title = `Hola, ${nombre}`;

// ¿Y si pulso Cancelar?
// Aparece "¡Hola, null! Bienvenido al curso". Al cancelar, prompt() devuelve null
// en lugar de un texto. Lo arreglaremos en el bloque 03 con un if.
