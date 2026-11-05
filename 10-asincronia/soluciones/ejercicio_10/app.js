/* ==============================================================================
   EJERCICIO 10 · Reloj y fecha en vivo (SOLUCIÓN)

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

// un formateador se crea una vez y se usa muchas
const formatoLargo = new Intl.DateTimeFormat('es-ES', { dateStyle: 'full' });
const formatoIngles = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' });

function actualizar() {
    const ahora = new Date();
    reloj.textContent = ahora.toLocaleTimeString('es-ES');   // '18:42:05'
    fecha.textContent = formatoLargo.format(ahora);           // 'jueves, 5 de noviembre de 2026'
}

// constantes al DOM que queremos escuchar
const reloj = document.querySelector('#reloj');
const fecha = document.querySelector('#fecha');

actualizar();                          // sin esperar al primer segundo
setInterval(actualizar, 1000);

// la tabla: las rarezas de Date
const hoy = new Date();
escribir('resDia', `${hoy.getDay()} → ${DIAS[hoy.getDay()]}`);          // 0 = domingo
escribir('resMes', `${hoy.getMonth()} → ${MESES[hoy.getMonth()]}`);     // 0 = enero

const unoDeEnero = new Date(hoy.getFullYear(), 0, 1);                  // mes 0: enero
const diaDelAnio = Math.floor((hoy.getTime() - unoDeEnero.getTime()) / MS_DIA) + 1;
escribir('resDiaAnio', diaDelAnio);
escribir('resIngles', formatoIngles.format(hoy));
