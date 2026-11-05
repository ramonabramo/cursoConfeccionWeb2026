// ==============================================================================
// MÓDULO utilidades.js
// Funciones de formato y de cálculo que puede usar cualquier otro fichero.
// ==============================================================================

export const PORCENTAJE_IVA = 21;

// no se exporta: es un detalle interno de este módulo
const IVA = PORCENTAJE_IVA / 100;

export function conIVA(precio) {
    return precio * (1 + IVA);
}

export function formatearPrecio(cantidad) {
    return `${cantidad.toFixed(2).replace('.', ',')} €`;
}
