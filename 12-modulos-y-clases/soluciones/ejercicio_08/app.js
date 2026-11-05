/* ==============================================================================
   EJERCICIO 08 · Proyecto: mi biblioteca con clases y módulos (SOLUCIÓN)

   OBJETIVO:
   Integrar todo el bloque en una aplicación: clases con herencia y
   validación, un modelo con campos privados y getters, persistencia con
   toJSON y localStorage, y una arquitectura en módulos con modelo, vista y
   controlador.

   PASOS A REALIZAR:
   1. Leed almacen.js, vista.js y app.js, que ya están completos. Vuestro
      trabajo está en libro.js y biblioteca.js.
   2. Libro: el constructor recibe un objeto { id, titulo, autor, paginas,
      leido = false } y lanza un Error si falta el título o el autor, o si
      las páginas no son un entero mayor que 0. Añadir get tipo ('Papel'),
      alternarLeido(), describir() (autor · páginas · tipo) y toJSON().
   3. LibroDigital extends Libro: super(datos), formato EPUB o PDF (si no,
      Error), get tipo ('Digital'), describir() que añade el formato a
      super.describir(), y toJSON() que añade tipo: 'digital' y el formato a
      super.toJSON().
   4. crearLibro(datos): devuelve un LibroDigital si datos.tipo es 'digital'
      y un Libro en otro caso.
   5. Biblioteca: campos privados #libros y #siguienteId. El constructor
      crea los libros guardados (descartando con try…catch los que no sean
      válidos) y calcula el siguiente id.
   6. Biblioteca: agregar, eliminar, alternarLeido, filtrar(filtro, texto)
      con 'digitales' por instanceof, get estadisticas y toJSON() que
      devuelve el array de libros.
   7. Probad: añadid un libro digital, marcadlo como leído, recargad la
      página y comprobad que sigue ahí. En Aplicación (Application) → Local
      Storage veréis lo que guarda toJSON. Si al terminar la biblioteca sale
      vacía, es que se guardó vacía mientras la clase estaba sin hacer:
      borrad la clave curso-js:b12e08:biblioteca y recargad.
   ============================================================================== */

// estructura del programa principal
// el CONTROLADOR: une el modelo, la persistencia y la vista
import { Biblioteca } from './biblioteca.js';
import { cargarDatos, guardarDatos } from './almacen.js';
import { pintarLibros, pintarEstadisticas, mostrarMensaje } from './vista.js';

const EJEMPLOS = [
    { tipo: 'papel', id: 1, titulo: 'El Quijote', autor: 'Miguel de Cervantes', paginas: 1376, leido: false },
    { tipo: 'digital', id: 2, titulo: 'Eloquent JavaScript', autor: 'Marijn Haverbeke', paginas: 472, leido: true, formato: 'EPUB' },
    { tipo: 'papel', id: 3, titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', paginas: 576, leido: true },
];

const guardados = cargarDatos();
const biblioteca = new Biblioteca(guardados === null ? EJEMPLOS : guardados);
let filtro = 'todos';

// funciones
function actualizar() {
    guardarDatos(biblioteca);
    pintarLibros(contenedor, biblioteca.filtrar(filtro, buscar.value));
    pintarEstadisticas(estadisticas, biblioteca.estadisticas);
}

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#formLibro');
const campoFormato = document.querySelector('#campoFormato');
const filtros = document.querySelector('#filtros');
const buscar = document.querySelector('#buscar');
const contenedor = document.querySelector('#libros');
const estadisticas = document.querySelector('#estadisticas');
const mensaje = document.querySelector('#mensaje');

// colocar escuchadores de eventos
formulario.tipo.addEventListener('change', () => {
    campoFormato.hidden = formulario.tipo.value !== 'digital';
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    // entradas
    const datos = {
        tipo: formulario.tipo.value,
        titulo: formulario.titulo.value,
        autor: formulario.autor.value,
        paginas: Number(formulario.paginas.value),
        formato: formulario.formato.value,
    };
    // procesamiento: las clases validan
    try {
        biblioteca.agregar(datos);
        mostrarMensaje(mensaje, `✔ Añadido «${datos.titulo.trim()}».`);
        formulario.reset();
        campoFormato.hidden = true;
    } catch (error) {
        mostrarMensaje(mensaje, `✘ ${error.message}`);
    }
    // salidas
    actualizar();
});

filtros.addEventListener('click', (e) => {
    const boton = e.target.closest('[data-filtro]');
    if (!boton) {
        return;
    }
    filtro = boton.dataset.filtro;
    filtros.querySelectorAll('[data-filtro]').forEach((b) => b.classList.toggle('activo', b === boton));
    actualizar();
});

buscar.addEventListener('input', actualizar);

contenedor.addEventListener('click', (e) => {
    const boton = e.target.closest('[data-accion]');
    if (!boton) {
        return;
    }
    const id = Number(boton.dataset.id);
    if (boton.dataset.accion === 'alternar') {
        biblioteca.alternarLeido(id);
    } else {
        biblioteca.eliminar(id);
    }
    actualizar();
});

actualizar();
