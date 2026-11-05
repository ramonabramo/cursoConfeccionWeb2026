/* ==============================================================================
   EJERCICIO 02 · Formas de exportar e importar (SOLUCIÓN)

   OBJETIVO:
   Conocer las formas de exportar e importar (con nombre, con alias, por
   defecto y el módulo entero) y comprobar en directo cuatro diferencias de
   los módulos con los scripts clásicos: modo estricto, ámbito propio, carga
   diferida y ejecución única.

   PASOS A REALIZAR:
   1. Importar areaCirculo y areaRectangulo de geometria.js; la segunda con
      el alias areaRect (import { areaRectangulo as areaRect }).
   2. Importar la función por defecto de conversor.js con el nombre que
      queráis (import convertir from './conversor.js') y convertir 2 metros
      a 'cm'.
   3. Importar geometria.js entero con import * as geo y escribir
      Object.keys(geo).join(', ').
   4. Importar resumen de informe.js y visitas y sumarVisita de contador.js.
      Escribir resumen() en #resUnaVez.
   5. Escribir typeof this, declarar const secreto = 42 y escribir
      String(window.secreto), y escribir document.readyState.
   6. Dentro de un try, intentar visitas = 99; en el catch, escribir el
      nombre y el mensaje del error.
   7. Al pulsar Sumar visita, llamar a sumarVisita() y volver a escribir
      visitas. ¿Cambia aunque lo importasteis al principio?
   ============================================================================== */

// estructura del programa principal
import { areaCirculo, areaRectangulo as areaRect } from './geometria.js';   // con nombre y con alias
import convertir from './conversor.js';                                     // por defecto: el nombre lo elijo yo
import * as geo from './geometria.js';                                      // el módulo entero en un objeto
import { resumen } from './informe.js';
import { visitas, sumarVisita } from './contador.js';

// funciones
function escribir(id, texto) {
    document.querySelector(`#${id}`).textContent = texto;
}

// las formas de importar
escribir('resNombre', areaCirculo(2).toFixed(2));
escribir('resAlias', areaRect(3, 4));
escribir('resDefecto', `${convertir(2, 'cm')} cm`);
escribir('resTodo', Object.keys(geo).join(', '));

// lo que cambia en un módulo
escribir('resUnaVez', resumen());
escribir('resThis', `typeof this → ${typeof this}`);        // modo estricto: undefined

const secreto = 42;
escribir('resGlobal', `window.secreto → ${String(window.secreto)}`);   // ámbito propio

escribir('resDiferido', document.readyState);               // diferido: el HTML ya está leído

try {
    visitas = 99;                                           // solo contador.js puede cambiarla
} catch (error) {
    escribir('resAsignar', `${error.name}: ${error.message}`);
}
escribir('resVisitas', visitas);

// constantes al DOM que queremos escuchar
const btnVisita = document.querySelector('#btnVisita');

// colocar escuchadores de eventos
btnVisita.addEventListener('click', () => {
    sumarVisita();
    escribir('resVisitas', visitas);                       // el import ve el valor actualizado
});
