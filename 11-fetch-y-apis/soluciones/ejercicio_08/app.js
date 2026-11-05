/* ==============================================================================
   EJERCICIO 08 · Tareas de la API con favoritos (SOLUCIÓN)

   OBJETIVO:
   Construir una aplicación completa con datos remotos: cargar en paralelo
   con Promise.all, recargar al cambiar de usuario, filtrar y buscar en
   memoria con espera, y combinar los datos de la API con preferencias del
   usuario guardadas en localStorage.

   PASOS A REALIZAR:
   1. Declarar API, CLAVE_FAVORITAS = 'curso-js:b11e08:favoritas' y el
      estado: tareas = [], filtro = 'todas', busqueda = '', favoritas
      (cargadas de localStorage como array de ids; si algo falla, []) e
      idEspera.
   2. Declarar la función async cargarTareas(idUsuario): muestra carga, pide
      `${API}/todos?userId=${idUsuario}`, guarda el resultado en el estado y
      renderiza. Si falla, muestra el error.
   3. Declarar renderizar(): aplica el filtro (pendientes: !completed;
      completadas: completed; favoritas: el id está en favoritas) y la
      búsqueda (title incluye el texto), y pinta un li por tarea con su
      título (clase completada si lo está) y un botón estrella ☆/⭐ con data-
      id. Escribe Mostrando 8 de 20 tareas · 3 favoritas.
   4. Al abrir: con Promise.all, pedir a la vez `${API}/users` y las tareas
      del usuario 1. Rellenar el select con los usuarios (option con value =
      id y texto = name), activarlo y renderizar.
   5. Escuchar change en el select → cargarTareas(Number(select.value)).
   6. Escuchar input en el buscador con espera de 300 ms → guardar la
      búsqueda y renderizar.
   7. Delegación en #filtros: cambiar filtro, marcar el botón activo y
      renderizar.
   8. Delegación en #tareas: al pulsar una estrella, añadir o quitar su id
      de favoritas, guardar en localStorage y renderizar.
   ============================================================================== */

// estructura del programa principal
const API = 'https://jsonplaceholder.typicode.com';
const CLAVE_FAVORITAS = 'curso-js:b11e08:favoritas';

// funciones
async function pedirJSON(url) {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
        throw new Error(`Error ${respuesta.status} al pedir ${url}`);
    }
    return respuesta.json();
}

// favoritas: un array de ids guardado en el navegador (bloque 09)
function cargarFavoritas() {
    try {
        const datos = JSON.parse(localStorage.getItem(CLAVE_FAVORITAS));
        return Array.isArray(datos) ? datos.filter(Number.isInteger) : [];
    } catch (error) {
        return [];
    }
}

function guardarFavoritas() {
    localStorage.setItem(CLAVE_FAVORITAS, JSON.stringify(favoritas));
}

// el estado: lo que viene de la API + lo que elige el usuario
let tareas = [];
let filtro = 'todas';
let busqueda = '';
let favoritas = cargarFavoritas();
let idEspera = null;

function tareasVisibles() {
    const texto = busqueda.toLowerCase();
    return tareas
        .filter((t) => {
            if (filtro === 'pendientes') return !t.completed;
            if (filtro === 'completadas') return t.completed;
            if (filtro === 'favoritas') return favoritas.includes(t.id);
            return true;
        })
        .filter((t) => t.title.toLowerCase().includes(texto));
}

function crearTarea(tarea) {
    const li = document.createElement('li');
    li.classList.add('tarea-item');
    li.classList.toggle('completada', tarea.completed);

    const titulo = document.createElement('span');
    titulo.textContent = `${tarea.completed ? '✔' : '○'} ${tarea.title}`;

    const esFavorita = favoritas.includes(tarea.id);
    const estrella = document.createElement('button');
    estrella.classList.add('estrella');
    estrella.dataset.id = tarea.id;
    estrella.textContent = esFavorita ? '⭐' : '☆';
    estrella.setAttribute('aria-label', esFavorita ? 'Quitar de favoritas' : 'Marcar como favorita');

    li.append(titulo, estrella);
    return li;
}

function renderizar() {
    const visibles = tareasVisibles();
    listaTareas.replaceChildren();
    visibles.forEach((t) => listaTareas.append(crearTarea(t)));

    const favoritasDeEsteUsuario = tareas.filter((t) => favoritas.includes(t.id)).length;
    estado.textContent = visibles.length === 0
        ? 'Ninguna tarea coincide.'
        : `Mostrando ${visibles.length} de ${tareas.length} tareas · ${favoritasDeEsteUsuario} favoritas`;
}

async function cargarTareas(idUsuario) {
    estado.textContent = '⏳ Cargando tareas…';
    listaTareas.replaceChildren();
    try {
        tareas = await pedirJSON(`${API}/todos?userId=${idUsuario}`);
        renderizar();
    } catch (error) {
        tareas = [];
        estado.textContent = `✘ No se han podido cargar las tareas (${error.message}).`;
    }
}

async function iniciar() {
    estado.textContent = '⏳ Cargando…';
    try {
        // dos peticiones independientes: a la vez, no una detrás de otra (bloque 10)
        const [usuarios, tareasIniciales] = await Promise.all([
            pedirJSON(`${API}/users`),
            pedirJSON(`${API}/todos?userId=1`),
        ]);

        selectUsuario.replaceChildren();
        usuarios.forEach((u) => {
            const opcion = document.createElement('option');
            opcion.value = u.id;
            opcion.textContent = u.name;
            selectUsuario.append(opcion);
        });
        selectUsuario.disabled = false;

        tareas = tareasIniciales;
        renderizar();
    } catch (error) {
        estado.textContent = `✘ No se ha podido conectar con la API (${error.message}).`;
    }
}

// constantes al DOM que queremos escuchar
const selectUsuario = document.querySelector('#usuario');
const buscar = document.querySelector('#buscar');
const filtros = document.querySelector('#filtros');
const estado = document.querySelector('#estado');
const listaTareas = document.querySelector('#tareas');

// colocar escuchadores de eventos
selectUsuario.addEventListener('change', () => {
    cargarTareas(Number(selectUsuario.value));
});

buscar.addEventListener('input', () => {
    clearTimeout(idEspera);
    idEspera = setTimeout(() => {
        busqueda = buscar.value.trim();
        renderizar();
    }, 300);
});

filtros.addEventListener('click', (e) => {
    const boton = e.target.closest('[data-filtro]');
    if (!boton) {
        return;
    }
    filtro = boton.dataset.filtro;
    filtros.querySelectorAll('[data-filtro]').forEach((b) => b.classList.toggle('activo', b === boton));
    renderizar();
});

listaTareas.addEventListener('click', (e) => {
    const estrella = e.target.closest('.estrella');
    if (!estrella) {
        return;
    }
    const id = Number(estrella.dataset.id);
    favoritas = favoritas.includes(id)
        ? favoritas.filter((f) => f !== id)
        : [...favoritas, id];
    guardarFavoritas();
    renderizar();
});

iniciar();
