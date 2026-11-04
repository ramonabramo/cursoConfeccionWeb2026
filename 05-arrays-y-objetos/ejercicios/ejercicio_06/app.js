/* ==============================================================================
   EJERCICIO 06 · Catálogo de una tienda

   OBJETIVO:
   Trabajar con un array de objetos combinando todo lo anterior: filtrar por
   una propiedad, buscar un objeto concreto, transformar a un array de
   textos, calcular un total y ordenar por una propiedad.

   PASOS A REALIZAR:
   1. Usar el array productos que ya está creado.
   2. Pedir una categoría con prompt (por defecto "periféricos") y filtrar
      los productos de esa categoría.
   3. Construir el listado con forEach: una línea por producto con • nombre
      — precio € (stock uds.). Si no hay ninguno, mostrar No hay productos
      en esa categoría.
   4. Pedir el nombre de un producto (por defecto "Monitor 27\"") y buscarlo
      con find. Mostrar su precio o Producto no encontrado.
   5. Con filter y map, obtener los nombres de los productos con stock 0 y
      unirlos con join(', ').
   6. Con reduce, calcular el valor del inventario: la suma de precio ×
      stock de cada producto.
   7. Ordenar una copia por precio, quedarse con los tres primeros (slice(0,
      3)) y mostrar sus nombres.
   ============================================================================== */

// estructura del programa principal
const productos = [
    { nombre: 'Teclado mecánico', categoria: 'periféricos', precio: 59.9, stock: 12 },
    { nombre: 'Ratón inalámbrico', categoria: 'periféricos', precio: 24.5, stock: 0 },
    { nombre: 'Monitor 27"', categoria: 'monitores', precio: 219, stock: 4 },
    { nombre: 'Monitor 24"', categoria: 'monitores', precio: 139, stock: 0 },
    { nombre: 'Auriculares', categoria: 'audio', precio: 45, stock: 20 },
    { nombre: 'Altavoces', categoria: 'audio', precio: 32.99, stock: 7 },
    { nombre: 'Alfombrilla XL', categoria: 'periféricos', precio: 15.95, stock: 30 },
];

// constantes al DOM
const tituloCategoria = document.querySelector('#tituloCategoria');
const salidaListado = document.querySelector('#listado');
const celdaBuscado = document.querySelector('#buscado');
const celdaAgotados = document.querySelector('#agotados');
const celdaInventario = document.querySelector('#inventario');
const celdaMasBaratos = document.querySelector('#masBaratos');

// entradas
// TAREA: categoría y nombre a buscar


// procesamiento y salidas
// TAREA: filter por categoría + listado con forEach


// TAREA: find por nombre


// TAREA: agotados (filter + map + join)


// TAREA: valor del inventario (reduce)


// TAREA: los tres más baratos (copia + sort + slice + map)

