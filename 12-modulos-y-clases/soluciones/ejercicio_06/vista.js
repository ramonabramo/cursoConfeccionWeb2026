// ==============================================================================
// MÓDULO vista.js
// VISTA: pinta lo que le dan. No modifica datos ni escucha eventos.
// ==============================================================================

function crearArticulo(articulo) {
    const li = document.createElement('li');
    li.classList.add('tarea-item');
    li.classList.toggle('hecha', articulo.comprado);

    const texto = document.createElement('span');
    texto.textContent = `${articulo.comprado ? '✔' : '○'} ${articulo.nombre} × ${articulo.cantidad}`;

    const acciones = document.createElement('span');
    acciones.classList.add('acciones');

    const alternar = document.createElement('button');
    alternar.classList.add('btn', 'btn--secundario');
    alternar.textContent = articulo.comprado ? 'Desmarcar' : 'Comprado';
    alternar.dataset.accion = 'alternar';
    alternar.dataset.id = articulo.id;

    const eliminar = document.createElement('button');
    eliminar.classList.add('btn', 'btn--peligro');
    eliminar.textContent = 'Eliminar';
    eliminar.dataset.accion = 'eliminar';
    eliminar.dataset.id = articulo.id;

    acciones.append(alternar, eliminar);
    li.append(texto, acciones);
    return li;
}

export function pintarLista(contenedor, articulos) {
    contenedor.replaceChildren();
    articulos.forEach((a) => contenedor.append(crearArticulo(a)));
}

export function pintarResumen(elemento, total, pendientes) {
    elemento.textContent = total === 0
        ? 'La lista está vacía.'
        : `Artículos: ${total} · por comprar: ${pendientes}`;
}

export function mostrarMensaje(elemento, texto) {
    elemento.textContent = texto;
}
