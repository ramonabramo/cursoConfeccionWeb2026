/* ==============================================================================
   EJERCICIO 03 · Mi primera clase: el carrito

   OBJETIVO:
   Declarar una clase con constructor y métodos, crear varias instancias con
   new y comprobar que cada una guarda sus propios datos mientras comparten
   los mismos métodos.

   PASOS A REALIZAR:
   1. Declarar la clase Producto. Su constructor(nombre, precio) guarda
      nombre y precio en this y pone this.unidades = 1.
   2. Añadir los métodos sumar() (una unidad más), quitar() (una menos, sin
      bajar de 0) y total() (precio por unidades).
   3. Crear el carrito con CATALOGO.map(), haciendo new Producto(p.nombre,
      p.precio) para cada elemento.
   4. Declarar renderizar(): un li por producto con el nombre, las unidades,
      el total con 2 decimales y dos botones − y + con data-accion y data-
      indice. Escribir el total general (suma de total() de todos) en
      #total.
   5. Escuchar click en #carrito (delegación): según data-accion, llamar a
      sumar() o a quitar() del producto de ese índice, y renderizar.
   6. En #info, escribir typeof Producto, carrito[0] instanceof Producto y
      si carrito[0].total === carrito[1].total.
   ============================================================================== */

// estructura del programa principal
const CATALOGO = [
    { nombre: 'Teclado', precio: 59.9 },
    { nombre: 'Ratón', precio: 24.5 },
    { nombre: 'Alfombrilla', precio: 9.95 },
];

// clases
class Producto {
    // TAREA: constructor(nombre, precio)

    // TAREA: sumar(), quitar() y total()
}

// TAREA: crea el carrito con CATALOGO.map() y new Producto(…)
const carrito = [];

// funciones
function renderizar() {
    // TAREA: un li por producto y el total general
}

// constantes al DOM que queremos escuchar
const listaCarrito = document.querySelector('#carrito');
const salidaTotal = document.querySelector('#total');
const info = document.querySelector('#info');

// colocar escuchadores de eventos
// TAREA: delegación en #carrito → sumar() o quitar()

renderizar();
// TAREA: info con typeof e instanceof
