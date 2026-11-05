/* ==============================================================================
   EJERCICIO 12 · El PIN de tres intentos

   OBJETIVO:
   Repetir una pregunta un número máximo de veces con un bucle y un
   contador, salir antes con break cuando se acierta o se cancela, y dar un
   mensaje distinto según cómo terminó el bucle.

   PASOS A REALIZAR:
   1. Declarar const PIN = '4321', const MAX_INTENTOS = 3, let intentos = 0
      y let acertado = false.
   2. Con un while (intentos < MAX_INTENTOS), pedir el PIN con prompt()
      indicando el intento: Intento 1 de 3.
   3. Si se pulsa Cancelar (null), salir con break. Si no, sumar un intento
      y añadir al registro un li con lo escrito (oculto como ••••) y si es
      correcto.
   4. Si el PIN es correcto, poner acertado = true y salir con break.
   5. Después del bucle, tres mensajes posibles: acceso concedido (en
      cuántos intentos), cancelado, o tarjeta bloqueada.
   ============================================================================== */

// estructura del programa principal
const PIN = '4321';
const MAX_INTENTOS = 3;

// constantes al DOM
const salida = document.querySelector('#salida');
const registro = document.querySelector('#registro');

// procesamiento
let intentos = 0;
let acertado = false;
let cancelado = false;
// TAREA: while (intentos < MAX_INTENTOS) { … break … }


// salidas
// TAREA: tres mensajes según cómo terminó el bucle

