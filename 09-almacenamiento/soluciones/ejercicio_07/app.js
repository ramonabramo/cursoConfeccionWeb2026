/* ==============================================================================
   EJERCICIO 07 · Lista de tareas que persiste (SOLUCIÓN)

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
// CARGAR: lo guardado o, si no hay nada, una copia de las tareas iniciales
function cargarTareas() {
    const texto = localStorage.getItem(CLAVE_TAREAS);
    return texto === null ? structuredClone(TAREAS_INICIALES) : JSON.parse(texto);
}

// GUARDAR: todo el estado, en cada cambio
function guardar() {
    localStorage.setItem(CLAVE_TAREAS, JSON.stringify(tareas));
    localStorage.setItem(CLAVE_FILTRO, filtro);
}

// el estado de la aplicación, cargado al empezar
let tareas = cargarTareas();
let filtro = localStorage.getItem(CLAVE_FILTRO) ?? 'todas';
let siguienteId = Math.max(0, ...tareas.map((t) => t.id)) + 1;

function crearTarea(tarea) {
    const li = document.createElement('li');
    li.classList.add('tarea-item');
    li.classList.toggle('hecha', tarea.hecha);
    li.dataset.id = tarea.id;

    const texto = document.createElement('span');
    texto.textContent = tarea.texto;

    const borrar = document.createElement('button');
    borrar.classList.add('borrar');
    borrar.textContent = '✕';
    borrar.setAttribute('aria-label', `Borrar «${tarea.texto}»`);

    li.append(texto, borrar);
    return li;
}

function tareasVisibles() {
    if (filtro === 'pendientes') {
        return tareas.filter((t) => !t.hecha);
    }
    if (filtro === 'hechas') {
        return tareas.filter((t) => t.hecha);
    }
    return tareas;
}

function renderizar() {
    lista.replaceChildren();
    tareasVisibles().forEach((t) => lista.append(crearTarea(t)));

    filtros.querySelectorAll('[data-filtro]').forEach((b) => {
        b.classList.toggle('activo', b.dataset.filtro === filtro);
    });

    const pendientes = tareas.filter((t) => !t.hecha).length;
    resumen.textContent = `${pendientes} pendientes de ${tareas.length} · filtro: ${filtro}`;
}

// cambiar el estado → guardar → repintar
function actualizar() {
    guardar();
    renderizar();
}

// constantes al DOM que queremos escuchar
const formTarea = document.querySelector('#formTarea');
const nuevaTarea = document.querySelector('#nuevaTarea');
const filtros = document.querySelector('#filtros');
const btnLimpiar = document.querySelector('#btnLimpiar');
const lista = document.querySelector('#lista');
const resumen = document.querySelector('#resumen');

// colocar escuchadores de eventos
formTarea.addEventListener('submit', (e) => {
    e.preventDefault();
    const texto = nuevaTarea.value.trim();
    if (texto === '') {
        return;
    }
    tareas.push({ id: siguienteId, texto, hecha: false });
    siguienteId++;
    nuevaTarea.value = '';
    actualizar();
});

lista.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) {
        return;
    }
    const id = Number(li.dataset.id);
    if (e.target.closest('.borrar')) {
        tareas = tareas.filter((t) => t.id !== id);
    } else {
        const tarea = tareas.find((t) => t.id === id);
        tarea.hecha = !tarea.hecha;
    }
    actualizar();
});

filtros.addEventListener('click', (e) => {
    const boton = e.target.closest('[data-filtro]');
    if (!boton) {
        return;
    }
    filtro = boton.dataset.filtro;
    actualizar();
});

btnLimpiar.addEventListener('click', () => {
    tareas = tareas.filter((t) => !t.hecha);
    actualizar();
});

// pintar el estado cargado
renderizar();
