/* ==============================================================================
   EJERCICIO 10 · Temporizadores independientes

   OBJETIVO:
   Encapsular un setInterval dentro de una clase con campos privados, para
   que varias instancias cuenten de forma independiente, usar funciones
   flecha para no perder this y llevar la cuenta de las instancias con un
   miembro static.

   PASOS A REALIZAR:
   1. Declarar class Temporizador con #segundos = 0, #id = null y #raiz, y
      static #activos = 0 con su getter static activos.
   2. En el constructor(raiz), guardar la raíz y escuchar click en ella
      (delegación por data-accion) con una flecha: alternar →
      this.alternar(); reiniciar → this.reiniciar().
   3. iniciar(): si no está en marcha, setInterval con una flecha que suma
      un segundo y pinta; Temporizador.#activos++. pausar(): clearInterval,
      #id = null, Temporizador.#activos--.
   4. alternar() inicia o pausa según get enMarcha. reiniciar() pausa y pone
      #segundos = 0. pintar() escribe mm:ss, el texto del botón (Iniciar o
      Pausar) y la clase en-marcha.
   5. Crear las tres instancias y, cada medio segundo, escribir en #resumen:
      2 temporizadores en marcha.
   ============================================================================== */

// estructura del programa principal

// clases
class Temporizador {
    // TAREA: privados y static #activos

    constructor(raiz) {
        // TAREA
    }

    // TAREA: get enMarcha, iniciar(), pausar(), alternar(), reiniciar(), pintar() y static get activos
}

// constantes al DOM que queremos escuchar
const raices = document.querySelectorAll('.temporizador');
const resumen = document.querySelector('#resumen');

// TAREA: las tres instancias y el resumen

