/* ==============================================================================
   EJERCICIO 08 · Tareas de la API con favoritos

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

// TAREA: cargarFavoritas() y guardarFavoritas()


// TAREA: el estado (tareas, filtro, busqueda, favoritas, idEspera)


// TAREA: renderizar()


// TAREA: async function cargarTareas(idUsuario)


// TAREA: async function iniciar() con Promise.all


// constantes al DOM que queremos escuchar
const selectUsuario = document.querySelector('#usuario');
const buscar = document.querySelector('#buscar');
const filtros = document.querySelector('#filtros');
const estado = document.querySelector('#estado');
const listaTareas = document.querySelector('#tareas');

// colocar escuchadores de eventos
// TAREA: usuario, búsqueda, filtros y estrellas


// TAREA: iniciar()

