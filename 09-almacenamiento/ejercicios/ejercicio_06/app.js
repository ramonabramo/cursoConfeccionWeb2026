/* ==============================================================================
   EJERCICIO 06 · Un borrador que no se pierde

   OBJETIVO:
   Guardar automáticamente un borrador de varios campos como un único objeto
   JSON mientras el usuario escribe, recuperarlo al cargar la página y
   borrarlo al enviar o descartar.

   PASOS A REALIZAR:
   1. Declarar CLAVE = 'curso-js:b09e06:borrador'.
   2. Declarar guardarBorrador(): crea un objeto { asunto, mensaje } con los
      valores de los campos, lo guarda con JSON.stringify y escribe en
      #estado Borrador guardado · 42 caracteres.
   3. Declarar recuperarBorrador(): lee la clave; si es null, no hace nada;
      si no, la convierte con JSON.parse, rellena los campos y escribe
      Borrador recuperado de tu visita anterior.
   4. Escuchar input en el formulario entero (delegación) → guardarBorrador.
   5. Escuchar submit: evitar la recarga; si el mensaje está vacío, avisar
      en #estado y salir; si no, mostrar en #enviado Mensaje «asunto»
      enviado, borrar la clave y reiniciar el formulario.
   6. Escuchar click en Descartar: confirmar con confirm y, si acepta,
      borrar la clave y reiniciar.
   7. Llamar a recuperarBorrador() al cargar.
   ============================================================================== */

// estructura del programa principal
const CLAVE = 'curso-js:b09e06:borrador';

// funciones
// TAREA: guardarBorrador()


// TAREA: recuperarBorrador()


// constantes al DOM que queremos escuchar
const formMensaje = document.querySelector('#formMensaje');
const campoAsunto = document.querySelector('#asunto');
const campoMensaje = document.querySelector('#mensaje');
const estado = document.querySelector('#estado');
const enviado = document.querySelector('#enviado');
const btnDescartar = document.querySelector('#btnDescartar');

// colocar escuchadores de eventos
// TAREA: input en el formulario → guardar


// TAREA: submit → enviar y borrar el borrador


// TAREA: descartar


// TAREA: recuperar al cargar

