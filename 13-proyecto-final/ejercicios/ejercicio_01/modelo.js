// ==============================================================================
// MÓDULO modelo.js
// MODELO: las tareas, el tablero y sus reglas. No sabe nada del DOM.
// ==============================================================================

export const PRIORIDADES = ['alta', 'media', 'baja'];

// la fecha de hoy en formato AAAA-MM-DD, con la hora local
export function fechaDeHoy() {
    const hoy = new Date();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    return `${hoy.getFullYear()}-${mes}-${dia}`;
}

export class Tarea {
    // TAREA: constructor({ id, titulo, prioridad = 'media', fecha = '', completada = false, origen = 'propia', idApi = null })
    //        Lanza un Error si el id no es un entero mayor que 0, si el título limpio no tiene
    //        entre 3 y 60 caracteres, si la prioridad no está en PRIORIDADES o si la fecha no es válida.

    // TAREA: alternar()

    // TAREA: get vencida → no está completada, tiene fecha y la fecha es anterior a hoy
}

export class Tablero {
    // TAREA: campos privados #tareas = [] y #siguienteId = 1

    constructor(datos = []) {
        // TAREA: crea una Tarea por cada dato (descarta las no válidas con try…catch)
        //        y calcula #siguienteId
    }

    agregar(datos) {
        // TAREA: crea la tarea con el siguiente id, guárdala y devuélvela
        return null;
    }

    eliminar(id) {
        // TAREA
    }

    alternar(id) {
        // TAREA
    }

    get tareas() {
        // TAREA: devuelve una copia del array
        return [];
    }

    get estadisticas() {
        // TAREA: total, completadas, pendientes, vencidas y porPrioridad (pendientes de cada prioridad)
        return { total: 0, completadas: 0, pendientes: 0, vencidas: 0, porPrioridad: { alta: 0, media: 0, baja: 0 } };
    }
}
