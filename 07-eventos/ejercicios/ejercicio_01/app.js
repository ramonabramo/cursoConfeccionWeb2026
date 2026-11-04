/* ==============================================================================
   EJERCICIO 01 · Contador de clics

   OBJETIVO:
   Reaccionar a los clics del usuario con addEventListener usando funciones
   con nombre y funciones flecha, mantener un estado entre clic y clic, y
   retirar un escuchador con removeEventListener.

   PASOS A REALIZAR:
   1. Declarar la constante LIMITE = 10 y la variable contador = 0.
   2. Declarar la función pintar(): escribe el contador en la página y le
      pone la clase negativo solo si es menor que 0 (classList.toggle con
      segundo argumento).
   3. Declarar la función sumar(): suma 1 y pinta. Si llega al límite,
      retira su propio escuchador con removeEventListener('click', sumar),
      desactiva el botón (disabled = true) y avisa.
   4. Crear las constantes al DOM de los tres botones, el contador y el
      aviso.
   5. Escuchar el clic de btnMas con la función sumar (sin paréntesis).
   6. Escuchar el clic de btnMenos con una función flecha que reste 1 y
      pinte.
   7. Escuchar el clic de btnReiniciar: poner el contador a 0, pintar,
      reactivar el botón +1 y volver a añadirle el escuchador sumar.
   ============================================================================== */

// estructura del programa principal
const LIMITE = 10;
let contador = 0;

// funciones
// TAREA: pintar()


// TAREA: sumar() (con removeEventListener al llegar al límite)


// constantes al DOM que queremos escuchar
// TAREA: btnMenos, btnMas, btnReiniciar, salidaContador y aviso


// colocar escuchadores de eventos
// TAREA: btnMas → sumar


// TAREA: btnMenos → función flecha


// TAREA: btnReiniciar → reiniciar y volver a escuchar btnMas

