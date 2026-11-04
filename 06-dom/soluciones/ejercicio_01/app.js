/* ==============================================================================
   EJERCICIO 01 · Explorador del árbol DOM (SOLUCIÓN)

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
// busca con un selector y devuelve una línea describiendo lo encontrado
function describir(selector) {
    const elemento = document.querySelector(selector);
    if (elemento === null) {
        return `${selector.padEnd(18)} → null (no hay ninguno)`;
    }
    // /\s+/g: cualquier grupo de espacios y saltos de línea → un solo espacio
    const texto = elemento.textContent.trim().replace(/\s+/g, ' ');
    return `${selector.padEnd(18)} → <${elemento.tagName}> "${texto}"`;
}

// constantes al DOM
const salidaInforme = document.querySelector('#informe');

// procesamiento
informe += '--- querySelector con distintos selectores ---\n';
informe += describir('h2') + '\n';                 // por etiqueta: el PRIMER h2
informe += describir('#ingredientes') + '\n';      // por id
informe += describir('.importante') + '\n';        // por clase
informe += describir('#ingredientes li') + '\n';   // descendiente: el primer li dentro de la lista
informe += describir('li:last-child') + '\n';      // pseudoclase
informe += describir('[data-tiempo]') + '\n';      // por atributo
informe += describir('#noExiste') + '\n';          // no existe → null

// navegar por el árbol desde un elemento
const lista = document.querySelector('#ingredientes');
const importante = document.querySelector('.importante');

informe += '\n--- navegación ---\n';
informe += `La lista tiene ${lista.children.length} hijos\n`;
informe += `Su primer hijo dice "${lista.children[0].textContent}"\n`;
informe += `El padre de .importante es <${importante.parentElement.tagName}> con id "${importante.parentElement.id}"`;

// salidas
salidaInforme.textContent = informe;
