// ==============================================================================
// MÓDULO vista.js
// VISTA: pinta lo que le dan. No modifica datos ni escucha eventos.
// ==============================================================================

function boton(texto, accion, id, clase) {
    const b = document.createElement('button');
    b.classList.add('btn', clase);
    b.textContent = texto;
    b.dataset.accion = accion;
    b.dataset.id = id;
    return b;
}

function crearLibro(libro) {
    const li = document.createElement('li');
    li.classList.add('tarea-item');
    li.classList.toggle('leido', libro.leido);

    const datos = document.createElement('span');
    const titulo = document.createElement('strong');
    titulo.classList.add('titulo-libro');
    titulo.textContent = libro.titulo;
    datos.append(titulo, ` · ${libro.describir()}`);

    const acciones = document.createElement('span');
    acciones.classList.add('acciones');
    acciones.append(
        boton(libro.leido ? 'Marcar no leído' : 'Marcar leído', 'alternar', libro.id, 'btn--secundario'),
        boton('Eliminar', 'eliminar', libro.id, 'btn--peligro'),
    );

    li.append(datos, acciones);
    return li;
}

export function pintarLibros(contenedor, libros) {
    contenedor.replaceChildren();
    if (libros.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Ningún libro coincide.';
        contenedor.append(li);
        return;
    }
    libros.forEach((l) => contenedor.append(crearLibro(l)));
}

export function pintarEstadisticas(elemento, { total, leidos, paginasLeidas }) {
    elemento.textContent = `Libros: ${total} · leídos: ${leidos} · páginas leídas: ${paginasLeidas}`;
}

export function mostrarMensaje(elemento, texto) {
    elemento.textContent = texto;
}
