/* ==============================================================================
   EJERCICIO 09 · Marcar todas las casillas (SOLUCIÓN)

   OBJETIVO:
   Sincronizar una casilla maestra con un grupo de casillas en los dos
   sentidos, usando checked para marcar todas y la propiedad indeterminate
   para el caso de selección parcial.

   PASOS A REALIZAR:
   1. Seleccionar la maestra y las casillas del grupo (name=permiso) y
      convertir estas en array con Array.from.
   2. Declarar actualizarMaestra(): cuenta las marcadas, pone
      maestra.checked si están todas, maestra.indeterminate si hay algunas
      pero no todas, y escribe 2 de 4 permisos.
   3. Al cambiar la maestra (change), marcar o desmarcar todas las del grupo
      con su mismo checked y actualizar.
   4. Al cambiar cualquier casilla del grupo (delegación con change en el
      fieldset), actualizar la maestra.
   5. Al enviar, con FormData.getAll('permiso'), escribir: Guardado: cámara,
      ubicación (o Ningún permiso concedido).
   ============================================================================== */

// estructura del programa principal

// funciones
function actualizarMaestra() {
    const marcadas = casillas.filter((c) => c.checked).length;
    maestra.checked = marcadas === casillas.length;
    maestra.indeterminate = marcadas > 0 && marcadas < casillas.length;   // la raya
    contador.textContent = `${marcadas} de ${casillas.length} permisos`;
}

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#formPermisos');
const maestra = document.querySelector('#maestra');
const casillas = Array.from(formulario.querySelectorAll('[name="permiso"]'));
const contador = document.querySelector('#contador');
const resultado = document.querySelector('#resultado');

// colocar escuchadores de eventos
// de la maestra al grupo
maestra.addEventListener('change', () => {
    casillas.forEach((c) => {
        c.checked = maestra.checked;
    });
    actualizarMaestra();
});

// del grupo a la maestra (delegación: change burbujea)
formulario.addEventListener('change', (e) => {
    if (e.target.name === 'permiso') {
        actualizarMaestra();
    }
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const elegidos = new FormData(formulario).getAll('permiso');
    resultado.textContent = elegidos.length === 0
        ? 'Ningún permiso concedido.'
        : `Guardado: ${elegidos.join(', ')}.`;
});
