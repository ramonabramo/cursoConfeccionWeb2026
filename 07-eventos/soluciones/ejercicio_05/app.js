/* ==============================================================================
   EJERCICIO 05 · Campos que ayudan: focus, blur y preventDefault (SOLUCIÓN)

   OBJETIVO:
   Reaccionar cuando un campo gana o pierde el foco (focus y blur) y anular
   el comportamiento por defecto del navegador con preventDefault, tanto en
   una tecla como en un enlace.

   PASOS A REALIZAR:
   1. Seleccionar todos los inputs de la página con querySelectorAll('.campo
      input').
   2. Recorrerlos y, en cada uno, escuchar focus para añadir la clase activo
      a su contenedor .campo (input.parentElement), y blur para quitársela.
   3. En el blur, mostrar además en #estado cuántos caracteres tiene el
      campo que se acaba de abandonar.
   4. En el teléfono, escuchar keydown: si la tecla no es un dígito y no es
      una de las permitidas (Backspace, Delete, ArrowLeft, ArrowRight, Tab),
      anularla con e.preventDefault() y mostrar en #estado qué tecla se ha
      bloqueado.
   5. En el enlace, escuchar click: preguntar con confirm si de verdad
      quiere salir y, si dice que no, anular la navegación con
      e.preventDefault() y escribir Navegación cancelada. en #estadoEnlace.
   ============================================================================== */

// estructura del programa principal
const TECLAS_PERMITIDAS = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];

// funciones
const esDigito = (tecla) => tecla.length === 1 && tecla >= '0' && tecla <= '9';

// constantes al DOM que queremos escuchar
const campos = document.querySelectorAll('.campo input');
const telefono = document.querySelector('#telefono');
const estado = document.querySelector('#estado');
const enlaceSalir = document.querySelector('#enlaceSalir');
const estadoEnlace = document.querySelector('#estadoEnlace');

// colocar escuchadores de eventos
campos.forEach((campo) => {
    // focus: el campo recibe el foco (clic, Tab…)
    campo.addEventListener('focus', () => {
        campo.parentElement.classList.add('activo');
    });

    // blur: el campo pierde el foco
    campo.addEventListener('blur', () => {
        campo.parentElement.classList.remove('activo');
        const etiqueta = campo.parentElement.querySelector('label').textContent;
        estado.textContent = `Has salido de «${etiqueta}» con ${campo.value.length} caracteres.`;
    });
});

// preventDefault en una tecla: el carácter no llega a escribirse
telefono.addEventListener('keydown', (e) => {
    if (!esDigito(e.key) && !TECLAS_PERMITIDAS.includes(e.key)) {
        e.preventDefault();
        estado.textContent = `Tecla bloqueada: «${e.key}»`;
    }
});

// preventDefault en un enlace: el navegador no navega
enlaceSalir.addEventListener('click', (e) => {
    const seguro = confirm('Vas a salir de esta página. ¿Seguro?');
    if (!seguro) {
        e.preventDefault();
        estadoEnlace.textContent = 'Navegación cancelada.';
    }
});
