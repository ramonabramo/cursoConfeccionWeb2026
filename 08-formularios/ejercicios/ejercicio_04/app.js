/* ==============================================================================
   EJERCICIO 04 · Mensajes de error propios con la API de validación

   OBJETIVO:
   Desactivar los avisos del navegador con novalidate y usar la API de
   validación (checkValidity y la propiedad validity) para mostrar mensajes
   de error propios bajo cada campo, marcarlos con aria-invalid y llevar el
   foco al primer error.

   PASOS A REALIZAR:
   1. Seleccionar el formulario, sus inputs (querySelectorAll('input')) y el
      párrafo de éxito.
   2. Declarar mensajeError(campo): según campo.validity, devolver el
      mensaje adecuado (valueMissing → Este campo es obligatorio;
      typeMismatch → Escribe un email válido, como nombre@dominio.com;
      tooShort → Escribe al menos N caracteres; rangeUnderflow /
      rangeOverflow → Debe estar entre MIN y MAX; patternMismatch → Debe
      tener 5 cifras) o '' si es válido.
   3. Declarar validarCampo(campo): escribe el mensaje en su párrafo de
      error (el id está en aria-describedby), pone aria-invalid a 'true' o
      'false' y devuelve si es válido.
   4. Escuchar submit: evitar la recarga, validar todos los campos y, si
      formulario.checkValidity() es false, llevar el foco al primer campo
      inválido.
   5. Si todo es válido, mostrar el mensaje de éxito y reiniciar el
      formulario.
   6. Escuchar también blur en cada campo para validarlo al salir de él.
   ============================================================================== */

// estructura del programa principal

// funciones
// TAREA: mensajeError(campo) → texto según campo.validity


// TAREA: validarCampo(campo) → muestra el error, aria-invalid, devuelve true/false


// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#registro');
const campos = formulario.querySelectorAll('input');
const exito = document.querySelector('#exito');

// colocar escuchadores de eventos
// TAREA: blur en cada campo → validarCampo


// TAREA: submit → validar todos, foco en el primero inválido o éxito

