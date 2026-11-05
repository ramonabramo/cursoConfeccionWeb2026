// ==============================================================================
// MÓDULO conversor.js
// Exportación por defecto: lo principal del fichero, sin nombre obligatorio.
// ==============================================================================

const FACTORES = { cm: 100, mm: 1000, km: 0.001 };

export default function convertir(metros, unidad) {
    return metros * FACTORES[unidad];
}
