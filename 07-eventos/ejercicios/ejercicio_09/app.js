/* ==============================================================================
   EJERCICIO 09 · Coordenadas del ratón

   OBJETIVO:
   Leer las coordenadas del ratón en un evento, distinguir entre las medidas
   respecto a la ventana (clientX/Y) y respecto al elemento (offsetX/Y), y
   usar estas últimas para saber en qué cuadrante se ha hecho clic.

   PASOS A REALIZAR:
   1. Escuchar mousemove en #zona y escribir en #posicion: Ventana: (412,
      230) · zona: (180, 95).
   2. Escuchar click en #zona: calcular si offsetX está en la mitad
      izquierda o derecha (zona.clientWidth / 2) y si offsetY está arriba o
      abajo.
   3. Escribir en #clic: Clic arriba a la izquierda (180, 95).
   4. Mover el #punto a la posición del clic con style.left y style.top (en
      px) y quitarle hidden.
   5. Escuchar mouseleave en #zona para escribir Fuera de la zona en
      #posicion.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM que queremos escuchar
const zona = document.querySelector('#zona');
const punto = document.querySelector('#punto');
const posicion = document.querySelector('#posicion');
const clic = document.querySelector('#clic');

// colocar escuchadores de eventos
// TAREA: mousemove → coordenadas de la ventana y de la zona


// TAREA: click → cuadrante y punto


// TAREA: mouseleave → Fuera de la zona

