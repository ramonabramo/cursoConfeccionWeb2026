/* ==============================================================================
   EJERCICIO 06 · Formulario de contacto accesible

   OBJETIVO:
   Mostrar los errores de un formulario de forma accesible: mensaje junto a
   cada campo enlazado con aria-describedby, estado con aria-invalid,
   validación al salir del campo y en vivo una vez marcado, y un resumen de
   errores al enviar con enlaces a cada campo.

   PASOS A REALIZAR:
   1. Reutilizar mensajeError(campo) del ejercicio 04, añadiendo el caso del
      teléfono (patternMismatch → Escribe 9 cifras, sin espacios) y el del
      mensaje (tooShort).
   2. Declarar validarCampo(campo) igual que en el ejercicio 04.
   3. Escuchar blur en cada campo para validarlo al salir.
   4. Escuchar input en cada campo: SOLO si ya está marcado como inválido
      (aria-invalid='true'), volver a validarlo. Así el error desaparece en
      cuanto se corrige, sin molestar mientras se escribe por primera vez.
   5. Al enviar: validar todos; si hay errores, construir dentro de
      #resumenErrores un h2 Hay N errores en el formulario y una lista con
      un enlace por error (href='#id-del-campo', texto: Etiqueta: mensaje).
      Después, poner el foco en el resumen.
   6. Si no hay errores, vaciar el resumen, mostrar el éxito en #exito (que
      tiene aria-live) y reiniciar el formulario.
   ============================================================================== */

// estructura del programa principal

// funciones
// TAREA: mensajeError(campo)


// TAREA: validarCampo(campo)


// TAREA: mostrarResumen(errores)


// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#contacto');
const campos = formulario.querySelectorAll('input, textarea');
const resumenErrores = document.querySelector('#resumenErrores');
const exito = document.querySelector('#exito');

// colocar escuchadores de eventos
// TAREA: blur e input en cada campo


// TAREA: submit con resumen de errores

