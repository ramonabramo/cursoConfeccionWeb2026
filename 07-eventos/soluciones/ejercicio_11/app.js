/* ==============================================================================
   EJERCICIO 11 · Pestañas (SOLUCIÓN)

   OBJETIVO:
   Programar un componente de pestañas con el patrón de exclusión mutua: al
   activar una, se desactivan todas las demás, se muestra su panel y se
   ocultan los otros, manteniendo aria-selected al día.

   PASOS A REALIZAR:
   1. Seleccionar las pestañas (role=tab) y escuchar click en el contenedor
      #pestanas (delegación).
   2. Al pulsar una pestaña, recorrer TODAS: poner aria-selected a 'true'
      solo en la pulsada y a 'false' en el resto.
   3. Recorrer todos los paneles: quitar hidden solo al panel cuyo id
      coincide con el aria-controls de la pestaña pulsada.
   4. Comprobad que nunca hay dos pestañas activas ni dos paneles visibles,
      pulséis en el orden que pulséis.
   ============================================================================== */

// estructura del programa principal

// funciones
function activar(pestanaElegida) {
    // exclusión mutua: primero todas fuera, después solo la elegida dentro
    pestanas.forEach((pestana) => {
        pestana.setAttribute('aria-selected', pestana === pestanaElegida ? 'true' : 'false');
    });
    const idPanel = pestanaElegida.getAttribute('aria-controls');
    paneles.forEach((panel) => {
        panel.hidden = panel.id !== idPanel;
    });
}

// constantes al DOM que queremos escuchar
const contenedor = document.querySelector('#pestanas');
const pestanas = contenedor.querySelectorAll('[role="tab"]');
const paneles = document.querySelectorAll('[role="tabpanel"]');

// colocar escuchadores de eventos
contenedor.addEventListener('click', (e) => {
    const pestana = e.target.closest('[role="tab"]');
    if (pestana) {
        activar(pestana);
    }
});
