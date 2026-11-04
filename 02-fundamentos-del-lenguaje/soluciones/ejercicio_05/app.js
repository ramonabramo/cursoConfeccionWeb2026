/* ==============================================================================
   EJERCICIO 05 · Ticket de compra con plantillas de texto (SOLUCIÓN)

   OBJETIVO:
   Construir un texto de varias líneas con una plantilla de texto, calcular
   un subtotal, el IVA y el total, y mostrar los importes siempre con dos
   decimales usando toFixed().

   PASOS A REALIZAR:
   1. Declarar la constante IVA con el valor 0.21.
   2. Crear la constante al DOM salidaTicket apuntando a #ticket.
   3. Pedir con prompt el nombre del producto (por defecto "Auriculares"),
      el precio (12.99) y la cantidad (3). Convertid a número el precio y la
      cantidad.
   4. Calcular subtotal (precio × cantidad), importeIva (subtotal × IVA) y
      total (subtotal + importeIva).
   5. Mostrad en la consola el total SIN toFixed y fijaos en cuántos
      decimales tiene.
   6. Construir el ticket con UNA SOLA plantilla de texto de varias líneas
      (las comillas invertidas admiten saltos de línea reales).
   7. Mostrar todos los importes con toFixed(2) seguidos del símbolo €.
   ============================================================================== */

// estructura del programa principal
const IVA = 0.21;

// constantes al DOM
const salidaTicket = document.querySelector('#ticket');

// entradas
const producto = prompt('Producto:', 'Auriculares');
const precio = Number(prompt('Precio por unidad (€):', '12.99'));
const cantidad = Number(prompt('Cantidad:', '3'));

// procesamiento
const subtotal = precio * cantidad;
const importeIva = subtotal * IVA;
const total = subtotal + importeIva;

// sin redondear: aparecen decimales "raros"
console.log(total);

// una sola plantilla de texto con saltos de línea reales
const ticket = `========= TIENDA JS =========
Producto:   ${producto}
Precio:     ${precio.toFixed(2)} €
Cantidad:   ${cantidad}
-----------------------------
Subtotal:   ${subtotal.toFixed(2)} €
IVA (21%):  ${importeIva.toFixed(2)} €
-----------------------------
TOTAL:      ${total.toFixed(2)} €
=============================
     ¡Gracias por su compra!`;

// salidas
salidaTicket.textContent = ticket;
