/* ==============================================================================
   EJERCICIO 08 · Catálogo interactivo

   OBJETIVO:
   Combinar todo el bloque en una aplicación: un estado con varios filtros,
   botones de categoría con delegación, búsqueda con input, orden con change
   y botones de añadir al carrito dentro de tarjetas generadas, todo
   repintado desde el estado.

   PASOS A REALIZAR:
   1. Usar los datos productos y el estado (categoria, busqueda, orden y
      carrito) que ya están creados.
   2. Declarar productosVisibles(): filtra por categoría (salvo 'todas') y
      por texto (el nombre, en minúsculas, incluye la búsqueda en
      minúsculas) y devuelve una copia ordenada según estado.orden. Para
      ordenar por nombre, usad a.nombre.localeCompare(b.nombre).
   3. Declarar crearTarjeta(producto): como en el bloque 06, pero con un
      botón Añadir con la clase btn y dataset.id. Si no hay stock, el botón
      va desactivado y dice Agotado.
   4. Declarar renderizar(): pinta las tarjetas visibles (o un aviso si no
      hay), el resumen Mostrando 3 de 7 y el carrito 🛒 2 productos · 84.40
      €.
   5. Filtros: UN escuchador en #filtros. Si el clic es en un botón, cambiar
      estado.categoria por su data-categoria, mover la clase activo a ese
      botón y renderizar.
   6. Búsqueda: escuchar input en #buscar, guardar el texto en el estado y
      renderizar.
   7. Orden: escuchar change en #orden, guardar el valor y renderizar.
   8. Carrito: UN escuchador en #catalogo. Si el clic es en un botón con
      data-id, añadir ese producto al carrito y renderizar.
   9. Llamar a renderizar() al cargar.
   ============================================================================== */

// estructura del programa principal
const productos = [
    { id: 1, nombre: 'Teclado mecánico', categoria: 'periféricos', precio: 59.9, stock: 12 },
    { id: 2, nombre: 'Ratón inalámbrico', categoria: 'periféricos', precio: 24.5, stock: 0 },
    { id: 3, nombre: 'Monitor 27"', categoria: 'monitores', precio: 219, stock: 4 },
    { id: 4, nombre: 'Monitor 24"', categoria: 'monitores', precio: 139, stock: 2 },
    { id: 5, nombre: 'Auriculares', categoria: 'audio', precio: 45, stock: 20 },
    { id: 6, nombre: 'Altavoces', categoria: 'audio', precio: 32.99, stock: 7 },
    { id: 7, nombre: 'Alfombrilla XL', categoria: 'periféricos', precio: 15.95, stock: 30 },
];

// el estado de la aplicación
const estado = {
    categoria: 'todas',
    busqueda: '',
    orden: 'nombre',
    carrito: [],
};

// funciones
// TAREA: productosVisibles()


// TAREA: crearTarjeta(producto)


// TAREA: renderizar()


// constantes al DOM que queremos escuchar
const carrito = document.querySelector('#carrito');
const filtros = document.querySelector('#filtros');
const buscar = document.querySelector('#buscar');
const orden = document.querySelector('#orden');
const resumen = document.querySelector('#resumen');
const catalogo = document.querySelector('#catalogo');

// colocar escuchadores de eventos
// TAREA: filtros (delegación)


// TAREA: búsqueda (input)


// TAREA: orden (change)


// TAREA: añadir al carrito (delegación)


// TAREA: pintar al cargar

