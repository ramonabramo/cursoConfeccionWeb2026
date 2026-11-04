/* ==============================================================================
   EJERCICIO 03 · Una semana de temperaturas (SOLUCIÓN)

   OBJETIVO:
   Recorrer un array con las tres formas habituales (for clásico, for...of y
   forEach) y entender cuándo conviene cada una según necesitemos el índice
   o solo el valor.

   PASOS A REALIZAR:
   1. Crear los arrays dias (lunes a domingo) y temperaturas (18, 21, 25,
      23, 19, 16, 20).
   2. Con un for clásico (let i = 0; i < temperaturas.length; i++),
      construir el parte: Lunes: 18 °C, una línea por día. Usad i para leer
      el día y la temperatura.
   3. Con un for...of, sumar todas las temperaturas y calcular la media con
      un decimal.
   4. Con forEach((temperatura, indice) => { … }), encontrar el día más
      caluroso y contar cuántos días han superado los 22 °C.
   5. Mostrar los tres resultados.
   ============================================================================== */

// estructura del programa principal
const dias = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
const temperaturas = [18, 21, 25, 23, 19, 16, 20];

// constantes al DOM
const salidaParte = document.querySelector('#parte');
const salidaMedia = document.querySelector('#media');
const salidaCalor = document.querySelector('#calor');

// procesamiento
// 1. for clásico: tengo el índice i, así que puedo leer los DOS arrays
let parte = '';
for (let i = 0; i < temperaturas.length; i++) {
    parte += `${dias[i]}: ${temperaturas[i]} °C\n`;
}

// 2. for...of: me da directamente cada valor, sin índice
let suma = 0;
for (const temperatura of temperaturas) {
    suma += temperatura;
}
const media = suma / temperaturas.length;

// 3. forEach: recibe un callback con (valor, índice)
let maxima = -Infinity;
let diaMaximo = '';
let diasDeCalor = 0;

temperaturas.forEach((temperatura, indice) => {
    if (temperatura > maxima) {
        maxima = temperatura;
        diaMaximo = dias[indice];
    }
    if (temperatura > 22) {
        diasDeCalor++;
    }
});

// salidas
salidaParte.textContent = parte;
salidaMedia.textContent = `Temperatura media: ${media.toFixed(1)} °C`;
salidaCalor.textContent = `Máxima: ${maxima} °C el ${diaMaximo} · Días de más de 22 °C: ${diasDeCalor}`;
