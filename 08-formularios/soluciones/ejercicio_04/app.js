/* ==============================================================================
   EJERCICIO 04 · Mensajes de error propios con la API de validación (SOLUCIÓN)

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
// traduce el estado de validez de un campo a un mensaje claro
function mensajeError(campo) {
    const v = campo.validity;
    if (v.valueMissing) {
        return 'Este campo es obligatorio.';
    }
    if (v.typeMismatch) {
        return 'Escribe un email válido, como nombre@dominio.com.';
    }
    if (v.tooShort) {
        return `Escribe al menos ${campo.minLength} caracteres.`;
    }
    if (v.rangeUnderflow || v.rangeOverflow) {
        return `Debe estar entre ${campo.min} y ${campo.max}.`;
    }
    if (v.patternMismatch) {
        return 'Debe tener 5 cifras, sin letras ni espacios.';
    }
    return '';   // válido
}

// muestra (o borra) el error de un campo y devuelve si es válido
function validarCampo(campo) {
    const mensaje = mensajeError(campo);
    const parrafoError = document.querySelector(`#${campo.getAttribute('aria-describedby')}`);
    parrafoError.textContent = mensaje ? `⚠ ${mensaje}` : '';
    campo.setAttribute('aria-invalid', mensaje ? 'true' : 'false');
    return mensaje === '';
}

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#registro');
const campos = formulario.querySelectorAll('input');
const exito = document.querySelector('#exito');

// colocar escuchadores de eventos
campos.forEach((campo) => {
    campo.addEventListener('blur', () => validarCampo(campo));
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    exito.textContent = '';

    // procesamiento: valido TODOS (no paro en el primero) para mostrar todos los errores
    campos.forEach(validarCampo);

    // salidas
    if (!formulario.checkValidity()) {
        formulario.querySelector('[aria-invalid="true"]').focus();
        return;
    }
    const datos = new FormData(formulario);
    exito.textContent = `¡Registro completado, ${datos.get('nombre')}!`;
    formulario.reset();
    campos.forEach((c) => c.removeAttribute('aria-invalid'));
});
