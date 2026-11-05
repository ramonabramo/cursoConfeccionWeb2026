// ==============================================================================
// MÓDULO libro.js
// Las clases Libro y LibroDigital, y una función para crear el que toque.
// ==============================================================================

export class Libro {
    constructor({ id, titulo, autor, paginas, leido = false }) {
        if (String(titulo).trim() === '' || String(autor).trim() === '') {
            throw new Error('El título y el autor son obligatorios.');
        }
        if (!Number.isInteger(paginas) || paginas < 1) {
            throw new Error('Las páginas deben ser un número entero mayor que 0.');
        }
        this.id = id;
        this.titulo = String(titulo).trim();
        this.autor = String(autor).trim();
        this.paginas = paginas;
        this.leido = leido === true;
    }

    get tipo() {
        return 'Papel';
    }

    alternarLeido() {
        this.leido = !this.leido;
    }

    describir() {
        return `${this.autor} · ${this.paginas} págs. · ${this.tipo}`;
    }

    // JSON.stringify lo llama solo: decide qué se guarda
    toJSON() {
        return { tipo: 'papel', id: this.id, titulo: this.titulo, autor: this.autor, paginas: this.paginas, leido: this.leido };
    }
}

export class LibroDigital extends Libro {
    constructor(datos) {
        super(datos);
        if (!['EPUB', 'PDF'].includes(datos.formato)) {
            throw new Error('El formato debe ser EPUB o PDF.');
        }
        this.formato = datos.formato;
    }

    get tipo() {
        return 'Digital';
    }

    describir() {
        return `${super.describir()} (${this.formato})`;   // lo de la madre, y algo más
    }

    toJSON() {
        return { ...super.toJSON(), tipo: 'digital', formato: this.formato };
    }
}

export function crearLibro(datos) {
    return datos.tipo === 'digital' ? new LibroDigital(datos) : new Libro(datos);
}
