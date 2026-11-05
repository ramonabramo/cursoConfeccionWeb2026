/* ==============================================================================
   EJERCICIO 07 · Lista de tareas que persiste

   OBJETIVO:
   Convertir una aplicación con estado en persistente: cargar el estado
   guardado al empezar (con un valor inicial si no hay nada), guardarlo en
   cada cambio y repintar, guardando también una preferencia de la interfaz
   (el filtro activo).

   PASOS A REALIZAR:
   1. Declarar las claves CLAVE_TAREAS y CLAVE_FILTRO con el prefijo curso-
      js:b09e07:, y un array TAREAS_INICIALES con dos tareas de ejemplo.
   2. Declarar cargarTareas(): si no hay nada guardado, devuelve una copia
      de TAREAS_INICIALES; si lo hay, el array leído con JSON.parse.
   3. Declarar guardar(): guarda el array de tareas (JSON) y el filtro
      (texto).
   4. Declarar el estado: let tareas = cargarTareas(); let filtro =
      getItem(CLAVE_FILTRO) ?? 'todas'; y siguienteId = el mayor id + 1.
   5. Declarar renderizar(): pinta solo las tareas que corresponden al
      filtro, marca el botón de filtro activo y escribe el resumen.
   6. Añadir (submit), marcar/borrar (delegación en la lista), cambiar
      filtro (delegación en #filtros) y Borrar completadas: todos cambian el
      estado y llaman a guardar() y renderizar().
   7. Llamar a renderizar() al cargar.
   ============================================================================== */

// estructura del programa principal
const CLAVE_TAREAS = 'curso-js:b09e07:tareas';
const CLAVE_FILTRO = 'curso-js:b09e07:filtro';
const TAREAS_INICIALES = [
    { id: 1, texto: 'Leer la teoría del bloque 09', hecha: true },
    { id: 2, texto: 'Hacer el ejercicio 07', hecha: false },
];

// funciones
// TAREA: cargarTareas()


// TAREA: guardar()


// TAREA: el estado: tareas, filtro y siguienteId


// TAREA: crearTarea(tarea) y renderizar()


// constantes al DOM que queremos escuchar
const formTarea = document.querySelector('#formTarea');
const nuevaTarea = document.querySelector('#nuevaTarea');
const filtros = document.querySelector('#filtros');
const btnLimpiar = document.querySelector('#btnLimpiar');
const lista = document.querySelector('#lista');
const resumen = document.querySelector('#resumen');

// colocar escuchadores de eventos
// TAREA: añadir, marcar/borrar, filtrar y borrar completadas


// TAREA: renderizar al cargar

