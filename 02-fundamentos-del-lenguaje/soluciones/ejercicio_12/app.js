/* ==============================================================================
   EJERCICIO 12 · Geometría del círculo y la esfera (SOLUCIÓN)

   OBJETIVO:
   Traducir fórmulas matemáticas a JavaScript usando Math.PI y el operador
   de potencia **, y mostrar los resultados redondeados con toFixed.

   PASOS A REALIZAR:
   1. Pedir el radio con prompt() (por defecto 5) y convertirlo con
      Number().
   2. Calcular las cuatro medidas usando Math.PI y el operador ** para el
      cuadrado y el cubo.
   3. Mostrar cada resultado con dos decimales (toFixed(2)) y la unidad: cm,
      cm² o cm³.
   ============================================================================== */

// estructura del programa principal

// funciones
function escribir(id, valor) {
    document.querySelector(`#${id}`).textContent = valor;
}

// entradas
const radio = Number(prompt('Radio en centímetros', '5'));

// procesamiento: ** eleva a una potencia
const longitud = 2 * Math.PI * radio;
const area = Math.PI * radio ** 2;
const superficie = 4 * Math.PI * radio ** 2;
const volumen = (4 / 3) * Math.PI * radio ** 3;

// salidas: toFixed solo para mostrar
escribir('resLongitud', `${longitud.toFixed(2)} cm`);
escribir('resArea', `${area.toFixed(2)} cm²`);
escribir('resSuperficie', `${superficie.toFixed(2)} cm²`);
escribir('resVolumen', `${volumen.toFixed(2)} cm³`);
