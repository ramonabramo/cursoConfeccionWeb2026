/* ==============================================================================
   EJERCICIO 06 · Tarjetas de producto desde datos

   OBJETIVO:
   Organizar la generación de HTML en dos funciones: una que crea el
   elemento de un dato (crearTarjeta) y otra que pinta una lista entera
   vaciando antes el contenedor (renderizar), y usarlas para mostrar un
   catálogo filtrado.

   PASOS A REALIZAR:
   1. Usar el array productos que ya está creado.
   2. Declarar crearTarjeta(producto), que construya y DEVUELVA (sin
      colgarlo) un article con la clase tarjeta-producto y dataset.id con el
      id del producto. Dentro: un h3 con el nombre, un p con la clase precio
      y un span con la clase chip que diga 12 en stock o Agotado (en ese
      caso, con la clase agotado).
   3. Declarar renderizar(lista), que vacíe el contenedor con
      replaceChildren() y luego añada una tarjeta por producto.
   4. Pedir con prompt el precio máximo (por defecto 100). Si no es un
      número válido, usar Infinity para mostrarlos todos.
   5. Filtrar los productos por precio y llamar a renderizar con el
      resultado.
   6. Mostrar en resumen: Mostrando 5 de 6 productos (hasta 100 €). Si no
      hay ninguno, renderizar un párrafo No hay productos en ese rango de
      precio.
   ============================================================================== */

// estructura del programa principal
const productos = [
    { id: 1, nombre: 'Teclado mecánico', precio: 59.9, stock: 12 },
    { id: 2, nombre: 'Ratón inalámbrico', precio: 24.5, stock: 0 },
    { id: 3, nombre: 'Monitor 27"', precio: 219, stock: 4 },
    { id: 4, nombre: 'Auriculares', precio: 45, stock: 20 },
    { id: 5, nombre: 'Webcam HD', precio: 79, stock: 3 },
    { id: 6, nombre: 'Alfombrilla XL', precio: 15.95, stock: 30 },
];

// funciones
// TAREA: crearTarjeta(producto) → devuelve un <article>


// TAREA: renderizar(lista) → vacía y pinta


// constantes al DOM
const catalogo = document.querySelector('#catalogo');
const resumen = document.querySelector('#resumen');

// entradas
// TAREA: precio máximo


// procesamiento y salidas
// TAREA: filtrar, renderizar y resumen

