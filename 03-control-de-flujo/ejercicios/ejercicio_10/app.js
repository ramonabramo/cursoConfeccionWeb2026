/* ==============================================================================
   EJERCICIO 10 · Tarifas del parque de atracciones

   OBJETIVO:
   Clasificar un valor por tramos con una cadena de else if ordenada,
   comprobar los valores frontera y resaltar en la página el tramo elegido.

   PASOS A REALIZAR:
   1. Pedir la edad con prompt() y convertirla con Number() (por defecto
      17).
   2. Con una cadena de if…else if ordenada de mayor a menor edad, decidir
      el precio y el id del tramo (tramoSenior, tramoAdulto, tramoNino o
      tramoBebe).
   3. Si la edad no es un número válido (Number.isNaN) o es negativa,
      mostrar un mensaje de error y no resaltar nada.
   4. Resaltar el li del tramo con style.backgroundColor y style.fontWeight.
   5. Mostrar: Con 17 años, la entrada cuesta 18 €.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM
const salida = document.querySelector('#salida');

// entradas
// TAREA: la edad


// procesamiento
let precio = 0;
let idTramo = '';
// TAREA: la validación y los tramos, de mayor a menor


// salidas
// TAREA: resaltar el tramo y escribir el precio

