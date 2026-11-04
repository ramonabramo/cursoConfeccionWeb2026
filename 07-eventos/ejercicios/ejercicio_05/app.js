/* ==============================================================================
   EJERCICIO 05 · Campos que ayudan: focus, blur y preventDefault

   OBJETIVO:
   Reaccionar cuando un campo gana o pierde el foco (focus y blur) y anular
   el comportamiento por defecto del navegador con preventDefault, tanto en
   una tecla como en un enlace.

   PASOS A REALIZAR:
   1. Seleccionar todos los inputs de la página con querySelectorAll('.campo
      input').
   2. Recorrerlos y, en cada uno, escuchar focus para añadir la clase activo
      a su contenedor .campo (input.parentElement), y blur para quitársela.
   3. En el blur, mostrar además en #estado cuántos caracteres tiene el
      campo que se acaba de abandonar.
   4. En el teléfono, escuchar keydown: si la tecla no es un dígito y no es
      una de las permitidas (Backspace, Delete, ArrowLeft, ArrowRight, Tab),
      anularla con e.preventDefault() y mostrar en #estado qué tecla se ha
      bloqueado.
   5. En el enlace, escuchar click: preguntar con confirm si de verdad
      quiere salir y, si dice que no, anular la navegación con
      e.preventDefault() y escribir Navegación cancelada. en #estadoEnlace.
   ============================================================================== */

// estructura del programa principal
const TECLAS_PERMITIDAS = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];

// funciones
// TAREA (opcional): esDigito(tecla)


// constantes al DOM que queremos escuchar
// TAREA: campos, telefono, estado, enlaceSalir y estadoEnlace


// colocar escuchadores de eventos
// TAREA: focus y blur en cada campo


// TAREA: keydown en el teléfono con preventDefault


// TAREA: click en el enlace con confirm y preventDefault

