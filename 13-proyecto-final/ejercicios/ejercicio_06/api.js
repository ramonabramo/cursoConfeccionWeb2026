// ==============================================================================
// MÓDULO api.js
// DATOS REMOTOS: las peticiones a JSONPlaceholder, ya traducidas al formato de la aplicación.
// ==============================================================================

const API = 'https://jsonplaceholder.typicode.com';

// TAREA: async function pedirJSON(url) del bloque 11

export async function obtenerUsuarios() {
    // TAREA: pide `${API}/users` y devuelve [{ id, nombre }]
    return [];
}

export async function obtenerTareasDeUsuario(idUsuario) {
    // TAREA: pide `${API}/users/${idUsuario}/todos` y traduce cada una a
    //        { titulo, completada, prioridad: 'media', fecha: '', origen: 'api', idApi }
    //        (los títulos de más de 60 caracteres, recortados)
    return [];
}
