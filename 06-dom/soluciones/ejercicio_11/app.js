/* ==============================================================================
   EJERCICIO 11 · Escaparate con presupuesto (SOLUCIÓN)

   OBJETIVO:
   Leer datos guardados en atributos data-* de varios elementos, convertir
   la NodeList en array para filtrarla y ocultar o mostrar elementos con la
   propiedad hidden.

   PASOS A REALIZAR:
   1. Pedir un presupuesto con prompt() (por defecto 50) y convertirlo con
      Number().
   2. Seleccionar todas las tarjetas. Con forEach, ocultar (hidden = true)
      las que tengan dataset.precio mayor que el presupuesto y mostrar las
      demás.
   3. Con Array.from y filter, obtener las tarjetas que caben en el
      presupuesto.
   4. Con map, sacar sus nombres (el h3) y escribir: Con 50 € podéis comprar
      3 productos: Ratón inalámbrico, Auriculares, Alfombrilla.
   5. Si no cabe ninguno, escribir un mensaje distinto.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const tarjetas = document.querySelectorAll('.tarjeta-producto');
const resumen = document.querySelector('#resumen');

// entradas
const presupuesto = Number(prompt('¿Cuánto queréis gastar como máximo (€)?', '50'));

// procesamiento y salidas
// 1. aplicar a todas: forEach existe en NodeList
tarjetas.forEach((tarjeta) => {
    tarjeta.hidden = Number(tarjeta.dataset.precio) > presupuesto;   // los data-* llegan como texto
});

// 2. filtrar: para filter y map, primero hay que convertir en array
const asequibles = Array.from(tarjetas).filter((t) => Number(t.dataset.precio) <= presupuesto);
const nombres = asequibles.map((t) => t.querySelector('h3').textContent);

resumen.textContent = nombres.length === 0
    ? `Con ${presupuesto} € no llega para ningún producto.`
    : `Con ${presupuesto} € podéis comprar ${nombres.length} productos: ${nombres.join(', ')}.`;
