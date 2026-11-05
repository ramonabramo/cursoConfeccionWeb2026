// ==============================================================================
// MÓDULO biblioteca.js
// MODELO: la colección de libros y sus operaciones. No sabe nada del DOM.
// ==============================================================================

import { crearLibro, LibroDigital } from './libro.js';

export class Biblioteca {
    #libros = [];
    #siguienteId = 1;

    constructor(datosGuardados = []) {
        datosGuardados.forEach((datos) => {
            try {
                this.#libros.push(crearLibro(datos));
            } catch (error) {
                console.warn('Se descarta un libro guardado que no es válido:', datos);
            }
        });
        const ids = this.#libros.map((l) => l.id);
        this.#siguienteId = ids.length === 0 ? 1 : Math.max(...ids) + 1;
    }

    agregar(datos) {
        const libro = crearLibro({ ...datos, id: this.#siguienteId });   // si no es válido, lanza Error
        this.#libros.push(libro);
        this.#siguienteId++;
        return libro;
    }

    eliminar(id) {
        this.#libros = this.#libros.filter((l) => l.id !== id);
    }

    alternarLeido(id) {
        const libro = this.#libros.find((l) => l.id === id);
        if (libro) {
            libro.alternarLeido();
        }
    }

    filtrar(filtro, texto) {
        const buscado = texto.trim().toLowerCase();
        return this.#libros
            .filter((l) => {
                if (filtro === 'pendientes') return !l.leido;
                if (filtro === 'leidos') return l.leido;
                if (filtro === 'digitales') return l instanceof LibroDigital;
                return true;
            })
            .filter((l) => `${l.titulo} ${l.autor}`.toLowerCase().includes(buscado));
    }

    get estadisticas() {
        const leidos = this.#libros.filter((l) => l.leido);
        return {
            total: this.#libros.length,
            leidos: leidos.length,
            paginasLeidas: leidos.reduce((suma, l) => suma + l.paginas, 0),
        };
    }

    // JSON.stringify(biblioteca) guarda el array; cada libro usa su propio toJSON
    toJSON() {
        return this.#libros;
    }
}
