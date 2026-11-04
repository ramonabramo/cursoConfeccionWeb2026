/* ==============================================================================
   EJERCICIO 07 · Clasificación: mover y eliminar (SOLUCIÓN)

   OBJETIVO:
   Modificar elementos que ya existen en la página: leer sus datos con
   dataset, eliminarlos con remove() y reordenarlos aprovechando que
   append() mueve un elemento cuando ya está en el documento.

   PASOS A REALIZAR:
   1. Seleccionar todos los li de la clasificación y convertirlos en un
      array con Array.from.
   2. Recorrerlos y eliminar con remove() los que tengan 0 puntos
      (dataset.puntos, convertido a número). Apuntad sus nombres en el
      informe.
   3. Con filter, quedaros en un array con los equipos que siguen.
   4. Ordenar ese array de mayor a menor por puntos.
   5. Recorrer el array ordenado y hacer append de cada li en la propia
      lista. Observad qué pasa: ¿se duplican?
   6. Añadir la clase primero al primer equipo y escribir en cada li su
      nombre con los puntos: Tiburones · 21 pts.
   7. Completar el informe con cuántos li quedan en la lista.
   ============================================================================== */

// estructura del programa principal
let informe = '';

// constantes al DOM
const clasificacion = document.querySelector('#clasificacion');
const salidaInforme = document.querySelector('#informe');
const equipos = Array.from(clasificacion.querySelectorAll('li'));

// funciones
// dataset siempre devuelve texto: lo convierto a número
const puntosDe = (li) => Number(li.dataset.puntos);

// procesamiento
// 1. eliminar los que no tienen puntos
informe += 'Retirados:\n';
equipos.forEach((li) => {
    if (puntosDe(li) === 0) {
        informe += `  ✘ ${li.textContent}\n`;
        li.remove();                       // desaparece de la página
    }
});

// 2. los que siguen, ordenados de mayor a menor
const siguen = equipos
    .filter((li) => puntosDe(li) > 0)
    .sort((a, b) => puntosDe(b) - puntosDe(a));

// 3. append de un elemento que YA está en la página → lo MUEVE al final
//    haciéndolo en orden, la lista queda ordenada
siguen.forEach((li) => {
    clasificacion.append(li);
});

// 4. retoques finales
siguen[0].classList.add('primero');
siguen.forEach((li) => {
    li.textContent = `${li.textContent} · ${puntosDe(li)} pts`;
});

// salidas
informe += `\nQuedan ${clasificacion.querySelectorAll('li').length} equipos en la lista (ni uno duplicado).`;
salidaInforme.textContent = informe;
