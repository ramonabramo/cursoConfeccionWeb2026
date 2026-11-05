/* ==============================================================================
   EJERCICIO 14 · Un marcador aislado con IIFE

   OBJETIVO:
   Escribir una IIFE que se ejecuta al cargar, mantiene sus variables
   privadas y expone hacia fuera solo lo que decide, y comprobar desde fuera
   qué es visible y qué no.

   PASOS A REALIZAR:
   1. Escribir una función flecha entre paréntesis y llamarla en el acto:
      (() => { … })().
   2. Dentro, declarar let puntos = 0 y una función sumar(n) que suma y
      escribe en #marcador Marcador: 30 puntos.
   3. Llamar a sumar(10) y a sumar(20) dentro de la IIFE.
   4. Hacer que la IIFE devuelva un objeto con un solo método, ver(), que
      devuelve los puntos. Guardarlo fuera en const marcadorPublico.
   5. Fuera de la IIFE, rellenar la tabla con typeof puntos, typeof sumar y
      marcadorPublico.ver().
   ============================================================================== */

// estructura del programa principal
// TAREA: const marcadorPublico = (() => { … })();


// constantes al DOM
const resPuntos = document.querySelector('#resPuntos');
const resSumar = document.querySelector('#resSumar');
const resPublico = document.querySelector('#resPublico');

// salidas: lo que se ve desde fuera
// TAREA

