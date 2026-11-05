/* ==============================================================================
   EJERCICIO 13 · Galería con visor

   OBJETIVO:
   Abrir un visor con el elemento dialog y showModal, navegar entre imágenes
   con botones y con las flechas del teclado, y cerrar con un botón o con la
   tecla Escape.

   PASOS A REALIZAR:
   1. Declarar el array FOTOS con { emoji, titulo, fondo } y let actual = 0.
   2. Declarar mostrar(i): ajusta actual (si se pasa del final, vuelve al
      principio, y al revés), y escribe el título, la imagen, el fondo y el
      pie: 3 de 5.
   3. Al pulsar una miniatura (delegación), llamar a mostrar con su índice y
      abrir el visor con visor.showModal().
   4. Los botones ◀ y ▶ llaman a mostrar(actual - 1) y mostrar(actual + 1);
      Cerrar llama a visor.close().
   5. Escuchar keydown en el visor: ArrowLeft y ArrowRight cambian de foto.
      Escape no hace falta programarlo: el dialog lo trae de serie.
   ============================================================================== */

// estructura del programa principal
const FOTOS = [
    { emoji: '🏔️', titulo: 'Montaña', fondo: '#fde68a' },
    { emoji: '🌊', titulo: 'Mar', fondo: '#bfdbfe' },
    { emoji: '🌲', titulo: 'Bosque', fondo: '#bbf7d0' },
    { emoji: '🌋', titulo: 'Volcán', fondo: '#fecaca' },
    { emoji: '🌌', titulo: 'Noche', fondo: '#e9d5ff' },
];
let actual = 0;

// funciones
// TAREA: mostrar(i)


// constantes al DOM que queremos escuchar
const miniaturas = document.querySelector('#miniaturas');
const visor = document.querySelector('#visor');
const visorTitulo = document.querySelector('#visorTitulo');
const visorImagen = document.querySelector('#visorImagen');
const visorPie = document.querySelector('#visorPie');
const btnAnterior = document.querySelector('#btnAnterior');
const btnSiguiente = document.querySelector('#btnSiguiente');
const btnCerrar = document.querySelector('#btnCerrar');

// colocar escuchadores de eventos
// TAREA: miniaturas, botones y flechas del teclado

