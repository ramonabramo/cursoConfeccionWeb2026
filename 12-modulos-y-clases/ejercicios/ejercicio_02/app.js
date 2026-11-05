/* ==============================================================================
   EJERCICIO 02 · Formas de exportar e importar

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
// TAREA: los import (con nombre, con alias, por defecto, * as geo, informe y contador)


// funciones
function escribir(id, texto) {
    document.querySelector(`#${id}`).textContent = texto;
}

// TAREA: experimentos con nombre, alias, defecto y * as geo


// TAREA: experimentos de módulo (una vez, this, global, readyState)


// TAREA: try { visitas = 99; } catch …


// constantes al DOM que queremos escuchar
const btnVisita = document.querySelector('#btnVisita');

// colocar escuchadores de eventos
// TAREA: click → sumarVisita() y volver a escribir visitas
