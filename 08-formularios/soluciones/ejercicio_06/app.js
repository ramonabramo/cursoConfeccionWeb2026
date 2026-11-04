/* ==============================================================================
   EJERCICIO 06 · Formulario de contacto accesible (SOLUCIÓN)

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
function mensajeError(campo) {
    const v = campo.validity;
    if (v.valueMissing) {
        return 'Este campo es obligatorio.';
    }
    if (v.typeMismatch) {
        return 'Escribe un email válido, como nombre@dominio.com.';
    }
    if (v.tooShort) {
        return `Escribe al menos ${campo.minLength} caracteres (llevas ${campo.value.length}).`;
    }
    if (v.patternMismatch) {
        return 'Escribe 9 cifras, sin espacios ni guiones.';
    }
    return '';
}

function validarCampo(campo) {
    const mensaje = mensajeError(campo);
    const parrafoError = document.querySelector(`#${campo.getAttribute('aria-describedby')}`);
    parrafoError.textContent = mensaje ? `⚠ ${mensaje}` : '';
    campo.setAttribute('aria-invalid', mensaje ? 'true' : 'false');
    return mensaje;
}

// construye el resumen con un enlace a cada campo con error
function mostrarResumen(errores) {
    resumenErrores.replaceChildren();
    if (errores.length === 0) {
        return;
    }
    const titulo = document.createElement('h2');
    titulo.textContent = errores.length === 1
        ? 'Hay 1 error en el formulario'
        : `Hay ${errores.length} errores en el formulario`;

    const lista = document.createElement('ul');
    errores.forEach(({ campo, mensaje }) => {
        const etiqueta = formulario.querySelector(`label[for="${campo.id}"]`).textContent;
        const enlace = document.createElement('a');
        enlace.href = `#${campo.id}`;              // al pulsarlo, lleva al campo
        enlace.textContent = `${etiqueta}: ${mensaje}`;
        const li = document.createElement('li');
        li.append(enlace);
        lista.append(li);
    });

    resumenErrores.append(titulo, lista);
    resumenErrores.focus();   // el lector de pantalla empieza por el resumen
}

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#contacto');
const campos = formulario.querySelectorAll('input, textarea');
const resumenErrores = document.querySelector('#resumenErrores');
const exito = document.querySelector('#exito');

// colocar escuchadores de eventos
campos.forEach((campo) => {
    // al salir del campo: validar
    campo.addEventListener('blur', () => validarCampo(campo));

    // mientras escribe: solo si ya estaba en error, para que el aviso desaparezca al corregir
    campo.addEventListener('input', () => {
        if (campo.getAttribute('aria-invalid') === 'true') {
            validarCampo(campo);
        }
    });
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    exito.textContent = '';

    // procesamiento: recojo todos los errores
    const errores = [];
    campos.forEach((campo) => {
        const mensaje = validarCampo(campo);
        if (mensaje) {
            errores.push({ campo, mensaje });
        }
    });

    // salidas
    mostrarResumen(errores);
    if (errores.length > 0) {
        return;
    }
    exito.textContent = `Gracias, ${formulario.nombre.value}. Te responderemos pronto.`;
    formulario.reset();
    campos.forEach((c) => c.removeAttribute('aria-invalid'));
});
