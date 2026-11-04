/* ==============================================================================
   EJERCICIO 08 · Inscripciones a un taller (SOLUCIÓN)

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
let inscritos = [];   // el estado

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
        return `Escribe al menos ${campo.minLength} caracteres.`;
    }
    if (v.customError) {
        return campo.validationMessage;   // el texto que pusimos con setCustomValidity
    }
    return '';
}

function validarCampo(campo) {
    const texto = mensajeError(campo);
    const parrafoError = document.querySelector(`#${campo.getAttribute('aria-describedby')}`);
    parrafoError.textContent = texto ? `⚠ ${texto}` : '';
    campo.setAttribute('aria-invalid', texto ? 'true' : 'false');
    return texto === '';
}

function crearCelda(texto) {
    const td = document.createElement('td');
    td.textContent = texto;
    return td;
}

function renderizar() {
    cuerpoTabla.replaceChildren();
    inscritos.forEach((persona) => {
        const boton = document.createElement('button');
        boton.type = 'button';
        boton.classList.add('borrar');
        boton.textContent = 'Borrar';
        boton.dataset.email = persona.email;

        const tdBoton = document.createElement('td');
        tdBoton.append(boton);

        const tr = document.createElement('tr');
        tr.append(crearCelda(persona.nombre), crearCelda(persona.email), crearCelda(persona.nivel), tdBoton);
        cuerpoTabla.append(tr);
    });

    const libres = MAX_PLAZAS - inscritos.length;
    plazas.textContent = libres > 0 ? `Plazas libres: ${libres} de ${MAX_PLAZAS}` : '¡Taller completo!';
    btnInscribir.disabled = libres === 0;
}

// constantes al DOM que queremos escuchar
const formulario = document.querySelector('#inscripcion');
const campoNombre = document.querySelector('#nombre');
const campoEmail = document.querySelector('#email');
const btnInscribir = document.querySelector('#btnInscribir');
const plazas = document.querySelector('#plazas');
const mensaje = document.querySelector('#mensaje');
const cuerpoTabla = document.querySelector('#cuerpoTabla');

// colocar escuchadores de eventos
// si el usuario corrige el email, el error "ya inscrito" deja de valer
campoEmail.addEventListener('input', () => {
    campoEmail.setCustomValidity('');
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    mensaje.textContent = '';

    // regla propia: email repetido (sin distinguir mayúsculas)
    const email = campoEmail.value.trim().toLowerCase();
    const repetido = inscritos.some((p) => p.email === email);
    campoEmail.setCustomValidity(repetido ? 'Este email ya está inscrito.' : '');

    // validar los dos campos (sin cortocircuito: quiero ver los dos errores)
    const nombreOk = validarCampo(campoNombre);
    const emailOk = validarCampo(campoEmail);
    if (!nombreOk || !emailOk) {
        formulario.querySelector('[aria-invalid="true"]').focus();
        return;
    }

    // procesamiento: cambio el estado
    const datos = new FormData(formulario);
    inscritos.push({
        nombre: datos.get('nombre').trim(),
        email,
        nivel: datos.get('nivel'),
    });

    // salidas
    renderizar();
    mensaje.textContent = `${datos.get('nombre').trim()} se ha inscrito correctamente.`;
    formulario.reset();
    [campoNombre, campoEmail].forEach((c) => c.removeAttribute('aria-invalid'));
    campoNombre.focus();
});

// delegación: un escuchador para todos los botones Borrar
cuerpoTabla.addEventListener('click', (e) => {
    const boton = e.target.closest('button[data-email]');
    if (!boton) {
        return;
    }
    inscritos = inscritos.filter((p) => p.email !== boton.dataset.email);
    renderizar();
    mensaje.textContent = 'Inscripción eliminada.';
});

// estado inicial
renderizar();
