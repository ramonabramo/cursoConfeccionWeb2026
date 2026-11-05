/* ==============================================================================
   EJERCICIO 03 · El catálogo llega de un fichero (SOLUCIÓN)

   OBJETIVO:
   Cargar un array de objetos desde un fichero JSON al abrir la página,
   comprobar la respuesta, pintarlo con el patrón crear + renderizar del
   bloque 06 y ofrecer un botón de reintento si falla.

   PASOS A REALIZAR:
   1. Declarar la función async pedirJSON(url): hace fetch, si respuesta.ok
      es false lanza new Error(`Error ${respuesta.status} al pedir ${url}`),
      y si no devuelve await respuesta.json(). La reutilizaréis en todo el
      bloque.
   2. Declarar crearTarjeta(producto) como en el bloque 06: nombre, precio y
      un chip con el stock (o Agotado).
   3. Declarar la función async cargarCatalogo(): oculta el botón
      Reintentar, muestra ⏳ Cargando catálogo…, pide productos.json, vacía
      el catálogo y pinta las tarjetas, y escribe 6 productos cargados. En
      el catch, muestra el error y enseña el botón Reintentar.
   4. Escuchar click en Reintentar → cargarCatalogo().
   5. Llamar a cargarCatalogo() al cargar la página.
   6. Para probar el error, cambiad temporalmente el nombre del fichero en
      el código (por ejemplo, productoss.json) y recargad.
   ============================================================================== */

// estructura del programa principal
const URL_PRODUCTOS = 'productos.json';

// funciones
// pide una URL y devuelve sus datos, o lanza un error si algo va mal
async function pedirJSON(url) {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
        throw new Error(`Error ${respuesta.status} al pedir ${url}`);
    }
    return respuesta.json();
}

function crearTarjeta(producto) {
    const tarjeta = document.createElement('article');
    tarjeta.classList.add('tarjeta-producto');

    const titulo = document.createElement('h3');
    titulo.textContent = producto.nombre;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.textContent = `${producto.precio.toFixed(2)} €`;

    const chip = document.createElement('span');
    chip.classList.add('chip');
    chip.classList.toggle('agotado', producto.stock === 0);
    chip.textContent = producto.stock === 0 ? 'Agotado' : `${producto.stock} en stock`;

    tarjeta.append(titulo, precio, chip);
    return tarjeta;
}

async function cargarCatalogo() {
    btnReintentar.hidden = true;
    estado.textContent = '⏳ Cargando catálogo…';
    try {
        const productos = await pedirJSON(URL_PRODUCTOS);
        catalogo.replaceChildren();
        productos.forEach((p) => catalogo.append(crearTarjeta(p)));
        estado.textContent = `${productos.length} productos cargados.`;
    } catch (error) {
        catalogo.replaceChildren();
        estado.textContent = `✘ No se ha podido cargar el catálogo (${error.message}).`;
        btnReintentar.hidden = false;
    }
}

// constantes al DOM que queremos escuchar
const estado = document.querySelector('#estado');
const btnReintentar = document.querySelector('#btnReintentar');
const catalogo = document.querySelector('#catalogo');

// colocar escuchadores de eventos
btnReintentar.addEventListener('click', cargarCatalogo);

// los datos se piden en cuanto se abre la página
cargarCatalogo();
