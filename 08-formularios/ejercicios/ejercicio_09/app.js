/* ==============================================================================
   EJERCICIO 09 · Marcar todas las casillas

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
    // TAREA: checked, indeterminate y contador
}

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#formPermisos');
const maestra = document.querySelector('#maestra');
const casillas = Array.from(formulario.querySelectorAll('[name="permiso"]'));
const contador = document.querySelector('#contador');
const resultado = document.querySelector('#resultado');

// colocar escuchadores de eventos
// TAREA: change en la maestra, change en el grupo y submit

