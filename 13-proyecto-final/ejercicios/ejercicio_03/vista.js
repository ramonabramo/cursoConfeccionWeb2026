// ==============================================================================
// MÓDULO vista.js
// VISTA: pinta lo que le dan. No modifica datos ni escucha eventos.
// ==============================================================================

const ETIQUETAS_PRIORIDAD = { alta: '🔴 Alta', media: '🟡 Media', baja: '🟢 Baja' };

// '2026-06-30' → '30/06/2026'
function formatearFecha(fecha) {
    if (fecha === '') {
        return 'Sin fecha';
    }
    const [anio, mes, dia] = fecha.split('-');
    return `${dia}/${mes}/${anio}`;
}

function crearTarea(tarea) {
    const li = document.createElement('li');
    li.classList.add('tarea-item');
    li.classList.toggle('hecha', tarea.completada);
    li.classList.toggle('vencida', tarea.vencida);
    li.dataset.id = tarea.id;

    const casilla = document.createElement('input');
    casilla.type = 'checkbox';
    casilla.checked = tarea.completada;
    casilla.dataset.accion = 'alternar';
    casilla.setAttribute('aria-label', `Completar «${tarea.titulo}»`);

    const titulo = document.createElement('span');
    titulo.classList.add('titulo-tarea');
    titulo.textContent = tarea.titulo;
    titulo.title = 'Doble clic para editar';

    const detalles = document.createElement('span');
    detalles.classList.add('detalles-tarea');
    const avisos = [ETIQUETAS_PRIORIDAD[tarea.prioridad], formatearFecha(tarea.fecha)];
    if (tarea.vencida) {
        avisos.push('⚠️ Vencida');
    }
    if (tarea.origen === 'api') {
        avisos.push('☁️ API');
    }
    detalles.textContent = avisos.join(' · ');

    const texto = document.createElement('span');
    texto.classList.add('texto-tarea');
    texto.append(titulo, detalles);

    const borrar = document.createElement('button');
    borrar.classList.add('btn', 'btn--peligro');
    borrar.textContent = 'Eliminar';
    borrar.dataset.accion = 'eliminar';
    borrar.setAttribute('aria-label', `Eliminar «${tarea.titulo}»`);

    li.append(casilla, texto, borrar);
    return li;
}

export function pintarTareas(contenedor, tareas) {
    contenedor.replaceChildren();
    if (tareas.length === 0) {
        const li = document.createElement('li');
        li.classList.add('vacio');
        li.textContent = '📭 No hay tareas que mostrar.';
        contenedor.append(li);
        return;
    }
    tareas.forEach((t) => contenedor.append(crearTarea(t)));
}

export function pintarResumen(elemento, { total, pendientes, completadas, vencidas }) {
    elemento.textContent = `Tareas: ${total} · pendientes: ${pendientes} · completadas: ${completadas} · vencidas: ${vencidas}`;
}

export function mostrarMensaje(elemento, texto) {
    elemento.textContent = texto;
}

// cambia el título por un campo de texto y lo devuelve
export function activarEdicion(li) {
    const titulo = li.querySelector('.titulo-tarea');
    const campo = document.createElement('input');
    campo.type = 'text';
    campo.value = titulo.textContent;
    campo.classList.add('campo-edicion');
    campo.setAttribute('aria-label', 'Nuevo título de la tarea');
    titulo.replaceWith(campo);
    campo.focus();
    campo.select();
    return campo;
}
