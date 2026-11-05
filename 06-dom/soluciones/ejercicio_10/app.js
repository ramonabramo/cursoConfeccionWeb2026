/* ==============================================================================
   EJERCICIO 10 · Un círculo SVG a medida (SOLUCIÓN)

   OBJETIVO:
   Modificar un dibujo SVG desde JavaScript con setAttribute, entendiendo
   que sus atributos se expresan sin unidades, y combinarlo con cálculos.

   PASOS A REALIZAR:
   1. Pedir con prompt() un radio de 10 a 100 (por defecto 70), un color de
      relleno (por defecto teal) y un grosor de borde (por defecto 6).
   2. Si el radio no está entre 10 y 100, usar 50 y avisarlo en la salida.
   3. Cambiar los atributos r, fill y stroke-width del círculo con
      setAttribute.
   4. Calcular el área (π · r²) y escribir: Radio 70 · área 15393.80
      unidades² · relleno teal.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const circulo = document.querySelector('#circulo');
const salida = document.querySelector('#salida');

// entradas
const radioPedido = Number(prompt('Radio (10 a 100)', '70'));
const relleno = prompt('Color de relleno', 'teal');
const grosor = Number(prompt('Grosor del borde', '6'));

// procesamiento
const radioValido = radioPedido >= 10 && radioPedido <= 100;
const radio = radioValido ? radioPedido : 50;
const area = Math.PI * radio ** 2;

// salidas: en SVG, los números van sin unidades
circulo.setAttribute('r', radio);
circulo.setAttribute('fill', relleno);
circulo.setAttribute('stroke-width', grosor);

salida.textContent = `${radioValido ? '' : '⚠️ Radio fuera de rango: uso 50. '}Radio ${radio} · área ${area.toFixed(2)} unidades² · relleno ${relleno}`;
