/* ==============================================================================
   EJERCICIO 09 · Pestañas reutilizables

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
    // TAREA: #pestanas, #paneles, #indice

    constructor(raiz) {
        // TAREA: buscar dentro de raiz y escuchar con flechas
    }

    // TAREA: activar(i) y get activa
}

// constantes al DOM que queremos escuchar
const raices = document.querySelectorAll('[data-pestanas]');
const estado = document.querySelector('#estado');

// TAREA: una instancia por raíz y el resumen en #estado

