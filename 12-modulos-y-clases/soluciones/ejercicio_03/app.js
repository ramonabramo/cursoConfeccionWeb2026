/* ==============================================================================
   EJERCICIO 03 · Mi primera clase: el carrito (SOLUCIÓN)

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
    // se ejecuta con cada new: prepara los datos del objeto nuevo
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.unidades = 1;
    }

    sumar() {
        this.unidades++;
    }

    quitar() {
        if (this.unidades > 0) {
            this.unidades--;
        }
    }

    total() {
        return this.precio * this.unidades;
    }
}

// un molde, tres objetos
const carrito = CATALOGO.map((p) => new Producto(p.nombre, p.precio));

// funciones
function crearLinea(producto, indice) {
    const li = document.createElement('li');
    li.classList.add('linea-carrito');

    const texto = document.createElement('span');
    texto.textContent = `${producto.nombre} · ${producto.unidades} ud. · ${producto.total().toFixed(2)} €`;

    const menos = document.createElement('button');
    menos.classList.add('btn', 'btn--secundario');
    menos.textContent = '−';
    menos.dataset.accion = 'quitar';
    menos.dataset.indice = indice;
    menos.setAttribute('aria-label', `Quitar una unidad de ${producto.nombre}`);

    const mas = document.createElement('button');
    mas.classList.add('btn');
    mas.textContent = '+';
    mas.dataset.accion = 'sumar';
    mas.dataset.indice = indice;
    mas.setAttribute('aria-label', `Añadir una unidad de ${producto.nombre}`);

    li.append(texto, menos, mas);
    return li;
}

function renderizar() {
    listaCarrito.replaceChildren();
    carrito.forEach((producto, indice) => listaCarrito.append(crearLinea(producto, indice)));

    const totalGeneral = carrito.reduce((suma, p) => suma + p.total(), 0);
    salidaTotal.textContent = `Total: ${totalGeneral.toFixed(2)} €`;
}

// constantes al DOM que queremos escuchar
const listaCarrito = document.querySelector('#carrito');
const salidaTotal = document.querySelector('#total');
const info = document.querySelector('#info');

// colocar escuchadores de eventos
listaCarrito.addEventListener('click', (e) => {
    const boton = e.target.closest('[data-accion]');
    if (!boton) {
        return;
    }
    // entradas
    const producto = carrito[Number(boton.dataset.indice)];
    // procesamiento: el objeto sabe cambiarse a sí mismo
    if (boton.dataset.accion === 'sumar') {
        producto.sumar();
    } else {
        producto.quitar();
    }
    // salidas
    renderizar();
});

renderizar();
info.textContent = `typeof Producto → ${typeof Producto} · carrito[0] instanceof Producto → ${carrito[0] instanceof Producto} · ¿comparten total()? → ${carrito[0].total === carrito[1].total}`;
