/* ==============================================================================
   EJERCICIO 08 · Un carrito que sobrevive

   OBJETIVO:
   Guardar un carrito de forma robusta: almacenar solo identificadores y
   cantidades (nunca precios), cargar con try...catch y validar los datos
   leídos, y sincronizar varias pestañas con el evento storage.

   PASOS A REALIZAR:
   1. Usar el array productos ya creado y la clave CLAVE = 'curso-
      js:b09e08:carrito'. El carrito será un array de líneas { id, cantidad
      }.
   2. Declarar cargarCarrito(): lee la clave; si es null, devuelve []. Si
      no, dentro de un try…catch hace JSON.parse; si falla o el resultado no
      es un array (Array.isArray), devuelve []. Además, filtra las líneas
      cuyo id no exista en productos o cuya cantidad no sea un número
      positivo.
   3. Declarar guardar() con JSON.stringify.
   4. Declarar renderizar(): pinta el catálogo (una tarjeta con botón Añadir
      por producto, con data-id) y el carrito (una línea por producto con su
      cantidad, botones − y + con data-id y data-accion, y subtotal). El
      precio y el nombre SIEMPRE se toman de productos, nunca del almacén.
      Muestra el total.
   5. Delegación en el catálogo: Añadir suma 1 a la línea de ese producto o
      la crea. Guardar y renderizar.
   6. Delegación en el carrito: + suma 1; − resta 1 y, si llega a 0, quita
      la línea. Guardar y renderizar.
   7. Vaciar: carrito = [], guardar y renderizar.
   8. Escuchar el evento storage de window: si e.key es CLAVE, volver a
      cargar el carrito y renderizar. Así, lo que se haga en otra pestaña
      aparece aquí.
   ============================================================================== */

// estructura del programa principal
const CLAVE = 'curso-js:b09e08:carrito';
const productos = [
    { id: 1, nombre: 'Teclado mecánico', precio: 59.9 },
    { id: 2, nombre: 'Ratón inalámbrico', precio: 24.5 },
    { id: 3, nombre: 'Auriculares', precio: 45 },
    { id: 4, nombre: 'Alfombrilla XL', precio: 15.95 },
];

// funciones
// TAREA: cargarCarrito() con try...catch y validación


// TAREA: guardar()


// TAREA: el estado: let carrito = cargarCarrito();


// TAREA: renderizar() (catálogo + carrito + total)


// constantes al DOM que queremos escuchar
const catalogo = document.querySelector('#catalogo');
const listaCarrito = document.querySelector('#carrito');
const total = document.querySelector('#total');
const btnVaciar = document.querySelector('#btnVaciar');

// colocar escuchadores de eventos
// TAREA: añadir (delegación en el catálogo)


// TAREA: + y − (delegación en el carrito)


// TAREA: vaciar


// TAREA: storage → sincronizar pestañas


// TAREA: renderizar al cargar

