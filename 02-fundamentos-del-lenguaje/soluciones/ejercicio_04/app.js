/* ==============================================================================
   EJERCICIO 04 · Marcador de videojuego (SOLUCIÓN)

   OBJETIVO:
   Modificar una variable con los operadores de asignación compuesta (+=,
   -=, *=, /=) y con los de incremento y decremento (++ y --), y usar +=
   también para ir acumulando texto.

   PASOS A REALIZAR:
   1. Declarar con let la variable puntos a 0 y la variable historial con un
      texto vacío ('').
   2. Crear las constantes al DOM historial y puntuacion. Para no repetir
      nombres, llamad a las constantes salidaHistorial y salidaPuntuacion.
   3. Jugada 1: coger una moneda → sumar 50 con +=. Añadir al historial la
      línea: Moneda +50 → 50
   4. Jugada 2: tocar un enemigo → restar 20 con -=.
   5. Jugada 3: cofre del tesoro → multiplicar por 3 con *=.
   6. Jugada 4: trampa → dividir entre 2 con /=.
   7. Jugada 5: vida extra → sumar 1 con ++.
   8. Jugada 6: penalización → restar 1 con --.
   9. Después de cada jugada, añadir una línea al historial con += y el
      salto de línea \n.
   10. Mostrar el historial y la puntuación final.
   ============================================================================== */

// estructura del programa principal
let puntos = 0;
let historial = '';   // empiezo con un texto vacío y lo voy llenando

// constantes al DOM
const salidaHistorial = document.querySelector('#historial');
const salidaPuntuacion = document.querySelector('#puntuacion');

// entradas
// (en este ejercicio no hay entradas)

// procesamiento
// jugada 1 · moneda: puntos = puntos + 50
puntos += 50;
historial += `Moneda        +50  → ${puntos}\n`;

// jugada 2 · enemigo: puntos = puntos - 20
puntos -= 20;
historial += `Enemigo       −20  → ${puntos}\n`;

// jugada 3 · cofre: puntos = puntos * 3
puntos *= 3;
historial += `Cofre         ×3   → ${puntos}\n`;

// jugada 4 · trampa: puntos = puntos / 2
puntos /= 2;
historial += `Trampa        ÷2   → ${puntos}\n`;

// jugada 5 · vida extra: puntos = puntos + 1
puntos++;
historial += `Vida extra    +1   → ${puntos}\n`;

// jugada 6 · penalización: puntos = puntos - 1
puntos--;
historial += `Penalización  −1   → ${puntos}`;

// salidas
salidaHistorial.textContent = historial;
salidaPuntuacion.textContent = `Puntuación final: ${puntos} puntos`;
