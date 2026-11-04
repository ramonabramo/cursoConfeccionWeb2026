/* ==============================================================================
   EJERCICIO 05 · Contraseñas: reglas propias con setCustomValidity

   OBJETIVO:
   Añadir reglas de validación propias a un campo con setCustomValidity,
   mostrar en tiempo real qué requisitos se cumplen y usar reportValidity
   para que el navegador muestre los avisos al enviar.

   PASOS A REALIZAR:
   1. Declarar comprobarRequisitos(clave) que devuelva un objeto { longitud,
      mayuscula, numero } con un booleano para cada regla. Para saber si hay
      una mayúscula o un número, recorred los caracteres con
      [...clave].some(…).
   2. Declarar actualizarClave(): marca con la clase cumplido cada li de
      #requisitos según su data-regla y, si falta alguna regla, llama a
      clave.setCustomValidity('La contraseña no cumple todos los
      requisitos.'); si se cumplen todas, setCustomValidity('').
   3. Declarar actualizarRepetir(): si repetir no coincide con clave,
      setCustomValidity('Las contraseñas no coinciden.'); si coincide,
      setCustomValidity('').
   4. Escuchar input en clave (llama a las dos funciones: si cambia la
      clave, la repetición puede dejar de coincidir) y en repetir.
   5. Escuchar submit: evitar la recarga y, si formulario.reportValidity()
      devuelve false, salir. Si no, mostrar el éxito y reiniciar.
   6. Llamar a actualizarClave() al cargar para pintar los requisitos.
   ============================================================================== */

// estructura del programa principal

// funciones
// TAREA: comprobarRequisitos(clave) → { longitud, mayuscula, numero }


// TAREA: actualizarClave()


// TAREA: actualizarRepetir()


// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#registro');
const clave = document.querySelector('#clave');
const repetir = document.querySelector('#repetir');
const requisitos = document.querySelectorAll('#requisitos li');
const exito = document.querySelector('#exito');

// colocar escuchadores de eventos
// TAREA: input en clave y en repetir


// TAREA: submit con reportValidity


// TAREA: pintar los requisitos al cargar

