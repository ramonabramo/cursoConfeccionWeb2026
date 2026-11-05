// ==============================================================================
// MÓDULO almacen.js
// PERSISTENCIA: guardar y cargar del navegador.
// ==============================================================================

const CLAVE_TAREAS = 'curso-js:b13:tareas';
const CLAVE_PREFERENCIAS = 'curso-js:b13:preferencias';
const PREFERENCIAS_INICIALES = { filtro: 'todas', orden: 'creacion', tema: 'claro' };

export function cargarTareas() {
    // TAREA: null si nunca se guardó nada; el array guardado; o [] si lo guardado no sirve
    return null;
}

export function guardarTareas(tablero) {
    // TAREA: guarda JSON.stringify(tablero)
}

export function cargarPreferencias() {
    // TAREA: mezcla PREFERENCIAS_INICIALES con lo guardado; si algo falla, las iniciales
    return { ...PREFERENCIAS_INICIALES };
}

export function guardarPreferencias(preferencias) {
    // TAREA
}
