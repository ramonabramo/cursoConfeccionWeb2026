// ==============================================================================
// MÓDULO informe.js
// Otro módulo que también importa contador.js.
// ==============================================================================

import { cargas } from './contador.js';

export function resumen() {
    return `contador.js se ha ejecutado ${cargas} vez, aunque lo importan dos ficheros`;
}
