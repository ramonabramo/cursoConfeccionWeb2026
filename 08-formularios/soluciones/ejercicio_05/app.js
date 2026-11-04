/* ==============================================================================
   EJERCICIO 05 · Contraseñas: reglas propias con setCustomValidity (SOLUCIÓN)

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
// devuelve qué reglas cumple una contraseña
function comprobarRequisitos(texto) {
    const caracteres = [...texto];   // el texto, convertido en array de caracteres
    return {
        longitud: texto.length >= 8,
        mayuscula: caracteres.some((c) => c >= 'A' && c <= 'Z'),
        numero: caracteres.some((c) => c >= '0' && c <= '9'),
    };
}

function actualizarClave() {
    const cumple = comprobarRequisitos(clave.value);

    // cada li dice qué regla representa en su data-regla
    requisitos.forEach((li) => {
        li.classList.toggle('cumplido', cumple[li.dataset.regla]);
    });

    const todoBien = cumple.longitud && cumple.mayuscula && cumple.numero;
    // setCustomValidity: un texto marca el campo como inválido; '' lo deja válido
    clave.setCustomValidity(todoBien ? '' : 'La contraseña no cumple todos los requisitos.');
}

function actualizarRepetir() {
    const coinciden = repetir.value === clave.value;
    repetir.setCustomValidity(coinciden ? '' : 'Las contraseñas no coinciden.');
}

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#registro');
const clave = document.querySelector('#clave');
const repetir = document.querySelector('#repetir');
const requisitos = document.querySelectorAll('#requisitos li');
const exito = document.querySelector('#exito');

// colocar escuchadores de eventos
clave.addEventListener('input', () => {
    actualizarClave();
    actualizarRepetir();   // si cambia la clave, la repetición puede dejar de coincidir
});
repetir.addEventListener('input', actualizarRepetir);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    exito.textContent = '';

    // reportValidity: comprueba Y muestra los avisos del navegador
    if (!formulario.reportValidity()) {
        return;
    }
    exito.textContent = `Cuenta creada para «${formulario.usuario.value}».`;
    formulario.reset();
    actualizarClave();
});

// pintar el estado inicial de los requisitos
actualizarClave();
