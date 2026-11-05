/* ==============================================================================
   EJERCICIO 10 · Reloj y fecha en vivo

   OBJETIVO:
   Mostrar un reloj que se actualiza cada segundo con setInterval y una
   fecha larga en español, y comprobar las rarezas de Date: meses desde 0 y
   semana desde el domingo.

   PASOS A REALIZAR:
   1. Crear un formateador con new Intl.DateTimeFormat('es-ES', { dateStyle:
      'full' }) para la fecha larga.
   2. Declarar actualizar(): crea new Date(), escribe la hora con
      toLocaleTimeString('es-ES') y la fecha con el formateador.
   3. Llamar a actualizar() al cargar y programarla cada segundo con
      setInterval.
   4. Rellenar la tabla: el número de getDay() y getMonth() junto a su
      nombre (por ejemplo 4 → jueves, 10 → noviembre).
   5. Calcular el día del año restando el 1 de enero (new Date(año, 0, 1)) y
      dividiendo entre los milisegundos de un día. Mostrar también la fecha
      en inglés con otro formateador ('en-GB').
   ============================================================================== */

// estructura del programa principal
const DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const MS_DIA = 1000 * 60 * 60 * 24;

// funciones
function escribir(id, valor) {
    document.querySelector(`#${id}`).textContent = valor;
}

// TAREA: el formateador y actualizar()


// constantes al DOM que queremos escuchar
const reloj = document.querySelector('#reloj');
const fecha = document.querySelector('#fecha');

// TAREA: actualizar() ahora y cada segundo; la tabla

