/* ==============================================================================
   EJERCICIO 03 · Un saludo a prueba de Cancelar (SOLUCIÓN)

   OBJETIVO:
   Usar los valores truthy y falsy en una condición para detectar respuestas
   vacías o canceladas, limpiar espacios con trim() y elegir entre dos
   mensajes con el operador ternario.

   PASOS A REALIZAR:
   1. Crear la constante al DOM salida.
   2. Pedir el nombre con prompt, sin valor por defecto, y guardarlo con let
      en nombre.
   3. Si nombre es null (el usuario ha pulsado Cancelar), sustituirlo por un
      texto vacío ''.
   4. Quitar los espacios del principio y del final con nombre.trim().
   5. Si el nombre ha quedado vacío, usar "invitado". Usad la condición if
      (!nombre): un texto vacío es falsy.
   6. Preguntar con confirm() si es su primera visita.
   7. Con el operador ternario, elegir la frase completa: si es la primera
      visita, Te damos la bienvenida, Lucía.; si no, ¡Qué alegría verte de
      nuevo, Lucía!
   8. Mostrar la frase en la página.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const salida = document.querySelector('#salida');

// entradas
let nombre = prompt('¿Cómo te llamas?');
const esPrimeraVisita = confirm('¿Es tu primera visita?');

// procesamiento
// 1. Cancelar → prompt devuelve null. Lo convierto en texto vacío para tratarlo igual
if (nombre === null) {
    nombre = '';
}

// 2. "   Lucía  " → "Lucía"   y   "     " → ""
nombre = nombre.trim();

// 3. el texto vacío es falsy: !'' es true
if (!nombre) {
    nombre = 'invitado';
}

// 4. ternario: condición ? valor si true : valor si false
const saludo = esPrimeraVisita
    ? `Te damos la bienvenida, ${nombre}.`
    : `¡Qué alegría verte de nuevo, ${nombre}!`;

// salidas
salida.textContent = saludo;
