// ==============================================================================
// MÓDULO modelo.js
// MODELO: los datos y sus reglas. No sabe nada del DOM.
// ==============================================================================

export class ListaCompra {
    #articulos = [];
    #siguienteId = 1;

    agregar(nombre, cantidad) {
        const limpio = nombre.trim();
        if (limpio === '') {
            throw new Error('Escribe el nombre del artículo.');
        }
        if (!Number.isInteger(cantidad) || cantidad < 1) {
            throw new Error('La cantidad debe ser un número entero mayor que 0.');
        }
        this.#articulos.push({ id: this.#siguienteId, nombre: limpio, cantidad, comprado: false });
        this.#siguienteId++;
    }

    alternar(id) {
        const articulo = this.#articulos.find((a) => a.id === id);
        if (articulo) {
            articulo.comprado = !articulo.comprado;
        }
    }

    eliminar(id) {
        this.#articulos = this.#articulos.filter((a) => a.id !== id);
    }

    vaciarComprados() {
        this.#articulos = this.#articulos.filter((a) => !a.comprado);
    }

    // copias: quien lee no puede modificar el original
    get articulos() {
        return this.#articulos.map((a) => ({ ...a }));
    }

    get pendientes() {
        return this.#articulos.filter((a) => !a.comprado).length;
    }
}
