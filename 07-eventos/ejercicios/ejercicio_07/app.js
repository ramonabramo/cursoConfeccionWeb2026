/* ==============================================================================
   EJERCICIO 07 · Lista de tareas con delegación

   OBJETIVO:
   Gestionar una lista que cambia con un único escuchador en el contenedor
   (delegación de eventos), usando e.target.closest para saber qué elemento
   se ha pulsado y un array como estado del que se renderiza la lista.

   PASOS A REALIZAR:
   1. Usar el array tareas y la variable siguienteId que ya están creados:
      el array es el ESTADO del programa.
   2. Declarar crearTarea(tarea): un li con la clase tarea-item (y hecha si
      lo está), dataset.id, un span con el texto y un botón con la clase
      borrar y el texto ✕.
   3. Declarar renderizar(): vacía la lista, pinta todas las tareas y
      escribe en #resumen cuántas quedan pendientes.
   4. Declarar anadir(): lee el campo; si no está vacío, añade una tarea
      nueva al array, vacía el campo y renderiza.
   5. Escuchar click en el botón y keydown (Enter) en el campo → anadir.
   6. Escuchar click UNA sola vez en la lista (delegación): con
      e.target.closest('li') averiguad en qué tarea se ha hecho clic; si se
      ha pulsado el botón borrar (e.target.closest('.borrar')), quitarla del
      array; si no, cambiar su propiedad hecha. Después, renderizar.
   7. Llamar a renderizar() al cargar.
   ============================================================================== */

// estructura del programa principal
let tareas = [
    { id: 1, texto: 'Repasar el bloque 06', hecha: true },
    { id: 2, texto: 'Hacer los ejercicios de eventos', hecha: false },
];
let siguienteId = 3;

// funciones
// TAREA: crearTarea(tarea)


// TAREA: renderizar()


// TAREA: anadir()


// constantes al DOM que queremos escuchar
const nuevaTarea = document.querySelector('#nuevaTarea');
const btnAnadir = document.querySelector('#btnAnadir');
const lista = document.querySelector('#lista');
const resumen = document.querySelector('#resumen');

// colocar escuchadores de eventos
// TAREA: añadir con botón y con Enter


// TAREA: UN escuchador en la lista (delegación)


// TAREA: pintar al cargar

