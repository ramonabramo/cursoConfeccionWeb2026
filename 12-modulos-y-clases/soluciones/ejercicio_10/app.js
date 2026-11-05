/* ==============================================================================
   EJERCICIO 10 · Temporizadores independientes (SOLUCIÓN)

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
    static #activos = 0;          // de la CLASE: cuántos hay en marcha entre todos

    #segundos = 0;                // de cada INSTANCIA
    #id = null;
    #raiz;

    constructor(raiz) {
        this.#raiz = raiz;
        // flecha: this es el temporizador, no el elemento pulsado
        raiz.addEventListener('click', (e) => {
            const accion = e.target.closest('[data-accion]')?.dataset.accion;
            if (accion === 'alternar') this.alternar();
            if (accion === 'reiniciar') this.reiniciar();
        });
        this.pintar();
    }

    static get activos() {
        return Temporizador.#activos;
    }

    get enMarcha() {
        return this.#id !== null;
    }

    iniciar() {
        if (this.enMarcha) {
            return;
        }
        this.#id = setInterval(() => {      // flecha también aquí: si no, this sería otro
            this.#segundos++;
            this.pintar();
        }, 1000);
        Temporizador.#activos++;
        this.pintar();
    }

    pausar() {
        if (!this.enMarcha) {
            return;
        }
        clearInterval(this.#id);
        this.#id = null;
        Temporizador.#activos--;
        this.pintar();
    }

    alternar() {
        if (this.enMarcha) {
            this.pausar();
        } else {
            this.iniciar();
        }
    }

    reiniciar() {
        this.pausar();
        this.#segundos = 0;
        this.pintar();
    }

    pintar() {
        const mm = String(Math.floor(this.#segundos / 60)).padStart(2, '0');
        const ss = String(this.#segundos % 60).padStart(2, '0');
        this.#raiz.querySelector('.tiempo').textContent = `${mm}:${ss}`;
        this.#raiz.querySelector('[data-accion="alternar"]').textContent = this.enMarcha ? 'Pausar' : 'Iniciar';
        this.#raiz.classList.toggle('en-marcha', this.enMarcha);
    }
}

// constantes al DOM que queremos escuchar
const raices = document.querySelectorAll('.temporizador');
const resumen = document.querySelector('#resumen');

const temporizadores = Array.from(raices).map((raiz) => new Temporizador(raiz));

setInterval(() => {
    const n = Temporizador.activos;
    resumen.textContent = `${n} ${n === 1 ? 'temporizador' : 'temporizadores'} en marcha`;
}, 500);
