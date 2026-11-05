/* ==============================================================================
   EJERCICIO 09 · Pestañas reutilizables (SOLUCIÓN)

   OBJETIVO:
   Convertir el patrón de pestañas del bloque 07 en una clase reutilizable:
   cada instancia controla su propia raíz, guarda su estado en campos
   privados y escucha con funciones flecha para conservar this.

   PASOS A REALIZAR:
   1. Declarar class Pestanas con los campos privados #pestanas, #paneles e
      #indice = 0.
   2. En el constructor(raiz), buscar las pestañas y los paneles DENTRO de
      raiz (raiz.querySelectorAll) y escuchar click en cada pestaña con una
      flecha que llame a this.activar(i).
   3. Declarar activar(i): exclusión mutua con aria-selected y hidden, como
      en el bloque 07, y guardar #indice. Activar la 0 al construir.
   4. Declarar un getter activa que devuelva el texto de la pestaña activa.
   5. Crear una instancia por cada [data-pestanas] y, tras cada clic en la
      página, escribir en #estado: Lenguajes: CSS · Herramientas: Editor.
   ============================================================================== */

// estructura del programa principal

// clases
class Pestanas {
    #pestanas;
    #paneles;
    #indice = 0;

    constructor(raiz) {
        // 1. buscar SIEMPRE dentro de la raíz: así dos instancias no se pisan
        this.#pestanas = raiz.querySelectorAll('[role="tab"]');
        this.#paneles = raiz.querySelectorAll('[role="tabpanel"]');
        this.nombre = raiz.querySelector('[role="tablist"]').getAttribute('aria-label');

        // 2. flecha: dentro, this sigue siendo ESTA instancia (no el botón)
        this.#pestanas.forEach((pestana, i) => {
            pestana.addEventListener('click', () => this.activar(i));
        });
        this.activar(0);
    }

    activar(i) {
        this.#indice = i;
        this.#pestanas.forEach((p, n) => p.setAttribute('aria-selected', n === i ? 'true' : 'false'));
        this.#paneles.forEach((panel, n) => {
            panel.hidden = n !== i;
        });
    }

    get activa() {
        return this.#pestanas[this.#indice].textContent;
    }
}

// constantes al DOM que queremos escuchar
const raices = document.querySelectorAll('[data-pestanas]');
const estado = document.querySelector('#estado');

// una instancia por cada grupo de pestañas de la página
const componentes = Array.from(raices).map((raiz) => new Pestanas(raiz));

function resumir() {
    estado.textContent = componentes.map((c) => `${c.nombre}: ${c.activa}`).join(' · ');
}

// colocar escuchadores de eventos
document.addEventListener('click', resumir);
resumir();
