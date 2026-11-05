// ==============================================================================
// MÓDULO api.js
// DATOS REMOTOS: las peticiones a JSONPlaceholder, ya traducidas al formato de la aplicación.
// ==============================================================================

const API = 'https://jsonplaceholder.typicode.com';

async function pedirJSON(url) {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
        throw new Error(`Error ${respuesta.status} al pedir ${url}`);
    }
    return respuesta.json();
}

function recortar(texto, maximo = 60) {
    return texto.length > maximo ? `${texto.slice(0, maximo - 1)}…` : texto;
}

export async function obtenerUsuarios() {
    const usuarios = await pedirJSON(`${API}/users`);
    return usuarios.map((u) => ({ id: u.id, nombre: u.name }));
}

// la API habla su idioma (title, completed); la aplicación, el suyo
export async function obtenerTareasDeUsuario(idUsuario) {
    const tareas = await pedirJSON(`${API}/users/${idUsuario}/todos`);
    return tareas.map((t) => ({
        titulo: recortar(t.title),
        completada: t.completed,
        prioridad: 'media',
        fecha: '',
        origen: 'api',
        idApi: t.id,
    }));
}
