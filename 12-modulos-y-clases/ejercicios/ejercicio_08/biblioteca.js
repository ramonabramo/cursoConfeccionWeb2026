// ==============================================================================
// MÓDULO biblioteca.js
// MODELO: la colección de libros y sus operaciones. No sabe nada del DOM.
// ==============================================================================

import { crearLibro, LibroDigital } from './libro.js';

export class Biblioteca {
    // TAREA: campos privados #libros = [] y #siguienteId = 1

    constructor(datosGuardados = []) {
        // TAREA: crea un libro por cada dato guardado (descarta los no válidos con try…catch)
        //        y calcula #siguienteId
    }

    agregar(datos) {
        // TAREA: crea el libro con crearLibro({ ...datos, id }) y guárdalo
    }

    eliminar(id) {
        // TAREA
    }

    alternarLeido(id) {
        // TAREA
    }

    filtrar(filtro, texto) {
        // TAREA: 'todos', 'pendientes', 'leidos' o 'digitales' (instanceof LibroDigital), y búsqueda por título o autor
        return [];
    }

    get estadisticas() {
        // TAREA
        return { total: 0, leidos: 0, paginasLeidas: 0 };
    }

    toJSON() {
        // TAREA: devuelve el array de libros
        return [];
    }
}
