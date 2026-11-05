/* ==============================================================================
   EJERCICIO 03 · Preferencias de tema y tamaño de letra (SOLUCIÓN)

   OBJETIVO:
   Guardar las preferencias del usuario en localStorage, aplicarlas a la
   página mediante atributos data-* en el body y recuperarlas al cargar,
   usando un valor por defecto cuando no hay nada guardado.

   PASOS A REALIZAR:
   1. Declarar las claves CLAVE_TEMA = 'curso-js:b09e03:tema' y CLAVE_TAMANO
      = 'curso-js:b09e03:tamano'.
   2. Declarar aplicar(tema, tamano): pone document.body.dataset.tema y
      dataset.tamano (el CSS ya tiene las reglas), coloca los dos select en
      esos valores y escribe en #estado Preferencias aplicadas: oscuro ·
      grande.
   3. Al cargar, leer las dos claves. Si alguna es null, usar 'claro' y
      'normal' por defecto (podéis usar ?? o ||). Llamar a aplicar.
   4. Escuchar change en cada select: guardar el valor nuevo en su clave y
      volver a aplicar.
   ============================================================================== */

// estructura del programa principal
const CLAVE_TEMA = 'curso-js:b09e03:tema';
const CLAVE_TAMANO = 'curso-js:b09e03:tamano';

// funciones
// pone la página (y los controles) a juego con las preferencias
function aplicar(tema, tamano) {
    // data-tema y data-tamano en el body: el CSS hace el resto
    document.body.dataset.tema = tema;
    document.body.dataset.tamano = tamano;
    selectTema.value = tema;
    selectTamano.value = tamano;
    estado.textContent = `Preferencias aplicadas: ${tema} · ${tamano}`;
}

// constantes al DOM que queremos escuchar
const selectTema = document.querySelector('#tema');
const selectTamano = document.querySelector('#tamano');
const estado = document.querySelector('#estado');

// colocar escuchadores de eventos
selectTema.addEventListener('change', () => {
    localStorage.setItem(CLAVE_TEMA, selectTema.value);
    aplicar(selectTema.value, selectTamano.value);
});

selectTamano.addEventListener('change', () => {
    localStorage.setItem(CLAVE_TAMANO, selectTamano.value);
    aplicar(selectTema.value, selectTamano.value);
});

// al cargar: lo guardado o, si no hay nada (null), el valor por defecto
const temaGuardado = localStorage.getItem(CLAVE_TEMA) ?? 'claro';
const tamanoGuardado = localStorage.getItem(CLAVE_TAMANO) ?? 'normal';
aplicar(temaGuardado, tamanoGuardado);
