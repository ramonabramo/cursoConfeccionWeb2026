/* ==============================================================================
   EJERCICIO 06 · Una API pública: usuarios y publicaciones

   OBJETIVO:
   Consumir una API REST pública desde otro origen: pedir un listado, pintar
   los datos que interesan de cada objeto y, al pulsar en un elemento, hacer
   una segunda petición con un parámetro en la URL.

   PASOS A REALIZAR:
   1. Declarar la constante API = 'https://jsonplaceholder.typicode.com' y
      reutilizar pedirJSON.
   2. Declarar crearUsuario(usuario): una tarjeta con el nombre (name), el
      email, la ciudad (address.city) y la empresa (company.name), y un
      botón Ver publicaciones con data-id.
   3. Al abrir la página: pedir `${API}/users`, pintar las 10 tarjetas y
      escribir 10 usuarios. Si falla, mostrar el error.
   4. Delegación en #usuarios: al pulsar un botón con data-id, marcar su
      tarjeta con la clase seleccionado (y desmarcar las demás), y llamar a
      cargarPublicaciones(id, nombre).
   5. Declarar la función async cargarPublicaciones(id, nombre): título
      Publicaciones de Leanne Graham, mensaje de carga, pedir
      `${API}/posts?userId=${id}`, pintar un li con el title de cada una y
      escribir 10 publicaciones. Si falla, mostrar el error.
   ============================================================================== */

// estructura del programa principal
const API = 'https://jsonplaceholder.typicode.com';

// funciones
async function pedirJSON(url) {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
        throw new Error(`Error ${respuesta.status} al pedir ${url}`);
    }
    return respuesta.json();
}

// TAREA: crearUsuario(usuario)


// TAREA: async function cargarUsuarios()


// TAREA: async function cargarPublicaciones(id, nombre)


// constantes al DOM que queremos escuchar
const estadoUsuarios = document.querySelector('#estadoUsuarios');
const contenedorUsuarios = document.querySelector('#usuarios');
const tituloPublicaciones = document.querySelector('#tituloPublicaciones');
const estadoPublicaciones = document.querySelector('#estadoPublicaciones');
const listaPublicaciones = document.querySelector('#publicaciones');

// colocar escuchadores de eventos
// TAREA: delegación en las tarjetas de usuario


// TAREA: cargar los usuarios al abrir

