// ==============================================================================
// MÓDULO contador.js
// Un módulo con estado propio. Lo importan app.js e informe.js.
// ==============================================================================

// este código se ejecuta una sola vez, la primera vez que alguien importa el módulo
export let cargas = 0;
cargas++;

export let visitas = 0;

export function sumarVisita() {
    visitas++;
}
