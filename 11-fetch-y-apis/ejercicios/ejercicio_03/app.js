/* ==============================================================================
   EJERCICIO 03 · El catálogo llega de un fichero

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

// funciones
// TAREA: async function pedirJSON(url)


// TAREA: crearTarjeta(producto)


// TAREA: async function cargarCatalogo()


// constantes al DOM que queremos escuchar
const estado = document.querySelector('#estado');
const btnReintentar = document.querySelector('#btnReintentar');
const catalogo = document.querySelector('#catalogo');

// colocar escuchadores de eventos
// TAREA: reintentar


// TAREA: cargar al abrir la página

