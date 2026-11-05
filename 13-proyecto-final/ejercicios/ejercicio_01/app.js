/* ==============================================================================
   EJERCICIO 01 · Fase 1 · El modelo: Tarea y Tablero

   OBJETIVO:
   Escribir el modelo de la aplicación en modelo.js: la clase Tarea, que
   valida sus datos, y la clase Tablero, que guarda la colección con campos
   privados. Una tabla de pruebas automáticas os dirá si funciona antes de
   pintar nada.

   PASOS A REALIZAR:
   1. Leed app.js: no hay que tocarlo. Ejecuta nueve pruebas contra vuestro
      modelo y las pinta en la tabla.
   2. En modelo.js, completar el constructor de Tarea: recibe un objeto con
      valores por defecto y lanza un Error si el id no es un entero mayor
      que 0, si el título limpio no tiene entre 3 y 60 caracteres, si la
      prioridad no está en PRIORIDADES o si la fecha no es '' ni una fecha
      válida (Date.parse).
   3. Añadir a Tarea el método alternar() y el getter vencida: no está
      completada, tiene fecha y la fecha es anterior a fechaDeHoy().
   4. En Tablero, declarar #tareas y #siguienteId. El constructor crea una
      Tarea por cada dato dentro de un try y descarta las que no sean
      válidas; después calcula el siguiente id.
   5. Completar agregar(datos), que añade el id y devuelve la tarea creada,
      eliminar(id), alternar(id), get tareas (una copia) y get estadisticas.
   6. Recargad hasta ver 9 de 9 pruebas superadas.
   ============================================================================== */

// estructura del programa principal
import { Tarea, Tablero } from './modelo.js';

const EJEMPLOS = [
    { id: 1, titulo: 'Repasar los apuntes del bloque 12', prioridad: 'alta', fecha: '2025-09-15', completada: false },
    { id: 2, titulo: 'Diseñar las pantallas del proyecto', prioridad: 'media', fecha: '', completada: true },
    { id: 3, titulo: 'Preparar la presentación final', prioridad: 'baja', fecha: '2027-06-30', completada: false },
];

// el estado de la aplicación
const tablero = new Tablero(EJEMPLOS);

// funciones
function lanzaError(funcion) {
    try {
        funcion();
        return false;
    } catch (error) {
        return true;
    }
}

// cada prueba es un texto y una función que devuelve true si el modelo se comporta como debe
const PRUEBAS = [
    ['Se crean las 3 tareas de ejemplo', () => tablero.tareas.length === 3],
    ['agregar() asigna el id 4 a la tarea nueva', () => tablero.agregar({ titulo: 'Tarea de prueba' }).id === 4],
    ['Un título de 2 letras lanza un Error', () => lanzaError(() => new Tarea({ id: 9, titulo: 'ab' }))],
    ['Una prioridad inventada lanza un Error', () => lanzaError(() => new Tarea({ id: 9, titulo: 'Válida', prioridad: 'urgente' }))],
    ['alternar(1) completa la tarea 1', () => {
        tablero.alternar(1);
        return tablero.tareas[0].completada === true;
    }],
    ['Una tarea pendiente con fecha pasada está vencida', () => new Tarea({ id: 9, titulo: 'Antigua', fecha: '2020-01-01' }).vencida === true],
    ['eliminar(4) deja 3 tareas', () => {
        tablero.eliminar(4);
        return tablero.tareas.length === 3;
    }],
    ['Las estadísticas cuentan 2 completadas y 1 pendiente de prioridad baja', () => {
        const e = tablero.estadisticas;
        return e.completadas === 2 && e.porPrioridad.baja === 1;
    }],
    ['Al cargar, los datos no válidos se descartan', () => new Tablero([{ id: 1, titulo: 'x' }]).tareas.length === 0],
];

function ejecutarPruebas() {
    let superadas = 0;
    PRUEBAS.forEach(([descripcion, prueba]) => {
        let resultado;
        try {
            resultado = prueba() === true ? '✔' : '✘';
        } catch (error) {
            resultado = `✘ ${error.message}`;
        }
        if (resultado === '✔') {
            superadas++;
        }
        const fila = document.createElement('tr');
        const celdaTexto = document.createElement('td');
        celdaTexto.textContent = descripcion;
        const celdaResultado = document.createElement('td');
        celdaResultado.textContent = resultado;
        fila.append(celdaTexto, celdaResultado);
        tablaPruebas.append(fila);
    });
    resultadoPruebas.textContent = `${superadas} de ${PRUEBAS.length} pruebas superadas`;
}

function pintarListado() {
    listado.replaceChildren();
    tablero.tareas.forEach((t) => {
        const li = document.createElement('li');
        li.textContent = `#${t.id} · ${t.titulo} · ${t.prioridad}${t.completada ? ' · completada' : ''}`;
        listado.append(li);
    });
}

// constantes al DOM que queremos escuchar
const tablaPruebas = document.querySelector('#pruebas');
const resultadoPruebas = document.querySelector('#resultadoPruebas');
const listado = document.querySelector('#listado');

// colocar escuchadores de eventos

// arranque
ejecutarPruebas();
pintarListado();
