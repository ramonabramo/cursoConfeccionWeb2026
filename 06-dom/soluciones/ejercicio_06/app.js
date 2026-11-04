/* ==============================================================================
   EJERCICIO 06 · Tarjetas de producto desde datos (SOLUCIÓN)

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
// recibe UN producto y DEVUELVE su tarjeta (no la cuelga: eso lo decide quien la llama)
function crearTarjeta(producto) {
    const tarjeta = document.createElement('article');
    tarjeta.classList.add('tarjeta-producto');
    tarjeta.dataset.id = producto.id;

    const titulo = document.createElement('h3');
    titulo.textContent = producto.nombre;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.textContent = `${producto.precio.toFixed(2)} €`;

    const chip = document.createElement('span');
    chip.classList.add('chip');
    if (producto.stock === 0) {
        chip.textContent = 'Agotado';
        chip.classList.add('agotado');
    } else {
        chip.textContent = `${producto.stock} en stock`;
    }

    // append admite varios elementos a la vez
    tarjeta.append(titulo, precio, chip);
    return tarjeta;
}

// recibe una LISTA y la pinta entera, empezando de cero
function renderizar(lista) {
    catalogo.replaceChildren();   // vacía el contenedor
    if (lista.length === 0) {
        const aviso = document.createElement('p');
        aviso.textContent = 'No hay productos en ese rango de precio.';
        catalogo.append(aviso);
        return;
    }
    lista.forEach((producto) => {
        catalogo.append(crearTarjeta(producto));
    });
}

// constantes al DOM
const catalogo = document.querySelector('#catalogo');
const resumen = document.querySelector('#resumen');

// entradas
const respuesta = prompt('Precio máximo (€):', '100');
const leido = Number(respuesta);
const maximo = respuesta === null || respuesta.trim() === '' || Number.isNaN(leido) ? Infinity : leido;

// procesamiento y salidas
const visibles = productos.filter((p) => p.precio <= maximo);
renderizar(visibles);

const rango = maximo === Infinity ? 'sin límite de precio' : `hasta ${maximo} €`;
resumen.textContent = `Mostrando ${visibles.length} de ${productos.length} productos (${rango})`;
