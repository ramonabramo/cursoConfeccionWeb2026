// ==============================================================================
// MÓDULO almacen.js
// PERSISTENCIA: guardar y cargar del navegador.
// ==============================================================================

const CLAVE_TAREAS = 'curso-js:b13:tareas';
const CLAVE_PREFERENCIAS = 'curso-js:b13:preferencias';
const PREFERENCIAS_INICIALES = { filtro: 'todas', orden: 'creacion', tema: 'claro' };

// null si nunca se ha guardado nada; [] si lo guardado no sirve
export function cargarTareas() {
    const texto = localStorage.getItem(CLAVE_TAREAS);
    if (texto === null) {
        return null;
    }
    try {
        const datos = JSON.parse(texto);
        return Array.isArray(datos) ? datos : [];
    } catch (error) {
        return [];
    }
}

export function guardarTareas(tablero) {
    localStorage.setItem(CLAVE_TAREAS, JSON.stringify(tablero));
}

export function cargarPreferencias() {
    try {
        const guardadas = JSON.parse(localStorage.getItem(CLAVE_PREFERENCIAS));
        return { ...PREFERENCIAS_INICIALES, ...guardadas };
    } catch (error) {
        return { ...PREFERENCIAS_INICIALES };
    }
}

export function guardarPreferencias(preferencias) {
    localStorage.setItem(CLAVE_PREFERENCIAS, JSON.stringify(preferencias));
}
