/* ==============================================================================
   EJERCICIO 09 · Laboratorio de texto (SOLUCIÓN)

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
const texto = prompt('Escribe una frase', '   Aprendo JavaScript en el cliente   ');

// procesamiento y salidas
escribir('resLength', texto.length);                  // cuenta también los espacios
const limpio = texto.trim();                           // un texto NUEVO, sin espacios a los lados
escribir('resTrim', `«${limpio}»`);
escribir('resLimpioLength', limpio.length);

escribir('resMayus', limpio.toUpperCase());
escribir('resMinus', limpio.toLowerCase());

// las búsquedas distinguen mayúsculas: comparo en minúsculas
escribir('resIncludes', limpio.toLowerCase().includes('javascript'));

escribir('resExtremos', `${limpio.at(0)} … ${limpio.at(-1)}`);
escribir('resSlice', limpio.slice(0, 10));
escribir('resReplace', limpio.replaceAll(' ', '_'));
