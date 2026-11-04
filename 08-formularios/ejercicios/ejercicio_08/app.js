/* ==============================================================================
   EJERCICIO 08 · Inscripciones a un taller

   OBJETIVO:
   Construir un formulario completo que combina todo el bloque: validación
   nativa y una regla propia (email repetido), mensajes accesibles,
   FormData, un array de inscritos como estado, una tabla generada a partir
   de él con borrado por delegación y un límite de plazas.

   PASOS A REALIZAR:
   1. Declarar MAX_PLAZAS = 5 y el array inscritos vacío (el estado).
   2. Reutilizar mensajeError y validarCampo del ejercicio 04, añadiendo el
      caso customError (devolver campo.validationMessage).
   3. Declarar renderizar(): pinta una fila por inscrito con un botón Borrar
      (data-email), actualiza #plazas y, si no quedan plazas, desactiva el
      botón de inscribirse.
   4. En el submit: evitar la recarga; comprobar con setCustomValidity si el
      email ya está inscrito (comparando en minúsculas); validar los campos;
      si hay errores, foco en el primero y salir.
   5. Si todo va bien: añadir al array un objeto con los datos de FormData,
      renderizar, mostrar el mensaje de éxito, reiniciar el formulario y
      devolver el foco al nombre.
   6. Al escribir en el email, borrar el error personalizado
      (setCustomValidity('')) para que no se quede pegado.
   7. Escuchar click en el tbody (delegación): si se pulsa un botón con
      data-email, quitar a esa persona del array y renderizar.
   8. Llamar a renderizar() al cargar.
   ============================================================================== */

// estructura del programa principal
const MAX_PLAZAS = 5;
let inscritos = [];

// funciones
// TAREA: mensajeError(campo) (con customError)


// TAREA: validarCampo(campo)


// TAREA: renderizar()


// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#inscripcion');
const campoNombre = document.querySelector('#nombre');
const campoEmail = document.querySelector('#email');
const btnInscribir = document.querySelector('#btnInscribir');
const plazas = document.querySelector('#plazas');
const mensaje = document.querySelector('#mensaje');
const cuerpoTabla = document.querySelector('#cuerpoTabla');

// colocar escuchadores de eventos
// TAREA: input en el email → borrar el error personalizado


// TAREA: submit


// TAREA: borrar inscritos (delegación en el tbody)


// TAREA: estado inicial

