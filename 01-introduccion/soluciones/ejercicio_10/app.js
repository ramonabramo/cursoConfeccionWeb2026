/* ==============================================================================
   EJERCICIO 10 · Una caja a medida (SOLUCIÓN)

   OBJETIVO:
   Cambiar el tamaño y el color de un elemento desde JavaScript con la
   propiedad style, comprendiendo que los valores de CSS son textos con su
   unidad.

   PASOS A REALIZAR:
   1. Declarar las constantes de #caja y #salida.
   2. Pedir con prompt() el ancho y el alto en píxeles (por defecto 200 y
      120) y un color (por defecto tomato).
   3. Asignar caja.style.width y caja.style.height con una plantilla de
      texto que añada px.
   4. Asignar caja.style.backgroundColor con el color.
   5. Escribir en la caja sus medidas (200 × 120) y en #salida: Caja de 200
      × 120 px, color tomato.
   6. Probad a quitar el px de la plantilla: ¿cambia el tamaño?
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const caja = document.querySelector('#caja');
const salida = document.querySelector('#salida');

// entradas
const ancho = prompt('Ancho de la caja en píxeles', '200');
const alto = prompt('Alto de la caja en píxeles', '120');
const color = prompt('Color de fondo', 'tomato');

// salidas: style cambia los estilos en línea del elemento
caja.style.width = `${ancho}px`;          // el valor es un TEXTO con su unidad
caja.style.height = `${alto}px`;
caja.style.backgroundColor = color;       // background-color en CSS → backgroundColor en JS

caja.textContent = `${ancho} × ${alto}`;
salida.textContent = `Caja de ${ancho} × ${alto} px, color ${color}.`;
