/* ==============================================================================
   EJERCICIO 03 · Validación nativa del navegador

   OBJETIVO:
   Delegar la validación en el navegador con los atributos HTML required,
   minlength, type="email", min, max y pattern, dar estilo a los campos con
   :user-invalid y comprobar que el evento submit solo se dispara si todo es
   válido.

   PASOS A REALIZAR:
   1. En index.html, añadir a cada campo los atributos que indica su
      comentario TAREA (y borrar el comentario).
   2. En app.js, escuchar submit y evitar la recarga.
   3. Leer los datos con FormData y mostrar en #exito: ¡Registro completado,
      Lucía! Te escribiremos a lucia@ejemplo.com.
   4. Vaciar el formulario con formulario.reset().
   5. Probad a enviar el formulario con datos incorrectos y observad: ¿llega
      a ejecutarse vuestro escuchador?
   6. Fijaos en el style.css: las reglas :user-invalid y :user-valid
      colorean los campos sin JavaScript.
   ============================================================================== */

// estructura del programa principal

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#registro');
const exito = document.querySelector('#exito');

// colocar escuchadores de eventos
// TAREA: submit → preventDefault, FormData, mensaje de éxito y reset

