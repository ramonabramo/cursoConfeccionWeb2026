/* ==============================================================================
   EJERCICIO 09 · Laboratorio de texto

   OBJETIVO:
   Conocer los métodos más útiles de los textos (length, trim, toUpperCase,
   toLowerCase, includes, at, slice y replaceAll) aplicándolos a una frase
   que escribe el usuario.

   PASOS A REALIZAR:
   1. Pedir una frase con prompt(), con el valor por defecto '   Aprendo
      JavaScript en el cliente   ' (con espacios a los lados).
   2. Mostrar su length. Guardar en limpio la frase sin espacios a los lados
      (trim) y mostrar los dos.
   3. Mostrar limpio en mayúsculas y en minúsculas.
   4. Comprobar si contiene «javascript» sin distinguir mayúsculas: pasad
      limpio a minúsculas antes de usar includes.
   5. Mostrar el primer y el último carácter con at(0) y at(-1), los diez
      primeros con slice(0, 10) y la frase con los espacios cambiados por _
      (replaceAll).
   ============================================================================== */

// estructura del programa principal

// funciones
function escribir(id, valor) {
    document.querySelector(`#${id}`).textContent = valor;
}

// entradas
// TAREA: la frase con prompt()


// procesamiento y salidas
// TAREA: una línea por cada fila de la tabla, con escribir('resLength', …), etc.

