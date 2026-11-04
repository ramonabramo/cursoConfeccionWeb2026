/* ==============================================================================
   EJERCICIO 01 · Explorador del árbol DOM

   OBJETIVO:
   Localizar elementos del DOM con querySelector usando distintos tipos de
   selector CSS (etiqueta, id, clase, descendiente, pseudoclase y atributo),
   comprobar qué devuelve cuando no encuentra nada y moverse por el árbol
   con children y parentElement.

   PASOS A REALIZAR:
   1. Crear la constante al DOM informe y un acumulador de texto.
   2. Declarar la función describir(selector) que haga
      querySelector(selector) y devuelva una línea: si encuentra algo, el
      selector, el tagName y el textContent; si devuelve null, el selector y
      la palabra null.
   3. Usar describir con estos selectores: 'h2', '#ingredientes',
      '.importante', '#ingredientes li', 'li:last-child', '[data-tiempo]' y
      '#noExiste'.
   4. Guardar en constantes la lista de ingredientes (#ingredientes) y el
      ingrediente importante (.importante).
   5. Añadir al informe cuántos hijos tiene la lista (children.length), el
      texto de su primer hijo (children[0]) y el id del padre del
      ingrediente importante (parentElement.id).
   6. Mostrar el informe.
   ============================================================================== */

// estructura del programa principal
let informe = '';

// funciones
// TAREA: describir(selector)


// constantes al DOM
const salidaInforme = document.querySelector('#informe');

// procesamiento
// TAREA: describe los siete selectores


// TAREA: navega por el árbol (children y parentElement)


// salidas
// TAREA: muestra el informe

