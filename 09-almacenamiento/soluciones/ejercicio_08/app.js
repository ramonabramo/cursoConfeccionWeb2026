/* ==============================================================================
   EJERCICIO 08 · Un carrito que sobrevive (SOLUCIÓN)

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
const buscarProducto = (id) => productos.find((p) => p.id === id);

// carga SEGURA: el almacén puede estar vacío, corrupto o manipulado
function cargarCarrito() {
    const texto = localStorage.getItem(CLAVE);
    if (texto === null) {
        return [];
    }

    let datos;
    try {
        datos = JSON.parse(texto);    // si el texto no es JSON válido, lanza un error…
    } catch (error) {
        console.warn('Carrito guardado ilegible; empiezo de cero.', error.message);
        return [];                    // …y lo capturo aquí en vez de romper la página
    }

    if (!Array.isArray(datos)) {
        return [];
    }
    // me quedo solo con líneas que tengan sentido
    return datos.filter((linea) =>
        buscarProducto(linea.id) !== undefined
        && Number.isInteger(linea.cantidad)
        && linea.cantidad > 0);
}

function guardar() {
    // solo ids y cantidades: los precios NUNCA salen del código
    localStorage.setItem(CLAVE, JSON.stringify(carrito));
}

// el estado
let carrito = cargarCarrito();

function crearBoton(texto, id, accion, etiqueta) {
    const boton = document.createElement('button');
    boton.classList.add('btn');
    boton.textContent = texto;
    boton.dataset.id = id;
    boton.dataset.accion = accion;
    boton.setAttribute('aria-label', etiqueta);
    return boton;
}

function renderizar() {
    // catálogo
    catalogo.replaceChildren();
    productos.forEach((p) => {
        const tarjeta = document.createElement('article');
        tarjeta.classList.add('tarjeta-producto');
        const titulo = document.createElement('h3');
        titulo.textContent = p.nombre;
        const precio = document.createElement('p');
        precio.classList.add('precio');
        precio.textContent = `${p.precio.toFixed(2)} €`;
        tarjeta.append(titulo, precio, crearBoton('Añadir', p.id, 'anadir', `Añadir ${p.nombre}`));
        catalogo.append(tarjeta);
    });

    // carrito: nombre y precio salen de productos, no del almacén
    listaCarrito.replaceChildren();
    let suma = 0;
    carrito.forEach(({ id, cantidad }) => {
        const producto = buscarProducto(id);
        const subtotal = producto.precio * cantidad;
        suma += subtotal;

        const li = document.createElement('li');
        li.classList.add('linea-carrito');
        const texto = document.createElement('span');
        texto.textContent = `${producto.nombre} × ${cantidad} = ${subtotal.toFixed(2)} €`;
        const controles = document.createElement('span');
        controles.append(
            crearBoton('−', id, 'restar', `Quitar un ${producto.nombre}`),
            crearBoton('+', id, 'sumar', `Añadir otro ${producto.nombre}`),
        );
        li.append(texto, controles);
        listaCarrito.append(li);
    });

    if (carrito.length === 0) {
        const vacio = document.createElement('li');
        vacio.textContent = 'El carrito está vacío.';
        listaCarrito.append(vacio);
    }
    total.textContent = `Total: ${suma.toFixed(2)} €`;
}

function cambiarCantidad(id, cambio) {
    const linea = carrito.find((l) => l.id === id);
    if (linea) {
        linea.cantidad += cambio;
    } else if (cambio > 0) {
        carrito.push({ id, cantidad: cambio });
    }
    carrito = carrito.filter((l) => l.cantidad > 0);
    guardar();
    renderizar();
}

// constantes al DOM que queremos escuchar
const catalogo = document.querySelector('#catalogo');
const listaCarrito = document.querySelector('#carrito');
const total = document.querySelector('#total');
const btnVaciar = document.querySelector('#btnVaciar');

// colocar escuchadores de eventos
// un solo escuchador por zona: los botones se recrean en cada renderizado
function manejarClic(e) {
    const boton = e.target.closest('button[data-accion]');
    if (!boton) {
        return;
    }
    const id = Number(boton.dataset.id);
    const cambio = boton.dataset.accion === 'restar' ? -1 : 1;
    cambiarCantidad(id, cambio);
}
catalogo.addEventListener('click', manejarClic);
listaCarrito.addEventListener('click', manejarClic);

btnVaciar.addEventListener('click', () => {
    carrito = [];
    guardar();
    renderizar();
});

// si OTRA pestaña cambia el carrito, esta se entera y se actualiza
window.addEventListener('storage', (e) => {
    if (e.key === CLAVE) {
        carrito = cargarCarrito();
        renderizar();
    }
});

renderizar();
