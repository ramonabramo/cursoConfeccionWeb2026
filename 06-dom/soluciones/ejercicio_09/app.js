/* ==============================================================================
   EJERCICIO 09 · Una tabla de clasificación en cebra (SOLUCIÓN)

   OBJETIVO:
   Recorrer una NodeList con un for clásico para usar la posición de cada
   elemento: numerar las filas, alternar una clase en las pares y destacar
   las tres primeras.

   PASOS A REALIZAR:
   1. Seleccionar todas las filas del tbody con
      querySelectorAll('#clasificacion tr').
   2. Recorrerlas con un for clásico. En la primera celda de cada fila
      (fila.children[0]) escribir la posición: i + 1.
   3. Con classList.toggle('par', i % 2 === 1), marcar las filas alternas.
   4. Con classList.toggle('podio', i < 3), destacar las tres primeras y
      añadir 🥇, 🥈 o 🥉 delante del nombre del equipo.
   5. Escribir: 7 equipos · líder: Atlético Arenal con 71 puntos.
   ============================================================================== */

// estructura del programa principal
const MEDALLAS = ['🥇', '🥈', '🥉'];

// constantes al DOM
const filas = document.querySelectorAll('#clasificacion tr');
const resumen = document.querySelector('#resumen');

// procesamiento y salidas
// for clásico: necesito la POSICIÓN de cada fila
for (let i = 0; i < filas.length; i++) {
    const fila = filas[i];
    fila.children[0].textContent = i + 1;                 // posición
    fila.classList.toggle('par', i % 2 === 1);           // cebra
    fila.classList.toggle('podio', i < 3);               // las tres primeras
    if (i < 3) {
        const celdaEquipo = fila.children[1];
        celdaEquipo.textContent = `${MEDALLAS[i]} ${celdaEquipo.textContent}`;
    }
}

const lider = filas[0].children;
resumen.textContent = `${filas.length} equipos · líder: ${lider[1].textContent.slice(3)} con ${lider[2].textContent} puntos`;
