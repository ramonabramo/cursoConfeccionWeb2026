// ==============================================================================
// MÓDULO utilidades.js
// Funciones de formato y de cálculo que puede usar cualquier otro fichero.
// ==============================================================================

// TAREA: decide qué hay que exportar y añade la palabra export delante.
//        IVA NO debe exportarse: es un detalle interno.

const PORCENTAJE_IVA = 21;

const IVA = PORCENTAJE_IVA / 100;

function conIVA(precio) {
    return precio * (1 + IVA);
}

function formatearPrecio(cantidad) {
    return `${cantidad.toFixed(2).replace('.', ',')} €`;
}
