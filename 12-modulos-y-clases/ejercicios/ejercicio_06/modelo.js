// ==============================================================================
// MÓDULO modelo.js
// MODELO: los datos y sus reglas. No sabe nada del DOM.
// ==============================================================================

export class ListaCompra {
    // TAREA: campos privados #articulos = [] y #siguienteId = 1

    agregar(nombre, cantidad) {
        // TAREA: valida (nombre no vacío, cantidad entera mayor que 0) lanzando Error,
        //        y añade { id, nombre, cantidad, comprado: false }
    }

    alternar(id) {
        // TAREA: cambia comprado del artículo con ese id
    }

    eliminar(id) {
        // TAREA: quita el artículo con ese id
    }

    vaciarComprados() {
        // TAREA: quita todos los comprados
    }

    get articulos() {
        // TAREA: devuelve una copia de cada artículo
        return [];
    }

    get pendientes() {
        // TAREA: cuántos artículos quedan sin comprar
        return 0;
    }
}
