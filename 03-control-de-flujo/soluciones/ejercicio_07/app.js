/* ==============================================================================
   EJERCICIO 07 · Estadísticas hasta el cero (SOLUCIÓN)

   OBJETIVO:
   Usar un bucle do...while, que se ejecuta siempre al menos una vez, para
   leer datos hasta que llegue un valor de parada, calculando por el camino
   contador, suma, media y máximo.

   PASOS A REALIZAR:
   1. Crear las constantes al DOM de las cinco celdas y de salida.
   2. Declarar con let: cantidad = 0, suma = 0, mayor = -Infinity, invalidos
      = 0 y numero (sin valor).
   3. Con un do...while, pedir un número en cada vuelta y convertirlo. El
      bucle se repite mientras el número sea distinto de 0.
   4. Si el número es NaN, sumar uno a invalidos y saltar a la siguiente
      vuelta con continue.
   5. Si el número no es 0, sumar uno a cantidad, añadirlo a suma y
      actualizar mayor con Math.max().
   6. Al terminar, si cantidad es 0, mostrar en salida No has introducido
      ningún número. Si no, calcular la media (con dos decimales) y rellenar
      la tabla.
   ============================================================================== */

// estructura del programa principal
let cantidad = 0;
let suma = 0;
let mayor = -Infinity;   // cualquier número será mayor que este
let invalidos = 0;
let numero;

// constantes al DOM
const resCantidad = document.querySelector('#resCantidad');
const resSuma = document.querySelector('#resSuma');
const resMedia = document.querySelector('#resMedia');
const resMayor = document.querySelector('#resMayor');
const resInvalidos = document.querySelector('#resInvalidos');
const salida = document.querySelector('#salida');

// entradas y procesamiento
// do...while: primero pregunto, después compruebo → siempre pregunta al menos una vez
do {
    numero = Number(prompt('Escribe un número (0 para terminar):', '0'));

    if (Number.isNaN(numero)) {
        invalidos++;
        continue;   // en un do...while, continue salta a la comprobación del while
    }

    if (numero !== 0) {
        cantidad++;
        suma += numero;
        mayor = Math.max(mayor, numero);
    }
} while (numero !== 0);

// salidas
resInvalidos.textContent = invalidos;

if (cantidad === 0) {
    salida.textContent = 'No has introducido ningún número.';
} else {
    const media = suma / cantidad;
    resCantidad.textContent = cantidad;
    resSuma.textContent = suma;
    resMedia.textContent = media.toFixed(2);
    resMayor.textContent = mayor;
    salida.textContent = 'Estadísticas calculadas.';
}
