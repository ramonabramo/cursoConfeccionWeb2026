// ==============================================================================
// MÓDULO libro.js
// Las clases Libro y LibroDigital, y una función para crear el que toque.
// ==============================================================================

export class Libro {
    // TAREA: constructor({ id, titulo, autor, paginas, leido = false }) con validación

    // TAREA: get tipo → 'Papel'

    // TAREA: alternarLeido() y describir()

    // TAREA: toJSON() → { tipo: 'papel', id, titulo, autor, paginas, leido }
}

export class LibroDigital extends Libro {
    // TAREA: constructor(datos) con super(datos) y formato EPUB o PDF

    // TAREA: get tipo → 'Digital', describir() con super.describir() y toJSON()
}

export function crearLibro(datos) {
    // TAREA: new LibroDigital(datos) si datos.tipo es 'digital'; si no, new Libro(datos)
    return new Libro(datos);
}
