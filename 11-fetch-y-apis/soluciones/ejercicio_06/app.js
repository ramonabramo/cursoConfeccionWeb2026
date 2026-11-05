/* ==============================================================================
   EJERCICIO 06 · Una API pública: usuarios y publicaciones (SOLUCIÓN)

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

function parrafo(texto) {
    const p = document.createElement('p');
    p.textContent = texto;
    return p;
}

// de cada usuario, solo pinto lo que me interesa
function crearUsuario(usuario) {
    const tarjeta = document.createElement('article');
    tarjeta.classList.add('tarjeta-producto');

    const nombre = document.createElement('h3');
    nombre.textContent = usuario.name;

    const boton = document.createElement('button');
    boton.classList.add('btn');
    boton.textContent = 'Ver publicaciones';
    boton.dataset.id = usuario.id;
    boton.dataset.nombre = usuario.name;

    tarjeta.append(
        nombre,
        parrafo(`✉️ ${usuario.email}`),
        parrafo(`📍 ${usuario.address.city}`),      // objetos dentro de objetos
        parrafo(`🏢 ${usuario.company.name}`),
        boton,
    );
    return tarjeta;
}

async function cargarUsuarios() {
    estadoUsuarios.textContent = '⏳ Cargando usuarios…';
    try {
        const usuarios = await pedirJSON(`${API}/users`);
        contenedorUsuarios.replaceChildren();
        usuarios.forEach((u) => contenedorUsuarios.append(crearUsuario(u)));
        estadoUsuarios.textContent = `${usuarios.length} usuarios`;
    } catch (error) {
        estadoUsuarios.textContent = `✘ No se han podido cargar los usuarios (${error.message}).`;
    }
}

async function cargarPublicaciones(id, nombre) {
    tituloPublicaciones.textContent = `Publicaciones de ${nombre}`;
    estadoPublicaciones.textContent = '⏳ Cargando publicaciones…';
    listaPublicaciones.replaceChildren();
    try {
        // un parámetro en la URL: la API filtra por nosotros
        const publicaciones = await pedirJSON(`${API}/posts?userId=${id}`);
        publicaciones.forEach((p) => {
            const li = document.createElement('li');
            li.textContent = p.title;
            listaPublicaciones.append(li);
        });
        estadoPublicaciones.textContent = `${publicaciones.length} publicaciones`;
    } catch (error) {
        estadoPublicaciones.textContent = `✘ No se han podido cargar (${error.message}).`;
    }
}

// constantes al DOM que queremos escuchar
const estadoUsuarios = document.querySelector('#estadoUsuarios');
const contenedorUsuarios = document.querySelector('#usuarios');
const tituloPublicaciones = document.querySelector('#tituloPublicaciones');
const estadoPublicaciones = document.querySelector('#estadoPublicaciones');
const listaPublicaciones = document.querySelector('#publicaciones');

// colocar escuchadores de eventos
contenedorUsuarios.addEventListener('click', (e) => {
    const boton = e.target.closest('button[data-id]');
    if (!boton) {
        return;
    }
    contenedorUsuarios.querySelectorAll('.tarjeta-producto').forEach((t) => {
        t.classList.toggle('seleccionado', t.contains(boton));
    });
    cargarPublicaciones(Number(boton.dataset.id), boton.dataset.nombre);
});

cargarUsuarios();
