/* ==============================================================================
   EJERCICIO 12 · Valoración con estrellas

   OBJETIVO:
   Combinar mouseenter, mouseleave y click para una valoración con
   estrellas: vista previa al pasar el ratón, valor fijo al pulsar y vuelta
   al valor fijo al salir.

   PASOS A REALIZAR:
   1. Declarar let valoracion = 0 y una función pintar(n) que enciende
      (clase encendida) las n primeras estrellas y apaga las demás.
   2. En cada estrella, escuchar mouseenter → pintar(su data-valor), y click
      → guardar valoracion y escribir el texto: Tu valoración: 4 de 5 ⭐.
   3. Escuchar mouseleave en el contenedor #estrellas → pintar(valoracion):
      si se sale sin pulsar, vuelve la valoración guardada.
   4. Mostrar un texto distinto para cada valor (1: Muy mala … 5:
      Excelente).
   ============================================================================== */

// estructura del programa principal
const TEXTOS = ['Sin valorar', 'Muy mala', 'Mala', 'Normal', 'Buena', 'Excelente'];
let valoracion = 0;

// funciones
function pintar(n) {
    // TAREA: encender las n primeras
}

// constantes al DOM que queremos escuchar
const contenedor = document.querySelector('#estrellas');
const estrellas = contenedor.querySelectorAll('.estrella-btn');
const texto = document.querySelector('#texto');

// colocar escuchadores de eventos
// TAREA: mouseenter y click en cada estrella; mouseleave en el contenedor

