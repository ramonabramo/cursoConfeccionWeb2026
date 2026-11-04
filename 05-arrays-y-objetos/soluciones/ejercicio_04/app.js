/* ==============================================================================
   EJERCICIO 04 · map, filter, reduce y sort (SOLUCIÓN)

   OBJETIVO:
   Usar los métodos que devuelven un resultado nuevo a partir de un array:
   map para transformar, filter para seleccionar, reduce para resumir,
   encadenarlos, y ordenar números correctamente con sort sin modificar el
   original.

   PASOS A REALIZAR:
   1. Crear el array precios con 12.5, 30, 8, 45, 19.99 y 5, y la constante
      IVA = 0.21.
   2. Declarar la función formatear(lista) que devuelva los números con dos
      decimales separados por ' · '. Pista: lista.map(…).join(' · ').
   3. Con map, crear conIva: cada precio multiplicado por 1 + IVA.
   4. Con filter, crear baratos: los precios menores de 20.
   5. Con reduce, calcular total: la suma de todos los precios, empezando en
      0.
   6. Encadenar filter, map y reduce en una sola expresión para obtener el
      total con IVA de los precios menores de 20.
   7. Ordenar una COPIA de precios con sort() sin argumentos y otra copia
      con sort((a, b) => a - b). Para copiar, usad [...precios].
   8. Rellenar la tabla y comprobar en la última fila que precios no ha
      cambiado.
   ============================================================================== */

// estructura del programa principal
const precios = [12.5, 30, 8, 45, 19.99, 5];
const IVA = 0.21;

// funciones
// [12.5, 30] → "12.50 · 30.00"
function formatear(lista) {
    return lista.map((n) => n.toFixed(2)).join(' · ');
}

// constantes al DOM
const original = document.querySelector('#original');
const celdaConIva = document.querySelector('#conIva');
const celdaBaratos = document.querySelector('#baratos');
const celdaTotal = document.querySelector('#total');
const celdaEncadenado = document.querySelector('#encadenado');
const ordenMal = document.querySelector('#ordenMal');
const ordenBien = document.querySelector('#ordenBien');
const originalFinal = document.querySelector('#originalFinal');

// procesamiento
// map: TRANSFORMA cada elemento → array nuevo del mismo tamaño
const conIva = precios.map((p) => p * (1 + IVA));

// filter: SELECCIONA los que cumplen → array nuevo, quizá más corto
const baratos = precios.filter((p) => p < 20);

// reduce: RESUME todo en un valor. acc es el acumulador; 0, su valor inicial
const total = precios.reduce((acc, p) => acc + p, 0);

// encadenado: cada método trabaja sobre el resultado del anterior
const totalBaratosConIva = precios
    .filter((p) => p < 20)
    .map((p) => p * (1 + IVA))
    .reduce((acc, p) => acc + p, 0);

// sort ORDENA EL PROPIO ARRAY: por eso lo hago sobre una copia [...precios]
const ordenadosMal = [...precios].sort();                   // compara como TEXTO
const ordenadosBien = [...precios].sort((a, b) => a - b);   // compara como número

// salidas
original.textContent = formatear(precios);
celdaConIva.textContent = formatear(conIva);
celdaBaratos.textContent = formatear(baratos);
celdaTotal.textContent = `${total.toFixed(2)} €`;
celdaEncadenado.textContent = `${totalBaratosConIva.toFixed(2)} €`;
ordenMal.textContent = formatear(ordenadosMal);
ordenBien.textContent = formatear(ordenadosBien);
originalFinal.textContent = formatear(precios);   // sigue igual
