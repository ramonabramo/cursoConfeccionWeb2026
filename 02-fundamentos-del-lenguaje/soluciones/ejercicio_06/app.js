/* ==============================================================================
   EJERCICIO 06 · Laboratorio de conversiones (SOLUCIÓN)

   OBJETIVO:
   Comparar Number(), parseInt() y parseFloat() con el mismo texto de
   entrada, y usar String() para convertir en sentido contrario: de número a
   texto.

   PASOS A REALIZAR:
   1. Crear las constantes al DOM del párrafo entrada y de las ocho celdas
      de la tabla.
   2. Pedir un texto con prompt (por defecto "42.5px"). Esta vez NO lo
      convirtáis al leerlo.
   3. Calcular conNumber, conParseInt (con base 10) y conParseFloat a partir
      del texto.
   4. Calcular conString como String(42) + 1.
   5. Escribir en el párrafo entrada: Texto analizado: "42.5px".
   6. Escribir cada resultado en su celda y, al lado, su typeof.
   7. Probad los textos de la ayuda y anotad en un comentario qué función
      usaríais para leer "42.5px" y por qué.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const entrada = document.querySelector('#entrada');
const resNumber = document.querySelector('#resNumber');
const tipoNumber = document.querySelector('#tipoNumber');
const resParseInt = document.querySelector('#resParseInt');
const tipoParseInt = document.querySelector('#tipoParseInt');
const resParseFloat = document.querySelector('#resParseFloat');
const tipoParseFloat = document.querySelector('#tipoParseFloat');
const resString = document.querySelector('#resString');
const tipoString = document.querySelector('#tipoString');

// entradas
// esta vez NO convierto al leer: quiero comparar las tres funciones
const texto = prompt('Escribe un texto para convertir:', '42.5px');

// procesamiento
const conNumber = Number(texto);          // todo o nada: "42.5px" → NaN
const conParseInt = parseInt(texto, 10);  // lee dígitos hasta que no puede: 42
const conParseFloat = parseFloat(texto);  // igual, pero acepta el punto decimal: 42.5
const conString = String(42) + 1;         // "42" + 1 → "421"

// salidas
entrada.textContent = `Texto analizado: "${texto}"`;

resNumber.textContent = conNumber;
tipoNumber.textContent = typeof conNumber;

resParseInt.textContent = conParseInt;
tipoParseInt.textContent = typeof conParseInt;

resParseFloat.textContent = conParseFloat;
tipoParseFloat.textContent = typeof conParseFloat;

resString.textContent = conString;
tipoString.textContent = typeof conString;

// ¿Qué función para "42.5px"?
// parseFloat: lee "42.5" y se detiene al llegar a "px".
// Number devolvería NaN porque el texto no es un número completo,
// y parseInt perdería los decimales (42).
