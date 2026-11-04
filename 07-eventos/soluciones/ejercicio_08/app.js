/* ==============================================================================
   EJERCICIO 08 · Catálogo interactivo (SOLUCIÓN)

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

// el estado de la aplicación: TODO lo que puede cambiar
const estado = {
    categoria: 'todas',
    busqueda: '',
    orden: 'nombre',
    carrito: [],
};

// funciones
// aplica categoría, búsqueda y orden sobre los productos
function productosVisibles() {
    const texto = estado.busqueda.toLowerCase();

    const filtrados = productos
        .filter((p) => estado.categoria === 'todas' || p.categoria === estado.categoria)
        .filter((p) => p.nombre.toLowerCase().includes(texto));

    const ordenados = [...filtrados];
    if (estado.orden === 'precio-asc') {
        ordenados.sort((a, b) => a.precio - b.precio);
    } else if (estado.orden === 'precio-desc') {
        ordenados.sort((a, b) => b.precio - a.precio);
    } else {
        ordenados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
    return ordenados;
}

function crearTarjeta(producto) {
    const tarjeta = document.createElement('article');
    tarjeta.classList.add('tarjeta-producto');

    const titulo = document.createElement('h3');
    titulo.textContent = producto.nombre;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.textContent = `${producto.precio.toFixed(2)} €`;

    const boton = document.createElement('button');
    boton.classList.add('btn');
    boton.dataset.id = producto.id;
    if (producto.stock === 0) {
        boton.textContent = 'Agotado';
        boton.disabled = true;
    } else {
        boton.textContent = 'Añadir';
    }

    tarjeta.append(titulo, precio, boton);
    return tarjeta;
}

function renderizar() {
    const visibles = productosVisibles();

    catalogo.replaceChildren();
    if (visibles.length === 0) {
        const aviso = document.createElement('p');
        aviso.textContent = 'Ningún producto coincide con los filtros.';
        catalogo.append(aviso);
    } else {
        visibles.forEach((p) => catalogo.append(crearTarjeta(p)));
    }

    resumen.textContent = `Mostrando ${visibles.length} de ${productos.length}`;

    const total = estado.carrito.reduce((acc, p) => acc + p.precio, 0);
    carrito.textContent = `🛒 ${estado.carrito.length} productos · ${total.toFixed(2)} €`;
}

// constantes al DOM que queremos escuchar
const carrito = document.querySelector('#carrito');
const filtros = document.querySelector('#filtros');
const buscar = document.querySelector('#buscar');
const orden = document.querySelector('#orden');
const resumen = document.querySelector('#resumen');
const catalogo = document.querySelector('#catalogo');

// colocar escuchadores de eventos
// filtros: delegación en el grupo de botones
filtros.addEventListener('click', (e) => {
    const boton = e.target.closest('button');
    if (!boton) {
        return;
    }
    estado.categoria = boton.dataset.categoria;
    filtros.querySelectorAll('button').forEach((b) => {
        b.classList.toggle('activo', b === boton);
    });
    renderizar();
});

// búsqueda: con cada letra
buscar.addEventListener('input', () => {
    estado.busqueda = buscar.value.trim();
    renderizar();
});

// orden: al elegir otra opción
orden.addEventListener('change', () => {
    estado.orden = orden.value;
    renderizar();
});

// carrito: delegación en el catálogo (las tarjetas se recrean en cada renderizado)
catalogo.addEventListener('click', (e) => {
    const boton = e.target.closest('button[data-id]');
    if (!boton) {
        return;
    }
    const producto = productos.find((p) => p.id === Number(boton.dataset.id));
    estado.carrito.push(producto);
    renderizar();
});

// pintar el estado inicial
renderizar();
