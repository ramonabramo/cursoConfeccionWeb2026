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

function validarTitulo(titulo) {
    const limpio = String(titulo).trim();
    if (limpio.length < 3 || limpio.length > 60) {
        throw new Error('El título debe tener entre 3 y 60 caracteres.');
    }
    return limpio;
}

export class Tarea {
    constructor({ id, titulo, prioridad = 'media', fecha = '', completada = false, origen = 'propia', idApi = null }) {
        if (!Number.isInteger(id) || id < 1) {
            throw new Error('El id debe ser un número entero mayor que 0.');
        }
        if (!PRIORIDADES.includes(prioridad)) {
            throw new Error('La prioridad debe ser alta, media o baja.');
        }
        if (typeof fecha !== 'string' || (fecha !== '' && Number.isNaN(Date.parse(fecha)))) {
            throw new Error('La fecha no es válida.');
        }
        this.id = id;
        this.titulo = validarTitulo(titulo);
        this.prioridad = prioridad;
        this.fecha = fecha;
        this.completada = completada === true;
        this.origen = origen === 'api' ? 'api' : 'propia';
        this.idApi = idApi;
    }

    alternar() {
        this.completada = !this.completada;
    }

    // las fechas AAAA-MM-DD se pueden comparar como texto: '2025-09-15' < '2026-01-01'
    get vencida() {
        return !this.completada && this.fecha !== '' && this.fecha < fechaDeHoy();
    }
}

export class Tablero {
    #tareas = [];
    #siguienteId = 1;

    constructor(datos = []) {
        datos.forEach((dato) => {
            try {
                this.#tareas.push(new Tarea(dato));
            } catch (error) {
                console.warn('Se descarta una tarea que no es válida:', dato);
            }
        });
        const ids = this.#tareas.map((t) => t.id);
        this.#siguienteId = ids.length === 0 ? 1 : Math.max(...ids) + 1;
    }

    #buscar(id) {
        return this.#tareas.find((t) => t.id === id);
    }

    agregar(datos) {
        const tarea = new Tarea({ ...datos, id: this.#siguienteId });   // si no es válida, lanza Error
        this.#tareas.push(tarea);
        this.#siguienteId++;
        return tarea;
    }

    eliminar(id) {
        this.#tareas = this.#tareas.filter((t) => t.id !== id);
    }

    alternar(id) {
        const tarea = this.#buscar(id);
        if (tarea) {
            tarea.alternar();
        }
    }

    get tareas() {
        return [...this.#tareas];
    }

    get estadisticas() {
        const pendientes = this.#tareas.filter((t) => !t.completada);
        const porPrioridad = { alta: 0, media: 0, baja: 0 };
        pendientes.forEach((t) => porPrioridad[t.prioridad]++);
        return {
            total: this.#tareas.length,
            completadas: this.#tareas.length - pendientes.length,
            pendientes: pendientes.length,
            vencidas: this.#tareas.filter((t) => t.vencida).length,
            porPrioridad,
        };
    }
}
