// ==============================================================================
// MÓDULO almacen.js
// PERSISTENCIA: guardar y cargar del navegador (bloque 09).
// ==============================================================================

const CLAVE = 'curso-js:b12e08:biblioteca';

// devuelve null si nunca se ha guardado nada, y [] si lo guardado no sirve
export function cargarDatos() {
    const texto = localStorage.getItem(CLAVE);
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

export function guardarDatos(biblioteca) {
    localStorage.setItem(CLAVE, JSON.stringify(biblioteca));
}
